import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare } from "lucide-react";
import ConversationItem from "@/components/ConversationItem";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import React from "react";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
// Mock data
const conversations = [
  {
    id: 1,
    name: "Benjamin Lauren",
    lastMessage: "Sounds great! See you then 👋",
    timestamp: "2m ago",
    unreadCount: 2,
    isOnline: true,
    image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Alex Morgan",
    lastMessage: "Did you check the latest updates?",
    timestamp: "1h ago",
    unreadCount: 0,
    isOnline: true,
    image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Design Team",
    lastMessage: "Jamie: The mockups look fantastic!",
    timestamp: "3h ago",
    unreadCount: 5,
    isOnline: false,
    image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Marcus Rodriguez",
    lastMessage: "Thanks for the quick response!",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: false,
    image:"https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
];

const mockMessages = [
  {
    id: 1,
    message: "Hey! How's the project coming along?",
    timestamp: "10:30 AM",
    isSent: false,
    sender: "Sarah Chen",
  },
  {
    id: 2,
    message: "It's going really well! Just finished the main features.",
    timestamp: "10:32 AM",
    isSent: true,
  },
  {
    id: 3,
    message: "That's awesome! Can't wait to see the demo.",
    timestamp: "10:33 AM",
    isSent: false,
    sender: "Sarah Chen",
  },
  {
    id: 4,
    message: "I'll have it ready by tomorrow afternoon. Let's schedule a call?",
    timestamp: "10:35 AM",
    isSent: true,
  },
  {
    id: 5,
    message: "Sounds great! See you then 👋",
    timestamp: "10:36 AM",
    isSent: false,
    sender: "Sarah Chen",
  },
];

const Message= () => {
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <div className='flex-1 bg-white py-4 shadow-md w-full top-0 sticky z-10'>
               <div className='flex gap-3 items-center px-6'>
                 <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
                 <h2 className='border-l px-2 text-[#71717A]'>Message & Notification</h2>
                 <IoIosArrowForward />
                 <h2 className='px-2 text-black font-bold'>Messaging System</h2>
               </div>
             </div>
   <div className="p-6">

    <div className="flex h-screen bg-background mx-auto mt-4 shadow-lg rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-border bg-card flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
          
            <h1 className="text-xl font-bold text-foreground">Messaging Systems</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 rounded-xl border-border focus:ring-2 focus:ring-primary/20"
              />
          </div>
        </div>

        {/* Conversations List */}
        <ScrollArea className="flex-1">
          {conversations.map((conv) => (
            <ConversationItem
            key={conv.id}
            {...conv}
            isActive={conv.id === activeConversation.id}
            onClick={() => setActiveConversation(conv)}
            />
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatHeader
          avatar={activeConversation.image}
          name={activeConversation.name}
          isOnline={activeConversation.isOnline}
          />

        {/* Messages */}
        <ScrollArea className="flex-1 p-6 bg-secondary">
          <div className="max-w-4xl mx-auto">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} {...msg} />
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
              </div>
            </div>
  );
};

export default Message;

