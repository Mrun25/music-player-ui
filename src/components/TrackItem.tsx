
import { Play, Pause, Heart } from "lucide-react";
import { useState } from "react";

interface TrackItemProps {
  title: string;
  artist: string;
  albumCover: string;
  duration: string;
  isActive?: boolean;
  isPlaying?: boolean;
  onPlay?: () => void;
}

export const TrackItem = ({
  title,
  artist,
  albumCover,
  duration,
  isActive = false,
  isPlaying = false,
  onPlay,
}: TrackItemProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`group flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 ${
        isActive
          ? "glassmorphism dark:glassmorphism neon-glow"
          : "hover:bg-secondary/40 dark:hover:bg-secondary/20"
      }`}
      onClick={onPlay}
    >
      <div className="flex items-center flex-1">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden">
          <img
            src={albumCover}
            alt={`${title} album cover`}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${
              isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <button className="text-white p-1">
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>
        </div>

        <div className="ml-3 truncate">
          <p className={`font-medium ${isActive ? "text-primary dark:text-white" : ""}`}>
            {title}
          </p>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className={`opacity-0 group-hover:opacity-100 transition-opacity ${
            isLiked ? "text-red-500" : "text-muted-foreground"
          }`}
          onClick={toggleLike}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>
        <span className="text-sm text-muted-foreground">{duration}</span>
      </div>
    </div>
  );
};
