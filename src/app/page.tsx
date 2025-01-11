import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Head>
        <title>Image and Video Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full flex justify-center h-60 z-10">
        <video
          className="w-full mt-[-50px]"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="video.mp4" type="video/mp4" />
          Navegador não suporta
        </video>
      </div>

      <div className="w-full flex justify-center mt-[-110px]">
        <img src="nikola.png" alt="Image" className="w-full h-auto" />
      </div>

      <footer className="w-full flex gap-2.5 justify-center mb-2.5 mt-[-80px]">
        <button className="px-2.5 py-2.5 text-lg cursor-pointer rounded-lg border-2 border-green-500">
          <span role="img" aria-label="gift">
            &#x1F381;
          </span>{" "}
          Presente
        </button>
        <button className="px-2.5 py-2.5 text-lg cursor-pointer rounded-lg border-2 border-green-500">
          <span role="img" aria-label="location">
            &#x1F4CD;
          </span>{" "}
          Local
        </button>
        <button className="px-2.5 py-2.5 text-lg cursor-pointer rounded-lg border-2 border-green-500">
          <span role="img" aria-label="check">
            &#x2705;
          </span>{" "}
          Presença
        </button>
      </footer>
    </div>
  );
}
