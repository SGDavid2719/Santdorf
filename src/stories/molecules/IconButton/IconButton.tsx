import { joinClassNames } from "../../../utils/styles";
import { Button, DefaultButton } from "../../atoms/Button/Button";
import { Icon, IconProps } from "../../atoms/Icon/Icon";
import "./iconButton.css";

interface IconButtonProps extends DefaultButton, IconProps {
	/**
	 * Optional button text
	 */
	text?: string;
	/**
	 * Optional property to indicate the icon alignment
	 */
	align?: "end" | "start";
	/**
	 * Optional property to indicate icon classNames
	 */
	extraIconClassName?: string;
}

export function IconButton(props: IconButtonProps): React.ReactNode {
	const { size, extraClassName } = props;
	const {
		type,
		role,
		ariaExpanded,
		ariaLabel,
		ariaChecked,
		ariaPressed,
		disabled,
		text,
		align,
		onClick,
		btnType,
	} = props;
	const { iconId, style, stroke, extraIconClassName } = props;

	return (
		<Button
			type={type}
			role={role}
			ariaExpanded={ariaExpanded}
			ariaLabel={ariaLabel}
			ariaChecked={ariaChecked}
			ariaPressed={ariaPressed}
			disabled={disabled}
			size={size}
			btnType={btnType}
			extraClassName={joinClassNames({
				classNames: ["iconButton", align, extraClassName],
			})}
			onClick={onClick}
		>
			<>
				{text && <span className="iconButton-text">{text}</span>}
				<Icon
					iconId={iconId}
					style={style}
					stroke={stroke}
					extraClassName={joinClassNames({
						classNames: ["iconButton-icon", extraIconClassName],
					})}
				/>
			</>
		</Button>
	);
}

export function PrimaryIconButton(
	props: Readonly<IconButtonProps>
): React.ReactNode {
	return <IconButton btnType="primary" {...props} />;
}

export function SecondaryIconButton(
	props: Readonly<IconButtonProps>
): React.ReactNode {
	return <IconButton btnType="secondary" {...props} />;
}

export function WarningIconButton(
	props: Readonly<IconButtonProps>
): React.ReactNode {
	return <IconButton btnType="warning" {...props} />;
}

export function DangerIconButton(
	props: Readonly<IconButtonProps>
): React.ReactNode {
	return <IconButton btnType="danger" {...props} />;
}
