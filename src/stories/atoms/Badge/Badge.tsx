import { getSizeClassName, joinClassNames } from "../../../utils/styles";
import "./badge.css";

interface BadgeProps {
    /**
     * Badge contents
     */
    value: number;
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
    ...props
}: BadgeProps): React.ReactNode {
    const sizeClassName = getSizeClassName({ size, baseName: "badge" });

    return (
        <span
            className={joinClassNames({
                classNames: [
                    "badge badge--content",
                    sizeClassName,
                    extraClassName,
                ],
            })}
            {...props}
        >
            <span>{value}</span>
        </span>
    );
}

export function PrimaryBadge(props: Readonly<BadgeProps>): React.ReactNode {
    return <Badge extraClassName="badge--primary" {...props} />;
}

export function SecondaryBadge(props: Readonly<BadgeProps>): React.ReactNode {
    return <Badge extraClassName="badge--secondary" {...props} />;
}
