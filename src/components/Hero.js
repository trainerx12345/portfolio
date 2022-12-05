import Nav from './Nav';
import Developer from '../assets/Developer';
import Typewriter from 'typewriter-effect';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaGithub,
	FaGitlab,
	FaLinkedin,
} from 'react-icons/fa';
export default function Hero() {
	return (
		<div
			id='home'
			className='p-5'
		>
			<div className=' container-fluid min-vh-100 bg-grey d-flex flex-column  align-items-center justify-content-center'>
				<Nav />
				<div className='d-flex align-items-center justify-content-center '>
					<div className='d-flex flex-column  container-fluid p-5 mt-5 justify-content-around'>
						<h1 className='display-5 font-weight-bolder pb-4'>
							Hi I'm Samuel Corpuz
						</h1>
						<h4>
							I am a graduate of Bachelor in Science in Computer. I reside in
							Baguio City, Benguet Philippines 2600. I have 2 years experience
							in Software, Hardware and Network Management
						</h4>
						<h5 className='mt-5 text-primary'>
							<Typewriter
								options={{
									strings: [
										'I am a Full Stack Developer',
										'I am a Computer Technician',
										'I am a Data Analyst',
										'I am a Network Assistant',
										'I am a Software Developer',
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</h5>
						<div className='row mt-5 ml-0 pl-0'>
							<div className='col-5'>
								<a
									href='#project'
									className=' text-decoration-none'
								>
									<h3>PROJECTS</h3>
								</a>
							</div>
							<div className='col-5'>
								<a
									href='https://drive.google.com/file/d/13P6IlBCixvXtZKD9fGMzPyaT0HBrFyYN/view?usp=sharing'
									className='text-decoration-none'
								>
									<h3>RESUME</h3>
								</a>
							</div>
						</div>

						<div className='row mt-5'>
							<ul className='d-flex align-items-center justify-content-start list-unstyled'>
								<li className='mr-4'>
									<a href='https://www.facebook.com/Dormmammu31/'>
										<h5>
											<FaFacebook
												size={40}
												color='black'
											/>
										</h5>
									</a>
								</li>
								<li className='mr-4'>
									<a href='https://www.instagram.com/saamcorpuz/'>
										<h5>
											<FaInstagram
												size={40}
												color='black'
											/>
										</h5>
									</a>
								</li>
								<li className='mr-4'>
									<a href='https://github.com/trainerx12345'>
										<h5>
											<FaGithub
												size={40}
												color='black'
											/>
										</h5>
									</a>
								</li>
								<li className='mr-4'>
									<a href='https://gitlab.com/trainerx123'>
										<h5>
											<FaGitlab
												size={40}
												color='black'
											/>
										</h5>
									</a>
								</li>
								<li className='mr-4'>
									<a href='https://www.linkedin.com/in/samuel-corpuz-09b150170/'>
										<h5>
											<FaLinkedin
												size={40}
												color='black'
											/>
										</h5>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='d-flex justify-content-end align-items-center container-fluid p-5 w-100'>
						<Developer />
					</div>
				</div>
			</div>
		</div>
	);
}
