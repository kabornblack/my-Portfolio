import Socials from "@/components/Socials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <main>
        <div className="">
          <div className="h-100 w-100 z-50">
            <Image
              src="/moon1.jpg"
              alt="moon"
              height={1000}
              width={1000}
              style={{
                width: "20%",
                height: "auto",
                position: "absolute",
                top: "0",
                right: "0",
              }}
              className="transition-opacity duration-300 opacity-0 dark:opacity-10" // Changed this line
              priority
            />
          </div>
          <Socials />
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
