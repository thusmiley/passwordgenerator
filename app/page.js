import Generator from "@/components/Generator";
import Password from "@/components/Password";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container px-4 mx-auto mt-[64px] mb-[63px] md:max-w-[540px] md:mt-[100px] md:mb-[196px]">
      <h1 className="text-[16px] text-lightGrey  mb-4 text-center md:text-[24px] md:mb-[31px]">Password Generator</h1>
      <Password />
      <Generator />
    </main>
  );
}
