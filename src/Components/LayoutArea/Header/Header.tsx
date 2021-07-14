import UserGreeting from "../../HomeArea/UserGreeting/UserGreeting";
import LogoAlbert from "../LogoAlbert/LogoAlbert";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div> <LogoAlbert/></div>
            
            <div className="greeting">
            <UserGreeting/>
            </div>
            
        </div>
    );
}

export default Header;
