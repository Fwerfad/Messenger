import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatIcon from "@material-ui/icons/Chat";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, useStyles, HeaderLink} from './classes';
import Typography from '@material-ui/core/Typography';

//* Кнопка с переключаемым состоянием, у нас нету /lab, задел на будущее.
//* import { ToggleButton } from '@material-ui/lab';

const Header = (props) => {
    function handleClick(e) {
        e.preventDefault();
        console.log("По ссылке кликнули.");
    }
    const classes = useStyles();
    console.log("classes");
    console.log(classes);
    return (
        <body>
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography>
                    MESSAGES <ExpandMoreIcon/>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <HeaderLink fun={handleClick} text={'Chat'} buttonClass={classes.button} img={<ChatIcon/>}/>
                <HeaderLink fun={handleClick} text={'Profile'} buttonClass={classes.button} img={<AccountCircleIcon/>}/>
                <HeaderLink fun={handleClick} text={'Contacts'} buttonClass={classes.button} img={<PeopleAltIcon/>}/>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </body>
    );
};


export default Header
