import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IntroduceForm from "./IntroduceForm";
import NameContactForm from "./NameContactForm";

const steps = ["개인정보입력", "소개작성"];

export default function WritePost() {
    const [activeStep, setActiveStep] = useState(0);
    const [user, setUser] = useState({ name: "", contact: "" });
    const onInputChange = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const navigate = useNavigate();

    function handleNext() {
        setActiveStep(activeStep + 1);
        if (activeStep === 1) {
            navigate("/"); // 일단 메인화면으로 API호출 필요
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
                <Typography component="h1" variant="h4" align="center">
                    소개 작성
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === 0 ? (
                        <NameContactForm
                            user={user}
                            onInputChange={onInputChange}
                            isAlreadyExist={false} // 이미 존재하면 true
                        />
                    ) : (
                        <IntroduceForm user={user} />
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                뒤로
                            </Button>
                        )}

                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {activeStep === steps.length - 1 ? "등록" : "다음"}
                        </Button>
                    </Box>
                </React.Fragment>
            </Paper>
        </Container>
    );
}
