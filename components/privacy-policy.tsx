'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

export function PrivacyPolicy() {
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
	
	const policyItems = [
		{
			title: "Information We Collect",
			content: "We collect personal information that you provide to us, such as your name, email address, and remittance details. We also automatically collect certain information about your device and how you interact with our app."
		},
		{
			title: "How We Use Your Information",
			content: "We use your information to provide and improve our services, communicate with you, and comply with legal obligations. We may also use your data to personalize your experience and for analytics purposes."
		},
		{
			title: "Data Sharing and Disclosure",
			content: "We do not sell your personal information. We may share your data with service providers who help us operate our business, or if required by law. We may also share aggregated, non-personal information for business purposes."
		},
		{
			title: "Data Security",
			content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage."
		},
		{
			title: "Your Rights and Choices",
			content: "You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided at the end of this policy."
		},
		{
			title: "Changes to This Policy",
			content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date."
		}
	]
	
	return (
		<main className="container mx-auto px-4 py-12">
			<motion.section
				className="text-center mb-12"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>Privacy Policy</motion.h2>
				<motion.p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
					At RemitCache, we are committed to protecting your privacy and ensuring the security of your personal
					information.
					This Privacy Policy explains how we collect, use, and safeguard your data when you use our app and services.
				</motion.p>
			</motion.section>
			
			<motion.section
				className="mb-12"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<MotionCard
					variants={itemVariants}
				>
					<CardHeader>
						<CardTitle className="text-2xl font-bold">Last Updated: Sept 21, 2024</CardTitle>
					</CardHeader>
					<CardContent>
						<Accordion type="single" collapsible className="w-full">
							{policyItems.map((item, index) => (
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
		</main>
	)
}