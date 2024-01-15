import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  revalidatePath("/");

  return Response.json({ status: "revalidated" });
}
