export interface IDefaultComponent {
	className?: string;
	children?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
