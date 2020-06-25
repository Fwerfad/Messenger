import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "grey",
    paddingBotton: 35,
    paddingTop: 35,
  },
  container: {
    marginBottom: "auto",
    width: "auto",
  },
  paper: {
    // padding: theme.spacing(1),
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  layout: {
    padding: "20px 200px",
  },
  TextField: {
    marginTop: 15,
    marginBottom: 30,
  },
  void: {
    height: 250,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
