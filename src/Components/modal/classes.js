import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        overflowY: "scroll",
        overflowX: "hidden",
        width: "100%",
        paddingRight: 20,
        marginRight: -20,
        paddingLeft: 20,
        marginLeft: -20,
        height: "100%",
    },
    hiddenScroll: {
        paddingLeft: 20,
        overflow: "hidden",
        height: "50%",
        width: "50%",
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        boxShadow: theme.shadows[5],
        padding: 0,
        "&:focus": {
            outline: "none",
        }
    }
}));

export default useStyles