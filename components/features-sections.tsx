'use client'

import { FeatureCard } from "@/components/feature-card";
import { motion } from 'framer-motion'
import { BellIcon, HistoryIcon, NotepadText, ScanLineIcon } from "lucide-react";
import React from 'react'

const features = [
	{
		title: 'Receipt OCR',
		description: 'Easily scan and store receipts from money transfers, allowing you to manage your finances with just a snapshot.',
		icon: <ScanLineIcon/>,
	},
	{
		title: 'Transaction History',
		description: 'Gain complete visibility over your remittance transactions, including details and insights to help you track spending.',
		icon: <HistoryIcon/>,
	},
	{
		title: 'Budget Planning',
		description: 'Set financial goals and monitor your remittance budget, ensuring you stay on track with your money transfers.',
		icon: <NotepadText/>,
	},
	{
		title: 'Real-Time Notifications',
		description: 'Receive instant updates on your transactions, helping you stay informed and in control of your finances.',
		icon: <BellIcon/>,
	},
]

export default function FeaturesSection() {
	return (
		<motion.section
			id="features"
			className="scroll-mt-28 mb-28 sm:mb-40 max-w-3xl mx-auto"
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{
				duration: 1,
			}}
		>
			<h2 className="text-3xl text-center font-extrabold sm:text-4xl md:text-5xl">
				Features
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 relative z-10 py-10">
				{features.map((feature, index) => (
					<FeatureCard key={feature.title} {...feature} index={index}/>
				))}
			</div>
		</motion.section>
	)
}
