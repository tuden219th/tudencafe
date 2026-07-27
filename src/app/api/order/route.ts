import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { tableNumber, items, total } = body;

    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        table_number: tableNumber,
        total,
        status: "NEW",
      })
      .select()
      .single();

    if (error) {
      console.error("ORDER ERROR:", error);
      throw error;
    }

    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    const { error: itemError } = await supabase
      .from("order_items")
      .insert(orderItems);

    if (itemError) {
      console.error("ITEM ERROR:", itemError);
      throw itemError;
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
    });

  } catch (err: any) {

    console.error("API ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        message: err?.message,
        details: err,
      },
      {
        status: 500,
      }
    );
  }
}