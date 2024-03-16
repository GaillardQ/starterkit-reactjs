// Misc libs
import { useNavigate } from 'react-router-dom';
// @app
import PageComponent from '@app/common/components/PageComponent';
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

const Catalog = () => {
	// Hooks
	const navigate = useNavigate();
	
	// Handlers
	const GoToHome = () => {
		navigate(routesTest.routes.Home.uri());
	}
	
	const GoToDetails = () => {
		navigate(routesTest.routes.Bieres.childs!.Details.uri({'id': '666'}));
	}

	return (
		<PageComponent>
			<UiElement className='flex flex-col gap-y-4'>
				<UiTypography variant="h1">
					Catalogu Brewdog
				</UiTypography>

				<UiElement className="flex flex-col gap-y-4">
					<UiTypography variant='p'>{'Il me fallait une API pour tester la partie "réseau"'}</UiTypography>
				</UiElement>

				
				<UiElement className="flex gap-x-2">
					<button onClick={() => GoToHome()}>Horreur, sort moi de là</button>
					<button onClick={() => GoToDetails()}>Dis moi en plus stp</button>
				</UiElement>
			</UiElement>
		</PageComponent>
	)
}

export default Catalog;
