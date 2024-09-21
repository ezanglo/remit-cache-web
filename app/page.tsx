'use client'

import ContactSection from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import FeaturesSection from "@/components/features-sections";
import HeroSection from "@/components/hero-section";

export default function Page() {
	return (
		<div>
			<HeroSection/>
			<FeaturesSection/>
			<FAQSection/>
			<ContactSection/>
		</div>
	)
}