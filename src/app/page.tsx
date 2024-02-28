/* eslint-disable react/no-unescaped-entities */
import LandingText from "@/components/LandingText";
import { SparklesCore } from "@/components/motion/sparkle";
import Image from "next/image";
import Logo from "/public/NewSiteLogo.png";


export default function Home() {


    return (
        <div className="">
        <div className="w-full absolute z-10 h-screen">
            <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            />
        </div>

        <LandingText parentClassName="w-full grid justify-items-center gap-0  text-white">
            <h2># Welcome!</h2>
            <h2># I'm Jeremy Sebring</h2>
            <h3 className="">
            <span className="italic">*Software Engineering Manager* </span> |{" "}
            <span className="italic">*Full Stack Engineer*</span> |{" "}
            <span className="italic">*Outdoor Enthusiast*</span>
            </h3>
            <Image
                src={Logo}
                alt="Jeremy Sebring Logo"
                className="max-w-lg"
                />
        </LandingText>
        </div>
    );
}
