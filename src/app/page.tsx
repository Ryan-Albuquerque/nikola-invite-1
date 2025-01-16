"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <div className="w-full flex justify-center h-60 z-10 -mt-14 md:h-80 bg-black">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z4vvsqdUtVY?autoplay=1&start=75"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}

        <video
          className="w-full md:h-80 h-full"
          autoPlay
          loop
          playsInline
          controls
        >
          <source src="video.mp4#t=75" type="video/mp4" />
          Navegador não suporta
        </video>
      </div>

      <div className="w-full flex justify-center mt-[-100px] max-[400px]:mt-[-70px] md:z-0 z-10">
        <Image
          src="/nikola.png"
          alt="Image"
          priority
          className="w-full h-auto  md:mx-[48rem] md:h-[1024px]"
          width={800}
          height={900}
        />
      </div>

      <footer className="w-full flex gap-7 justify-center mb-10 mt-[-90px] md:mt-[-150px] md:z-0 z-10">
        <button onClick={() => router.push("/presentes")}>
          <Image
            src={"/presentes.png"}
            height={100}
            width={100}
            alt=""
            className="md:w-[130px]"
          />
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={"/local.png"}
              height={70}
              width={70}
              alt=""
              className="md:w-[100px]"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle hidden></DialogTitle>
              <DialogDescription className="text-lg text-black">
                Ao chegar, informe que irá a churrasqueira 2 na reserva de
                Shirley Domingues!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <a
                className="w-full block"
                href={
                  "https://www.google.com/maps/dir/current+location/Condominio+Bosque+dos+Ingleses,Manaus"
                }
                target="_blank"
              >
                <button className="bg-green-500 w-full text-white py-1 rounded-md">
                  Continuar
                </button>
              </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={"/presenca.png"}
              height={90}
              width={90}
              alt=""
              className="md:w-[120px]"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle hidden></DialogTitle>
              <DialogDescription className="text-lg text-black">
                ⚠ Lembrando que convidado não convida, obrigado :) ⚠
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <button
                className="bg-green-500 w-full text-white py-1 rounded-md"
                onClick={() => {
                  router.push("/confirmar-presenca");
                }}
              >
                Continuar
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </footer>
    </div>
  );
}
