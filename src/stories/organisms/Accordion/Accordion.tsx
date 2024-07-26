import { useState } from "react";
import { joinClassNames } from "../../../utils/styles";
import "./accordion.css";
import { IconButton } from "../../molecules/IconButton/IconButton";
import { BtnType } from "../../atoms/Button/Button";

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
	/**
	 * Button type to display
	 */
	btnType?: BtnType;
}

export function Accordion({
	children,
	showingLabel,
	hidingLabel,
	extraClassName,
	extraBtnClassName,
	align = "end",
	btnType,
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
				btnType={btnType}
			/>
			{showAccordion && children}
		</div>
	);
}

export function PrimaryAccordion(
	props: Readonly<AccordionProps>
): React.ReactNode {
	return <Accordion btnType="primary" {...props} />;
}

export function SecondaryAccordion(
	props: Readonly<AccordionProps>
): React.ReactNode {
	return <Accordion btnType="secondary" {...props} />;
}

export function WarningAccordion(
	props: Readonly<AccordionProps>
): React.ReactNode {
	return <Accordion btnType="warning" {...props} />;
}

export function DangerAccordion(
	props: Readonly<AccordionProps>
): React.ReactNode {
	return <Accordion btnType="danger" {...props} />;
}
