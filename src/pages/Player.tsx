
import { useState } from "react";
import { ChevronDown, Mic, Heart, Volume2, Speaker, SkipBack, Play, Pause, SkipForward, Repeat, Shuffle, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Visualizer } from "@/components/Visualizer";
import { TrackItem } from "@/components/TrackItem";

const Player = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(42); // Seconds
  const duration = 215; // Total duration in seconds
  
  // Sample upcoming tracks
  const upcomingTracks = [
    {
      id: 1,
      title: "Midnight Drive",
      artist: "Retro Waves",
      albumCover: "https://images.unsplash.com/photo-1580112547820-86d74ebe8458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
      duration: "4:20",
    },
    {
      id: 2,
      title: "Electric Summer",
      artist: "The Glowsticks",
      albumCover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
      duration: "3:15",
    },
    {
      id: 3,
      title: "Pastel Skies",
      artist: "Dream Sequence",
      albumCover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "4:05",
    },
  ];
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <div className="min-h-screen gradient-bg-light dark:gradient-bg-dark flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center">
        <button onClick={() => navigate(-1)}>
          <ChevronDown className="w-6 h-6" />
        </button>
        <div className="flex-1 text-center">
          <p className="text-sm text-muted-foreground">NOW PLAYING</p>
        </div>
        <button>
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      
      {/* Album Cover */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-8">
        <div className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-xl ${isPlaying ? 'animate-pulse-glow' : ''} neon-glow`}>
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Album Cover"
            className="w-full h-full object-cover"
          />
        </div>
        
        <Visualizer isPlaying={isPlaying} />
        
        {/* Song Info */}
        <div className="text-center mt-6 mb-8 w-full">
          <h1 className="text-2xl font-bold mb-1">Neon Dreams</h1>
          <p className="text-muted-foreground">Synthwave Artist</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mb-6">
          <input 
            type="range" 
            min="0" 
            max={duration} 
            value={currentTime}
            onChange={(e) => setCurrentTime(parseInt(e.target.value))}
            className="w-full h-1.5 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:neon-glow"
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center w-full max-w-md mb-8">
          <button className="mx-2 p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <Shuffle className="w-5 h-5" />
          </button>
          <button className="mx-2 p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <SkipBack className="w-6 h-6" />
          </button>
          <button 
            className="mx-4 p-4 rounded-full bg-primary text-white neon-glow hover:neon-glow-blue transition-all"
            onClick={togglePlay}
          >
            {isPlaying ? 
              <Pause className="w-8 h-8" /> : 
              <Play className="w-8 h-8" />
            }
          </button>
          <button className="mx-2 p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <SkipForward className="w-6 h-6" />
          </button>
          <button className="mx-2 p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <Repeat className="w-5 h-5" />
          </button>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between w-full max-w-md mb-8">
          <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
            onClick={toggleLike}
          >
            <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} color={isLiked ? "#ef4444" : "currentColor"} />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-1.5 p-2 rounded-full hover:bg-secondary/50 transition-colors text-sm text-muted-foreground">
            <Speaker className="w-5 h-5" />
            <span>AirPods</span>
          </button>
        </div>
      </div>
      
      {/* Up Next */}
      <div className="glassmorphism dark:glassmorphism p-6 rounded-t-3xl">
        <h3 className="font-bold mb-3">Up Next</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {upcomingTracks.map((track) => (
            <TrackItem 
              key={track.id}
              title={track.title}
              artist={track.artist}
              albumCover={track.albumCover}
              duration={track.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;
