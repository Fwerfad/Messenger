import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
        fontSize: '14px'
    },
    listItem: {
        backgroundColor: 'white',
        height: '95px',
        borderBottomColor: '#C4C4C4',
        borderBottomStyle: "solid",
        borderBottomWidth: '1px',
        '&:hover' : {
            backgroundColor: '#C4C4C4'
        }
    },
    listItemText: {
        margin: '0px 20px',
        width: '50%'
    },
    contactNameText: {
        color: 'rgba(0, 0, 0, 0.87)'
    },
    contactDescriptionText: {
        maxHeight: '45px',
        maxWidth: '70%',
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: "lighter",
        overflow: "hidden",
        whiteSpace: "pre-wrap"
    },
    contactLastMessageText: {
        width: '50%',
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '12px'
    },
    contactLastMessageHeader: {},
    contactLastMessageContent: {}
}));
