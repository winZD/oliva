import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import LandingImg from "../public/charts.svg";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <header className="w-full px-4 sm:px-8 py-6 bg-primary">Header</header>

      <section className="w-full py-6 mx-auto h-full px-4 justify-center sm:justify-start sm:px-8 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            olive <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            Track and analyze your olives.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-orchard">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block " />
      </section>
    </main>
  );
}
