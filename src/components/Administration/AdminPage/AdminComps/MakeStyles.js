import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  title: {
    margin: theme.spacing(1),
  },
  imgLink: {
    margin: theme.spacing(1),
    width: "100%",
  },
  multiRowInput: {
    margin: theme.spacing(1),
    width: "100%",
  },
  select: {
    minWidth: 120,
  },
  formControl: {
    margin: theme.spacing(1),
    width: "20%",
  },
}));
