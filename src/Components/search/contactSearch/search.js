import React, {Component, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useStyles} from "./searchStyles";
import {useHistory, withRouter} from 'react-router';
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle} from "@material-ui/icons";

export const SearchForm = () => {
    return (
        <InputField/>
    );
};

function InputField() {
    let history = useHistory();
    const classes = useStyles();
    function handleClick(ev) {
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === 'Enter') {
            history.push("/Search");
        }
    }
    return (
        <TextField id="searchInputField" label="Введите имя" onKeyPress={handleClick}
                   className={classes.inputField}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <AccountCircle />
                           </InputAdornment>),}}
        />
    )
}

export default SearchForm;
