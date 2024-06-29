import Navbar from "@/components/navbar/Navbar";
import HomeScreen from "@/components/home/HomeScreen";
import Features from "@/components/features/Features";
import AddSection from "@/components/AddSection";
import Testimonial from "@/components/testimonials/Testimonial";
import EndSection from "@/components/end/EndSection";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeScreen />
      <Features />
      <AddSection />
      <Testimonial />
      <EndSection />
      <Footer />
    </div>
  );
}
