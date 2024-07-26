import { joinClassNames } from "../../../utils/styles";
import "./badge.css";

interface DefaultBadge extends BadgeProps {
	type?: "info" | "success" | "danger" | "warning" | "default";
}

interface BadgeProps {
	/**
	 * Badge contents
	 */
	value: number | string;
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Optional classNames
	 */
	extraClassName?: string;
	/**
	 * Optional styles
	 */
	style?: React.CSSProperties;
}

export function Badge({
	size = "medium",
	value,
	extraClassName = "",
	type = "default",
	...props
}: DefaultBadge): React.ReactNode {
	return (
		<span
			className={joinClassNames({
				classNames: ["badge", size, type, extraClassName],
			})}
			{...props}
		>
			<span>{value}</span>
		</span>
	);
}

export function InfoBadge(props: BadgeProps) {
	return <Badge type="info" {...props} />;
}

export function SuccessBadge(props: BadgeProps) {
	return <Badge type="success" {...props} />;
}

export function DangerBadge(props: BadgeProps) {
	return <Badge type="danger" {...props} />;
}

export function WarningBadge(props: BadgeProps) {
	return <Badge type="warning" {...props} />;
}
