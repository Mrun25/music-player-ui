
import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-1 text-foreground">
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`w-full px-4 py-3 ${
              icon ? "pl-10" : ""
            } rounded-xl border bg-white/10 dark:bg-black/10 backdrop-blur-md border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 ${
              error ? "border-destructive" : ""
            } ${className}`}
            {...props}
          />
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
