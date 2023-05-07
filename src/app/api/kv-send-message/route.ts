import kv from "@vercel/kv";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const Keys = await kv.keys("contact-*");
    const message = await kv.mget(...Keys);
    return NextResponse.json(message);
  } catch (error) {
    console.error(error);
    return new Response("internal error", { status: 500 });
  }
}

// import { error } from "console";

// export async function POST(request: Request) {
//   const { name, email, message } = await request.json();
//   if (name == null || email == null || message == null) {
//     return new Response("please provide all fields", { status: 400 });
//   }
//   const uuid = crypto.randomUUID();
//   const timestamp = Date.now();

//   try {
//     await kv.set(`formulario- ${uuid}`, { name, email, message, timestamp });
//     return new Response("formulario saved", { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response("internal error", { status: 500 });
//   }
// }
