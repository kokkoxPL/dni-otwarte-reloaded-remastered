import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

const Offer = () => {
	const technikum = [
		{
			img: 'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
			title: 'Technik Programista',
			desc: 'Nauka programowania różnych języków odpowiednich dla aplikacji desktopowych i projektowania interfejsu użytkownika',
			link: 'https://zstiojar.edu.pl/technik-programista/',
		},
		{
			img: 'https://img.redro.pl/obrazy/technology-robot-sci-fi-woman-cyborg-android-background-humanoid-artificial-intelligence-wallpaper-3d-render-400-167856899.jpg',
			title: 'Technik Informatyk',
			desc: 'Tworzy, przekształca i przekazuje dane za pomocą programów komputerowych.',
			link: 'https://zstiojar.edu.pl/technik-informatyk/',
		},
		{
			img: 'https://eu.crucial.com/content/dam/crucial/articles/about-graphic-design/graphic-design-hardware-whats-right-for-you/desk-with-computer-for-graphic-design.jpg.transform/small-jpg/img.jpg',
			title: 'Technik Grafiki i Poligrafii Cyfrowej',
			desc: 'Obsługuje różnego rodzaju programy graficzne oraz typowe programy do składu komputerowego.',
			link: 'https://zstiojar.edu.pl/technik-grafiki-i-poligrafii-cyfrowej/',
		},
		{
			img: 'https://www.magazyn-motoryzacyjny.pl/wp-content/uploads/2022/04/20220407183040_pexels-photo-4489749.jpeg-780x470.jpg',
			title: 'Technik Mechanik',
			desc: 'Wykonywanie prac projektowych, produkcyjnych oraz remontowo–instalacyjnych maszyn i urządzeń technicznych.',
			link: 'https://zstiojar.edu.pl/technik-mechanik/',
		},
		{
			img: 'https://kkz.edu.pl/aktualnosci/wp-content/uploads/2019/02/cylinders-569151_1280.jpg',
			title: 'Technik Pojazdów Samochodowych',
			desc: 'Specjalistyczne wiadomości i umiejętności w zakresie budowy, obsługi i naprawy pojazdów samochodowych.',
			link: 'https://zstiojar.edu.pl/technik-pojazdow-samochodowych/',
		},
		{
			img: 'https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/5/61/zawod-Monter-elektronik-obrazek_duzy_107561.jpg',
			title: 'Technik Elektronik',
			desc: 'Zajmuje się montażem, instalacją, konserwacją i naprawą sprzętu komputerowego oraz innych urządzeń elektronicznych.',
			link: 'https://zstiojar.edu.pl/technik-elektronik/',
		},
		{
			img: 'https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/6/76/zawod-Technik-teleinformatyk-obrazek_duzy_107676.jpg',
			title: 'Technik Teleinformatyk',
			desc: 'Bezpieczeństwo w działaniu sieci komputerowych firm, instytucji rządowych, banków oraz wojska.',
			link: 'https://zstiojar.edu.pl/technik-teleinformatyk/',
		},
		{
			img: 'https://emt-systems.pl/layout/xautomatyka-mechatronika-szkolenie-01.jpg.pagespeed.ic.lU-j_NEZP6.jpg',
			title: 'Technik Automatyk',
			desc: 'Dziedzina techniki zajmująca się zagadnieniami sterowania różnymi procesami zwykle odbywającymi się bez udziału człowieka.',
			link: 'https://zstiojar.edu.pl/technik-automatyk/',
		},
	];

	const zawodowka = [
		{
			img: 'https://www.lokango.pl/cache/files/k7---wo-350-ho-250.jpg',
			title: 'Ślusarz',
			desc: 'Jeden z podstawowych i najstarszych zawodów w przemyśle metalowym i maszynowym',
			link: 'https://zstiojar.edu.pl/slusarz/',
		},
		{
			img: 'https://www.praca-dealerbmw.pl/wp-content/uploads/A0287782_tiny1.jpg',
			title: 'Kierowca Mechanik',
			desc: 'Osoby wykonujące ten zawód w przyszłości, jako wykwalifikowana kadra przedsiębiorstw transportowych.',
			link: 'https://zstiojar.edu.pl/kierowca-mechanik/',
		},
		{
			img: 'https://www.kwalifikacjezawodowe.info/img/wo/6/47/zawod-Mechanik-motocyklowy-obrazek_sredni_4974647.jpg',
			title: 'Mechanik Motocyklowy',
			desc: 'Coraz większa ilość motocykli i skuterów na drogach generuje zapotrzebowanie na mechaników motocyklowych.',
			link: 'https://zstiojar.edu.pl/mechanik-motocyklowy/',
		},
		{
			img: 'https://www.praca-dealerbmw.pl/wp-content/uploads/A0317544_tiny1.jpg',
			title: 'Mechanik Pojazdów Samochodowych',
			desc: 'Naprawia i dokonuje przeglądu samochodów oraz innych pojazdów mechanicznych.',
			link: 'https://zstiojar.edu.pl/mechanik-pojazdow-samochodowych/',
		},
		{
			img: 'https://zste.info.pl/wp-content/uploads/2020/11/auto-servis-borkovic-18.jpg',
			title: 'Elektromechanik pojazdów samochodowych',
			desc: 'Elektromechanik zwany inaczej elektrykiem samochodowym zajmuje się montażem, kontrolą i naprawą układów elektrycznych w samochodach.',
			link: 'https://zstiojar.edu.pl/elektromechanik-pojazdow-samochodowych/',
		},
		{
			img: 'https://www.mattig.com/fileadmin/_processed_/c/0/csm_Header_Drehen_Fraesen_06bc0828c5.jpg',
			title: 'Operator obrabiarek skrawających CNC',
			desc: 'Operator obrabiarek skrawających obsługuje i utrzymuje w należytym stanie technicznym nowoczesne maszyny do obróbki skrawaniem.',
			link: 'https://zstiojar.edu.pl/operator-obrabiarek-skrawajacych-cnc/',
		},
		{
			img: 'https://zste.info.pl/wp-content/uploads/2020/11/portret-pracownik-blisko-metalworking-maszyny_176420-4648.jpg',
			title: 'Mechanik monter maszyn i urządzeń',
			desc: 'Pracownik w tym zawodzie buduje, instaluje i uruchamia maszyny, urządzenia lub ich podzespoły oraz wytwarza elementy maszyn lub dorabia brakujące',
			link: 'https://zstiojar.edu.pl/mechanik-monter-maszyn-i-urzadzen/',
		},
	];

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			'.offers .offer',
			{ y: '200px', opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.7,
				stagger: 0.2,
				scrollTrigger: { trigger: '.offers', start: 'top 80%', toggleActions: 'restart' },
			}
		);
	}, []);

	return (
		<div id="offer" className="offers bg-[#000003] sm:p-[100px] py-[50px] space-y-5">
			<div className="w-[90%] mx-auto bg-[#080808] p-6 rounded-3xl overflow-hidden">
				<h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-gray-200 text-5xl mb-4 font-inter font-[500] ">
					Technikum nr 2 im. Stefana Banacha
				</h1>
				<div className=" w-[90%] mx-auto sm:w-[100%] grid md:grid-cols-2 xl:grid-cols-3 gap-[8px]">
					<div className="offer items-center text-center my-auto">
						<h2 className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-gray-200">
							OFERTA SZKOŁY
						</h2>
						<p className="text-[20px] text-justify w-full sm:w-[80%] mx-auto my-[20px] text-[#f3f3f3]">
							ZSTiO znajduje się w samym centrum Jarosławia, dzięki temu uczniowie dojeżdżający
							spoza miasta nie maja kłopotów z dotarciem do szkoły.
						</p>
						<Link to="https://zstiojar.edu.pl/technikum-nr-2-im-stefana-banacha/">
							<button className=" border-[2px] border-gray-600 text-gray-600 px-[20px] py-[10px] text-[20px] rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300">
								Dowiedz się więcej
							</button>
						</Link>
					</div>
					{technikum.map((kierunek, key) => {
						return (
							<Link key={key} to={kierunek.link}>
								<div className=" offer group relative overflow-hidden rounded-3xl">
									<div className=" group-hover:scale-125 transition-all duration-500">
										<div
											style={{
												background: `linear-gradient(80deg, rgba(0,0,0,.4), black),url(${kierunek.img})`,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
												backgroundPosition: '50%',
												aspectRatio: '16/9',
											}}>
											<div className="group-hover:bg-gradient-to-r from-black/90 to-gray-950/60 w-full h-full z-40 transition-all">
												<div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[35%] transition-all duration-500 delay-100">
													<h2 className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-[#cfcfcf]">
														{kierunek.title}
													</h2>
													<p className="text-white text-[12px]">{kierunek.desc}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								//{' '}
							</Link>
						);
					})}
				</div>
			</div>

			<div className="w-[90%] mx-auto bg-[#080808] p-6 rounded-3xl overflow-hidden">
				<h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-gray-200 text-5xl mb-4 font-inter font-[500] ">
					Branżowa szkoła I stopnia
				</h1>
				<div className=" w-[90%] mx-auto sm:w-[100%] grid md:grid-cols-2 xl:grid-cols-3 gap-[8px]">
					{zawodowka.map((kierunek, key) => {
						return (
							<Link key={key} to={kierunek.link}>
								<div className=" offer group relative overflow-hidden rounded-3xl">
									<div className=" group-hover:scale-125 transition-all duration-500">
										<div
											style={{
												background: `linear-gradient(80deg, rgba(0,0,0,.4), black),url(${kierunek.img})`,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
												backgroundPosition: '50%',
												aspectRatio: '16/9',
											}}>
											<div className="group-hover:bg-gradient-to-r from-black/90 to-gray-950/60 w-full h-full z-40 transition-all">
												<div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[35%] transition-all duration-500 delay-100">
													<h2 className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-[#cfcfcf]">
														{kierunek.title}
													</h2>
													<p className="text-white text-[12px]">{kierunek.desc}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								//{' '}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Offer;
