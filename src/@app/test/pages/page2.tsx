// @core
import '@core/resources/assets/css/index.css'
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography'
import UiElement from '@ui/components/layout/Element/UiElement'

const Page2 = () => {

	// Hooks
	// const navigate = useNavigate();
	
	// Handlers
	const GoToPage1 = () => {
		// navigate(moduleRoute.routes.Page1)
		console.log('navigate')
	}

	return (
		<UiElement className='flex flex-col gap-y-4'>
			<UiTypography variant="h1">
				PAGE 2
			</UiTypography>

			<UiElement className="flex flex-col gap-y-4">
				<UiTypography variant='p'>You are on the SECOND page of my ReactJS starterkit.</UiTypography>
				<UiTypography variant='p'>{"This one's under construction, but in the meantime, here's some reading material."}</UiTypography>
			</UiElement>

			<button onClick={() => GoToPage1()}>TEST</button>
		</UiElement>
	)
}

export default Page2;
