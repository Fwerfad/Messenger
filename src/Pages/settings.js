import React from "react";
import {
  TextField,
  Paper,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";

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

export default function Settings() {
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item>
        <Paper className={classes.paper}>
          <Grid container className={classes.layout} direction="column">
            <Grid container className={classes.container} spacing={2}>
              <Grid item>
                <Avatar
                  className={classes.avatar}
                  alt="complex"
                  src="https://via.placeholder.com/150"
                />
              </Grid>
              <Grid item sm container>
                <Grid item xs container direction="column">
                  <Grid item>
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="standard-basic"
                      label="Second Name"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="subtitle2" gutterBottom>
              Note: it will be display only for your friends
            </Typography>

            <Grid
              container
              className={classes.container}
              direction="column"
              //   spacing={1}
            >
              <Grid item>
                <TextField
                  id="standard-basic"
                  label="Your publick nickname"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.TextField}
                  id="outlined-description"
                  label="description"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <ExpansionPanel
            style={{}}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                General settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                I am an expansion panel
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <ExpansionPanelSummary
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>Users</Typography>
              <Typography className={classes.secondaryHeading}>
                block users and other stuff
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        <Paper className={classes.paper}>
          <ExpansionPanel
            style={{}}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <ExpansionPanelSummary
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                Advanced settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                IDK some additional settings whick won`t be developed
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        <Paper className={classes.paper}>
          <ExpansionPanel
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <ExpansionPanelSummary
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>Personal data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        <Paper className={classes.void} />
      </Grid>
    </Grid>
  );
}
