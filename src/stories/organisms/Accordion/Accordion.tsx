import { useState } from "react";
import { joinClassNames } from "../../../utils/styles";
import "./accordion.css";
import { IconButton } from "../../molecules/IconButton/IconButton";

interface AccordionProps {
    /**
     * Required property to indicate the content of the component
     */
    children: JSX.Element;
    /**
     * Required property to indicate the showing label
     */
    showingLabel: string;
    /**
     * Required property to indicate the hiding label
     */
    hidingLabel: string;
    /**
     * Optional property to indicate classNames
     */
    extraClassName?: string;
    /**
     * Optional property to indicate btn classNames
     */
    extraBtnClassName?: string;
    /**
     * Optional property to indicate the icon alignment
     */
    align?: "end" | "start";
}

export function Accordion({
    children,
    showingLabel,
    hidingLabel,
    extraClassName,
    extraBtnClassName,
    align = "end",
}: AccordionProps): React.ReactNode {
    // States
    const [showAccordion, setShowAccordion] = useState(false);

    // Constants
    const rotateSvg = showAccordion
        ? "accordion-transition--up"
        : "accordion-transition--down";
    const text = showAccordion ? showingLabel : hidingLabel;

    // Handlers
    const onClick = () => setShowAccordion((prevState) => !prevState);

    // GET TYPE ICONBUTTON

    return (
        <div className={extraClassName}>
            <IconButton
                iconId="arrow-down"
                align={align}
                text={text}
                onClick={onClick}
                extraClassName={joinClassNames({
                    classNames: [extraBtnClassName],
                })}
                extraIconClassName={joinClassNames({
                    classNames: ["accordion-transition", rotateSvg],
                })}
            />
            {showAccordion && children}
        </div>
    );
}

export function PrimaryAccordion(
    props: Readonly<AccordionProps>
): React.ReactNode {
    return <Accordion extraClassName="btn--primary" {...props} />;
}

export function SecondaryAccordion(
    props: Readonly<AccordionProps>
): React.ReactNode {
    return <Accordion extraClassName="btn--secondary" {...props} />;
}
