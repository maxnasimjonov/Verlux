import { NextRequest, NextResponse } from "next/server";

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  timeline?: string;
  budget?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.projectType || !body.projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Log the submission
    
    // For now, we'll simulate a successful submission
    // TODO: Replace with actual implementation
    console.log("Quote request received:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      projectType: body.projectType,
      projectDetails: body.projectDetails,
      timeline: body.timeline || "Not specified",
      budget: body.budget || "Not specified",
      timestamp: new Date().toISOString(),
    });

    // Simulate async operation (e.g., database save, email send)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

