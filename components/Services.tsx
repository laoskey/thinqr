import Image from "next/image";
import { Building, Code, MessageCircle, PenTool, PenLine, UserRound } from "lucide-react";
const services = [
  {
    title: "UI/UX Design",
    description: "Create beautiful and functional interfaces",
    icon: <PenTool color="black" />,
  },
  {
    title: "Development",
    description: "Build robust and scalable applications",
    icon: <Code color="orangered" />,
  },
  {
    title: "Marketing",
    description: "Reach your target audience effectively",
    icon: <MessageCircle color="orange" />,
  },
  {
    title: "Support",
    description: "24/7 technical support and maintenance",
    icon: <PenLine color="green" />,
  },

  {
    title: "Social media content",
    description: "Grow your social media with organic content.",
    icon: <MessageCircle color="gray" />,
  },
  {
    title: "Conversion rate optimization",
    description: "Convert more clients with marketing funnels and better product pages.",
    icon: <UserRound color="purple" />,
  },
  {
    title: "Landing pages",
    description: "We craft beautiful landing pages with design and content.",
    icon: <Building color="blue" />,
  },
  {
    title: "Graphic design",
    description: "Our designers create premium visuals for your brand.",
    icon: <PenLine color="green" />,
  },
];

export default function Services() {
  return (
    <section
      className="py-16 bg-white text-black"
      id="services"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The best talent, all in one place.
        </h2>
        <p className="text-gray-600 text-center mb-12">We provide the expertise you need.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
