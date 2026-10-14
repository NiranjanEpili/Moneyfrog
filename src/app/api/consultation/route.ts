import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, countryCode, countryOfResidence, areaOfInterest, preferredContactMethod, message } =
      body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Full name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In a production environment with CRM credentials, forward to API/CRM endpoint:
    // e.g. await fetch("https://api.moneyfrog.in/api/v1/public-forms/consultation", {...})
    console.log("Verified Consultation Submission Received:", {
      fullName,
      email,
      phone: `${countryCode || "+91"} ${phone}`,
      countryOfResidence: countryOfResidence || "India",
      areaOfInterest: areaOfInterest || "General Consultation",
      preferredContactMethod: preferredContactMethod || "Phone Call",
      message: message || "N/A",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your consultation request has been registered. Our wealth advisor will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Consultation route error:", error);
    return NextResponse.json(
      { success: false, message: "Server encountered an error processing your request." },
      { status: 500 }
    );
  }
}
