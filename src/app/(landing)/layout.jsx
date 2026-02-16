import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

export default function LandingLayout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF7F5]">
      {/* Header component now handles its own constraints and the global header tag */}
      <Header />

      {/* Centrally controlled Content width in Layout */}
      <main className="flex-1 pt-[80px] w-full overflow-hidden">
        {children}
      </main>

      <Footer />
    </div>
  );
}
