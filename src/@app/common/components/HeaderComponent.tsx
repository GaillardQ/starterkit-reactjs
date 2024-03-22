// Misc libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

const HeaderComponent = (): JSX.Element => (
    <UiElement
        variant="container"
        color='secondary'
        className="flex items-center"
    >
        <UiElement className="flex-1">
            <UiTypography>Starterkit - ReactJS</UiTypography>
        </UiElement>
        <UiElement>
            <FontAwesomeIcon icon="home" />
        </UiElement>
    </UiElement>
);

export default HeaderComponent;
