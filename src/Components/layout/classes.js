import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        display: 'flex',
        justifyContent: "space-between",
        flexWrap: "nowrap",
        zIndex: theme.zIndex.drawer - 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "white"
    },
    toolBar: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    menuButton: {
        marginRight: 36,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default useStyles