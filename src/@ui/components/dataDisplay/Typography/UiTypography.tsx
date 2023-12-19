// Misc libs
import { FC } from 'react';
// @ui
import IUiTypography from '@ui/components/dataDisplay/Typography/UiTypography.type';
import UiElement from '@ui/components/layout/Element/UiElement';

const UiTypography: FC<IUiTypography> = (props) => {
	// Variables
	const {
		className = "",
		children,
		variant = "default"
	} = props;

	const Component = variant === "default" ? UiElement : variant;

	// Getters
	const getClassNames = (): string => [
		className
	].join(' ');

	return (
		<Component className={getClassNames()}>
			{children}
		</Component>
	);
}

export default UiTypography;