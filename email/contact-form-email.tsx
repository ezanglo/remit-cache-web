import { ContactFormType } from "@/components/contact-section";
import { Body, Container, Head, Html, Preview, Tailwind, Text, } from "@react-email/components";
import React from "react";

export default function ContactFormEmail({message, email}: ContactFormType) {
	return (
		<Html>
			<Head/>
			<Preview>
				Message from {email}
			</Preview>
			<Tailwind>
				<Body className="bg-gray-100 p-10">
					<Container className="bg-white rounded-lg">
						<Text className="px-5">{"The sender's email is:"} {email}</Text>
						<Text className="px-5">Message:</Text>
						<Text className="px-5">{message}</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}