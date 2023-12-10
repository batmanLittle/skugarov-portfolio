import "./Main.css";
import Portfolio from "../Portfolio/Portfolio";
import MyActiv from "../MyActiv/MyActiv";
import SelectedProjects from "../SelectedProjects/SelectedProjects";
import FreeTime from "../FreeTime/FreeTime";

function Main() {
  return (
    <div className="main">
      <Portfolio />
      <FreeTime />
      <MyActiv />
      <SelectedProjects />
    </div>
  );
}

export default Main;
