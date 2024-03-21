import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const navigation = [
		{
			title: 'STRONA GŁÓWNA',
			link: '/',
		},
		{
			title: 'WIRTUALNY SPACER PO SZKOLE',
			link: 'https://app.lapentor.com/sphere/spacer-2021?scene=619b985098d38917c05e70e5',
		},
		{
			title: 'QUIZ',
			link: '/quiz',
		},
	];
	const [isActiveNavbar, setIsActiveNavbar] = useState(false);
	const [isActiveIcon, setIsActiveIcon] = useState(false);

	return (
		<div className="bg-black fixed top-0 w-full h-[60px] z-[98]">
			<div
				className="w-[30px] fixed top-[1%] right-[1%] md:hidden"
				onClick={() => setIsActiveNavbar(isActiveNavbar)}>
				<div
					className={`icon ${isActiveIcon ?? 'activeIcon'}`}
					onClick={() => setIsActiveIcon(!isActiveIcon)}>
					<div className="line item-1 my-[6px]"></div>
					<div className="line item-2 my-[6px]"></div>
					<div className="line item-3 my-[6px]"></div>
				</div>
			</div>

			<Link to="/">
				<div className="text-white w-fit font-inter space-y-[1px] z-[98] fixed top-[1%] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-[1%]">
					<h1 className="text-lg text-center text-[#e0e0e0] tracking-[4px] my-auto">
						ZST<span className="text-[crimson]">i</span>O
					</h1>
					<h1 className=" text-[8px] text-center">JAROSŁAW</h1>
					<div className="w-1/3 h-[1px] rounded-full bg-[crimson] mx-auto"></div>
				</div>
			</Link>

			<nav
				className={`fixed top-[40px] md:top-0 left-[100%] md:left-0 w-[80%] bg-black text-white md:w-full h-[100%] md:h-[60px] z-40 overflow-hidden navbar ${
					isActiveNavbar ?? 'activeNavbar'
				}`}>
				<ul className="md:flex justify-center mt-[40%] md:mt-0 gap-10">
					{navigation.map((element, key) => {
						return (
							<div key={key} className="group">
								<li className=" mt-[15px] z-[98]">
									<Link
										to={element.link}
										className=" font-medium text-[20px]transition-all duration-200">
										{element.title}
									</Link>
								</li>
								<div className=" w-0 group-hover:w-1/2 h-[2px] bg-white mx-auto transition-all duration-150 rounded-full"></div>
							</div>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
