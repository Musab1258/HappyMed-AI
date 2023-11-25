import Settings from "../../../images/chat/settings.svg";
import Download from "../../../images/chat/download.svg";
import Profile from "../../../images/chat/profile.svg";

const ChatHeader = () => {
    return (
        <div className="bg-[#FFFFFF] w-[100%] py-4 px-8 flex items-center justify-end gap-2">
            <img src={Settings} alt="A settings icon" />
            <img src={Download} alt="A download icon" />
            <img src={Profile} alt="A profile icon" />
        </div>
    )
}

export default ChatHeader;