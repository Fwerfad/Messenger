import React, {useReducer} from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, useStyles, HeaderLink} from './classes';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    const [isOpen, toggleMenu] = useReducer((state) => !state, false);
    function handleClick(e) {
        e.preventDefault();
        console.log("По ссылке кликнули.");
    }

    const classes = useStyles();
    console.log("classes");
    console.log(classes);
    return (
        <ExpansionPanel style={{margin: 0}} onChange={toggleMenu}>
            <ExpansionPanelSummary>
                <Typography>
                    MESSAGES
                    {isOpen? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <HeaderLink fun={handleClick} text={'Chat'} buttonClass={classes.button} img={<ChatIcon color="action"/>}/>
                <HeaderLink fun={handleClick} text={'Profile'} buttonClass={classes.button} img={<AccountCircleIcon  color="action"/>}/>
                <HeaderLink fun={handleClick} text={'Contacts'} buttonClass={classes.button} img={<PeopleAltIcon color="action"/>}/>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};


export default Header
