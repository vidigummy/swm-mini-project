import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

export default function NameContactForm({
    user,
    isAlreadyExist,
    onInputChange,
}) {
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
                {isAlreadyExist && (
                    <Grid item xs={12}>
                        <Typography color="error" gutterBottom>
                            이미 작성한 글이 존재합니다.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </React.Fragment>
    );
}
