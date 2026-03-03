import Hero from "@/components/sections/Hero";
import HomeStats from "@/components/sections/HomeStats";
import HomeGallery from "@/components/sections/HomeGallery";
import StackedServices from "@/components/sections/StackedServices";

const services = [
  "Social Media Management",
  "Content Creation",
  "Paid Advertising",
  "Google Business Optimization",
  "Website Development",
  "SEO Services",
  "Political Digital Support"
];

export default function Home() {
  return (
    <main className="bg-[#0A0D14]">
      <Hero />
      <HomeStats />
      <HomeGallery />
      <StackedServices />

      {/* Sliding Services Marquee at Bottom */}
      <div className="bg-brand-primary py-8 overflow-hidden relative border-t border-white/10">
        <style dangerouslySetInnerHTML={{
          __html: `
              @keyframes marqueeHome {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
              }
              .animate-marquee-home {
                  animation: marqueeHome 40s linear infinite;
              }
          `}} />
        <div className="flex whitespace-nowrap animate-marquee-home">
          {[...services, ...services].map((service, idx) => (
            <div key={idx} className="flex items-center mx-12">
              <span className="text-white/40 mr-6 text-2xl">✦</span>
              <span className="text-xl font-black text-white uppercase tracking-[0.4em] font-outfit">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
