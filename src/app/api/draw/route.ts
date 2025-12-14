// app/api/ben/route.ts
import { db } from "@/app/db/connect";
import { NextResponse } from "next/server";

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
      orderBy: { createdAt: "desc" }, // newest first
    });

    // Count total items to determine if there are more pages
    const total = await db.ben.count();

    // Return items + nextPage info
    return new Response(
      JSON.stringify({
        items,
        nextPage: page * take < total ? page + 1 : undefined,
      })
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch items", details: `${err}` }),
      { status: 500 }
    );
  }
}
