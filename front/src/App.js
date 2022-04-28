import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WritePost from "./pages/WritePost";

const theme = createTheme();

export default function () {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative" style={{ background: "white" }}>
                <Toolbar>
                    <Link to="/">
                        <img src="logo.png" />
                    </Link>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<WritePost />} />
            </Routes>

            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    SWM 13th
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    위영민 이정훈 이현 최은기 류동인
                </Typography>
            </Box>
        </ThemeProvider>
    );
}
