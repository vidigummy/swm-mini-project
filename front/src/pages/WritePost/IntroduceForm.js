import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AddressForm({ user }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                소개작성
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="name"
                        name="name"
                        value={user.name}
                        fullWidth
                        disabled
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="contact"
                        name="contact"
                        value={user.contact}
                        fullWidth
                        disabled
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="wish_topic"
                        name="wish_topic"
                        label="희망 프로젝트 주제"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="introduce"
                        name="introduce"
                        label="자기소개"
                        fullWidth
                        multiline
                        rows={10}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
