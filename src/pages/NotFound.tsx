
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout showNavBar={false} showMiniPlayer={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glassmorphism dark:glassmorphism p-8 rounded-3xl max-w-md">
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full glassmorphism flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl mb-6">Oops! We can't find that track</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl neon-glow hover:neon-glow-blue"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
