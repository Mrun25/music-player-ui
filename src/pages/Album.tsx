
import { useState } from "react";
import { ChevronLeft, Play, Heart, Share2, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { TrackItem } from "@/components/TrackItem";

const Album = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  
  // Sample tracks for this album
  const tracks = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "Synthwave Artist",
      albumCover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      duration: "3:45",
      isPlaying: true
    },
    {
      id: 2,
      title: "Midnight Drive",
      artist: "Synthwave Artist",
      albumCover: "https://images.unsplash.com/photo-1580112547820-86d74ebe8458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
      duration: "4:20"
    },
    {
      id: 3,
      title: "Cyber City",
      artist: "Synthwave Artist",
      albumCover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
      duration: "3:15"
    },
    {
      id: 4,
      title: "Digital Horizon",
      artist: "Synthwave Artist",
      albumCover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "4:05"
    },
    {
      id: 5,
      title: "Purple Sunset",
      artist: "Synthwave Artist",
      albumCover: "https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "3:50"
    }
  ];
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Layout showNavBar={false}>
      {/* Album cover */}
      <div className="py-6 px-4">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full hover:bg-secondary/50 mr-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-medium">Album</h2>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg neon-glow mb-6">
            <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Album Cover"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold mb-1">Neon City Lights</h1>
          <p className="text-muted-foreground mb-1">Synthwave Artist</p>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span>Album • 2023 • 5 songs • 17 min</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className={`p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
              onClick={toggleLike}
            >
              <Heart 
                className="w-5 h-5" 
                fill={isLiked ? "currentColor" : "none"} 
              />
            </button>
            
            <button className="p-2 rounded-full text-muted-foreground">
              <Share2 className="w-5 h-5" />
            </button>
            
            <button className="p-2 rounded-full text-muted-foreground">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Play button */}
        <button className="w-full bg-primary text-white rounded-full py-3 mb-8 neon-glow hover:neon-glow-blue flex items-center justify-center gap-2">
          <Play className="w-5 h-5" />
          <span className="font-medium">Play</span>
        </button>
      </div>
      
      {/* Tracks list */}
      <div className="px-4 mb-24">
        <div className="space-y-2">
          {tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              title={track.title}
              artist={track.artist}
              albumCover={track.albumCover}
              duration={track.duration}
              isActive={index === 0}
              isPlaying={index === 0}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Album;
