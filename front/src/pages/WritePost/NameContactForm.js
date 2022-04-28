import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

export default function ({ user, onInputChange }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                개인정보입력
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        onChange={onInputChange}
                        required
                        id="name"
                        name="name"
                        label="이름"
                        value={user.name}
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={onInputChange}
                        required
                        id="contact"
                        name="contact"
                        label="전화번호"
                        value={user.contact}
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
