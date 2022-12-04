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
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Skills() {
	return (
		<div
			id='skill'
			className='mt-5 container-fluid mb-5 mt-lg-5 mb-lg-5'
		>
			<h1 className='display-3 pt-5  mt-5 text-center font-weight-bolder'>
				Skills
			</h1>
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
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<h2>Desktop and Mobile Developer</h2>
					<img
						src={Software}
						className='skill-img'
						alt='Software Developer'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<h2>Full stack developer</h2>
					<img
						src={Developer}
						className='skill-img'
						alt='Full Stack Developer'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<h2>Database management and Design</h2>
					<img
						src={Data}
						className='skill-img'
						alt='Data Analyst'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<h2>Software and Hardware Technician</h2>
					<img
						src={Technician}
						className='skill-img'
						alt='Computer Technician'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<h2>Network Management and Maintenance</h2>
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
