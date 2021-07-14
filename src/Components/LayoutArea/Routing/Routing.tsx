import { Redirect, Route, Switch } from "react-router-dom";
import AboutMe from "../../MenuArea/AboutMe/AboutMe";
import BoothDesign from "../../MenuArea/BoothDesign/BoothDesign";
import FullStackDeveloper from "../../MenuArea/FullStackDeveloper/FullStackDeveloper";
import GraphicsAndBranding from "../../MenuArea/GraphicsAndBranding/GraphicsAndBranding";
import Home from "../../MenuArea/Home/Home";
import Modeling3D from "../../MenuArea/Modeling3D/Modeling3D";
import MyArt from "../../MenuArea/MyArt/MyArt";
import ProductDesign from "../../MenuArea/ProductDesign/ProductDesign";
import Page404 from "../../SharedArea/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Home} exact/>
                <Route path="/about-me" component={AboutMe} exact/>
                <Route path="/booth-design" component={BoothDesign} exact/>
                <Route path="/full-stack-developer" component={FullStackDeveloper} exact/>
                <Route path="/graphics-and-branding" component={GraphicsAndBranding} exact/>
                <Route path="/3d-modeling" component={Modeling3D} exact/>
                <Route path="/my-art" component={MyArt} exact/>
                <Route path="/product-design" component={ProductDesign} exact/>
                <Redirect from="/" to="/home" exact/>
                <Route component={Page404}/> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;
