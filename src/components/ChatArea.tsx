import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageiTem } from "./ChatMessageItem";

type Props = {
    chat: Chat | undefined;
}



export const ChatArea = ({ chat }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceholder />}
            {chat && chat.messages.map(item => (
                <ChatMessageiTem
                    key={item.id}
                    item={item}
                />
            ))}
        </section>
    );
}