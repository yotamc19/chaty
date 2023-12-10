import { StartChatButton } from "./components/StartChatButton";

export function LandingPage() {
    return (
        <div>
            <StartChatButton />
            <div style={{ height: 100, width: 100, backgroundColor: 'black'}}></div>
        </div>
    );
}