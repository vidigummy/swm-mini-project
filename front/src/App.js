import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import WritePost from './pages/WritePost';

const theme = createTheme();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" style={{ background: 'white' }}>
          <Toolbar>
            <Link to="/">
              <img src="logo.png" alt="로고 이미지" />
            </Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/post" element={<WritePost />} />
        </Routes>

        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            SWM 13th
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
            위영민 이정훈 이현 최은기 류동인
          </Typography>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
