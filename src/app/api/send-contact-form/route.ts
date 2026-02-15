import { NextRequest, NextResponse } from "next/server";
import { init, send } from "@emailjs/nodejs";

init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY!,
  privateKey: process.env.EMAILJS_PRIVATE_KEY!,
  limitRate: {
    id: "portfolio-contact-form",
    throttle: 1000,
  },
});

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const serviceId = process.env.EMAILJS_SERVICE_ID!;
  const templateId = process.env.EMAILJS_TEMPLATE_ID!;

  const templateParams = {
    name,
    email,
    message,
  };

  try {
    const emailJsRequest = await send(serviceId, templateId, templateParams);

    if (emailJsRequest.status !== 200) {
      return NextResponse.json({ error: emailJsRequest.text }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
