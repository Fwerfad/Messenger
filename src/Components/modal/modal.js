import React from 'react';
import useStyles from "./classes";
import Modal from '@material-ui/core/Modal';

export default function SimpleModal(props) {
    const classes = useStyles();

    return (
        <Modal
            open={props.open}
            onClose={props.close}
        >
            <div className={classes.paper}>
                {props.children}
                <SimpleModal/>
            </div>
        </Modal>
    );
}
