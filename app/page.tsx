import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import Carousel from "./components/TiltCard";

export default function Home() {
  return (
    <main>
      <Header /> 
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <Carousel/>
    </main>
  );
}
