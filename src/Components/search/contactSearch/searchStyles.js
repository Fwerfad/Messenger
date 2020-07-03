import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";


export const useStyles = makeStyles((theme) => ({
    button: {
        textAlign: "center",
        background: "white",
        width: "95vw",
        height: "56px",
        border:"1px solid #d6d6d6",
        borderRadius: "4px"

    },
    inputField: {
        width: "95vw"
    },
    link: {
        textDecoration: 'none',
        color: "inherit"
    }
}));



export default {useStyles}
