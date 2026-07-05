import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const inquiry = formData.get("inquiry") as string;
    const message = formData.get("message") as string;

    // Validate
    if (!name || !email || !inquiry || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // If Resend API key is set, send via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && resendApiKey !== "re_placeholder") {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: "CRBRO Contact <onboarding@resend.dev>",
        to: "crbrobooking@gmail.com",
        replyTo: email,
        subject: `[${inquiry}] CRBRO Contact — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\nMessage:\n${message}`,
      });

      if (error) {
        console.error("Resend error:", error);
        // Fall through to mailto fallback
      } else {
        return NextResponse.json({ sent: true });
      }
    }

    // Fallback: return data for client-side mailto
    return NextResponse.json({
      fallback: true,
      to: "crbrobooking@gmail.com",
      subject: `[${inquiry}] CRBRO Contact — ${name}`,
      body: `Name: ${name}%0D%0AEmail: ${email}%0D%0AInquiry: ${inquiry}%0D%0A%0D%0A${message}`,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
