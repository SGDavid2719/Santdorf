import { useState } from "react";
import { InputType } from "../../../shared/types";

export interface InputProps {
    /**
     * Mandatory property to indicate the type of entry
     */
    type?: InputType;
    /**
     * Mandatory property to indicate the name of the element
     */
    name: string;
    /**
     * Optional property to indicate the current value
     */
    value?: string;
    /**
     * Optional property to indicate the maximum number of characters
     */
    maxLength?: number;
    /**
     * Optional property to indicate the minimum number of characters.
     */
    minLength?: number;
    /**
     * Optional property to indicate the help text.
     */
    placeholder?: string;
    /**
     * Optional property to indicate if it is a read-only field.
     */
    readOnly?: boolean;
    /**
     * Optional property to indicate the style
     */
    inputClassName?: string;
}

/**
 * Primary UI component for user interaction
 */
export function Input({
    type = "text",
    name,
    value,
    maxLength,
    minLength,
    placeholder,
    readOnly = false,
    inputClassName,
}: InputProps): React.ReactNode {
    // States
    const [searchingValue, setSearchingValue] = useState(value ?? "");

    // Constants
    const placeholderCheckingType =
        type === "email" ||
        type === "number" ||
        type === "password" ||
        type === "search" ||
        type === "tel" ||
        type === "text" ||
        type === "url"
            ? placeholder
            : undefined;

    // Handlers
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchingValue(event.target.value);
    };

    return (
        <input
            type={type}
            name={name}
            aria-label={name}
            id={name}
            value={searchingValue}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholderCheckingType}
            readOnly={readOnly}
            className={inputClassName}
            onChange={onChange}
        />
    );
}
