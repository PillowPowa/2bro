import type { FC } from "react";

import { Paragraph } from "./ui/Paragraph";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";

import first from "../assets/images/welcome/1-1.png";
import second from "../assets/images/welcome/1-2.png";
import third from "../assets/images/welcome/2-1.png";
import fourth from "../assets/images/welcome/2-2.png";

export const WelcomeScreen: FC = () => {
	return (
		<section className="py-4 sm:py-[64px] md:min-h-screen-wrapper md:h-screen-wrapper">
			<article className="flex flex-col justify-between gap-4 h-full z-10 relative">
				<Paragraph>Design Bureau</Paragraph>

				<Heading size="base" className="max-w-[880px] sm:my-[40px] text-left">
					The interior of your dreams is already here!
				</Heading>

				<figure className="md:absolute top-0 right-0 h-full w-full flex gap-4 sm:items-end sm:justify-end -z-10">
					<section className="hidden lg:flex flex-col space-y-4">
						<img className="w-[260px] h-[360px] object-top object-cover" src={first} loading="lazy" alt="First" />
						<img className="w-[260px] h-[240px] object-top object-cover" src={second} loading="lazy" alt="Second" />
					</section>
					<section className="flex flex-col space-y-4">
						<img className="w-screen sm:w-[460px] md:w-[260px] md:h-[360px] max-h-[60vh] object-top object-cover" src={third} loading="lazy" alt="Third" />
						<img className="hidden md:block w-[260px] h-[260px] object-top object-cover" src={fourth} loading="lazy" alt="Fourth" />
					</section>
				</figure>

				<Paragraph className="absolute md:static max-w-[470px] py-2 z-10 top-[50%]">
					We create a beautiful, comfortable and functional interior that will
					perfectly reflect your lifestyle
				</Paragraph>

				<section className="flex flex-col md:flex-row gap-2">
					<Button className="text-sm md:text-base" variant="secondary">Our projects</Button>
					<Button className="text-sm md:text-base" variant="outline">Consultation</Button>
				</section>
			</article>
		</section>
	);
};
