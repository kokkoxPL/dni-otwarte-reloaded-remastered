import { GrFacebookOption, GrInstagram, GrYoutube } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
	return (
		<div>
			<div className="bg-black">
				<div className="h-[5px] w-1/2 bg-gradient-to-r from-[#222222] to-gray-900 rounded-full mx-auto"></div>
			</div>
			<div className="pt-[50px] bg-[#020202] m-auto justify-center">
				<div className="grid md:grid-cols-[20%_50%_30%] mb-5">
					<div className="text-white w-fit mx-auto font-inter space-y-2 mt-[10%]">
						<h1 className="text-6xl text-center text-[#e0e0e0] tracking-[4px]">
							ZST<span className="text-[crimson]">i</span>O
						</h1>
						<h1 className=" text-2xl text-center tracking-[2px]">JAROSŁAW</h1>
						<div className="w-1/3 h-1 rounded-full bg-[crimson] mx-auto"></div>
					</div>

					<div className="text-white sm:w-[70%] text-justify ml-[20%]">
						<h1 className="text-[20px] border-l-[3px] border-[#291c14] pl-[10px] my-3">KONTAKT</h1>
						<p className=" text-[17px] w-[80%]">
							Zespół Szkół Technicznych i Ogólnokształcących im. Stefana Banacha w Jarosławiu
						</p>
						<h2 className=" font-semibold ml-3 my-2 text-[silver]">Adres:</h2>
						<p>ul. Św. Ducha 1A 37-500 Jarosław</p>
						<h2 className=" font-semibold ml-3 my-2 text-[silver]">Telefon:</h2>
						<p>
							tel: 16 621 65 24 <br />
							fax: 16 730 14 50
						</p>
						<h2 className=" font-semibold ml-3 my-2 text-[silver]">E-mail:</h2>
						<p>szkola@zstiojar.edu.pl</p>
					</div>
					{/* <div className="text-white w-[30%]">
                <h1 className="text-[20px] border-l-[3px] border-[crimson] pl-[10px]">ARCHIWUM</h1>
                <p>marzec 2023<br/>
                luty 2023<br/>
                styczeń 2023</p>
            </div> */}
					<div className="text-white">
						<h1 className="text-[20px] border-l-[3px] border-[#291c14] pl-[10px] my-3">MAPA</h1>
						<iframe
							title="yo"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.6776108412885!2d22.678653387022138!3d50.01709389844757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c9bda79d56527%3A0x5eaeb3e6060f7c83!2zWmVzcMOzxYIgU3prw7PFgiBUZWNobmljem55Y2ggaSBPZ8OzbG5va3N6dGHFgmPEhWN5Y2ggaW0uIFN0ZWZhbmEgQmFuYWNoYQ!5e0!3m2!1spl!2spl!4v1670121725943!5m2!1spl!2spl"
							width="80%"
							height="260"
							// style={{ marginLeft: "50px", border: "0" }}
							loading="lazy"
							className="mt-[20px]"
						/>
					</div>
				</div>

				<div className="bg-[#030303] pt-2">
					<div className=" text-[25px] my-[20px] mx-auto space-y-2 justify-center text-center">
						{/* <h1 className="text-[20px] text-white">DOŁĄCZ DO NAS !</h1> */}
						<div className=" flex justify-center">
							<a href="https://www.facebook.com/ZSTiOBANACH/?locale=pl_PL">
								<GrFacebookOption className="text-white hover:text-gray-700 transition-all duration-300 mx-[5px]" />
							</a>
							<a href="https://www.instagram.com/zstio.fm/">
								<GrInstagram className="text-white hover:text-gray-700 transition-all duration-300 mx-[8px]" />
							</a>
							<a href="https://www.youtube.com/@zstio_fm">
								<GrYoutube className="text-white hover:text-gray-700 transition-all duration-300 mx-[8px]" />
							</a>
							<a href="https://www.tiktok.com/@zstio.fm">
								<FaTiktok className="text-white hover:text-gray-700 transition-all duration-300 mx-[8px]" />
							</a>
						</div>
					</div>
					<div className="text-center py-2">
						<h1 className="text-white text-[10px] font-[100]">
							© ZSTiO 2024 designed by{' '}
							<a href="https://jakubkontekcv.onrender.com" className="text-gray-600 font-bold">
								Jakub Kontek
							</a>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
