import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import "./Footer.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <ThemeProvider theme={theme}>
                <Typography>contact me by email: <a href="mailto:albrtabo@gmail.com">albrtabo@gmail.com</a>, phone: <a href="tel:+9720525830300">052-5830300</a> &#169;</Typography>
            </ThemeProvider>
            {/* <p>contact me by email: <a href="mailto:albrtabo@gmail.com">albrtabo@gmail.com</a>, phone: <a href="tel:+9720525830300">052-5830300</a> &#169; </p> */}
        </div>
    );
}

export default Footer;
