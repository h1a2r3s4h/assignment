import Image from "next/image";

export default function CompareHeader() {
  return (
    <div className="relative w-full h-[300px]">

      {/* Background Image */}
      <Image
        src="/images/compare/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg" // put your image here
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (light blur + fade like your UI) */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        
        {/* Small Logo */}
        <Image
          src="/images/compare/2727769ba74736d502746301ed573ed8940fc322.png" // your small logo
          alt="Logo"
          width={40}
          height={40}
          className="mb-3"
        />

        {/* Title */}
        <h1 className="text-4xl font-semibold text-black">
          Contact
        </h1>

        {/* Breadcrumb */}
        <p className="mt-2 text-gray-700 text-sm flex items-center gap-2">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-black font-medium">Contact</span>
        </p>

      </div>
    </div>
  );
}