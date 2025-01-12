import Image from "next/image";
import Link from "next/link";

export default function Presentes() {
  return (
    <div className="h-screen w-full bg-black">
      <div className="absolute w-full h-screen">
        <Image
          src={"/ts3.png"}
          width={500}
          height={500}
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
        <div className="my-28 px-2 flex w-full flex-col text-center items-center gap-5">
          <button className="ml-2 p-2 bg-amber-500 text-white rounded-md w-[80%] font-bold">
            BP KIDS
          </button>
          <a
            className="w-full"
            href={
              "https://drive.google.com/file/d/1CHKpgiKihd2SUxy-3bQdMN8U6HPlWtxL/view?usp=sharing"
            }
            target="_blank"
          >
            <button className="ml-2 p-2 bg-red-500 text-white rounded-md w-[80%] font-bold">
              Toy Store Brinquedos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
