import { useState } from "react";
import { MessageCircle, X, BookOpen, LifeBuoy, Send } from "lucide-react";

const FloatingHelpWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* PANEL */}
      <div
        className={`
          fixed bottom-24 right-6 z-50 w-80
          rounded-2xl border border-neutral-200
          bg-white shadow-2xl
          transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="size-4 text-primary" />
            <h3 className="font-semibold text-sm">Panda Support</h3>
          </div>

          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <X className="size-4 text-neutral-500" />
          </button>
        </div>

        {/* CHAT AREA */}
        <div className="h-56 overflow-y-auto p-4 space-y-3 text-sm">
          <div className="bg-neutral-100 p-2 rounded-lg w-fit">
            👋 Hi! How can we help you today?
          </div>

          <div className="bg-indigo-50 text-indigo-700 p-2 rounded-lg w-fit">
            You can ask about setup, pricing or features.
          </div>
        </div>

        {/* INPUT */}
        <div className="border-t p-3 flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 text-sm border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="bg-primary text-white px-3 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
            <Send className="size-4" />
          </button>
        </div>

        {/* QUICK LINKS */}
        <div className="border-t p-3 space-y-2">
          <button className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer">
            <BookOpen className="size-4" />
            Documentation
          </button>

          <button className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer">
            <LifeBuoy className="size-4" />
            Contact Support
          </button>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="
            flex items-center justify-center
            h-14 w-14 rounded-full
            bg-primary text-white
            shadow-lg
            hover:bg-primary-700 hover:scale-105
            transition
            cursor-pointer
          "
        >
          <MessageCircle className="size-6" />
        </button>
      </div>
    </>
  );
};

export default FloatingHelpWidget;
