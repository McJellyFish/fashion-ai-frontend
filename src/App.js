import React, { useState } from "react";
import { analyzeImage } from "./services/api";
import ChatWindow from "./components/ChatWindow";
import ImageUploader from "./components/ImageUploader";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleImageUpload = async (file) => {
    try {
      const data = await analyzeImage(file);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          image: data.image,
          detections: data.detections,
          products: data.products,
          gender: data.gender,
          color: data.color,
          explanation: data.explanation,
        },
      ]);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="app-container">
      
      {/* Chat Area */}
      <div className="flex-grow-1 overflow-auto d-flex justify-content-center">
        <div className="chat-window py-4">
          <ChatWindow messages={messages} />
        </div>
      </div>

      {/* Bottom Upload Bar */}
      <div className="border-top bg-light py-3 d-flex justify-content-center">
        <div className="chat-window d-flex justify-content-center gap-3">
          <ImageUploader onUpload={handleImageUpload} />
        </div>
      </div>

    </div>
  );
}

export default App;