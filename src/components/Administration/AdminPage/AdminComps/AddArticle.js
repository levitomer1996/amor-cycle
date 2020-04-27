import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./MakeStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { baseUrl } from "../../../../serverURL";
import { token } from "../../../../token";

function AddArticle(props) {
  //States
  const [title, setTitleState] = useState("");
  const [category, setCategoryState] = useState("");
  const [img, setImgLinkState] = useState("");
  const [content, setContentState] = useState("");

  async function createArticle(formState) {
    const response = await fetch(`${baseUrl}/article/createarticle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(formState),
    })
      .then((res) => {
        console.log(formState);
        return res.json();
      })
      .then((data) => {
        if (data.statusCode === 401) {
          setAlertState({ isError: true, message: data.message });
          setTimeout(() => {
            setAlertState({ isError: false, message: "" });
          }, 3000);
        }
      });
  }
  //States
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    img: "",
    content: "",
  });
  //Alert State
  const [alertState, setAlertState] = useState({ isError: false, message: "" });
  //Alert
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function renderAlert() {
    if (alertState.isError) {
      return (
        <Snackbar open={alertState.isError}>
          <Alert severity="error">{alertState.message}</Alert>
        </Snackbar>
      );
    } else {
      return;
    }
  }

  //Styles
  const classes = useStyles();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createArticle(formState);
        }}
      >
        <TextField
          className={classes.title}
          id="filled-textarea"
          label="Title"
          placeholder="Title"
          multiline
          variant="filled"
          onChange={(e) => {
            setFormState({
              title: e.target.value,
              category: formState.category,
              img: formState.img,
              content: formState.content,
            });
          }}
        />
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            className={classes.input}
            onChange={(e) => {
              setFormState({
                title: formState.title,
                category: e.target.value,
                img: formState.img,
                content: formState.content,
              });
            }}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={"nutrition"}>Nutrition</MenuItem>
            <MenuItem value={"sustainability"}>Sustainability</MenuItem>
            <MenuItem value={"healthlifestyle"}>Health / Life-style</MenuItem>
            <MenuItem value={"greenlandscape"}>Green landscape</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.imgLink}
          id="filled-textarea"
          label="IMG LINK"
          placeholder="IMG LINK"
          multiline
          variant="filled"
          onChange={(e) => {
            setFormState({
              title: formState.title,
              category: formState.category,
              img: e.target.value,
              content: formState.content,
            });
          }}
        />

        <TextField
          className={classes.multiRowInput}
          id="filled-multiline-static"
          label="Content"
          multiline
          rows="10"
          variant="filled"
          onChange={(e) => {
            console.log(content);
            setFormState({
              title: formState.title,
              category: formState.category,
              img: formState.img,
              content: e.target.value,
            });
          }}
        />
        {renderAlert()}
        <IconButton colorSecondary type="submit">
          Add article
          <SendIcon fontSize="large" color="primary" />
        </IconButton>
      </form>
    </div>
  );
}

export default AddArticle;
