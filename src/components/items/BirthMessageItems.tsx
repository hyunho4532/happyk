import { Card } from "@mui/material";
import { props } from "./props";

export function BirthMessageItems(props: props) {
    return (
        <Card>
            { props.messages.map((birth: any, key: number) => (
                <p>{birth.message}</p>
            ))}
        </Card>
    )
}