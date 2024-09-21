'use client'

import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
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
			className="flex justify-between items-center mx-auto py-5 px-10 text-foreground w-full sticky top-0 z-50 bg-background"
		>
			<div className="flex items-center gap-10">
				<MobileSidebar/>
				<h1 className="text-xl font-extrabold cursor-pointer text-foreground">
					<Link href="/">RemitCache</Link>
				</h1>
				<NavHeader/>
			</div>
			<div className="flex items-center gap-2">
				<Button variant="outline" size="icon">
					<Link href="https://discord.gg/Vyrj7ZSnxg" target="_blank">
						<DiscordLogoIcon/>
					</Link>
				</Button>
				<ModeToggle/>
				<JoinWaitlistDialog/>
			</div>
		</motion.header>
	)
}
