export function joinClassNames({ classNames }: { classNames: string[] }) {
    return classNames.join(" ");
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
