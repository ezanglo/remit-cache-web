'use client'

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { MenuIcon } from 'lucide-react'
import Image from "next/image";
import Link from 'next/link'
import React, { useState } from 'react'
import { navItems } from './nav-header'

export default function MobileSidebar() {
	
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="shrink-0 md:hidden"
				>
					<MenuIcon className="h-5 w-5"/>
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<nav className="grid gap-6 text-lg font-medium">
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-semibold"
						onClick={() => setIsOpen(false)}
					>
						<Image
							src="/logo.svg"
							alt="RemitCache"
							className="dark:invert size-5"
							width={25}
							height={25}
						/>
						<span className="sr-only">RemitCache</span>
					</Link>
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-muted-foreground hover:text-foreground"
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</Link>
					))}
					<div className="flex items-center gap-2">
						<Button variant="outline" size="icon">
							<Link href="https://discord.gg/Vyrj7ZSnxg" target="_blank">
								<DiscordLogoIcon/>
							</Link>
						</Button>
						<ModeToggle/>
					</div>
				</nav>
			</SheetContent>
		</Sheet>
	)
}
