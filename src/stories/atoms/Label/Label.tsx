export interface LabelProps {
    /**
     * Mandatory property to indicate the contained text
     */
    label: string;
    /**
     * Mandatory property to indicate the id of the element to which it is linked
     */
    htmlFor: string;
    /**
     * Optional property to indicate the style
     */
    labelClassName?: string;
}

export function Label({
    label,
    htmlFor,
    labelClassName,
}: LabelProps): React.ReactNode {
    return (
        <label htmlFor={htmlFor} className={labelClassName}>
            {label}
        </label>
    );
}
