import Image from "next/image";

const ctaItems = [
  {
    upperText: "Order Medicine On Call",
    lowerText: "+91 96069 73756",
    iconSrc: "/call.bbfc61f6.png",
    alt: "Call Icon",
  },
  {
    upperText: "Upload Doctor’s Prescription",
    lowerText: "to Order",
    iconSrc: "/upload.3fe655dd.png",
    alt: "Upload Icon",
  },
  {
    upperText: "Order Medicines Online",
    lowerText: "Delivered to your Doorstep",
    iconSrc: "/OrderOnCall.e865f808.png",  // Replace with actual image in public folder
    alt: "Order Online Icon",
  },
];

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div className="w-full relative h-[200px] sm:h-[300px] md:h-[400px]">
        <Image
          src="https://platinumrx.gumlet.io/assets/banner1.webp?w=828&q=75"
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-start">
        {ctaItems.map(({ upperText, lowerText, iconSrc, alt }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md flex-1 min-w-[280px]"
          >
            <div>
              <div className="text-sm font-semibold text-gray-700">{upperText}</div>
              <div className="text-lg font-bold text-gray-900">{lowerText}</div>
            </div>
            <Image
              src={iconSrc}
              alt={alt}
              width={45}
              height={44}
              className="object-contain"
              loading="lazy"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
