import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  alt: string;
  title: string;
  category: string;
  href?: string;
  onClick?: () => void;
}

export default function PortfolioCard({ image, alt, title, category, href, onClick }: PortfolioCardProps) {
  const inner = (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <Image src={image} alt={alt} width={600} height={400} className="w-full object-cover" />
      <div className="p-4">
        <p className="text-sm font-light">{title}</p>
        <div className="mt-2 flex items-center justify-between">
          {href ? (
            <span className="rounded-full bg-gray-500 px-4 py-1 text-xs text-white">Visit</span>
          ) : (
            <span className="rounded-full bg-gray-500 px-4 py-1 text-xs text-white">View</span>
          )}
          <small className="text-xs text-gray-400">{category}</small>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block transition duration-200 ease-in-out transform hover:scale-105">
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block w-full text-left transition duration-200 ease-in-out transform hover:scale-105">
      {inner}
    </button>
  );
}
