import Contact from "../../HomeArea/Contact/Contact";
import MUI from "../../HomeArea/MUI/MUI";
import Transitions from "../../HomeArea/Transitions/Transitions";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<h1>Main</h1>
            <Contact/>
            <MUI/>
            <Transitions/>
        </div>
    );
}

export default Main;
