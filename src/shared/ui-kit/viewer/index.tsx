import { Viewer } from "@toast-ui/react-editor";

export function Viewers({
    value
} : {
    value: string
}) {
    return (
        <Viewer
            initialValue={value} />
    )
}