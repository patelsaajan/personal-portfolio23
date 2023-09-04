import "./globals.css";

import ResponsiveAppBar from "@/components/navbar";
import MUIThemeProvider from "@/theme/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MUIThemeProvider>
      <html lang="en">
        <body>
          <ResponsiveAppBar />
          <main>{children}</main>
        </body>
      </html>
    </MUIThemeProvider>
  );
}
