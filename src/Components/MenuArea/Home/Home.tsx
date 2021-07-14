import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./Home.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class Home extends Component {

    public render(): JSX.Element {
        return (
            <div className="Home">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">Home</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default Home;
