//@ts-nocheck

"use client";
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import { Send } from "lucide-react";

const ChatMessage = ({
  message,
  isBot,
}: {
  message: string;
  isBot: boolean;
}) => (
  <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
    <div
      className={`
      max-w-[70%] p-3 rounded-lg
      ${isBot ? "bg-[#CCFBEF] text-[#115E56]" : "bg-[#115E56] text-white"}
    `}
    >
      {message}
    </div>
  </div>
);

const sampleResponses = [
  "Hello! How can I assist you today?",
  "That's an interesting question. Let me help you with that.",
  "I understand. Could you provide more details?",
  "Based on what you're saying, I'd recommend...",
  "Here's what I think about that...",
];

export default function ChatsPage() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = (e: any) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessages = [...messages, { text: inputText, isBot: false }];
    setMessages(newMessages);
    setInputText("");

    setTimeout(() => {
      const randomResponse =
        sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      setMessages([...newMessages, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="w-full min-h-[500px] max-h-[650px] h-full overflow-y-auto rounded-lg border border-gray-200 flex flex-col bg-white shadow-lg">
          {/* Chat Header */}
          <div className="p-4 text-black rounded-t-lg">
            <h2 className="text-lg font-semibold">Chat with us</h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#115E56]"
              />
              <button
                type="submit"
                className="p-2 bg-[#115E56] text-white rounded-lg hover:bg-[#0a4740] focus:outline-none focus:ring-2 focus:ring-[#115E56]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
