import CountUp from 'react-countup';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const About = () => {
	const [ref, inView] = useInView({ threshold: 0.65 });

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			'.about .element',
			{ y: '300px', opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.7,
				stagger: 0.2,
				scrollTrigger: { trigger: '.about', start: 'top 90%', toggleActions: 'restart' },
			}
		);
		gsap.fromTo(
			'.circle',
			{ y: 200, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.3,
				zIndex: '1',
				scrollTrigger: { trigger: '.about', start: 'top 70%', toggleActions: 'restart' },
			}
		);
	}, []);

	const countElements = [
		{
			startVariable: 0,
			endVariable: 8,
			description: 'Kierunków Technikum',
		},
		{
			startVariable: 0,
			endVariable: 54,
			description: 'Miejsce w Polsce',
		},
		{
			startVariable: 0,
			endVariable: 7,
			description: 'Kierunków Szkoły Branżowej',
		},
	];

	return (
		<>
			<div
				id="about"
				className="bg-black p-[100px] text-[20px] overflow-hidden h-screen relative space-y-3"
				ref={ref}>
				<div className="circle absolute left-[-10%] top-[-10%] border-[10px] border-[#0e0507] rounded-full w-1/3 aspect-square z-[1]"></div>
				<div className="circle absolute right-[-10%] top-[-10%] border-[10px] border-[#0f0f0f] rounded-full w-1/5 aspect-square z-[1]"></div>
				<div className="circle absolute right-[8%] bottom-[20%] border-[1px] border-[#bbbbbb] rounded-full w-1/6 aspect-square z-[1]"></div>
				<div className="circle absolute left-[10%] bottom-[30%] border-[2px] border-[#161616] rounded-full w-[10%] aspect-square z-[1]"></div>
				<div className="circle absolute left-[-3%] bottom-[-2%] border-[5px] border-gray-950 rounded-full w-[6%] aspect-square z-[1]"></div>

				<h1 className=" text-center text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-[#0f0f0f] mb-[50px] font-inter font-[100] tracking-[3px]">
					O SZKOLE
				</h1>

				<div className="bg-[#090909] w-[55%] p-10 rounded-3xl mx-auto z-[-1]">
					<div className="about sm:flex justify-center space-y-[30px] sm:space-y-0 sm:space-x-[150px]">
						{countElements.map((countElement, i) => {
							return (
								<div
									key={i}
									className="group element hover:bg-gradient-to-r from-gray-700/20 to-[#0e0e0e] rounded-[30px] w-[180px]">
									<div className="text-center rounded-3xl border-[1px] group-hover:border-0 border-gray-600 h-[220px]">
										<div className=" text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-[#646464] to-[#ffffff] relative top-[10%]">
											{inView ? (
												<CountUp
													start={0}
													end={countElement.endVariable}
													duration={2}
													delay={0.3}
												/>
											) : (
												0
											)}
										</div>
										<div className="text-transparent bg-clip-text bg-gradient-to-r from-[#646464] to-[#ffffff] text-[25px]  relative top-[10%]">
											<p>{countElement.description}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className=" w-[55%] mx-auto z-[99] grid grid-cols-[45%_55%] gap-3">
					<div className="bg-[#090909] p-10 rounded-3xl font-inter">
						<h1 className="text-transparent bg-clip-text bg-gradient-to-r text-4xl from-[#666666] to-[#cfcfcf] font-[400] ml-4">
							"Sapere aude"
						</h1>
						<p className=" font-[200] text-white text-xl">Odważ się być mądrym</p>
					</div>
					<a href="https://zstiojar.edu.pl/kierunki/" className=" group">
						<div className="bg-[#090909] p-10 rounded-3xl group-hover:bg-[#111] transition-all duration-150">
							<h1 className="text-transparent bg-clip-text bg-gradient-to-r text-4xl from-[#666666] to-[#cfcfcf] font-[400] ml-4 group-hover:tracking-[1px] transition-all duration-150">
								Dlaczego my ?
							</h1>
							<p className=" font-[200] text-white text-xl group-hover:tracking-[2px] transition-all duration-150">
								SPRAWDŹ SAM
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className="bg-black">
				<div className="h-[5px] w-1/2 bg-gradient-to-r from-[#1a120d] to-gray-950 rounded-full mx-auto"></div>
			</div>
		</>
	);
};

export default About;
