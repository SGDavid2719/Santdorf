export interface LabelProps {
    /**
     * Mandatory property to indicate the contained text
     */
    text: string;
    /**
     * Mandatory property to indicate the id of the element to which it is linked
     */
    htmlFor: string;
    /**
     * Optional property to indicate the style
     */
    labelClassName?: string;
}

/**
 * Primary UI component for user interaction
 */
export function Label({
    text,
    htmlFor,
    labelClassName,
}: LabelProps): React.ReactNode {
    return (
        <label htmlFor={htmlFor} className={labelClassName}>
            {text}
        </label>
    );
}
