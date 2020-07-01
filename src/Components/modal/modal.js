import React from 'react';
import useStyles from "./classes";
import Modal from '@material-ui/core/Modal';

const ModalUI = (props) => {
    const classes = useStyles();

    return (
        <Modal open={props.isOpen} onClose={props.close}>
            <div className={classes.hiddenScroll}>
                <div className={classes.paper}>
                    {props.children}
                </div>
            </div>
        </Modal>
    );
}

export default ModalUI