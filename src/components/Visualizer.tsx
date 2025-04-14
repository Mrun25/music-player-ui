
import { useEffect, useState } from "react";

interface VisualizerProps {
  isPlaying: boolean;
}

export const Visualizer = ({ isPlaying }: VisualizerProps) => {
  // Number of bars in the visualizer
  const barCount = 20;
  
  // Generate random heights for initial render
  const [bars, setBars] = useState<number[]>(
    Array.from({ length: barCount }, () => Math.random() * 100)
  );
  
  // Update bars when playing
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setBars((prevBars) =>
        prevBars.map(() => Math.random() * 100)
      );
    }, 200);
    
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  return (
    <div className="flex items-end justify-center h-16 gap-1 my-4">
      {bars.map((height, index) => (
        <div
          key={index}
          className={`w-1 rounded-t-md bg-gradient-to-t from-primary to-purple-300 dark:from-neon-purple dark:to-neon-blue transition-all duration-300 ease-in-out ${isPlaying ? "animate-visualizer-bar" : ""}`}
          style={{ 
            height: isPlaying ? `${20 + height * 0.8}%` : "10%",
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}
    </div>
  );
};
