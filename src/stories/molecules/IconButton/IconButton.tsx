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
    } = props;
    const { iconId, style, stroke } = props;

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
        >
            <>
                {text && <span className="iconButton-text">{text}</span>}
                <Icon
                    iconId={iconId}
                    style={style}
                    stroke={stroke}
                    extraClassName="iconButton-icon"
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
