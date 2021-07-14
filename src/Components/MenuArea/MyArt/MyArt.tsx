import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./MyArt.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class MyArt extends Component {

    public render(): JSX.Element {
        return (
            <div className="MyArt">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">My Art</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default MyArt;
