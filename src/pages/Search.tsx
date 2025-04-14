
import { Layout } from "@/components/Layout";
import { InputField } from "@/components/InputField";
import { GenreCard } from "@/components/GenreCard";
import { Search as SearchIcon, Zap, Music, Radio, Headphones, Mic2 } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Genre data with colors
  const genres = [
    { name: "Pop", color: "#8B5CF6", icon: <Music className="w-8 h-8 text-white" /> },
    { name: "Rock", color: "#EC4899", icon: <Zap className="w-8 h-8 text-white" /> },
    { name: "Hip-Hop", color: "#F97316", icon: <Mic2 className="w-8 h-8 text-white" /> },
    { name: "Electronic", color: "#06B6D4", icon: <Radio className="w-8 h-8 text-white" /> },
    { name: "Lo-fi", color: "#14B8A6", icon: <Headphones className="w-8 h-8 text-white" /> },
    { name: "Indie", color: "#F43F5E", icon: <Music className="w-8 h-8 text-white" /> },
    { name: "K-Pop", color: "#D946EF", icon: <Mic2 className="w-8 h-8 text-white" /> },
    { name: "Classical", color: "#6366F1", icon: <Music className="w-8 h-8 text-white" /> },
  ];

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Search</h1>
        
        {/* Search Input */}
        <div className="mb-8">
          <InputField
            placeholder="Search songs, artists, albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<SearchIcon size={20} />}
            className="py-4 rounded-xl"
          />
        </div>
        
        {/* Genres Grid */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Browse All</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {genres.map((genre) => (
              <GenreCard
                key={genre.name}
                name={genre.name}
                color={genre.color}
                icon={genre.icon}
                path={`/genre/${genre.name.toLowerCase()}`}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Search;
