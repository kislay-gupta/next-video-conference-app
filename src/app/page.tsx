import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/home/Slider";
import { Input } from "@/components/ui/input";
import { Video } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-background h-screen flex-col items-center justify-center ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-12">
            <h2 className="text-3xl font-semibold  text-white sm:text-4xl">
              Video Calling App
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <div className="flex gap-2">
              <Button className="mt-8  rounded bg-primary  text-sm font-medium text-black transition hover:bg-primary/70 focus:outline-none focus:ring focus:ring-primary/45">
                <Video className="size-5 mr-2" /> Start Meeting
              </Button>
              <Input
                placeholder="Enter link or code "
                className="my-auto mt-8 w-full placeholder:text-white  bg-transparent max-w-xs"
              />
            </div>
          </div>
          <div className="mx-auto  lg:h-full">
            <Slider />
          </div>
        </div>
      </div>
    </main>
  );
}
