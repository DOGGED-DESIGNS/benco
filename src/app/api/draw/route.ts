// app/api/ben/route.ts
import { db } from "@/app/db/connect";

const headers = {
  "Access-Control-Allow-Origin": "https://www.bencodelighlimited.com.ng",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function GET(req: Request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1"); // default to page 1
    const take = 3; // number of items per page
    const skip = (page - 1) * take; // calculate how many items to skip

    // Fetch paginated items
    const items = await db.ben.findMany({
      take,
      skip,
      // orderBy: { createdAt: "desc" },
    });

    // Count total items to determine if there are more pages
    const total = await db.ben.count();

    // Return items + nextPage info
    return new Response(
      JSON.stringify({
        items,
        nextPage: page * take < total ? page + 1 : undefined,
      }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch items", details: `${err}` }),
      { status: 500, headers }
    );
  }
}

// Handle OPTIONS preflight request
export async function OPTIONS() {
  return new Response(null, { status: 204, headers });
}
