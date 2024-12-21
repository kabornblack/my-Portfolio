"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Prevents mismatched UI during hydration
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark" // Set default to dark mode
      enableSystem={false} // Optional: Disable system preference
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
