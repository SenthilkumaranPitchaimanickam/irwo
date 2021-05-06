import './styles.css';

interface IButtonProps {
	key: string;
	value: string;
	onClick?: () => void;
}

const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) =>
	<div className='Button-Background'>
		<button {...props}>{props.value}</button>
	</div>

export default Button;
