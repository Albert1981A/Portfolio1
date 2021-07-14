import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./ProductDesign.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

class ProductDesign extends Component {

    public render(): JSX.Element {
        return (
            <div className="ProductDesign">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">Product design</Typography>
                </ThemeProvider>
            </div>
        );
    }
}

export default ProductDesign;
