import RobotProfileImage from "../assets/robot.png"; // This is called a default export
import UserProfileImage from "../assets/user.png";
import dayjs from 'dayjs';
import "./ChatMessage.css";

export function ChatMessage({message, sender}) {
  // We can use the tenary operator to change the className of the class for styling purposes
  // We put the text inside a container to be able to stylize it
    const time = dayjs().valueOf()
    return (
      <div className={
          sender === "user" 
          ? "chat-message-user"
          :"chat-message-robot"
      }>
          {(sender === "robot") && (
              <img src={RobotProfileImage}
              className="chat-message-profile" />
          )}
          <div className="chat-message-text">
                {message}
                <div className="chat-message-date">
                    {dayjs(time).format("h:mma")}
                </div>
          </div>
          
          {(sender === "user") && (
              <img src={UserProfileImage} 
              className="chat-message-profile"/>
          )}
      </div>
  );           
}