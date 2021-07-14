import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./Modeling3D.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class Modeling3D extends Component {

    public render(): JSX.Element {
        return (
            <div className="Modeling3D">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">3D Modeling</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default Modeling3D;
