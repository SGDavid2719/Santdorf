import { getPlaceholderIfRequired } from "../../../utils/accessibility";
import { Input, InputProps } from "../../atoms/Input/Input";
import { Label, LabelProps } from "../../atoms/Label/Label";
import "./labelInput.css";

interface LabelInputProps extends LabelProps, InputProps {
	/**
	 * Optional property to indicate block property
	 */
	display?: "block" | "inline";
	/**
	 * Optional property to indicate classNames
	 */
	labelInputClassNames?: string;
}

export function LabelInput({
	display = "block",
	label,
	htmlFor,
	type = "text",
	value,
	maxLength,
	minLength,
	placeholder,
	readOnly = false,
	inputClassName,
	labelInputClassNames,
}: LabelInputProps): React.ReactNode {
	// Constants
	const blockClassName =
		display === "block" ? "labelInput_label-block" : "labelInput_label-inline";
	const placeholderToDisplay = getPlaceholderIfRequired({
		type,
		placeholder,
	});

	return (
		<div className={labelInputClassNames}>
			{!placeholderToDisplay && (
				<Label
					label={label}
					htmlFor={htmlFor}
					labelClassName={blockClassName}
				/>
			)}
			<Input
				name={htmlFor}
				type={type}
				value={value}
				maxLength={maxLength}
				minLength={minLength}
				placeholder={placeholderToDisplay}
				readOnly={readOnly}
				inputClassName={inputClassName}
			/>
		</div>
	);
}
