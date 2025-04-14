
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, Apple, Github } from "lucide-react";
import { InputField } from "@/components/InputField";
import { ThemeToggle } from "@/components/ThemeToggle";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here
    navigate("/");
  };
  
  return (
    <div className="min-h-screen gradient-bg-light dark:gradient-bg-dark flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md glassmorphism dark:glassmorphism rounded-3xl p-8 shadow-pastel dark:neon-glow animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp 
              ? "Sign up to start your musical journey" 
              : "Login to continue your musical journey"}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail size={18} />}
            required
          />
          
          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={18} />}
            required
          />
          
          {!isSignUp && (
            <div className="text-right">
              <a 
                href="#" 
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 neon-glow transition-all flex items-center justify-center gap-2"
          >
            {isSignUp ? "Sign Up" : "Login"}
            <ArrowRight size={18} />
          </button>
        </form>
        
        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="border-t border-border flex-grow"></div>
            <span className="mx-4 text-sm text-muted-foreground">or continue with</span>
            <div className="border-t border-border flex-grow"></div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:bg-secondary/50 transition-colors">
              <Apple size={18} />
              <span>Apple</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:bg-secondary/50 transition-colors">
              <Github size={18} />
              <span>Github</span>
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            {isSignUp 
              ? "Already have an account?" 
              : "Don't have an account?"}
            {" "}
            <button 
              className="text-primary font-medium hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
