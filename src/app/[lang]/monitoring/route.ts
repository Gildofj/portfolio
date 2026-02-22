import { NextRequest, NextResponse } from "next/server";

const SENTRY_HOST = "sentry.io";
const SENTRY_PROJECT_IDS = [process.env.NEXT_PUBLIC_SENTRY_PROJECT_ID!];

export async function POST(request: NextRequest) {
  try {
    const envelopeBytes = await request.arrayBuffer();
    const envelope = new TextDecoder().decode(envelopeBytes);
    const piece = envelope.split("\n")[0];
    const header = JSON.parse(piece);
    const dsn = new URL(header["dsn"]);

    if (dsn.hostname !== SENTRY_HOST) {
      return NextResponse.json({ error: "Invalid DSN" }, { status: 400 });
    }

    const projectId = dsn.pathname.replace("/", "");
    if (!SENTRY_PROJECT_IDS.includes(projectId)) {
      return NextResponse.json(
        { error: "Invalid project ID" },
        { status: 400 },
      );
    }

    const sentryUrl = `https://${SENTRY_HOST}/api/${projectId}/envelope/`;
    const response = await fetch(sentryUrl, {
      method: "POST",
      body: envelopeBytes,
      headers: { "Content-Type": "application/x-sentry-envelope" },
    });

    return NextResponse.json({}, { status: response.status });
  } catch (e) {
    console.error("Error processing Sentry envelope:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
