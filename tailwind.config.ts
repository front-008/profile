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
				'cairo': ['Cairo', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
				'inter': ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss-rtl"),
		// Custom RTL utilities plugin
		function({ addUtilities, theme }) {
			const newUtilities = {
				// RTL-aware margin utilities
				'.ms-auto': {
					'margin-inline-start': 'auto',
				},
				'.me-auto': {
					'margin-inline-end': 'auto',
				},
				'.mx-auto-rtl': {
					'margin-inline': 'auto',
				},
				// RTL-aware padding utilities
				'.ps-4': {
					'padding-inline-start': theme('spacing.4'),
				},
				'.pe-4': {
					'padding-inline-end': theme('spacing.4'),
				},
				'.ps-6': {
					'padding-inline-start': theme('spacing.6'),
				},
				'.pe-6': {
					'padding-inline-end': theme('spacing.6'),
				},
				'.ps-8': {
					'padding-inline-start': theme('spacing.8'),
				},
				'.pe-8': {
					'padding-inline-end': theme('spacing.8'),
				},
				// RTL-aware text alignment
				'.text-start': {
					'text-align': 'start',
				},
				'.text-end': {
					'text-align': 'end',
				},
				// RTL-aware border utilities
				'.border-s': {
					'border-inline-start-width': '1px',
				},
				'.border-e': {
					'border-inline-end-width': '1px',
				},
				// RTL-aware positioning
				'.start-0': {
					'inset-inline-start': '0',
				},
				'.end-0': {
					'inset-inline-end': '0',
				},
				'.start-4': {
					'inset-inline-start': theme('spacing.4'),
				},
				'.end-4': {
					'inset-inline-end': theme('spacing.4'),
				},
				// RTL-aware flex utilities
				'.flex-row-reverse-rtl': {
					'[dir="rtl"] &': {
						'flex-direction': 'row-reverse',
					},
				},
				// RTL-aware transform utilities
				'.translate-x-reverse-rtl': {
					'[dir="rtl"] &': {
						'transform': 'translateX(-50%)',
					},
				},
				// RTL-aware dropdown positioning
				'.dropdown-center-rtl': {
					'[dir="ltr"] &': {
						'left': '50%',
						'transform': 'translateX(-50%)',
					},
					'[dir="rtl"] &': {
						'right': '50%',
						'transform': 'translateX(50%)',
					},
				},
				// RTL-aware icon positioning
				'.icon-end': {
					'[dir="ltr"] &': {
						'right': '1rem',
					},
					'[dir="rtl"] &': {
						'left': '1rem',
					},
				},
			};
			addUtilities(newUtilities);
		},
	],
} satisfies Config;
