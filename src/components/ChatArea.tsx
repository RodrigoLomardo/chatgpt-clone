import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageiTem } from "./ChatMessageItem";
import { ChatMessageLoading } from "./ChatMessageLoading";

type Props = {
    chat: Chat | undefined;
    loading: boolean;
}



export const ChatArea = ({ chat, loading }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceholder />}
            {chat && chat.messages.map(item => (
                <ChatMessageiTem
                    key={item.id}
                    item={item}
                />
            ))}
            {loading && <ChatMessageLoading />}
        </section>
    );
}