'use client'

import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { JoinWaitlistDialog } from './join-waitlist-dialog'
import MobileSidebar from './mobile-sidebar'
import { ModeToggle } from './mode-toggle'
import NavHeader from './nav-header'
import { Button } from './ui/button'

export default function Header() {
	return (
		<motion.header
			initial={{opacity: 0, y: -50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.5}}
			className="flex justify-between items-center mx-auto py-5 px-5 md:px-10 text-foreground w-full sticky top-0 z-50 bg-background"
		>
			<div className="flex items-center gap-5 sm:gap-10">
				<MobileSidebar/>
				<h1 className="flex items-center gap-2 text-xl font-extrabold cursor-pointer text-foreground">
					<Link href="/">
						<Image
							src="/logo-name.png"
							alt="RemitCache"
							className="invert dark:invert-0 w-40"
							width={3500}
							height={500}
						/>
					</Link>
				</h1>
				<NavHeader/>
			</div>
			<div className="flex items-center gap-2">
				<div className="hidden sm:flex items-center gap-2">
					<Button variant="outline" size="icon">
						<Link href="https://discord.gg/Vyrj7ZSnxg" target="_blank">
							<DiscordLogoIcon/>
						</Link>
					</Button>
					<ModeToggle/>
				</div>
				<JoinWaitlistDialog/>
			</div>
		</motion.header>
	)
}
