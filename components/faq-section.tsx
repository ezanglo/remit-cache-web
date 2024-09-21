'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from 'framer-motion'

export function FAQSection() {
	
	const itemVariants = {
		hidden: {y: 20, opacity: 0},
		visible: {
			y: 0,
			opacity: 1
		}
	}
	
	return (
		<motion.section
			id="faq"
			className="scroll-mt-28 mb-28 sm:mb-40 max-w-2xl mx-auto"
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{
				duration: 1,
			}}
		>
			<motion.h3 className="text-3xl font-bold text-center mb-8" variants={itemVariants}>Frequently Asked Questions
			</motion.h3>
			<Accordion type="single" collapsible className="max-w-2xl mx-auto">
				{[
					{
						question: "Is RemitCache free to use?",
						answer: "RemitCache will offer both free and premium tiers. The basic features will be available for free, with advanced features and increased storage available in our premium plans."
					},
					{
						question: "How secure is my data with RemitCache?",
						answer: "We take security seriously. All your data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent."
					},
					{
						question: "Which remittance services does RemitCache support?",
						answer: "RemitCache is designed to work with a wide range of remittance services. We're constantly adding new integrations to support as many providers as possible."
					},
					{
						question: "When will RemitCache be available?",
						answer: "We're working hard to launch RemitCache soon. Join our waitlist to be notified as soon as we're ready for you to start using the app!"
					}
				].map((faq, index) => (
					<motion.div key={index} variants={itemVariants}>
						<AccordionItem value={`item-${index + 1}`} className="border-gray-700">
							<AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
							<AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
						</AccordionItem>
					</motion.div>
				))}
			</Accordion>
		</motion.section>
	)
}