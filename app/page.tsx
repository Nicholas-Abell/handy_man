import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import CardHolder from "./components/Home/CardHolder";
import IconBanner from "./components/Home/IconBanner";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />
      <CardHolder />
      <IconBanner />
    </main>
  );
}
