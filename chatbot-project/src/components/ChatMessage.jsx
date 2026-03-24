import RobotProfileImage from '../assets/images/robot.ico';
import UserProfileImage from '../assets/images/user.ico';
import './ChatMessage.css';

export default function ChatMessage({ message, sender}){
  return (
    <div className={
      sender === "user" 
        ? 'chat-message-user' 
        : 'chat-message-robot'
      }>
      {sender === 'robot' && 
      <img 
        src={RobotProfileImage}
        className="chat-message-profile"
        />}
      <div 
      className="chat-message-text"
      >
        {message}
      </div>
      {sender === 'user' && 
      <img 
        src={UserProfileImage}
        className="chat-message-profile"
        />}
    </div>
  );
}