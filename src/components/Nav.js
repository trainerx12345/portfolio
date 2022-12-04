export default function Nav() {
	return (
		<nav
			className='navbar navbar-light navbar-expand-sm  bg-light w-100 rounded-2 fixed-top position-fixed '
			id='nav'
		>
			<div className='container-fluid'>
				<a
					aria-current='page'
					href='#home'
					className='navbar-brand'
				>
					<div className='logo p-0 '>
						<img
							src='./assets/logopng.png'
							alt='Alt text'
							width='100%'
							className=' rounded-circle'
						/>
					</div>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarID'
					aria-controls='navbarID'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse d-flex align-items-center justify-content-end justify-content-lg-end'
					id='navbarID'
				>
					<div className='navbar-nav'>
						<a
							className='nav-link active'
							aria-current='page'
							href='#home'
						>
							<h6>Home</h6>
						</a>
					</div>
					<div className='navbar-nav'>
						<a
							className='nav-link active'
							aria-current='page'
							href='#skill'
						>
							<h6>Skills</h6>
						</a>
					</div>
					<div className='navbar-nav'>
						<a
							className='nav-link active'
							aria-current='page'
							href='#project'
						>
							<h6>Project</h6>
						</a>
					</div>
					<div className='navbar-nav'>
						<a
							className='nav-link active'
							aria-current='page'
							href='#contact'
						>
							<h6>Contact</h6>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
