import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatIcon from "@material-ui/icons/Chat";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import useStyles from './classes'

//* Кнопка с переключаемым состоянием, у нас нету /lab, задел на будущее.
//* import { ToggleButton } from '@material-ui/lab';

const Header = (props) => {
    function handleClick(e) {
        e.preventDefault();
        console.log("По ссылке кликнули.");
    }
    const classes = useStyles;
    console.log("classes");
    console.log(classes);
    return (
        <body>
        <ExpansionPanel>
            <ExpansionPanelSummary
                //expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={classes.expansionPanel}
            >
                <Typography>
                    MESSAGES <ExpandMoreIcon/>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={classes.expansionPanelContent}>
                <Box boxShadow={3} style={classes.box}>
                    <div style={{
                        width: "100%",
                        height: "80px",
                        position: "relative",
                        color: "darkgrey",
                        background: "whitesmoke",
                    }}>
                        <button onClick={handleClick} style={{
                            display: "inline-block",
                            height: "80px",
                            width: "100px",
                            border: "0px",
                            background: "whitesmoke"
                        }}>
                            <Grid container
                                  spacing={0}
                                  direction="column"
                                  alignItems="center"
                                  justify="center">
                                <Grid item xs><ChatIcon/></Grid>
                                <Grid item xs style={{font: "20px"}}>Chat</Grid>
                            </Grid>
                        </button>
                        <button onClick={handleClick} style={{
                            display: "inline-block",
                            height: "80px",
                            width: "100px",
                            border: "0px",
                            background: "whitesmoke"
                        }}>
                            <Grid container
                                  spacing={0}
                                  direction="column"
                                  alignItems="center"
                                  justify="center">
                                <Grid item xs><AccountCircleIcon/></Grid>
                                <Grid item xs style={{font: "20px"}}>Profile</Grid>
                            </Grid>
                        </button>
                        <button onClick={handleClick} style={{
                            display: "inline-block",
                            height: "80px",
                            width: "100px",
                            border: "0px",
                            background: "whitesmoke"
                        }}>
                            <Grid container
                                  spacing={0}
                                  direction="column"
                                  alignItems="center"
                                  justify="center">
                                <Grid item xs><PeopleAltIcon/></Grid>
                                <Grid item xs style={{font: "20px"}}>Contacts</Grid>
                            </Grid>
                        </button>
                    </div>
                </Box>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </body>
    );
};


export default Header
