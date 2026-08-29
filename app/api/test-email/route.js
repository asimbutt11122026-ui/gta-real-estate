export async function POST(request) {
  try {
    const body = await request.json();
    const { userEmail, message } = body;

    if (!userEmail || !message) {
      return Response.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: userEmail,
        subject: "Test Email from GTA Real Estate ??",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
            <h1 style="color: #1a2a3a;">GTA Real Estate</h1>
            <p>Hello,</p>
            <p>This is a test email from your GTA Real Estate website!</p>
            <h3>Your Message:</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #c89b5a;">
              ${message}
            </p>
            <p style="margin-top: 30px; color: #666; font-size: 12px;">
              This email was sent from your test form at ${process.env.NEXT_PUBLIC_SITE_URL}
            </p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: "Failed to send email", details: data },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Email sent successfully!", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
