import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm';

import  ChatFeed  from './components/ChatFeed';

import './App.css';

const App  = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID="46635c71-8439-4860-a2a5-c0fa39536771"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;
