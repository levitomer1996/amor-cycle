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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles, Copyright } from "./signin.style";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { baseUrl } from "../../../serverURL";
import { Redirect } from "react-router-dom";
//Redux
import { SET_LOGIN } from "../../../redux/actions/userActions";
import { connect } from "react-redux";

function renderSpinnerAndError(spinner, alert) {
  if (spinner) {
    return (
      <CircularProgress
        size={100}
        style={{ position: "relative", left: "30%" }}
      />
    );
  } else if (alert.isError) {
    return <Alert severity="error">{alert.message}</Alert>;
  } else {
    return;
  }
}

function renderRedirect(redirect) {
  if (redirect) {
    return <Redirect to="/" />;
  }
}

function SignIn(props) {
  const classes = useStyles();
  //Form state
  const [formState, setFormState] = useState({ email: "", password: "" });

  //Spinner and error state, decides of rendered or not.
  const [spinnerState, setSpinnerState] = useState(false);
  const [alertState, setAlertState] = useState({ isError: false, message: "" });
  const [RedirectState, setRedirectState] = useState(false);

  return (
    <Container component="main" maxWidth="xs">
      {renderRedirect(RedirectState)}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            const { SET_LOGIN } = props;
            setSpinnerState(true);
            fetch(`${baseUrl}/auth/signin`, {
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
                setSpinnerState(false);
                let res = JSON.parse(data);
                if (res.statusCode === 401) {
                  setAlertState({ isError: true, message: res.message });
                  setTimeout(() => {
                    setAlertState({
                      isError: false,
                      message: "Email adress or password is wrong",
                    });
                  }, 5000);
                } else if (res.statusCode === 500) {
                  setAlertState({
                    isError: true,
                    message: "Email adress or password is wrong",
                  });
                  setTimeout(() => {
                    setAlertState({
                      isError: false,
                      message: "Email adress or password is wrong",
                    });
                  }, 3000);
                } else {
                  sessionStorage.setItem("at", res.accessToken);
                  SET_LOGIN(formState.email, false, true);
                  setRedirectState(true);
                }
              })
              .catch((error) => {
                console.log(error);
                return error;
              });
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setFormState({
                email: e.target.value,
                password: formState.password,
              });
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setFormState({
                email: formState.email,
                password: e.target.value,
              });
            }}
          />
          {renderSpinnerAndError(spinnerState, alertState)}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect(null, { SET_LOGIN })(SignIn);
