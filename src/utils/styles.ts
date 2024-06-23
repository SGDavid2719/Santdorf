import { ClassNames } from "../shared/types";

export function joinClassNames({ classNames }: { classNames: ClassNames[] }) {
    return classNames
        .filter(
            (className) => typeof className === "string" && className !== ""
        )
        .join(" ");
}

export function getSizeClassName({
    size,
    baseName,
}: {
    size: string;
    baseName: string;
}) {
    let sizeClassName = "";
    switch (size) {
        case "large":
            sizeClassName = `${baseName}--large`;
            break;
        case "medium":
            sizeClassName = `${baseName}--medium`;
            break;
        default:
            sizeClassName = `${baseName}--small`;
            break;
    }
    return sizeClassName;
}

export function getAlignmentClassName({
    align,
    baseName,
}: {
    align?: "end" | "start" | "center" | "left" | "right";
    baseName: string;
}) {
    let alignmentClassName = "";
    switch (align) {
        case "left":
            alignmentClassName = `${baseName}--left`;
            break;
        case "right":
            alignmentClassName = `${baseName}--right`;
            break;
        case "center":
            alignmentClassName = `${baseName}--center`;
            break;
        case "end":
            alignmentClassName = `${baseName}--end`;
            break;
        case "start":
        default:
            alignmentClassName = `${baseName}--start`;
            break;
    }
    return alignmentClassName;
}
