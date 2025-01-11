/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectToDataBase } from "@/db/db";
import User from "@/db/models/user";
import { NextRequest } from "next/server";

export async function POST(request: Request | NextRequest) {
  try {
    await connectToDataBase();

    const { guest: name } = await request.json();
    const user = await User.findOne({ name: { $regex: name, $options: "i" } });

    if (!user) {
      return new Response("Convidado não encontrado", { status: 404 });
    }

    if (user.confirmed !== true) {
      user.confirmed = true;
      await user.save();
      return new Response("Convidado confirmado!", { status: 200 });
    } else {
      return new Response("Convidado já confirmado", { status: 400 });
    }
  } catch (error: any) {
    console.log(error?.message);

    return new Response("Erro ao confirmar", { status: 500 });
  }
}
