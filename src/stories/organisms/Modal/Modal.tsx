import { getAlignmentClassName, joinClassNames } from "../../../utils/styles";
import { Backdrop } from "../../atoms/Backdrop/Backdrop";
import { IconButton } from "../../molecules/IconButton/IconButton";
import "./modal.css";

type Align = "left" | "center" | "right";

interface ModalProps {
    /**
     * Optional property to indicate the trigger
     */
    trigger?: JSX.Element;
    /**
     * Required property to indicate the body
     */
    body: JSX.Element;
    /**
     * Required property to indicate the function that shows/hides
     */
    setShow: () => void;
    /**
     * Required property to indicate whether to show or hide
     */
    show: boolean;
    /**
     * Optional property to indicate the title
     */
    title?: string;
    /**
     * Optional property to indicate the align
     */
    align?: Align;
}

export function Modal({
    trigger,
    body,
    setShow,
    show,
    title,
    align = "center",
}: ModalProps): React.ReactNode {
    // Constants
    const alignmentClassName = getAlignmentClassName({
        align,
        baseName: "modal",
    });
    const modalHeaderClassName =
        align === "center" ? "modal-header--center" : "modal-header--aside";

    return (
        <>
            {trigger ?? <></>}
            {show && (
                <div className="modal">
                    <Backdrop
                        onOutsideClick={setShow}
                        extraClassName="modal-backdrop"
                    />
                    <div
                        className={joinClassNames({
                            classNames: ["modal-content", alignmentClassName],
                        })}
                    >
                        <div
                            className={joinClassNames({
                                classNames: [
                                    "modal-header",
                                    modalHeaderClassName,
                                ],
                            })}
                        >
                            <p className="modal-header-title">{title}</p>
                            <IconButton
                                ariaLabel="Close"
                                iconId="close"
                                align="end"
                                onClick={setShow}
                                extraClassName="modal-header-button"
                            />
                        </div>
                        <div className="modal-body">{body}</div>
                    </div>
                </div>
            )}
        </>
    );
}
