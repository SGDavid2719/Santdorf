import { joinClassNames } from "../../../utils/styles";
import "./loading.css";

interface LoadingProps {
    /**
     * Required property to indicate if is loading
     */
    isLoading: boolean;
    /**
     * Required property to indicate the loading text
     */
    loadingText: string;
    /**
     * Optional property to indicate the loaded text
     */
    loadedText?: string;
    /**
     * Optional property to indicate classNames
     */
    extraClassName?: string;
}

export function Loading({
    isLoading,
    loadingText,
    loadedText,
    extraClassName,
}: LoadingProps): React.ReactNode {
    // Constants
    const show = isLoading || loadedText;
    const defaultClassName = isLoading ? "loading" : "loaded";

    return (
        show && (
            <span
                className={joinClassNames({
                    classNames: [defaultClassName, extraClassName],
                })}
            >
                {isLoading ? loadingText : loadedText}
            </span>
        )
    );
}
