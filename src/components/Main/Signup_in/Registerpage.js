import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import {
  useStyles,
  Copyright,
  Spinner,
  handleSubmit,
} from "./Registerpage.module";

import SignUpError from "./SignUpError";
import { Redirect } from "react-router-dom";

function renderSpinnerAndError(spinner, alert) {
  if (spinner) {
    return (
      <CircularProgress
        size={100}
        style={{ position: "relative", left: "30%" }}
      />
    );
  } else if (alert.isError) {
    return alert.message.map((err) => <Alert severity="error">{err}</Alert>);
  } else {
    return;
  }
}
function renderRedirect(redirect) {
  if (redirect) {
    return <Redirect to="/" />;
  } else {
    return;
  }
}

export default function Registerpage() {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [Spinner, setSpinner] = useState(false);
  const [Alert, setAlert] = useState({ isError: false, message: [] });

  const [formState, setFormState] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
  });

  return (
    <Container component="main" maxWidth="xs">
      {renderRedirect(redirect)}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            setSpinner(true);
            await fetch("http://localhost:3000/auth/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formState),
            })
              .then((response) => {
                return response.text();
              })
              .then((data) => {
                const jsonedData = JSON.parse(data);

                if (jsonedData.statusCode == 400) {
                  setSpinner(false);
                  setAlert({
                    isError: true,
                    message: jsonedData.message,
                  });

                  setTimeout(() => {
                    setAlert({
                      isError: false,
                      message: [],
                    });
                  }, 3000);
                } else if (jsonedData.code === "23505") {
                  setSpinner(false);
                  setAlert({
                    isError: true,
                    message: [`${formState.email} is already exist`],
                  });

                  setTimeout(() => {
                    setAlert({
                      isError: false,
                      message: [],
                    });
                  }, 3000);
                } else {
                  setRedirect(true);
                }
              })
              .catch((error) => {
                console.log(error);
                setSpinner(false);
              });
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) =>
                  setFormState({
                    f_name: e.target.value,
                    l_name: formState.l_name,
                    email: formState.email,
                    password: formState.password,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) =>
                  setFormState({
                    f_name: formState.f_name,
                    l_name: e.target.value,
                    email: formState.email,
                    password: formState.password,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setFormState({
                    f_name: formState.f_name,
                    l_name: formState.l_name,
                    email: e.target.value,
                    password: formState.password,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setFormState({
                    f_name: formState.f_name,
                    l_name: formState.l_name,
                    email: formState.email,
                    password: e.target.value,
                  })
                }
              />
            </Grid>
            {renderSpinnerAndError(Spinner, Alert)}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
