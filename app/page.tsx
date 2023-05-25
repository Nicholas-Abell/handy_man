import Image from "next/image";
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import CardHolder from "./components/Home/CardHolder";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />
      <CardHolder />
      <AboutUs />
      {/* <IconBanner />
      <ExteriorInterior /> */}
    </main>
  );
}
