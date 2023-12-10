import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export function EndChatButton() {
  const navigate = useNavigate();

  const onClick = () => {
    console.log("ended chat");
    navigate('/chat');
  };

  return (
    <Link to="/">
      <Button onClick={onClick}>End chating</Button>
    </Link>
  );
}
