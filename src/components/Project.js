import { FaGithub, FaEye } from 'react-icons/fa';
import React from 'react';
import {
	Timeline,
	Events,
	UrlButton,
	ImageEvent,
	TextEvent,
	createTheme,
	themes,
} from '@merc/react-timeline';
const customTheme = createTheme(themes.default, {
	card: {
		backgroundColor: '#eee',
	},
	date: {
		backgroundColor: '#00E7FF',
	},
	marker: {
		borderColor: '#0014FF',
	},
	timelineTrack: {
		backgroundColor: '#009EFF',
	},
	urlButton: {
		backgroundColor: '#009EFF',
	},
});
export default function Project() {
	return (
		<div
			id='project'
			className='p-5 mx-auto container-fluid mb-5 mt-lg-5 mb-lg-5'
		>
			<h1 className='display-4 pt-5 text-center'>Projects</h1>
			<div className='container-fluid'>
				<Timeline theme={customTheme}>
					<Events>
						<ImageEvent
							date='12/01/2022'
							text='Our fullstack _**MERN**_ project'
							src='https://jefferscript-portfolio.vercel.app/assets/images/ems-p6.PNG'
							alt='EMS'
							// credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
						>
							<div>
								<UrlButton href='https://find-my-love.vercel.app/'>
									<FaEye size={20} /> Click here to view the page
								</UrlButton>
								<UrlButton href='https://github.com/trainerx12345/EMS/tree/main'>
									<FaGithub size={20} /> Click to view the code
								</UrlButton>
							</div>
						</ImageEvent>
						<ImageEvent
							date='11/25/2022'
							text='My _**MERN**_ project'
							src='https://raw.githubusercontent.com/trainerx12345/findMyLove/main/findMyLove.png'
							alt='find My love'
							// credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
						>
							<div>
								<UrlButton href='https://find-my-love.vercel.app/'>
									<FaEye size={20} /> Click here to view the page
								</UrlButton>
								<UrlButton href='https://github.com/trainerx12345/findMyLove'>
									<FaGithub size={20} /> Click to view the code
								</UrlButton>
							</div>
						</ImageEvent>

						<TextEvent
							date='10/202022'
							text='Learn how to use _**MongoDb and Express**_'
						/>

						<ImageEvent
							date='10/15/2022'
							text='My first _**react**_ project'
							src='https://raw.githubusercontent.com/trainerx12345/sweetspot/main/front%20page.png'
							alt='Sweetspot'
							// credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
						>
							<div>
								<UrlButton href='https://sweetspot-89rynxxed-trainerx12345.vercel.app/'>
									<FaEye size={20} /> Click here to view the page
								</UrlButton>
								<UrlButton href='https://github.com/trainerx12345/sweetspot'>
									<FaGithub size={20} /> Click to view the code
								</UrlButton>
							</div>
						</ImageEvent>

						<TextEvent
							date='10/10/2022'
							text='Learn how to use _**React**_'
						/>

						<ImageEvent
							date='10/04/2022'
							text='Based on the game **2048** of _**Gabriele Cirulli**_'
							src='https://raw.githubusercontent.com/trainerx12345/2048/main/game.png'
							alt='2048 game'
							// credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
						>
							<div>
								<UrlButton href='https://trainerx12345.github.io/2048'>
									<FaEye size={20} /> Click here to play the game
								</UrlButton>
								<UrlButton href='https://github.com/trainerx12345/2048'>
									<FaGithub size={20} /> Click to view the code
								</UrlButton>
							</div>
						</ImageEvent>
						<TextEvent
							date='08/30'
							text='Learn to how to use _**Javascript.**_'
						/>
						<TextEvent
							date='08/30'
							text='Learn to how to deploy a _**Static website**_'
						/>
						<ImageEvent
							date='09/012022'
							text='My portfolio when I joined _**Uplift Code Camp**_'
							src='https://raw.githubusercontent.com/trainerx12345/sam/main/portfoliov1.png'
							alt='portfoliov0.1'
							// credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
						>
							<div>
								<UrlButton href='https://trainerx12345.github.io/sam/'>
									<FaEye size={20} /> Click to view the page
								</UrlButton>
								<UrlButton
									href='https://github.com/trainerx12345/sam'
									target='_blank'
								>
									<FaGithub size={20} /> Click to view the code
								</UrlButton>
							</div>
						</ImageEvent>
						<TextEvent
							date='08/30'
							text='_**Uplift Code Camp**_ has *started.*'
						/>
						<ImageEvent
							date='08/152022'
							text='My portfolio before joining _**Uplift Code Camp**_'
							src='https://raw.githubusercontent.com/trainerx12345/portfoliov0.1/main/1stportfolio.png'
							alt='portfoliov0.1'
							// credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
						>
							<div>
								<UrlButton href='https://trainerx12345.github.io/portfoliov0.1/'>
									<FaEye size={20} />
									Click View
								</UrlButton>
								<UrlButton href='https://github.com/trainerx12345/portfoliov0.1'>
									<FaGithub size={20} /> Click to view the code
								</UrlButton>
							</div>
						</ImageEvent>
					</Events>
				</Timeline>
			</div>
		</div>
	);
}
