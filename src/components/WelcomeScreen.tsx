import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";
import { Button } from "./ui/Button";

import first from "../assets/images/welcome/1-1.png";
import second from "../assets/images/welcome/1-2.png";
import third from "../assets/images/welcome/2-1.png";
import fourth from "../assets/images/welcome/2-2.png";

export const WelcomeScreen: FC = () => {
	return (
		<section className="py-[60px] h-screen-wrapper">
			<article className="flex flex-col justify-between h-full z-10 relative">
				<Paragraph>Design Buro</Paragraph>

				<h2 className="lowercase text-black max-w-[880px] shrink-0 text-[80px] heading-[110%]">
					The interior of your dreams is already here!
				</h2>

				<Paragraph className="max-w-[400px]">
					We create a beautiful, comfortable and functional interior that will
					perfectly reflect your lifestyle
				</Paragraph>

				<section className="flex space-x-[40px]">
					<Button variant="secondary">Our projects</Button>
					<Button variant="outline">Consultation</Button>
				</section>

				<figure className="absolute top-0 right-0 h-full flex space-x-4 items-end -z-10">
					<section className="flex flex-col space-y-4">
						<img className="w-[260px] h-[360px]" src={first} alt="First" />
						<img className="w-[260px] h-[240px]" src={second} alt="Second" />
					</section>
					<section className="flex flex-col space-y-4">
						<img className="w-[260px] h-[360px]" src={third} alt="Third" />
						<img className="w-[260px] h-[280px]" src={fourth} alt="Fourth" />
					</section>
				</figure>
			</article>
		</section>
	);
};
