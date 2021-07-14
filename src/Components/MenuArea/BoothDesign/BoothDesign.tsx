import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./BoothDesign.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class BoothDesign extends Component {

    public render(): JSX.Element {
        return (
            <div className="BoothDesign">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">Booth design</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default BoothDesign;
