import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./FullStackDeveloper.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class FullStackDeveloper extends Component {

    public render(): JSX.Element {
        return (
            <div className="FullStackDeveloper">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">Full stack developer</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default FullStackDeveloper;
