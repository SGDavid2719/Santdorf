import { ICONS } from "../../../shared/icons";
import { getSizeClassName, joinClassNames } from "../../../utils/styles";
import "./icon.css";

export interface IconProps {
    /**
     * Mandatory property to indicate the icon to represent.
     */
    iconId: string;
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
    /**
     * Optional stroke in hex
     */
    stroke?: string;
}

export function Icon({
    iconId,
    size = "medium",
    extraClassName = "",
    ...props
}: IconProps): React.ReactNode {
    const icon = ICONS.find((icon) => icon.iconId === iconId);

    if (!icon) return <></>;

    const { d, viewBox } = icon;
    const sizeClassName = getSizeClassName({ size, baseName: "icon" });

    return (
        <svg
            role="graphics-symbol"
            xmlns="http://www.w3.org/2000/svg"
            className={joinClassNames({
                classNames: ["icon", sizeClassName, extraClassName],
            })}
            viewBox={viewBox}
            aria-label={iconId}
            {...props}
        >
            <path
                fillRule="evenodd"
                d={d}
                clipRule="evenodd"
                stroke={props.stroke ?? "currentColor"}
            />
        </svg>
    );
}
