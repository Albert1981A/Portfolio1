import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css"
import {
    teal, deepOrange, red, amber, blueGrey, lightGreen
} from "@material-ui/core/colors";

const customTheme = createMuiTheme({
    palette: {
        // type: "dark"
        primary: teal,
        secondary: deepOrange,
        error: red,
        warning: amber,
        info: blueGrey,
        success: lightGreen
    }
});

/*export*/ function Layout(): JSX.Element { // JSX.Element = The Component UI
    return (
        <BrowserRouter>
        <ThemeProvider theme={customTheme}>
        <section className="container">
            <div id="displayLogo" className="header-1">
                <Logo />
            </div>
            <header className="header-2">
                <Header />
            </header>
            <aside className="menu">
                <Menu />
            </aside>
            <main className="main">
                {/* <Main /> */}
                <Routing/>
            </main>
            <div id="displayMenu" className="footer-1">
            </div>
            <footer className="footer-2">
                <Footer />
            </footer>
        </section>
        </ThemeProvider>
        </BrowserRouter>
    );
}

export default Layout; // Alternative Default


function CreateMuiTheme() {
    throw new Error("Function not implemented.");
}

