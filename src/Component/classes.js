import {makeStyles} from "@material-ui/core/styles";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ChatIcon from "@material-ui/core/SvgIcon/SvgIcon";
import React from "react";

export const useStyles = makeStyles({
        button: {
            display: "inline-block",
            height: "108px",
            width: "100px",
            border: "0px",
            background: "whitesmoke",
            font: "20px"
        },

    }
);

export const ExpansionPanel = withStyles({
    root: {
        background: "whitesmoke",
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'grid',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

export const ExpansionPanelSummary = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        background: "whitesmoke",
        marginBottom: -1,
        minHeight: 56,
        display: "grid",
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        height:'100px',
        background: "whitesmoke",
        justifyContent: "center",
        padding: "0 0 8px 0",
    },
}))(MuiExpansionPanelDetails);

export const HeaderLink = ({buttonClass, fun, text, img}) => {
    return (
    <button onClick={fun} className={buttonClass}>
        <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center">
            <Grid item xs>{img}</Grid>
            <Grid item xs>{text}</Grid>
        </Grid>
    </button>
    )
}

export default {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, useStyles, HeaderLink}
