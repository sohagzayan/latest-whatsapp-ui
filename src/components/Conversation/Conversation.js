import React from "react";
import ConversationArea from "../ConversationArea/ConversationArea";
import ConversationController from "../ConversationController/ConversationController";
import ConversationSender from "../ConversationSender/ConversationSender";

const Conversation = () => {
  return (
    <div>
      <div>
        <div>
          <ConversationController />
          <ConversationArea />
          <ConversationSender />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
