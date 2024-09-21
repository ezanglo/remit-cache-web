'use client'

import { waitlistEmail } from '@/actions/send-email'
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { SubmitButton } from './submit-button'

const joinWaitlistFormSchema = z.object({
	name: z.string().min(1, {
		message: "Name is required",
	}),
	email: z.string().email(),
})

export type JoinWaitlistFormType = z.infer<typeof joinWaitlistFormSchema>

export function JoinWaitlistDialog({email}: { email?: string }) {
	const [isOpen, setIsOpen] = useState(false)
	
	const form = useForm<JoinWaitlistFormType>({
		resolver: zodResolver(joinWaitlistFormSchema),
		defaultValues: {
			name: '',
			email: email || '',
		},
	})
	
	useEffect(() => {
		form.reset();
		form.setValue('email', email || '')
	}, [isOpen])
	
	const handleSubmitAction = async () => {
		const valid = await form.trigger();
		if (valid) {
			const {error} = await waitlistEmail(form.getValues());
			if (error) {
				toast.error(error);
			} else {
				toast.success("You have successfully joined the waitlist!");
				form.reset();
				setIsOpen(false);
			}
		}
	};
	
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button>Join Waitlist</Button>
			</DialogTrigger>
			<DialogContent forceMount className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Join Our Waitlist</DialogTitle>
					<DialogDescription>
						Be the first to know when RemitCache launches. Enter your email to join our exclusive waitlist.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form className="flex flex-col gap-3" action={handleSubmitAction}>
						<FormField
							control={form.control}
							name="name"
							render={({field}) => (
								<FormItem>
									<FormLabel>Your Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Your name"
											value={field.value}
											onChange={field.onChange}
										/>
									</FormControl>
									<FormMessage className="text-xs"/>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({field}) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Your email"
											value={field.value}
											onChange={field.onChange}
										/>
									</FormControl>
									<FormMessage className="text-xs"/>
								</FormItem>
							)}
						/>
						<DialogFooter>
							<SubmitButton>Submit</SubmitButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}