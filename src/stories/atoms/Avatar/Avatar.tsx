import { joinClassNames } from "../../../utils/styles";
import "./avatar.css";

interface DefaultAvatar extends AvatarProps {
	/**
	 * How large should be
	 */
	size?: "small" | "medium" | "large";
	/**
	 * How should be
	 */
	form?: "rounded" | "squared";
}

interface AvatarProps {
	/**
	 * Avatar image source
	 */
	src: string;
	/**
	 * Avatar image alternative text
	 */
	alt: string;
	/**
	 * Indicates if the user is online
	 */
	isOnline?: boolean;
	/**
	 * Optional classNames
	 */
	extraClassName?: string;
	/**
	 * Optional styles
	 */
	style?: React.CSSProperties;
}

export function Avatar({
	src,
	alt,
	isOnline,
	size = "medium",
	extraClassName = "",
	form = "rounded",
	...props
}: DefaultAvatar): React.ReactNode {
	const status = isOnline ? "" : "offline";

	return (
		<div
			className={joinClassNames({
				classNames: ["avatar", status, extraClassName],
			})}
			{...props}
		>
			<img
				src={src}
				alt={alt}
				className={joinClassNames({
					classNames: [size, form],
				})}
			/>
			{isOnline != null && (
				<div
					className={joinClassNames({
						classNames: ["status", size],
					})}
				/>
			)}
		</div>
	);
}

export function RoundedAvatar(props: Readonly<AvatarProps>): React.ReactNode {
	return <Avatar form="rounded" {...props} />;
}

export function SquaredAvatar(props: Readonly<AvatarProps>): React.ReactNode {
	return <Avatar form="squared" {...props} />;
}
