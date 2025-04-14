import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', 'Inter', 'Urbanist', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our app
				neon: {
					purple: '#9b87f5',
					blue: '#1EAEDB',
					pink: '#D946EF',
					orange: '#F97316',
				},
				pastel: {
					purple: '#E5DEFF',
					pink: '#FFDEE2',
					peach: '#FDE1D3',
					blue: '#D3E4FD',
					lavender: '#D6BCFA',
				}
			},
			borderRadius: {
				'xl': '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)',
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.2)',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-5px)',
					},
				},
				'bounce-soft': {
					'0%, 100%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.03)',
					},
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'visualizer-bar': {
					'0%, 100%': { height: '30%' },
					'20%': { height: '60%' },
					'40%': { height: '40%' },
					'60%': { height: '90%' },
					'80%': { height: '50%' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'theme-transition': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '0.7' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'visualizer-bar': 'visualizer-bar 1.2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'theme-transition': 'theme-transition 0.5s ease-out',
				'ripple': 'ripple 0.8s ease-out'
			},
			boxShadow: {
				'neon-purple': '0 0 5px rgba(155, 135, 245, 0.5), 0 0 20px rgba(155, 135, 245, 0.3)',
				'neon-blue': '0 0 5px rgba(30, 174, 219, 0.5), 0 0 20px rgba(30, 174, 219, 0.3)',
				'neon-pink': '0 0 5px rgba(217, 70, 239, 0.5), 0 0 20px rgba(217, 70, 239, 0.3)',
				'pastel': '0 4px 20px rgba(214, 188, 250, 0.25)',
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
				'gradient-light': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
				'gradient-splash': 'linear-gradient(135deg, #D6BCFA 0%, #FFDEE2 50%, #E5DEFF 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
