import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: '',
	});

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_91g4ubs', //service
				'template_spetplr', //template
				form.current,
				'jS8ciN8R_g2z43kAw', //public key
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);

		alert('Your message has been sent');
	};
	return (
		<div
			id='contact'
			className='p-5 mx-auto w-75 d-flex flex-column flex-wrap justify-items-center align-items-center justify-content-around '
		>
			<h2>Need a developer? Leave a message</h2>
			<div className='container-fluid '>
				<form
					ref={form}
					onSubmit={sendEmail}
				>
					<div className='row mb-3'>
						<div className='col'>
							<input
								type='text'
								name='firstname'
								className='form-control'
								placeholder='First name'
								aria-label='First name'
								required
								value={state.firstName}
								onChange={(e) => {
									setState(...state, { firstName: e.target.value });
								}}
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								name='lastname'
								className='form-control'
								placeholder='Last name'
								aria-label='Last name'
								required
								value={state.lastName}
								onChange={(e) => {
									setState(...state, { lastName: e.target.value });
								}}
							/>
						</div>
					</div>
					<div className='mb-3'>
						<input
							type='email'
							name='email'
							className='form-control'
							placeholder='Email'
							aria-label='Email'
							required
							value={state.email}
							onChange={(e) => {
								setState(...state, { email: e.target.value });
							}}
						/>
					</div>
					<div className='mb-3'>
						<input
							name='subject'
							type='text'
							className='form-control'
							placeholder='Subject'
							aria-label='Subject'
							required
							value={state.subject}
							onChange={(e) => {
								setState(...state, { subject: e.target.value });
							}}
						/>
					</div>
					<div className='mb-3'>
						<textarea
							type='text'
							id='message'
							name='message'
							rows='4'
							className='form-control md-textarea'
							placeholder='Message'
							required
							value={state.message}
							onChange={(e) => {
								setState(...state, { message: e.target.value });
							}}
						></textarea>
					</div>
					<div>
						<button
							className='btn btn-info w-100'
							type='submit'
						>
							Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
