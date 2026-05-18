export async function POST(request) {
  const body = await request.text();
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);

  const isValid = await isValidSignature(
    body,
    signature,
    process.env.REVALIDATE_SECRET,
  );

  console.log("isValid:", isValid);

  if (!isValid) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  revalidatePath("/", "layout");
  console.log("revalidated");

  return NextResponse.json({ revalidated: true });
}
