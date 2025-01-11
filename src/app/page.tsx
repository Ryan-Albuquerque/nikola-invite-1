"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <div className="w-full flex justify-center h-60 z-10">
        <video
          className="w-full mt-[-25px] h-full"
          autoPlay
          loop
          playsInline
          controls
        >
          <source src="video.mp4" type="video/mp4" />
          Navegador não suporta
        </video>
      </div>

      <div className="w-full flex justify-center mt-[-110px]">
        <Image
          src="/nikola.png"
          alt="Image"
          className="w-full h-auto"
          width={800}
          height={900}
        />
      </div>

      <footer className="w-full flex gap-2.5 justify-center mb-2.5 mt-[-80px]">
        <button
          className="px-2.5 py-2.5 text-lg cursor-pointer rounded-lg border-2 border-amber-500 text-black"
          onClick={() => router.push("/presentes")}
        >
          <span role="img" aria-label="gift">
            &#x1F381;
          </span>{" "}
          Presentes
        </button>
        <button
          className="px-2.5 py-2.5 text-lg cursor-pointer rounded-lg border-2 border-amber-500 text-black"
          onClick={() => {
            alert(
              "Ao chegar, informe que irá a churrasqueira 2 na reserva de Shirley Domingues!"
            );
            window.location.href =
              "https://www.google.com/maps/dir/current+location/Condominio+Bosque+dos+Ingleses,Manaus";
          }}
        >
          <span role="img" aria-label="location">
            &#x1F4CD;
          </span>{" "}
          Local
        </button>
        <button
          className="px-2.5 py-2.5 text-lg cursor-pointer rounded-lg border-2 border-amber-400 text-black"
          onClick={() => {
            alert("⚠ Lembrando que convidado não convida, obrigado :) ⚠");
            router.push("/confirmar-presenca");
          }}
        >
          <span role="img" aria-label="check">
            &#x2705;
          </span>{" "}
          Presença
        </button>
      </footer>
    </div>
  );
}
