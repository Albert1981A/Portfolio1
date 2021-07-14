import "./LogoAlbert.css";
import logoImage from "../../../Assets/images/Albert-Abuav-Logo.png";

function LogoAlbert(): JSX.Element {
    return (
        <div className="LogoAlbert">
			<img src={logoImage} alt="Albert-Abuav-Logo"/>
        </div>
    );
}

export default LogoAlbert;
