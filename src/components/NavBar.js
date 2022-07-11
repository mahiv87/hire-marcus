import React from 'react';

export default function Navbar({ fixed, currentPage, handlePageChange }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-neutral-800 mb-3">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
						Full_Stack_Developer / Marcus_Herrera
					</p>
					<button
						className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center' +
						(navbarOpen ? ' flex' : ' hidden')
					}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<li className="nav-item">
							<a
								className={
									currentPage === 'About'
										? 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-b'
										: 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								}
								href="#About"
								onClick={() => handlePageChange('About')}
							>
								<i className="fab fa-regular fa-user text-lg leading-lg text-white opacity-75"></i>
								<span className="ml-2">About</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									currentPage === 'Portfolio'
										? 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-b'
										: 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								}
								href="#Portfolio"
								onClick={() => handlePageChange('Portfolio')}
							>
								<i className="fab fa-regular fa-folder text-lg leading-lg text-white opacity-75"></i>
								<span className="ml-2">Portfolio</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									currentPage === 'Contact'
										? 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-b'
										: 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								}
								href="#Contact"
								onClick={() => handlePageChange('Contact')}
							>
								<i className="fab fa-regular fa-address-card text-lg leading-lg text-white opacity-75"></i>
								<span className="ml-2">Contact</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
