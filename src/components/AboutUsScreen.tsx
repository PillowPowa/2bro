import type { FC } from "react";
import { Paragraph } from "./ui/Paragraph";

import mainImg from "../assets/images/about-us/1.png";

export const AboutUsScreen: FC = () => {
	return (
		<section className="flex justify-between py-[64px]">
			<article>
				<Paragraph>Facts about buro</Paragraph>
				<h2 className="text-[120px] my-[40px] lowercase">About Us</h2>

				<section className="flex space-x-12">
					<article>
						<section className="flex items-center space-x-8 h-[120px] w-[360px] mb-8">
							<h1 className="text-primary text-[120px] leading-none">5</h1>

							<span className="h-full py-2">
								<h2 className="text-black text-lg font-medium">years</h2>
								<p className="mt-auto text-gray lowercase">
									We create unique interiors that take our clients' breath away
								</p>
							</span>
						</section>

						<section className="flex items-center space-x-8 h-[120px] w-[360px]">
							<h1 className="text-primary text-[120px] leading-none">7</h1>

							<span className="h-full py-2">
								<h2 className="text-black text-lg font-medium">awards</h2>
								<p className="mt-auto text-gray lowercase">
									We have won at international competitions, and we are
									recognised not only by our clients
								</p>
							</span>
						</section>
					</article>

					<span className="lowercase text-gray flex flex-col space-y-4 max-h-[100px] w-[360px] py-[30px]">
						<p>
							We came to interior design because we want to change the world for
							the better with what we know how to do.
						</p>
						<p>
							Every day we work to make our clients' lives easier, more
							convenient and comfortable.
						</p>
						<p>
							We are here to solve any of your problems, even if it seems
							impossible to solve it now.
						</p>
					</span>
				</section>
			</article>
			<img className="absolute right-0 w-[630px] h-auto" src={mainImg} alt="Main Image" />
		</section>
	);
};