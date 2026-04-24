import { Metadata } from "next";
import FolioCard from "@/components/FolioCard";


export const metadata: Metadata = {
  title: "Home - Fluid Creativity",
  description: "CREATUAL is a multi-disciplinary digital design and innovation studio specializing in cutting-edge web application development and graphic design.",
  alternates: { canonical: "/" },
};



export default function Home() {

  return (
    <>
    <div className="animate-fade-in text-center mx-auto">
      <h1 className="mt-[9vh] font-bold text-white opacity-80 mb-1 md:mb-6 text-[3.8rem]/14 md:text-[6rem]">FLUID CREATIVITY</h1>
      <h2 className="font-semibold text-white/70 text-[1.2rem] md:text-[2.4rem] uppercase tracking-wide">
        Simplicity with Impact is Key
      </h2>
      <div className="mt-4 flex flex-col items-center justify-center gap-3 px-6 text-sm font-light tracking-wide text-white/60 md:text-lg">
        <div className="p-3 capitalize">Cutting-Edge End-To-End Web Application and Development</div>
        {/* <div className="p-3">DESIGN SOLUTIONS</div> */}
      </div>
    </div>
    
    <FolioCard />
    
    
    </>
  );
}
