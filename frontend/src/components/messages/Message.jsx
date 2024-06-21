
const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">
                Hi! what is upp?
            </div>
            <div className="chat-footer text-xs opacity-50 gap-1 items-center">12:12</div>
        </div>
    );
};

export default Message;