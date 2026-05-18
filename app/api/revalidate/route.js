import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export async function POST(request) {
  const body = await request.text();
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);

  const isValid = await isValidSignature(
    body,
    signature,
    process.env.REVALIDATE_SECRET,
  );

  if (!isValid) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true });
}
