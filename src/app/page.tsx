import BestSelling from "@/components/BestSelling";
import CategorySection from "@/components/CategorySection";
import ContactBottom from "@/components/ContactBottom";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrival";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
    <div className="wrapper"> 
      <Hero />
      <FlashSales />
      <CategorySection />
      <BestSelling />
      <Image
                  src="/images/banner.png"
                  alt="banner"
                  width={1170}
                  height={500}
                  className="mb-7"
                />
      <Products />
      <NewArrival />
      <ContactBottom />
      
    </div>
    </main>
  );
}
