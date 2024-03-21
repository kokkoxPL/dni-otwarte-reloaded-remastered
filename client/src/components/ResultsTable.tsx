import { useEffect, useState } from 'react';
import { socket } from '../socket';
import { gsap } from 'gsap';

interface ResultEntry {
	name: string;
	result: number;
}

const ResultsTable = ({ overflow }: { overflow: 'hide' | 'scroll' }) => {
	const [results, setResults] = useState<ResultEntry[]>([]);

	useEffect(() => {
		socket.on('results', (results: ResultEntry[]) => {
			const sorted = results.sort((a, b) => {
				return b.result - a.result;
			});
			setResults(overflow === 'hide' ? sorted.slice(0, 10) : sorted);
		});
		socket.emit('get_results');

		return () => {
			socket.off('results');
		};
	}, []);

	useEffect(() => {
		gsap.fromTo(
			'.result',
			{ y: 300, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }
		);
		gsap.fromTo(
			'.circle',
			{ x: -200, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.3,
				zIndex: '-1',
				scrollTrigger: {
					trigger: '.results-wrapper',
					start: 'top 70%',
					toggleActions: 'restart',
				},
			}
		);
	}, [results]);
	return (
		<div className="results-wrapper my-8">
			<div className="circle absolute left-[-10%] top-[-10%] border-[10px] border-[#581724] rounded-full w-1/3 aspect-square z-[-1]"></div>
			<div className="circle absolute right-[-10%] top-[-10%] border-[10px] border-[#0f0f0f] rounded-full w-1/5 aspect-square z-[-1]"></div>
			<div className="circle absolute right-[8%] bottom-[20%] border-[1px] border-[#464646] rounded-full w-1/6 aspect-square z-[-1]"></div>
			<div className="circle absolute left-[10%] bottom-[30%] border-[2px] border-[#161616] rounded-full w-[10%] aspect-square z-[-1]"></div>
			<div className="circle absolute left-[-3%] bottom-[-2%] border-[5px] border-gray-950 rounded-full w-[6%] aspect-square z-[-1]"></div>

			<h1 className=" text-center text-7xl text-black font-[200] tracking-[5px] mb-5 mt-[100px]">
				WYNIKI
			</h1>
			<div className="w-4/5 rounded-3xl bg-[#090909] p-5 mx-auto text-white text-3xl font-inter font-[200] text-center overflow-hidden">
				<div className=" grid grid-cols-3 my-3">
					<h1>MIEJSCE</h1>
					<h1>NAZWA</h1>
					<h1>PUNKTY</h1>
				</div>
				{results.map((result, i) => {
					return (
						<div key={i}>
							{i % 2 == 0 && (
								<div className="result grid grid-cols-3 bg-black py-1" key={i}>
									<h1>{i + 1}</h1>
									<h1>{result.name}</h1>
									<h1>{result.result}</h1>
								</div>
							)}
							{i % 2 != 0 && (
								<div className="result grid grid-cols-3 py-1" key={i}>
									<h1>{i + 1}</h1>
									<h1>{result.name}</h1>
									<h1>{result.result}</h1>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ResultsTable;
