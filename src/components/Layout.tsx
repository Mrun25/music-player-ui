
import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { MiniPlayer } from "./MiniPlayer";

interface LayoutProps {
  children: ReactNode;
  showNavBar?: boolean;
  showMiniPlayer?: boolean;
}

export const Layout = ({ 
  children, 
  showNavBar = true,
  showMiniPlayer = true
}: LayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col transition-all duration-300 ease-in-out dark:gradient-bg-dark gradient-bg-light pb-16">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {children}
      </main>
      
      {showMiniPlayer && <MiniPlayer />}
      {showNavBar && <NavBar />}
    </div>
  );
};
