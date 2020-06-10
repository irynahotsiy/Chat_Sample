import React, { useState, useRef } from "react";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { ChatComponent } from "../ChatComponent.jsx/ChatComponent";
import { ChatList } from "../ChatList/ChatList";
import { db } from "../../db";
import { addNewMessage } from "./utils/utils";
import {
  Page,
  LelfSidePage,
  TopOfLelfSidePage,
  PositionRelative,
  ProfilePicture,
  StatusPosition,
  Header,
  Scroll,
  RightSidePage,
} from "../style";

import { STATUS } from "../../constants/status";

export function MainComponent(props) {
  const [chats, setChats] = useState(db);
  const [currentChatIdx, setCurrentChatIdx] = useState(0);
  const chat = chats[currentChatIdx];
  const photoUrl = require("../../profile/user.png");
  const [value, setValue] = useState("");
  const scrollContainerRef = useRef();

  function onChatClick(currentChatIdx) {
    setCurrentChatIdx(currentChatIdx);
  }

  function handleClick(event) {
    setValue(event.target.value);
  }

  // get data from Chuck Norris API
  async function getResponse() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    const json = await response.json();
    return json;
  }

  function sendMessage(event) {
    event.preventDefault();
    if (value === "") return;
    // add new message to chat messages
    const chatWithNewMessage = addNewMessage(
      chats,
      currentChatIdx,
      value,
      false,
      scrollContainerRef.current
    );
    setChats(chatWithNewMessage);
    setValue("");
    // add answer to chat array with generated value from Chuck Norris API
    setTimeout(async () => {
      const json = await getResponse();
      const chatWithNewAnswer = addNewMessage(
        chats,
        currentChatIdx,
        json.value,
        true,
        scrollContainerRef.current
      );
      setChats(chatWithNewAnswer);
    }, 500);
  }

  return (
    <>
      <Page>
        <LelfSidePage>
          <TopOfLelfSidePage>
            <PositionRelative>
              <ProfilePicture src={photoUrl} alt="Profile" />
              <StatusPosition color={STATUS.online.color}>
                {STATUS.online.symbol}
              </StatusPosition>
            </PositionRelative>

            <SearchComponent />
          </TopOfLelfSidePage>

          <Header>Chats</Header>
          <Scroll>
            <ChatList chats={chats} onChatClick={onChatClick} />
          </Scroll>
        </LelfSidePage>
        <RightSidePage>
          <ChatComponent
            chat={chat}
            value={value}
            handleClick={handleClick}
            handleSubmit={sendMessage}
            scrollContainerRef={scrollContainerRef}
          />
        </RightSidePage>
      </Page>
    </>
  );
}
