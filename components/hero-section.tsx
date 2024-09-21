'use client'

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { JoinWaitlistDialog } from './join-waitlist-dialog'

export default function HeroSection() {
	
	const [email, setEmail] = useState('')
	
	return (
		<motion.section
			id="home"
			initial={{opacity: 0, y: -50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.5, delay: 0.2}}
			className={cn(
				"px-0 md:px-32 relative sm:mb-40 text-center max-w-5xl mx-auto",
				"w-full bg-background bg-grid-white/[0.2]"
			)}
		>
			<div
				className="absolute z-10 pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
			<BackgroundBeamsWithCollision className="h-[90vh] items-start pt-20 sm:pt-0">
				<motion.div
					initial={{opacity: 0, x: -50}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.5, delay: 0.7}}
					className="flex flex-col justify-center items-center space-y-4 py-24 md:py-52 z-20 w-full"
				>
					<div className="space-y-2 z-10">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Manage your transfers like never before!
						</h1>
						<p className="text-muted-foreground md:text-xl">
							Streamline your money transfers and receive instant notifications for budget updates and transfer
							activities. Join our waitlist to learn more.
						</p>
					</div>
					<div className="items-center justify-center grid md:flex gap-4 w-full px-10 z-10">
						<Input
							placeholder="Enter your email"
							className="w-full md:w-60 bg-input"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<JoinWaitlistDialog email={email}/>
					</div>
				</motion.div>
			</BackgroundBeamsWithCollision>
		</motion.section>
	)
}
