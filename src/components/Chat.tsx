"use client";
import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
type Props = {};

const Chat = (props: Props) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

  const chatContainer = useRef<HTMLDivElement>(null);

  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatContainer.current as HTMLDivElement;
    if (scrollHeight > scrollTop + offsetHeight) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
    }
  };

  useEffect(() => {
    scroll();
  }, [messages]);

  const renderResponse = () => {
    return (
      <div className="response">
        {messages.map((message) => (
          <div key={message.id} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={chatContainer}>
      {renderResponse()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input-field"
          onChange={handleInputChange}
          value={input}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
