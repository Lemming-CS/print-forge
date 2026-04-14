import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
      <div className="p-16 flex mb-10">
        <div className="flex flex-col gap-5 flex-1">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold">
            Discover what’s possible with 3D printing
          </h1>
          <h4 className="text-xl text-gray-600">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </h4>
          <div className="flex gap-4">
            <button
              href="/3d-models"
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Models
            </button>
          </div>
        </div>
      </div>
      <Image src="/heroImage.png" width={350} height={350} alt="hero-image" />
    </div>
  );
}
