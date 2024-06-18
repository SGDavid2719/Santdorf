import { joinClassNames } from "../../../utils/styles";
import { Icon, IconProps } from "../../atoms/Icon/Icon";
import "./banner.css";

interface BannerProps extends IconProps {
    /**
     * Banner contents
     */
    children: React.ReactNode;
    /**
     * Optional classNames
     */
    extraClassName?: string;
    /**
     * Optional styles
     */
    style?: React.CSSProperties;
}

export function Banner({
    iconId,
    children,
    extraClassName = "",
    ...props
}: BannerProps): React.ReactNode {
    return (
        <div
            className={joinClassNames({
                classNames: ["banner", extraClassName],
            })}
            {...props}
        >
            <Icon
                iconId={iconId}
                stroke={props.stroke}
                style={{ margin: "auto", strokeWidth: 2 }}
                size={props.size}
            />
            {children}
        </div>
    );
}

export function InfoBanner(props: Readonly<BannerProps>): React.ReactNode {
    return <Banner {...props} iconId={"info"} />;
}

export function WarningBanner(props: Readonly<BannerProps>): React.ReactNode {
    return <Banner {...props} iconId={"warning"} size="large" />;
}
