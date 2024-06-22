import { getAlignmentClassName, joinClassNames } from "../../../utils/styles";
import { Button, ButtonProps } from "../../atoms/Button/Button";
import { Icon, IconProps } from "../../atoms/Icon/Icon";
import "./iconButton.css";

interface IconButtonProps extends ButtonProps, IconProps {
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
    } = props;
    const { iconId, style, stroke, extraIconClassName } = props;

    const alignmentClassName = getAlignmentClassName({
        align,
        baseName: "iconButton",
    });

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
            extraClassName={joinClassNames({
                classNames: ["iconButton", alignmentClassName, extraClassName],
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
    return (
        <IconButton
            stroke="var(--strong-primary)"
            extraClassName="btn--primary"
            {...props}
        />
    );
}

export function SecondaryIconButton(
    props: Readonly<IconButtonProps>
): React.ReactNode {
    return (
        <IconButton
            stroke="var(--light-secondary)"
            extraClassName="btn--secondary"
            {...props}
        />
    );
}
