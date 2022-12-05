// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Software from '../assets/software.jpg';
import Network from '../assets/network.jpg';
import Data from '../assets/data.jpg';
import Technician from '../assets/technician.jpg';
import Developer from '../assets/developer.jpg';

// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper';

export default function Skills() {
	return (
		<div
			id='skill'
			className='mx-auto container-fluid mb-5 mt-lg-5 mb-lg-5'
		>
			<h1 className='display-3 pt-5  mt-5 text-center '>Skills</h1>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Parallax, Autoplay, Pagination, Navigation]}
				className='mySwiper mx-auto'
				parallax={true}
			>
				<SwiperSlide>
					<div className='d-flex flex-column'>
						<h2>Desktop and Mobile Developer</h2>
						<p>
							As a desktop and mobile developer. I create and manage the
							deployed desktop and mobile application together its backend and
							database. This can be react, express, mongodb, node.js.
						</p>
					</div>
					<img
						src={Software}
						className='skill-img'
						alt='Software Developer'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<div className='d-flex flex-column'>
						<h2>Full stack web developer</h2>
						<p>
							As full stack web developer. I create and manage the deployed
							website together its backend and database. This can be react,
							express, mongodb, node.js.
						</p>
					</div>
					<img
						src={Developer}
						className='skill-img'
						alt='Full Stack Developer'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<div className='d-flex flex-column'>
						<h2>Database management and Design</h2>
						<p>
							As a database management and design. I maintain the Database
							schema and design within the company. Checking all the database
							and integrity of its data within the database.
						</p>
					</div>
					<img
						src={Data}
						className='skill-img'
						alt='Data Analyst'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<div className='d-flex flex-column'>
						<h2>Software and Hardware Technician</h2>

						<p>
							As a software and hardware technician, I maintain and always check
							the hardware being used by the company. The goal of a software
							technician is to consistency checking of all software and hardware
							if ever its working or not.
						</p>
					</div>
					<img
						src={Technician}
						className='skill-img'
						alt='Computer Technician'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<div className='d-flex flex-column'>
						<h2>Network Management and Maintenance</h2>
						<p>
							As a network management and maintenance. I supervise and maintain
							the Ethernet connection and the structure of all design whether
							wireless or wired connection.
						</p>
					</div>
					<img
						src={Network}
						className='skill-img'
						alt='Network Assistant'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
