import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./AboutMe.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class AboutMe extends Component {

    public render(): JSX.Element {
        return (
            <div className="AboutMe">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">About me</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default AboutMe;
