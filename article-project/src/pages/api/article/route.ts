import { Database, db } from "@/services/firebase";
import { Article } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const database = new Database(db);
    const articles: Article[] = await database.getAllData("articles");

    return NextResponse.json({ articles });
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
};
