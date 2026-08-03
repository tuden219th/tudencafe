import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const { id, status } = body;

    const { error } = await supabase
      .from("orders")
      .update({
        status,
      })
      .eq("id", id);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Có lỗi xảy ra",
      },
      {
        status: 500,
      }
    );
  }
}