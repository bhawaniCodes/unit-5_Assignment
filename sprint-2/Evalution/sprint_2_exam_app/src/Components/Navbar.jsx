import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Signup } from "./Signup";
import { useHistory } from "react-router";

export default function Navbar() {
    const history = useHistory();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Meetup
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() => history.push("/dashboard")}
                        >
                            Dashboard
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => history.push("/login")}
                        >
                            Login
                        </Button>
                        <Button color="inherit"
                            onClick={() => history.push("/signup")}
                        >Signup</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
