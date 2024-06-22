import { useAuthContext } from "../../context/AuthContext";
import useListenMessages from "../../hooks/useListenMessages";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {

    const {authUser}= useAuthContext()
    useListenMessages()
    const {selectedConversation} = useConversation()
    const formattedTime = extractTime(message.createdAt)

    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat chat-end" : "chat chat-start"
    const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic
    const bubbledBgColor = fromMe ? "bg-blue-500" : "";
    const shakeClass = message.shouldShake ? "shake" : ""


    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbledBgColor} ${shakeClass} pb-2`}>
                {message?.message}
            </div>
            <div className="chat-footer text-xs opacity-50 gap-1 items-center">{formattedTime}</div>
        </div>
    );
};

export default Message;