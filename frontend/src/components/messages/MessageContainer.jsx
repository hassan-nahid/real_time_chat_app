import { TiMessages } from "react-icons/ti";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // cleanup function
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className="max-w-96 max-h-screen flex flex-col">
            {!selectedConversation ? <NoChatSelected /> :
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-1">
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                            <HiMiniBars3BottomLeft className="text-white font-bold h-6 w-6" />
                        </label>
                        <span className="label-text">To:</span>{" "}
                        <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            }
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <>
            <label htmlFor="my-drawer-2" className="btn bg-sky-500 text-white hover:bg-sky-300 drawer-button lg:hidden">
                Open Menu
            </label>
            <div className='flex items-center justify-center max-h-screen max-w-96 h-full'>

                <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                    <p>Welcome 👋 {authUser.fullName} ❄</p>
                    <p>Select a chat to start messaging</p>
                    <TiMessages className='text-3xl md:text-6xl text-center' />
                </div>
            </div>
        </>
    );
};