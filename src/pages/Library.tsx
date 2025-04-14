
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { PlaylistCard } from "@/components/PlaylistCard";
import { Plus } from "lucide-react";

const Library = () => {
  // Tab options
  const tabs = ["Playlists", "Artists", "Albums", "Recent"];
  const [activeTab, setActiveTab] = useState("Playlists");
  
  // Sample playlists data
  const playlists = [
    { 
      id: 1, 
      title: "My Favorites", 
      imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 2, 
      title: "Workout Mix", 
      imageSrc: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 3, 
      title: "Chill Beats", 
      imageSrc: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80"
    },
    { 
      id: 4, 
      title: "Road Trip", 
      imageSrc: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80"
    },
    { 
      id: 5, 
      title: "Coding Focus", 
      imageSrc: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Library</h1>
        
        {/* Tabs navigation */}
        <div className="flex overflow-x-auto pb-2 mb-6 gap-2 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-primary text-white neon-glow"
                  : "bg-secondary/50 text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Create Playlist button */}
        <div className="mb-8">
          <button className="w-full glassmorphism dark:glassmorphism rounded-xl p-4 flex items-center justify-center gap-2 hover-scale">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center neon-glow animate-pulse-glow">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">Create Playlist</span>
          </button>
        </div>
        
        {/* Playlists Grid */}
        {activeTab === "Playlists" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                imageSrc={playlist.imageSrc}
              />
            ))}
          </div>
        )}
        
        {/* Placeholder content for other tabs */}
        {activeTab !== "Playlists" && (
          <div className="p-8 text-center text-muted-foreground">
            <p>Content for {activeTab} will appear here</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Library;
