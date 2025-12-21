import Image from "next/image";
export const Content = () => {
  const clients = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    },
    {
      name: "InnovateLabs",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    },
    {
      name: "Global Solutions",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    },
    {
      name: "NextGen",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    },
    {
      name: "FutureTech",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    },
    {
      name: "DataFlow",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    },
    {
      name: "CloudNine",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    },
  ];

  return (
    <div className="flex gap-8">
      {clients.map((client, index) => (
        <div key={index} className="flex flex-col items-center gap-2 min-w-24">
          <Image
            src={client.logo}
            alt={client.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
          />
          <span className="text-sm font-medium text-gray-700 text-center">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
};