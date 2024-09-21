"use client";

import { contactFormEmail } from "@/actions/send-email";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SubmitButton } from "./submit-button";

const contactFormSchema = z.object({
	email: z.string().min(1, {
		message: "Email is required",
	})
	.max(500, {
		message: "Maximum length is 500",
	})
	.email(),
	message: z
	.string()
	.min(1, {
		message: "Message is required",
	})
	.max(500, {
		message: "Maximum length tis 500",
	}),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
	
	const form = useForm<ContactFormType>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			email: "",
			message: "",
		},
	});
	
	const handleSubmitAction = async () => {
		const valid = await form.trigger();
		if (valid) {
			const {error} = await contactFormEmail(form.getValues());
			if (error) {
				toast.error(error);
			} else {
				toast.success("Email sent successfully!");
				form.reset();
			}
		}
	};
	
	return (
		<motion.section
			id="contact"
			className="scroll-mt-28 mb-28 sm:mb-40 max-w-2xl mx-auto"
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{
				duration: 1,
			}}
		>
			<motion.h3 className="text-3xl font-bold text-center">Contact Us</motion.h3>
			<Form {...form}>
				<form className="flex flex-col gap-3 pt-10" action={handleSubmitAction}>
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
					<FormField
						control={form.control}
						name="message"
						render={({field}) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Your message"
										className="h-56"
										value={field.value}
										onChange={field.onChange}
									/>
								</FormControl>
								<FormMessage className="text-xs"/>
							</FormItem>
						)}
					/>
					<SubmitButton>Submit</SubmitButton>
				</form>
			</Form>
		</motion.section>
	);
}