import { Button, ButtonProps } from "../../atoms/Button/Button";
import { Icon, IconProps } from "../../atoms/Icon/Icon";
import "./iconButton.css";

interface IconButtonProps extends ButtonProps, IconProps {}

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
    } = props;
    const { iconId, style, stroke } = props;

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
            extraClassName={extraClassName}
        >
            <Icon iconId={iconId} style={style} stroke={stroke} />
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
