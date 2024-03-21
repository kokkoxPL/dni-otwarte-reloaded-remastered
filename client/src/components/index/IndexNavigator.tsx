import { useEffect } from 'react';
import { Link } from 'react-scroll';

import { IoHome } from 'react-icons/io5';
import { MdOutlineGraphicEq } from 'react-icons/md';
import { ImParagraphCenter } from 'react-icons/im';
import gsap from 'gsap/all';

const IndexNavigator = () => {
	const navElements = [
		{
			icon: <IoHome />,
			link: 'home',
		},
		{
			icon: <ImParagraphCenter />,
			link: 'about',
		},
		{
			icon: <MdOutlineGraphicEq />,
			link: 'offer',
		},
		// {
		//     icon: <AiOutlineFundProjectionScreen  />,
		//     link: 'projects'
		// },
	];

	useEffect(() => {
		const tl = gsap.timeline();
		tl.set('.navElement', { opacity: 0 });
		tl.fromTo('.navigator', { width: '65px' }, { width: '450', duration: 0.4, delay: 3 }),
			tl.to('.navigator', { width: '350', duration: 0.5 });
		tl.to('.navElement', { opacity: 1, duration: 0.2 });
	}, []);

	return (
		<ul className="navigator flex fixed bottom-7 left-[50%] translate-x-[-50%] bg-black/70 w-[350px] mx-auto rounded-full z-[99] py-2 px-8 h-[65px] overflow-hidden justify-center">
			{navElements.map((element, i) => {
				return (
					<li
						key={i}
						className="navElement text-white cursor-pointer bg-black/20 mx-5 rounded-full text-[25px] md:text-[30px] group hover:text-[#794e29] hover:bg-black/60 transition-all duration-200">
						<Link to={element.link} spy={true} smooth={true} className=" font-gruppo font-bold">
							<p className="p-[10px]">{element.icon}</p>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default IndexNavigator;
