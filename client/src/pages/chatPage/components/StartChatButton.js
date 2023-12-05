import { Button } from "react-bootstrap";

export function StartChatButton() {
    const onClick = () => {
        console.log('hola');
    }
    
    return (
        <Button onClick={onClick}>
            hola
        </Button>
    );
}