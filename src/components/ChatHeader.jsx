import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Video, MoreVertical } from "lucide-react";
import React from "react";


const ChatHeader = ({ name, avatar, isOnline, lastSeen }) => {
  return (
    <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img className="w-10 h-10 rounded-full" src={avatar} alt={name} />
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-foreground">{name}</h2>
          <p className="text-xs text-muted-foreground">
            {isOnline ? "Online" : lastSeen || "Offline"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {/* <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Video className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <MoreVertical className="h-5 w-5" />
        </Button> */}
      </div>
    </div>
  );
};

export default ChatHeader;
