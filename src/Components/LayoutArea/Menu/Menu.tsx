import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <div className="Nav">
                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/home" exact>
                    Home
                </NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/about-me" exact>About me</NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/full-stack-developer" exact>Full stack developer</NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/booth-design" exact>Booth design</NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/graphics-and-branding" exact>Graphics and branding</NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/3d-modeling" exact>3D Modeling</NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="product-design" exact>Product design</NavLink>

                <br /><br />

                <NavLink className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                    // onClick={handleClose}
                    to="/my-art" exact>My art</NavLink>

            </div>

            {/* <br />
            <NavLink to="/home" exact>Home</NavLink>
            <br /><br />
            <NavLink to="/about-me" exact>About me</NavLink>
            <br /><br />
            <NavLink to="/full-stack-developer" exact>Full stack developer</NavLink>
            <br /><br />
            <NavLink to="/booth-design" exact>Booth design</NavLink>
            <br /><br />
            <NavLink to="/graphics-and-branding" exact>Graphics and branding</NavLink>
            <br /><br />
            <NavLink to="/3d-modeling" exact>3D Modeling</NavLink>
            <br /><br />
            <NavLink to="product-design" exact>Product design</NavLink>
            <br /><br />
            <NavLink to="/my-art" exact>My art</NavLink> */}

        </div>
    );
}

export default Menu;
