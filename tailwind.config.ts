// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/globals.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Gradient colors
        lightGradientStart: "white",
        lightGradientEnd: "rgba(229, 231, 235, 0.05)",
        darkGradientStart: "black",
        darkGradientEnd: "rgba(75, 85, 99, 0.05)",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        xs: "475px", // Extra small devices
        sm: "640px", // Small devices
        md: "850px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1700px", // XXL devices
      },
      width: {
        "7xl": "80rem",
        "6xl": "72rem",
        "5xl": "60rem",
        "4xl": "45rem",
        "3xl": "30rem",
        "2xl": "10rem",
      },
      fontFamily: {
        hubballi: ["Hubballi", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        breathing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "skewX(2deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        breathing: "breathing 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderWidth: {
        "0.5": "0.1px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // tailwind.config.ts
// // import { Config } from "tailwindcss";

// import { Config } from "tailwindcss";

// // import type { Config } from "@tailwindcss/config";
// const {
//   default: flattenColorPalette,
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
// } = require("tailwindcss/lib/util/flattenColorPalette");

// /**
// //  * Custom function to add global color variables
//  * @param {Object} params - Tailwind plugin parameters
//  */

// function addVariablesForColors({
//   addBase,
//   theme,
// }: {
//   addBase: (variables: Record<string, string>) => void;
//   theme: Config["theme"];
// }): void {
//   let allColors: Record<string, string>;
//   if (typeof theme === "object" && theme !== null && "colors" in theme) {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     allColors = flattenColorPalette((theme as any).colors);
//   } else {
//     console.warn("Theme colors not found");
//     return;
//   }

//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)])
//   );

//   addBase({
//     ":root": JSON.stringify(newVars),
//   });
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],

//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./app/globals.css",
//     // "./src/**/*.{ts,tsx}",
//     // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     // "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     // "./app/**/*.{js,ts,jsx,tsx,mdx}",P
//   ],

//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },

//     extend: {
//       colors: {
//         border: {
//           DEFAULT: "hsl(var(--border))",
//         },
//         background: {
//           DEFAULT: "hsl(var(--background))",
//         },
//         foreground: {
//           DEFAULT: "hsl(var(--foreground))",
//         },
//         // Gradient colors
//         lightGradientStart: "white",
//         lightGradientEnd: "rgba(229, 231, 235, 0.05)",
//         darkGradientStart: "black",
//         darkGradientEnd: "rgba(75, 85, 99, 0.05)",

//         // background: "hsl(var(--background))",
//         // foreground: "hsl(var(--foreground))",

//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },

//         // Change this part
//         // border: {
//         //   DEFAULT: "hsl(var(--border))",
//         // },
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",

//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },

//       border: {
//         DEFAULT: "hsl(var(--border))",
//       },

//       keyframes: {
//         breathing: {
//           "0%, 100%": { transform: "scale(1)" },
//           "50%": { transform: "skewX(2deg)" },
//         },

//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },

//       screens: {
//         xs: "475px", // Extra small devices
//         sm: "640px", // Small devices
//         md: "850px", // Medium devices
//         lg: "1024px", // Large devices
//         xl: "1280px", // Extra large devices
//         "2xl": "1700px", // XXL devices
//       },

//       width: {
//         "7xl": "80rem",
//         "6xl": "72rem",
//         "5xl": "60rem",
//         "4xl": "45rem",
//         "3xl": "30rem",
//         "2xl": "10rem",
//       },

//       fontFamily: {
//         hubballi: ["Hubballi", "sans-serif"],
//         quicksand: ["Quicksand", "sans-serif"],
//       },

//       animation: {
//         breathing: "breathing 2s ease-in-out infinite",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },

//       borderWidth: {
//         "0.5": "0.1px",
//       },

//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },

//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   plugins: [require("tailwindcss-animate")],
// };

// // export default addVariablesForColors;
