import { useEffect } from 'react';
import { TimelineMax } from 'gsap/gsap-core';

const BannerAnimation = () => {
	useEffect(() => {
		const box = document.querySelectorAll('.box');
		const Ibox = document.querySelectorAll('.Ibox');

		const tl = new TimelineMax({ repeat: -1 });

		tl.from(Ibox, 0.1, { top: 0, left: 0, border: 'none' })
			.from([box[0], box[2]], { border: 0 })
			.addLabel('moveBox')
			.to([box[0], box[2]], 1, { left: 0, delay: 0.2 }, 'moveBox')
			.addLabel('show')
			.to(Ibox, { borderWidth: '2px', borderColor: 'black', borderStyle: 'solid' })
			.to(Ibox[0], { y: '-200px', delay: 0.1 }, 'show')
			.to(Ibox[1], { y: '200px', delay: 0.1 }, 'show')
			.addLabel('move')
			.to(Ibox[0], 0.5, { x: '200px' }, 'move')
			.to(Ibox[1], 0.5, { x: '-200px' }, 'move')
			.addLabel('hide')
			.to(
				box[0],
				0.5,
				{ left: '200px', borderWidth: '3px', borderColor: 'black', borderStyle: 'solid' },
				'hide'
			)
			.to(
				box[2],
				0.5,
				{ left: '-200px', borderWidth: '3px', borderColor: 'black', borderStyle: 'solid' },
				'hide'
			)
			.addLabel('hideY')
			.to(Ibox[0], 0.5, { y: 0 }, 'hideY')
			.to(Ibox[1], 0.5, { y: 0 }, 'hideY')
			.addLabel('moveX')
			.to(Ibox[0], 0.5, { x: '0', border: 0 }, 'moveX')
			.to(Ibox[1], 0.5, { x: '0', border: 0 }, 'moveX')
			.fromTo('.bgB', { x: '-230px' }, { x: -10 })
			.to('.bgB', { y: '-230px' })
			.to(Ibox, 0.1, { top: -20, left: -20 });
	}, []);

	return (
		<div className="boxes w-[80%] 2xl:flex flex-wrap m-auto relative hidden">
			<div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[200px] mx-[2px]">
				<div className="Ibox border-[2px] border-black w-[200px] h-[200px] absolute top-[-4px] left-0 p-[4px] mb-[4px]"></div>
			</div>
			<div className="box border-[2px] border-black w-[200px] h-[200px] overflow-hidden p-[4px]">
				<div className="bgB w-[220px] h-[220px] bg-black"></div>
			</div>
			<div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[-200px] mx-[2px]">
				<div className="Ibox border-[2px] border-black w-[200px] h-[200px] absolute top-0 left-0 p-[4px] my-[2px]"></div>
			</div>
		</div>
	);
};

export default BannerAnimation;
