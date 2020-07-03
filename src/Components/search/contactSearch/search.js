import React from "react";
import TextField from "@material-ui/core/TextField";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useStyles} from "./searchStyles";
import {useHistory, withRouter} from 'react-router';
import ContactList from "./searchResultsContainer";

export const SearchForm = () => {
    return (
        <Switch>
            <Route exact path="/"/>
            <Route exact path="/Chat" component={withRouter(InputButton)}></Route>
            <Route exact path="/Chat/Input" component={withRouter(InputTextField)}></Route>
            <Route path="/Chat/Input/Results" component={withRouter(SearchResult)}></Route>
        </Switch>
    );
};
function InputButton() {
    const classes = useStyles();
    return (
            <button className={classes.button}>
                <Link to="/Chat/Input" className={classes.link}>
                    Search
                </Link>
            </button>
    )
}
function InputTextField() {
    let history = useHistory();
    const classes = useStyles();

    function handleClick(ev) {
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === 'Enter') {
            history.push("/Chat/Input/Results");
            ev.preventDefault();
        }
    }
    return (
            <TextField id="searchInputField" label="Введите имя" variant="outlined" onKeyPress={handleClick}
                       className={classes.inputField}/>
        )
}
function SearchResult() {

    return (
        <div>
            {InputButton()}
            <ContactList/>
        </div>
    )
}

export default SearchForm;
