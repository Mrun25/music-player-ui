
import { Play } from "lucide-react";
import { useState } from "react";

interface PlaylistCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  onClick?: () => void;
}

export const PlaylistCard = ({ 
  title, 
  description, 
  imageSrc, 
  onClick 
}: PlaylistCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-2xl overflow-hidden hover-scale cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
      
      <img 
        src={imageSrc} 
        alt={title} 
        className="object-cover w-full aspect-square transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
        <h3 className="text-white font-semibold">{title}</h3>
        {description && <p className="text-gray-300 text-sm">{description}</p>}
      </div>
      
      {/* Play button that appears on hover */}
      <div 
        className={`absolute right-3 bottom-3 rounded-full p-2.5 bg-primary neon-glow text-white z-30 transform transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <Play size={18} />
      </div>
    </div>
  );
};
