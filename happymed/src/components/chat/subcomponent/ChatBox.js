import Microphone from "../../../images/chat/microphone.svg";
import Attach from "../../../images/chat/attach.svg";
import Send from "../../../images/chat/send.svg";

const ChatBox = () => {
    return (
        <div className="bg-[#FFFFFF] w-[100%] py-6 flex items-center justify-center">
            <div className="flex items-center justify-center border w-[85%] py-4 px-6 border-[#7F7D7D] rounded-full">
                <textarea
                    rows={1}
                    placeholder="Send a message"
                    className="outline-none overflow-hidden placeholder:text-xl text-xl w-[90%] min-h-min max-h-[84px]" 
                />
                <div className="flex gap-2 w-[20%]">
                    <img src={Microphone} alt="A microphone icon" />
                    <img src={Attach} alt="An attach icon" />
                    <img src={Send} alt="A send icon" />
                </div>
            </div>
        </div>
    )
}

export default ChatBox;