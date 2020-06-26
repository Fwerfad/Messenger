import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        expansionPanel: {
            display: "grid",
            background: "whitesmoke"
        },
        expansionPanelContent: {
            background: "whitesmoke",
            justifyContent: "center",
            padding: "0 0 8px 0",
        },
        box: {
            width: "100vw",
            height: "100px",
            position: "relative",
            color: "darkgrey",
            background: "whitesmoke",
        }
    }
));
export default useStyles
