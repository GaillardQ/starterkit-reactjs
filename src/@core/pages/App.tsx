// Misc libs
import { FC } from 'react'
// @app
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router'
// @core
import RouterComponent from '@core/components/Router/Router'
import '@core/resources/assets/css/index.css'
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography'
import UiElement from '@ui/components/layout/Element/UiElement'

const App: FC = () => {

  return (
    <UiElement variant='page' className='flex flex-col gap-y-4'>
		<UiTypography variant="h1">
			App
		</UiTypography>

		<RouterComponent modules={{test: routesTest}}/>
		
	</UiElement>
  )
}

export default App
