import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function StartChatButton() {
    const navigate = useNavigate();

    const onClick = () => {
        console.log('started chating');
        navigate('/chat');
    }
    
    return (
        <Button onClick={onClick}>
            Start chating
        </Button>
    );
}