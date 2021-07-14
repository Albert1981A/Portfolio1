import { Button, Menu, MenuItem } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { ArtTrack, Height, MenuOpen } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav(): JSX.Element {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    }

    const openMenu = (event:any) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <div className="Nav">
            <Button id="menuButton"
                variant="contained"
                color="primary"
                onClick={openMenu}
            >
                <MenuOpen style={{ fontSize: 40 }} />
            </Button>

			<Menu 
            id="myMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About me</MenuItem>
                <MenuItem onClick={handleClose}>Full stack developer</MenuItem>
                <MenuItem onClick={handleClose}>Booth design</MenuItem>
                <MenuItem onClick={handleClose}>Graphics and branding</MenuItem>
                <MenuItem onClick={handleClose}>3D Modeling</MenuItem>
                <MenuItem onClick={handleClose}>Product design</MenuItem>
                <MenuItem onClick={handleClose}>My art</MenuItem>
                <MenuItem onClick={handleClose}>Home</MenuItem> */}

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
            </Menu>
        </div>
    );
}

export default Nav;
