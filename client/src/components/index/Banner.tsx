import { TypeAnimation } from 'react-type-animation';
import { GrFacebookOption, GrInstagram, GrYoutube } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

import BannerAnimation from './Boxes';

const Banner = () => {
	const myRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			'.banner .title, .banner .animation, .banner .text',
			{ x: '-200px', opacity: 0 },
			{ x: 0, opacity: 1, duration: 0.7, stagger: 0.2, delay: 2, ease: 'easeInOut' }
		);
		gsap.fromTo(
			'.socials a',
			{ x: '100px', opacity: 0 },
			{ x: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 3 }
		);
	}, []);

	const offers = () => {
		const offer = document.querySelector('.offers');
		offer?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div
			id="home"
			className=" header grid 2xl:grid-cols-2 2xl:container mx-auto 2xl:flex-row items-center font-mono w-full min-h-screen">
			<div className=" banner w-[70%] m-auto lg:w-full">
				<h1 className="title text-[25px] sm:text-[70px] w-[90%] text-center mx-auto xl:w-full font-inter font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#070707] to-[#000000]">
					Zespół Szkół Technicznych
				</h1>
				<div className=" text-center">
					<TypeAnimation
						sequence={['Dni otwarte 2024', 2000, '', 100]}
						repeat={Infinity}
						className="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[crimson] to-[#000000] text-center w-full animation font-extralight h-[200px] font-poppins"
					/>

					<p className=" text-[25px]">
						<span className="text-[crimson] font-megrim tracking-[2px] text-3xl font-extrabold">
							"Sapere Aude"
						</span>
						- Odważ się być mądrym
					</p>
					<div className="w-fit mx-auto group my-3">
						<h1
							onClick={offers}
							className=" text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#292929] to-gray-950 cursor-pointer p-[10px] hover:tracking-[3px] transition-all duration-300">
							Oferta na rok <span className="font-megrim font-bold text-gray-950">2024/2025</span>
						</h1>
						<div className="group-hover:w-1/3 h-[1px] rounded-full bg-[#750d22] w-0 mx-auto transition-all duration-150 mt-[-10px]"></div>
					</div>
					<Link to="/QUIZ">
						{' '}
						<button className=" text-[30px] border-[2px] border-[crimson] text-black px-[45px] py-[15px] mt-[10px] rounded-full mb-[20px] hover:bg-[crimson] hover:text-white transition-all duration-300">
							Przejdź do quizu
						</button>
					</Link>

					<div className="socials flex text-[30px] my-[20px] m-auto justify-center">
						<a href="https://www.facebook.com/ZSTiOBANACH/?locale=pl_PL">
							<GrFacebookOption className="hover:text-[crimson] transition-all duration-300 mx-[10px]" />
						</a>
						<a href="https://www.instagram.com/zstio.fm/">
							<GrInstagram className="hover:text-[crimson] transition-all duration-300 mx-[10px]" />
						</a>
						<a href="https://www.youtube.com/@zstio_fm">
							<GrYoutube className="hover:text-[crimson] transition-all duration-300 mx-[10px]" />
						</a>
						<a href="https://www.tiktok.com/@zstio.fm">
							<FaTiktok className="hover:text-[crimson] transition-all duration-300 mx-[10px]" />
						</a>
					</div>
				</div>
			</div>

			<div>
				<BannerAnimation />
			</div>

			{/* <img src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjBzZXR1cHxlbnwwfHwwfHw%3D&w=1000&q=80" className='bannerImg w-[90%] max-w-[600px] rounded-full mx-auto'/> */}
		</div>
	);
};

export default Banner;
