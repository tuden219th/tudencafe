"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { toPng } from "html-to-image";

import AdminGuard from "@/components/admin/AdminGuard";


export default function QRCodePage() {

  const [codes, setCodes] = useState<
    {
      table: string;
      qr: string;
    }[]
  >([]);


  useEffect(() => {

    async function generate() {

      const tables = Array.from(
        { length: 10 },
        (_, index) =>
          String(index + 1).padStart(2, "0")
      );


      const result = await Promise.all(

        tables.map(async (table) => {

          const url =
            `https://tudencafe.com/table/${table}`;


          const qr =
            await QRCode.toDataURL(url, {
              width: 500,
              margin: 2,

              color: {
                dark: "#294A3A",
                light: "#FFFFFF",
              },
            });


          return {
            table,
            qr,
          };

        })

      );


      setCodes(result);

    }


    generate();

  }, []);



  async function downloadQR(
    table: string
  ) {

    const element =
      document.getElementById(
        `qr-${table}`
      );


    if (!element) return;


    const image =
      await toPng(element);


    const link =
      document.createElement("a");


    link.download =
      `TuDen-Table-${table}.png`;


    link.href = image;


    link.click();

  }



  return (

    <AdminGuard>

      <main className="min-h-screen bg-[#F5EBDD] p-8">


        <h1
          className="
          mb-10
          text-center
          text-3xl
          font-bold
          text-[#3B2416]
          "
        >
          QR Code Từ Đến Coffee
        </h1>



        <div
          className="
          grid
          gap-8
          md:grid-cols-3
          "
        >


          {codes.map((item) => (

            <div
              key={item.table}
              className="text-center"
            >


              <div
                id={`qr-${item.table}`}
                className="
                rounded-2xl
                bg-white
                p-8
                shadow
                "
              >


                <h2
                  className="
                  mb-5
                  text-xl
                  font-bold
                  text-[#294A3A]
                  "
                >
                  TỪ ĐẾN COFFEE
                </h2>


                <p className="text-sm">
                  From where you are,
                  <br />
                  To where you want to be
                </p>



                <div className="relative mx-auto w-56">


                  <img
                    src={item.qr}
                    className="w-56"
                    alt={`QR bàn ${item.table}`}
                  />



                  <img
                    src="/images/logo.png"
                    alt="Từ Đến"
                    className="
                    absolute
                    left-1/2
                    top-1/2
                    w-14
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white
                    p-1
                    "
                  />


                </div>



                <p
                  className="
                  mt-5
                  text-sm
                  text-[#3B2416]
                  "
                >
                  Quét QR để gọi món
                </p>



                <p
                  className="
                  mt-3
                  text-xl
                  font-bold
                  text-[#294A3A]
                  "
                >
                  BÀN {item.table}
                </p>


              </div>



              <button
                onClick={() =>
                  downloadQR(item.table)
                }
                className="
                mt-4
                rounded-full
                bg-[#294A3A]
                px-6
                py-2
                text-white
                "
              >
                Tải QR
              </button>


            </div>

          ))}


        </div>


      </main>

    </AdminGuard>

  );
}