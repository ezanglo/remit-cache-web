'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

export default function TermsOfService() {
	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	}
	
	const itemVariants = {
		hidden: {y: 20, opacity: 0},
		visible: {
			y: 0,
			opacity: 1
		}
	}
	
	const termsItems = [
		{
			title: "1. Acceptance of Terms",
			content: "By accessing or using the RemitCache app and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
		},
		{
			title: "2. Description of Service",
			content: "RemitCache provides a platform for tracking and managing remittances across multiple channels. We do not provide remittance services directly but offer tools to help users manage their transfers."
		},
		{
			title: "3. User Accounts",
			content: "You must create an account to use RemitCache. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."
		},
		{
			title: "4. User Conduct",
			content: "You agree not to use RemitCache for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services."
		},
		{
			title: "5. Intellectual Property",
			content: "All content and functionality on RemitCache, including but not limited to text, graphics, logos, and software, is the property of RemitCache or its licensors and is protected by copyright and other intellectual property laws."
		},
		{
			title: "6. Privacy",
			content: "Your use of RemitCache is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices."
		},
		{
			title: "7. Disclaimer of Warranties",
			content: "RemitCache is provided 'as is' without any warranties, expressed or implied. We do not warrant that our services will be uninterrupted or error-free."
		},
		{
			title: "8. Limitation of Liability",
			content: "RemitCache shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our services."
		},
		{
			title: "9. Changes to Terms",
			content: "We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes via email or through the app."
		},
		{
			title: "10. Governing Law",
			content: "These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions."
		}
	]
	
	return (
		<div className="min-h-screen py-12 px-4">
			<motion.div
				className="max-w-4xl mx-auto"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.section
					className="text-center mb-12"
					variants={itemVariants}
				>
					<h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
					<p className="text-xl mb-8 text-muted-foreground">
						Welcome to RemitCache. These Terms of Service govern your use of our app and services.
						Please read these terms carefully before using RemitCache.
					</p>
				</motion.section>
				
				<motion.section
					className="mb-12"
					variants={itemVariants}
				>
					<MotionCard
					>
						<CardHeader>
							<CardTitle className="text-2xl font-bold">Last Updated: September 21, 2024</CardTitle>
						</CardHeader>
						<CardContent>
							<Accordion type="single" collapsible className="w-full">
								{termsItems.map((item, index) => (
									<AccordionItem key={index} value={`item-${index}`} className="border-zinc-700">
										<AccordionTrigger
											className="text-left text-muted-foreground hover:text-foreground">{item.title}</AccordionTrigger>
										<AccordionContent className="text-muted-foreground">
											<p>{item.content}</p>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</MotionCard>
				</motion.section>
			</motion.div>
		</div>
	)
}
