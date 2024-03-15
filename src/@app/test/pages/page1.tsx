// Misc libs
import { useNavigate } from 'react-router-dom';
// @app
import PageComponent from '@app/common/components/PageComponent';
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router'
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

const Page1 = () => {

	// Hooks
	const navigate = useNavigate();
	
	// Handlers
	const GoToPage2 = () => {
		navigate(routesTest.routes.Page2.uri({'name': 'francis'}));
	}

	return (
		<PageComponent>
			<UiTypography variant="h1">
				PAGE 1
			</UiTypography>

			<UiElement className="flex flex-col gap-y-4">
				<UiTypography variant='p'>You are on the FIRST page of my ReactJS starterkit.</UiTypography>
				<UiTypography variant='p'>{"This one's under construction, but in the meantime, here's some reading material."}</UiTypography>
			</UiElement>

			<UiElement className="flex gap-x-2">
				<button onClick={() => GoToPage2()}>Page2</button>
			</UiElement>
		</PageComponent>
	)
}

export default Page1;
