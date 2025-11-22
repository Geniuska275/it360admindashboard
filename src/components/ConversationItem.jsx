import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

const ConversationItem = ({
  name,
  lastMessage,
  timestamp,
  image,
  unreadCount,
  isActive,
  isOnline,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-start gap-3 p-4 cursor-pointer transition-all duration-300 hover:bg-secondary/50 border-b border-border",
        isActive && "bg-secondary"
      )}
    >
      <div className="relative flex-shrink-0">
       <img className="w-10 h-10 rounded-full" src={image} alt={name} />
        {isOnline && (
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
        )}
      </div>

      <div className="flex-1 flex flex-col w-10">
        <h1>{name}</h1>
        <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
       
       
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs text-muted-foreground mb-1">{timestamp}</span>
        {unreadCount > 0 && (
          <div className="bg-[#EB5757] text-white text-xs font-medium px-2 py-1 rounded-full min-w-[20px] text-center">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationItem;
