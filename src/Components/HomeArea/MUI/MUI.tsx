import { Box, Button, ButtonGroup, createTheme, Icon, SvgIcon, ThemeProvider, Typography } from "@material-ui/core";
import { Delete, DeleteOutlineOutlined, DeleteRounded, Save } from "@material-ui/icons";
import { Alert } from '@material-ui/lab';
import "./MUI.css";

function MUI(): JSX.Element {

    const theme = createTheme();

    // theme.typography.h3 = {
    //     fontSize: '1.2rem',
    //     '@media (min-width:600px)': {
    //         fontSize: '1.5rem',
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         fontSize: '2.4rem',
    //     },
    // };

    return (
        <div className="MUI">
            <h2>MUI</h2>
            <Box color="text.primary" clone>
                <Button>Primary</Button>
            </Box>

            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>

            <br /><br />

            <ButtonGroup>
                <Button startIcon={<Save />} variant="contained" color="primary">Primary</Button>
                <Button startIcon={<DeleteOutlineOutlined/>} variant="contained" color="secondary">Secondary</Button>
            </ButtonGroup>

            <br /><br />

            <Box className="boxButton" bgcolor="primary.main">
                <Button>primary.main</Button>
            </Box>
            <Box className="boxButton" bgcolor="secondary.main">
                <Button>secondary.main</Button>
            </Box>
            <Box className="boxButton" bgcolor="error.main">
                <Button>error.main</Button>
            </Box>
            <Box className="boxButton" bgcolor="warning.main">
                <Button>warning.main</Button>
            </Box>
            <Box className="boxButton" bgcolor="info.main">
                <Button>info.main</Button>
            </Box>
            <Box className="boxButton" bgcolor="success.main">
                <Button>success.main</Button>
            </Box>
            <Box className="boxButton" bgcolor="text.primary">
                <Button>text.primary</Button>
            </Box>
            <Box className="boxButton" bgcolor="text.secondary">
                <Button>text.secondary</Button>
            </Box>
            <Box className="boxButton" bgcolor="text.disabled">
                <Button>text.disabled</Button>
            </Box>

            <br />

            <Box className="boxButton" color="primary.main">
                <h3>primary.main</h3>
            </Box>
            <Box className="boxButton" color="secondary.main">
                <h3>secondary.main</h3>
            </Box>
            <Box className="boxButton" color="error.main">
                <h3>error.main</h3>
            </Box>
            <Box className="boxButton" color="warning.main">
                <h3>warning.main</h3>
            </Box>
            <Box className="boxButton" color="info.main">
                <h3>info.main</h3>
            </Box>
            <Box className="boxButton" color="success.main">
                <h3>success.main</h3>
            </Box>
            <Box className="boxButton" color="text.primary">
                <h3>text.primary</h3>
            </Box>
            <Box className="boxButton" color="text.secondary">
                <h3>text.secondary</h3>
            </Box>
            <Box className="boxButton" color="text.disabled">
                <h3>text.disabled</h3>
            </Box>

            <br />

            <h2>Topography</h2>

            <h3>Responsive h3</h3>
            <h4>Responsive h4</h4>
            <h5>Responsive h5</h5>
            <br />

            <ThemeProvider theme={theme}>
                <Typography variant="h3">Responsive h3</Typography>
                <Typography variant="h4">Responsive h4</Typography>
                <Typography variant="h5">Responsive h5</Typography>
            </ThemeProvider>

            <br />

            <h2>Alerts</h2>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>

            <br />

        </div>
    );
}

export default MUI;
