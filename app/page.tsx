import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import DirectBooking from "@/components/DirectBooking";

export default function Home() {
  return (
    <>
      <Hero />
      <Rooms />
      <DirectBooking />
      <Gallery />
      <Footer />
    </>
  );
}