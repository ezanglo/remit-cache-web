import { TermsOfService } from "@/components/terms-of-service";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Terms of Service',
};

export default function TermsOfServicePage() {
	return <TermsOfService/>
}
