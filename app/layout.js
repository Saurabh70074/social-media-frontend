export const metadata = {
  title: 'Social Media Platform',
  description: 'A simple social media application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
