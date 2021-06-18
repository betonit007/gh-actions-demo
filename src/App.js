import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from './components/FriendCard'
import friends from './friends.json'

function App() {
  
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(friend => <FriendCard info={friend}/>)}
    </Wrapper>
  );
}

export default App;
