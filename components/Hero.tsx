import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-24"
      id="hero"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Turn your ideas into profit.</h1>
          <p className="text-gray-600 text-lg mb-8">
            Let&apos;s discuss your project and see how we can help you grow your business.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
        <div className="relative">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={1200}
            height={600}
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
