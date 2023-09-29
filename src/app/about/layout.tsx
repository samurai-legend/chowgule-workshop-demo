export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>About Page Layout</div>
      {children}
    </div>
  );
}
