import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Smile } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";



const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border bg-card p-4">
      <div className="flex items-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="resize-none min-h-[44px] max-h-32 rounded-2xl border-border focus:ring-2 focus:ring-primary/20 transition-all pr-10"
            rows={1}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 bottom-2 h-7 w-7 rounded-full bg-[#EB5757] hover:shadow-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
             <Send className="h-5 w-5 text-white"  />
          </Button>
        </div>

       
      </div>
    </div>
  );
};

export default MessageInput;
