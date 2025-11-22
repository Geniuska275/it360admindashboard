import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";


const MessageBubble = ({ message, timestamp, isSent, avatar, sender }) => {
  return (
    <div
      className={cn(
        "flex gap-3 mb-4 animate-fade-in",
        isSent ? "flex-row-reverse" : "flex-row"
      )}
    >
      {!isSent && (
       
          <img className="w-8 h-8 rounded-full" src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"} alt={sender} />
        
        
      )}
      
      <div className={cn("flex flex-col max-w-[70%]", isSent && "items-end")}>
        {!isSent && sender && (
          <span className="text-xs text-muted-foreground mb-1 px-1">{sender}</span>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 shadow-soft bg-[#EB5757] text-white transition-all duration-300 hover:shadow-md",
            isSent
              ? "bg-message-sent text-message-sent-foreground bg-white rounded-br-sm"
              : "bg-message-received  bg-[#EB5757] text-white  rounded-bl-sm border border-border"
          )}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1 px-1">{timestamp}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
