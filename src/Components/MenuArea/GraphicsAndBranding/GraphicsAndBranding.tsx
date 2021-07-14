import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./GraphicsAndBranding.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class GraphicsAndBranding extends Component {

    public render(): JSX.Element {
        return (
            <div className="GraphicsAndBranding">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">Graphics and branding</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default GraphicsAndBranding;
