
import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { Link } from "react-router-dom";

export const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // This would be replaced with actual music control logic
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="fixed bottom-16 left-0 right-0 px-4 z-40">
      <div className="max-w-lg mx-auto glassmorphism dark:glassmorphism rounded-xl p-2 shadow-pastel dark:shadow-neon-purple">
        <Link to="/player">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden neon-border">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Album Cover" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3 truncate">
                <h5 className="font-medium text-sm">Neon Dreams</h5>
                <p className="text-xs text-muted-foreground">Synthwave Artist</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-1.5 rounded-full hover:bg-secondary/50 transition-colors">
                <SkipBack size={16} />
              </button>
              
              <button 
                className="p-1.5 rounded-full bg-primary hover:bg-primary/90 text-white neon-glow transition-all"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              
              <button className="p-1.5 rounded-full hover:bg-secondary/50 transition-colors">
                <SkipForward size={16} />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
