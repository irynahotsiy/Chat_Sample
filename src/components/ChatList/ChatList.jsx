import React from "react";
import { formatDate, formatMessage } from "../../helpers";
import {
  PositionRelative,
  ProfilePicture,
  StatusPosition,
  ChatItem,
  ImageBox,
  InformationBox,
  DetailsBox,
  Date,
  ChatLastMessage,
  Name,
} from "../style";
import { STATUS } from "../../constants/status";

export function ChatList(props) {
  const { chats, onChatClick } = props;
  return (
    <>
      {chats.map((el, idx) => (
        <ChatItem key={el.id} onClick={() => onChatClick(idx)}>
          <ImageBox>
            <PositionRelative>
              <ProfilePicture src={el.photoUrl} alt="Profile" />
              <StatusPosition
                color={el.isOnline ? STATUS.online.color : STATUS.offline.color}
              >
                {el.isOnline ? STATUS.online.symbol : STATUS.offline.symbol}
              </StatusPosition>
            </PositionRelative>
          </ImageBox>
          <InformationBox>
            <DetailsBox>
              <Name>{el.name}</Name>
              <Date style={{ fontSize: "0.9rem" }}>{formatDate(el.date)}</Date>
            </DetailsBox>
            <ChatLastMessage>{formatMessage(el.messages)}</ChatLastMessage>
          </InformationBox>
        </ChatItem>
      ))}
    </>
  );
}
