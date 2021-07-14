import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { Component } from "react";
import "./UserGreeting.css";

interface loggedInState {
    isLoggedIn: boolean;
}

let theme = createTheme();
theme = responsiveFontSizes(theme);

class UserGreeting extends Component<{}, loggedInState>{

    public constructor(props: {}) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }

    public render(): JSX.Element {
        if (this.state.isLoggedIn) {
            return (
                <div className="UserGreeting">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5">Welcome Client</Typography>
                    </ThemeProvider>
                </div>
            );
        } else {
            return (
                <div className="UserGreeting">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5">Welcome</Typography>
                    </ThemeProvider>
                </div>
            );
        }
        // return (
        //     <div className="UserGreeting">
        // 		<div>Welcome Client</div>
        //         <div>Welcome Employee</div>
        //     </div>
        // );
    }
}

export default UserGreeting;
