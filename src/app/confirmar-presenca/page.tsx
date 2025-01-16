"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConfirmarPresenca() {
  const [guest, setGuest] = useState("");
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="h-screen w-full bg-black">
      <div className="absolute w-full h-screen">
        <Image
          src={"/ts2.png"}
          width={600}
          height={600}
          alt=""
          className="h-screen w-full opacity-50"
        ></Image>
      </div>
      <div className="relative">
        <nav className="flex justify-start  mx-5 mb-5">
          <Link href={"/"} legacyBehavior>
            <Image src={"/et.png"} height={70} width={70} alt="" />
          </Link>
        </nav>
        <div className="my-28 px-2 flex w-full justify-center justify-self-center">
          <input
            type="text"
            placeholder="Informe seu nome..."
            className="border p-2 w-full text-black rounded-md"
            onChange={(e) => setGuest(e.target.value)}
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-md"
            disabled={guest.length < 3 || isLoading}
            onClick={async () => {
              setLoading(true);
              const request = await fetch("/api/confirm", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                cache: "no-store",
                body: JSON.stringify({ guest }),
              });
              const result = await request.text();
              alert(result);
              setLoading(false);
              if (request.status == 400 || request.status == 200) {
                window.location.href = `https://api.whatsapp.com/send?phone=5592984551334&text=Ol%C3%A1%20Ryan%20e%20Laura.%20%0AAgrade%C3%A7o%20o%20convite. Eu ${guest} confirmo%20minha%20presen%C3%A7a%20no%20anivers%C3%A1rio%20do%20Nikola%20no%20dia%208%20de%20fevereiro%20as%2012%3A00%20no%20Condom%C3%ADnio%20Bosque%20dos%20Ingleses%20%F0%9F%A4%A0%F0%9F%91%A9%E2%80%8D%F0%9F%9A%80`;
              }
            }}
          >
            {!isLoading ? "Confirmar" : "Carregando"}
          </button>
        </div>
      </div>
    </div>
  );
}
