"use server";

import { ContactFormType } from "@/components/contact-section";
import { JoinWaitlistFormType } from "@/components/join-waitlist-dialog";
import ContactFormEmail from "@/email/contact-form-email";
import WaitlistEmail from "@/email/waitlist-email";
import { getErrorMessage } from "@/lib/utils";
import React from "react";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactFormEmail = async (payload: ContactFormType) => {
  try {
    const data = await resend.emails.send({
      from: "RemitCache Contact <contact@remitcache.com>",
      to: "projects.ezraanglo@gmail.com",
      subject: "Message from RemitCache Contact Form",
      replyTo: payload.email,
      react: React.createElement(ContactFormEmail, payload),
    });

    if (!data.data?.id) {
      return {
        error: getErrorMessage(data),
      };
    }
    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

export const waitlistEmail = async (payload: JoinWaitlistFormType) => {
  try {
    const data = await resend.emails.send({
      from: "RemitCache Waitlist <noreply@remitcache.com>",
      to: payload.email,
      subject: "You were added to the waitlist!",
      react: React.createElement(WaitlistEmail, payload),
    });
    if (!data.data?.id) {
      return {
        error: getErrorMessage(data),
      };
    }
    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
