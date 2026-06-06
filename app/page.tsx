import Hero from "@/components/sections/Hero";
import ImpactBar from "@/components/sections/ImpactBar";
import AboutTeaser from "@/components/sections/AboutTeaser";
import SignatureProjects from "@/components/sections/SignatureProjects";
import GalleryPeek from "@/components/sections/GalleryPeek";
import PartnersStrip from "@/components/sections/PartnersStrip";
import JoinCTA from "@/components/sections/JoinCTA";

const Separator = () => (
  <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(245,200,66,0.2), transparent)" }} />
);

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <ImpactBar />
      <Separator />
      <AboutTeaser />
      <Separator />
      <SignatureProjects />
      <Separator />
      <GalleryPeek />
      <Separator />
      <PartnersStrip />
      <Separator />
      <JoinCTA />
    </>
  );
}
