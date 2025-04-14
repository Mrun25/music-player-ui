
import { Layout } from "@/components/Layout";
import { PlaylistCard } from "@/components/PlaylistCard";
import { TrackItem } from "@/components/TrackItem";
import { ThemeToggle } from "@/components/ThemeToggle";

const Home = () => {
  // Sample data for playlists
  const featuredPlaylists = [
    { 
      id: 1, 
      title: "New Mix", 
      imageSrc: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 2, 
      title: "Chill Vibes", 
      imageSrc: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    { 
      id: 3, 
      title: "Weekend Party", 
      imageSrc: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 4, 
      title: "Indie Gems", 
      imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample data for new songs
  const newSongs = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "Synthwave Artist",
      albumCover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Midnight Drive",
      artist: "Retro Waves",
      albumCover: "https://images.unsplash.com/photo-1580112547820-86d74ebe8458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
      duration: "4:20",
    },
    {
      id: 3,
      title: "Electric Summer",
      artist: "The Glowsticks",
      albumCover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
      duration: "3:15",
    },
    {
      id: 4,
      title: "Pastel Skies",
      artist: "Dream Sequence",
      albumCover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "4:05",
    },
  ];

  return (
    <Layout>
      <div className="py-6">
        {/* Header section with greeting and profile */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Hi, Alex 👋</h1>
            <p className="text-muted-foreground">What would you like to listen to today?</p>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary neon-glow">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Featured Playlists */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredPlaylists.map((playlist) => (
              <PlaylistCard 
                key={playlist.id} 
                title={playlist.title} 
                imageSrc={playlist.imageSrc} 
              />
            ))}
          </div>
        </section>
        
        {/* Best New Songs */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Best New Songs</h2>
          <div className="space-y-2">
            {newSongs.map((song, index) => (
              <TrackItem
                key={song.id}
                title={song.title}
                artist={song.artist}
                albumCover={song.albumCover}
                duration={song.duration}
                isActive={index === 0}
                isPlaying={index === 0}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
