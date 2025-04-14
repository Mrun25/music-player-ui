
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setTimeout(() => {
      setFadeIn(true);
    }, 300);

    // Navigate to login after splash screen display
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-splash">
      <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <div className="w-32 h-32 rounded-full glassmorphism flex items-center justify-center mb-8 animate-pulse-glow">
          <div className="text-4xl font-bold gradient-text">NG</div>
        </div>
        
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 gradient-text">NeonGroove</h1>
          <div className={`text-sm text-muted-foreground transition-opacity duration-1000 delay-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
            Powered by NeonGroove
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
