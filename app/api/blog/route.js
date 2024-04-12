import { NextResponse } from "next/server";
import BlogModel from "@/model/blogModel";
import connectDB from "@/lib/db";
export async function POST(req) {
  try {
    const { title, fileName, description } = await req.json();
    await connectDB();
    let Blog = await BlogModel.create({
      title: title,
      ImageUrl: fileName,
      Description: description,
    });
    return NextResponse.json({
      message: " create Blog successfully",
      Blog,
    });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
export async function GET(req) {
  await connectDB();
  try {
    const Blog = await BlogModel.find();

    console.log(Blog);
    return NextResponse.json({
      message: " get all Blog successfully",
      Blog,
    });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
