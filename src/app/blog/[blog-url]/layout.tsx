import "@mintlify/mdx/dist/styles.css";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>{children}</>;
  }