import { FC } from 'react'
import IUiElement from '@ui/layout/Element/UiElement.type';

const UiElement: FC<IUiElement> = (props) => {
	const { children } = props;

	return <div>{children}</div>
}

export default UiElement;