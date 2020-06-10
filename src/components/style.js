import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const BorderBottom = styled.div`
  border-bottom: 1px solid #ebebeb;
`;

export const Page = styled(Row)`
  height: 100%;
`;

export const LelfSidePage = styled(Column)`
  flex: 1;
  border: 1px solid #ebebeb;
  min-width: 400px;
  width: 100%;
`;

export const TopOfLelfSidePage = styled(BorderBottom)`
  background-color: #f5f5f5;
  padding: 20px;
`;

export const PositionRelative = styled.div`
  position: relative;
`;

export const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 45px;
  height: 45px;
`;

export const StatusPosition = styled.div`
  position: absolute;
  font-size: 0.8rem;
  font-weight: bold;
  left: 35px;
  bottom: -2px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  padding: 0 1.5px;
  border-radius: 100%;
`;

export const Header = styled.div`
  color: #31b2b9;
  padding: 30px 20px;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const Scroll = styled.div`
  overflow: scroll;
`;

export const ChatScroll = styled(Scroll)`
  height: 100%;
  background-color: #fafafa;
`;

export const RightSidePage = styled(Column)`
  flex: 2;
  height: 100%;
`;

export const ChatItem = styled(Row)`
  border-bottom: 1px solid #ebebeb;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`;

export const ImageBox = styled.div`
  flex: 1;
`;

export const InformationBox = styled(Column)`
  flex: 5;
`;

export const DetailsBox = styled(Row)`
  align-items: center;
  justify-content: space-between;
  color: #2f2f2f;
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: #2f2f2f;
`;

export const Name = styled.div`
  color: #2f2f2f;
  padding-left: ${(props) => props.padding};
`;

export const ChatLastMessage = styled.div`
  font-size: 0.9rem;
  width: 220px;
  color: grey;
`;

export const RightPageTop = styled(Row)`
  padding-left: 20px;
  height: 100px;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  background-color: #f5f5f5;
`;

export const MessageBox = styled(Column)`
  padding: 15px;
`;

export const Message = styled(Column)`
  align-items: ${(props) => (props.incomming ? "flex-start" : "flex-end")};
  p {
    background-color: ${(props) => (props.incomming ? "#3c4154" : "#e0e0e0")};
    color: ${(props) => (props.incomming ? "#fafafa" : "#3c4154")};
    padding: 10px;
    margin: 0 0 10px 10px;
    border-radius: 1rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const MessageAlign = styled(Column)`
  align-items: ${(props) => (props.incomming ? "flex-start" : "flex-end")};
`;

export const AlignTop = styled(Row)`
  align-items: top;
`;

export const Time = styled.div`
  padding: 0 10px;
  color: #7f7f7f;
  font-size: 0.8rem;
`;

export const RightPageBottom = styled(Row)`
  align-items: center;
  height: 150px;
  border-top: 1px solid #ebebeb;
  background-color: #f5f5f5;
  padding: 0 30px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const SendIcon = styled.img`
  position: absolute;
  right: 15px;
  width: 20px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  width: 20px;
  left: 10px;
  bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #ebebeb;
  padding: 15px;
  background: #fafafa;
  outline: none;
`;

export const Search = styled(Input)`
  margin-top: 20px;
  padding: 10px 40px;
`;
