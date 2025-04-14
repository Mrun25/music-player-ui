import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Bell, User, Lock, Headphones, HelpCircle, LogOut } from "lucide-react";

const Settings = () => {
  // Sample settings menu items
  const menuItems = [
    { icon: User, label: "Account", path: "#account" },
    { icon: Lock, label: "Privacy", path: "#privacy" },
    { icon: Bell, label: "Notifications", path: "#notifications" },
    { icon: Headphones, label: "Audio Quality", path: "#audio" },
    { icon: HelpCircle, label: "Help & Support", path: "#help" },
    { icon: LogOut, label: "Logout", path: "#logout", danger: true },
  ];

  return (
    <Layout>
      <div className="py-6 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Settings</h1>
        
        {/* Theme Settings */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Theme</h2>
            <ThemeToggle />
          </div>
          
          {/* Theme Preview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glassmorphism-light dark:glassmorphism rounded-xl p-4 hover-scale cursor-pointer border-2 dark:border-transparent border-primary">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <div className="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
              </div>
              <h3 className="text-center text-sm font-medium">Light</h3>
            </div>
            
            <div className="glassmorphism dark:glassmorphism dark:border-2 dark:border-primary border-transparent rounded-xl p-4 hover-scale cursor-pointer">
              <div className="bg-gray-800 rounded-lg p-3 mb-3 shadow-sm">
                <div className="h-2 w-16 bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-10 bg-gray-700 rounded-full"></div>
              </div>
              <h3 className="text-center text-sm font-medium">Dark</h3>
            </div>
          </div>
        </div>
        
        {/* Other Settings */}
        <div className="glassmorphism dark:glassmorphism rounded-xl overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <a 
                key={item.label} 
                href={item.path}
                className={`flex items-center p-4 hover:bg-secondary/50 
                  ${index !== menuItems.length - 1 ? 'border-b border-border' : ''}
                  ${item.danger ? 'text-destructive' : ''}
                `}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.danger ? 'bg-destructive/10' : 'bg-secondary/80'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="ml-3 font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
