import "./App.css";
import Heading from "./Components/Heading/Heading";
import { useSelector } from "react-redux";
import Board from "./Components/Board/Board";
import { rootState } from "./Components/interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board);

  return (
    <div className="App">
      <Heading type="h1" text="Wordiee" />
      {/* <Heading type="subtitle" text="Another Wordle Clone" /> */}
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
