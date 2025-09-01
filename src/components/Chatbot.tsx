import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatbotResponses } from "@/data/chatbotData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hai 👋 Saya Chatbot Empati. Ada apa yang boleh saya bantu?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
  if (!input.trim()) return;

  // Add user message
  setMessages([...messages, { from: "user", text: input }]);

  // Cari jawapan berdasarkan keywords
  let reply: string = "Maaf, saya tak faham 😅. Cuba tanya soalan lain.";
  const lowerInput = input.toLowerCase();
  for (const item of chatbotResponses) {
    if (item.keywords.some((kw) => lowerInput.includes(kw))) {
      // Check kalau reply function → panggil dia
      reply = typeof item.reply === "function" ? item.reply() : item.reply;
      break;
    }
  }

  setMessages((prev) => [...prev, { from: "bot", text: reply }]);
  setInput("");
};


  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[28rem] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h4 className="font-semibold">Chatbot Empati</h4>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-gray-100 text-gray-800 self-start"
                    : "bg-primary text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Tulis mesej..."
                className="flex-1 px-3 py-2 rounded-lg border focus:outline-none text-sm"
              />
              <Button onClick={handleSend} size="sm">
                Hantar
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-gray-500 leading-snug">
              ⚠️ Chatbot ini hanya untuk maklumat umum.  
              Jika anda dalam kecemasan atau tertekan, sila hubungi 999 atau pergi ke hospital terdekat.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
