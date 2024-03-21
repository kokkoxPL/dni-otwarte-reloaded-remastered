import About from './index/About';
import Banner from './index/Banner';
import Offer from './index/Offer';
import IndexNavigator from './index/IndexNavigator';

import gsap from 'gsap';
import { useEffect } from 'react';

const Index = () => {
	useEffect(() => {
		gsap.fromTo(
			'.bg',
			{ width: 0, zIndex: 90 },
			{ width: '100%', duration: 0.8, stagger: 0.2, delay: 0.1 }
		);
		gsap.fromTo('.bgW', { top: 0, zIndex: 90 }, { top: '-100%', duration: 1, delay: 2.2 });
		gsap.fromTo('.bgB', { top: '100%', zIndex: 91 }, { top: '-100%', duration: 1.5, delay: 1.9 });
		gsap.fromTo('.bgR', { top: '100%', zIndex: 92 }, { top: '-100%', duration: 1.5, delay: 2.1 });
		gsap.to('.white', { display: 'none', delay: 1.1 });
	});
	return (
		<>
			<div className="bgs">
				<div className="white bg-white w-full h-screen absolute left-0 z-[80]"></div>
				<div className="bgW w-[100%] h-screen absolute left-0 grid grid-cols-5 z-[98]">
					<div className=" bg-gray-950 w-full h-screen bg z-[98]"></div>
					<div className=" bg-gray-950 w-full h-screen bg z-[98]"></div>
					<div className=" bg-gray-950 w-full h-screen bg z-[98]"></div>
					<div className=" bg-gray-950 w-full h-screen bg z-[98]"></div>
					<div className=" bg-gray-950 w-full h-screen bg z-[98]"></div>
				</div>
				<div className="bgB bg-black w-[120%] h-screen absolute left-0"></div>
				<div className="bgR bg-[#131313] w-[100%] h-screen absolute left-0"></div>
			</div>
			<IndexNavigator />
			<Banner />
			<About />
			<Offer />
		</>
	);
};

export default Index;
