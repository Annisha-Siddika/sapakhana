
import Ad1 from "@/components/homeComponents/ads/Ad1";
import Ad2 from "@/components/homeComponents/ads/Ad2";
import DesignPicked from "@/components/homeComponents/designPicked/DsgnPicked";
import Featured from "@/components/homeComponents/featured/Featured";
import Hero from "@/components/homeComponents/hero/Hero";
import Inspiration from "@/components/homeComponents/inspiration/Inspiration";
import Categories from "@/components/homeComponents/pCategories/Categories";
import Testimonials from "@/components/homeComponents/testimonials/Testimonials";
import TopSelling from "@/components/homeComponents/topSelling/TopSelling";

export default function Home() {
  return (
    <main className="">
      <Ad1/>
      <Hero/>
      <Ad2/>
      <DesignPicked/>
      <TopSelling/>
      <Featured/>
      <Categories/>
      <Inspiration/>
      <Testimonials/>
    </main>
  );
}
