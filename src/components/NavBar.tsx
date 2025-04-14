
import { Home, Search, Library, Crown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Search", path: "/search", icon: Search },
    { name: "Library", path: "/library", icon: Library },
    { name: "Premium", path: "/premium", icon: Crown },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glassmorphism dark:glassmorphism py-3 px-4 z-50">
      <div className="max-w-lg mx-auto">
        <ul className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <li key={item.name}>
                <Link to={item.path} className="relative flex flex-col items-center">
                  <IconComponent 
                    className={`w-5 h-5 ${isActive 
                      ? 'text-primary dark:text-white' 
                      : 'text-muted-foreground'} transition-colors`}
                  />
                  <span className={`text-xs mt-1 ${isActive 
                    ? 'text-primary dark:text-white' 
                    : 'text-muted-foreground'} transition-colors`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-10 rounded-full bg-primary neon-glow" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
