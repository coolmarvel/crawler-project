import { Database, db } from "@/services/firebase";
import { Keyword } from "@/types";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    const database = new Database(db);
    await database.setData("keywords", data.keyword, { ...data });

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const database = new Database(db);
    const keywords: Keyword[] = await database.getAllData("keywords");

    return NextResponse.json({ keywords });
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
};
