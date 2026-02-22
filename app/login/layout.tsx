export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232f3e] via-[#1a2332] to-[#0f1419]">
      {children}
    </div>
  );
}
