import React from "react";

import { formatDateTime } from "../../helpers";
import {
  ProfilePicture,
  PositionRelative,
  StatusPosition,
  ChatScroll,
  RightPageTop,
  Name,
  MessageBox,
  Message,
  AlignTop,
  Time,
  RightPageBottom,
  Form,
  SendIcon,
  Input,
  MessageAlign,
} from "../style";
import { STATUS } from "../../constants/status";

export function ChatComponent(props) {
  const { chat, value, handleSubmit, handleClick, scrollContainerRef } = props;
  const messages = chat.messages;
  const send = require("../../icons/send.png");

  return (
    <>
      <RightPageTop>
        <PositionRelative>
          <ProfilePicture src={chat.photoUrl} alt="Profile" />
          <StatusPosition
            color={chat.isOnline ? STATUS.online.color : STATUS.offline.color}
          >
            {chat.isOnline ? STATUS.online.symbol : STATUS.offline.symbol}
          </StatusPosition>
        </PositionRelative>
        <Name padding="15px">{chat.name}</Name>
      </RightPageTop>

      <ChatScroll ref={scrollContainerRef}>
        {messages.map((el, idx) => (
          <MessageBox key={idx}>
            <Message incomming={el.incomming}>
              <AlignTop>
                {el.incomming ? (
                  <ProfilePicture src={chat.photoUrl} alt="Profile" />
                ) : (
                  <div></div>
                )}
                <MessageAlign incomming={el.incomming}>
                  <p>{el.message}</p>

                  <Time>{formatDateTime(el.time)}</Time>
                </MessageAlign>
              </AlignTop>
            </Message>
          </MessageBox>
        ))}
      </ChatScroll>
      <RightPageBottom>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Input
            type="text"
            placeholder="Type your message"
            value={value}
            onChange={(e) => {
              handleClick(e);
            }}
          />
          <SendIcon
            src={send}
            alt="Send"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </Form>
      </RightPageBottom>
    </>
  );
}
