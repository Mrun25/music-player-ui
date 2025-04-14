
import { useState } from "react";
import { ChevronLeft, Play, Heart, Share2, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { TrackItem } from "@/components/TrackItem";

const Artist = () => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Sample tracks for this artist
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
  
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Layout showNavBar={false}>
      {/* Artist banner with photo */}
      <div className="relative h-64 sm:h-80 mb-4">
        <div className="absolute top-4 left-4 z-20">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full glassmorphism"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Artist Banner"
          className="w-full h-full object-cover rounded-b-3xl"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background rounded-b-3xl"></div>
      </div>
      
      {/* Artist info */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">Synthwave Artist</h1>
            <p className="text-muted-foreground">1.2M monthly listeners</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              className={`p-2 rounded-full ${isFollowing ? 'bg-primary text-white' : 'border border-border'} neon-glow`}
              onClick={toggleFollow}
            >
              <Heart 
                className="w-5 h-5" 
                fill={isFollowing ? "currentColor" : "none"} 
              />
            </button>
            
            <button className="p-2 rounded-full border border-border">
              <Share2 className="w-5 h-5" />
            </button>
            
            <button className="p-2 rounded-full border border-border">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <p className="mb-6">
          Creating futuristic electronic music inspired by 80s nostalgia and neon-lit cityscapes.
        </p>
        
        {/* Play button */}
        <button className="bg-primary text-white rounded-full py-3 px-8 mb-6 neon-glow hover:neon-glow-blue flex items-center gap-2">
          <Play className="w-5 h-5" />
          <span className="font-medium">Play</span>
        </button>
      </div>
      
      {/* Popular tracks */}
      <div className="px-4 mb-24">
        <h2 className="text-xl font-semibold mb-4">Popular Tracks</h2>
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

export default Artist;
