import { JoinWaitlistFormType } from "@/components/join-waitlist-dialog";
import { Body, Container, Head, Html, Link, Preview, Tailwind, Text, } from "@react-email/components";
import React from "react";

export default function WaitlistEmail({name}: JoinWaitlistFormType) {
	return (
		<Html>
			<Head/>
			<Preview>
				{"Thanks for joining the waitlist! As a member, you'll be the first to know when we launch."}
			</Preview>
			<Tailwind>
				<Body className="bg-gray-100 p-10">
					<Container className="bg-white rounded-lg">
						<Text className="text-3xl font-bold text-primary text-center">Remit Cache</Text>
						<Text className="text-xl font-bold px-5">Hey {name}!</Text>
						<Text className="px-5">
							Thanks for joining the waitlist! As a member, you&apos;ll be the first to know when we launch.
							You will also receive exclusive updates, and early access to resources to help you get
							the most out of RemitCache!
						</Text>
						<Text className="px-5">
							We&apos;re dedicated to making this community the best it can be, and would love for you to
							participate. Please feel free to join our <Link href="https://discord.gg/Vyrj7ZSnxg">Discord</Link> and
							reach out to us with any questions or feedback you may have. We are always happy to chat!
						</Text>
						<Text className="px-5">
							Cheers!
							<br/>
							The RemitCache Team
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}