import { getSizeClassName, joinClassNames } from "../../../utils/styles";
import "./avatar.css";

interface AvatarProps {
    /**
     * Avatar contents
     */
    children: React.ReactNode;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Optional classNames
     */
    extraClassName?: string;
    /**
     *
     */
    style?: React.CSSProperties;
}

export function Avatar({
    size = "medium",
    children,
    extraClassName = "",
    ...props
}: AvatarProps): React.ReactNode {
    const sizeClassName = getSizeClassName({ size, baseName: "avatar" });

    return (
        <div
            className={joinClassNames({
                classNames: ["avatar", sizeClassName, extraClassName],
            })}
            {...props}
        >
            {children}
        </div>
    );
}

export function RoundedAvatar(props: Readonly<AvatarProps>): React.ReactNode {
    return <Avatar extraClassName="avatar--rounded" {...props} />;
}

export function SquaredAvatar(props: Readonly<AvatarProps>): React.ReactNode {
    return <Avatar extraClassName="avatar--squared" {...props} />;
}
