'use client'

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

const Page = () => {
  const [sidebarOpeneed, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');


  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoanding] = useState(false);


  useEffect(() => {
    setChatActive(chatList?.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);



  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)



  const handleClearConversations = () => {
    if (AILoading) return;

    setChatActiveId('');
    setChatList([])
  }

  const handleNewChat = () => {
    if (AILoading) return;


    setChatActiveId('');
    closeSidebar();
  }

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      //Creting new chat
      let newChatId = uuidv4();

      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);
    } else {
      //Updating existing chat
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message


      });
      setChatList(chatListClone);
    }

    setAILoanding(true);

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpeneed}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />


        <Footer
          disabled={AILoading}
          onSendMessage={handleSendMessage}
        />

      </section>

    </main>
  );
}

export default Page;