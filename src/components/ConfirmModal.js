import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux'
import { removeContact } from '../actions/contacts'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Modalc = ({ open, handleClose, handleRemove, removeId }) => {
    const dispatch = useDispatch
    const classes = useStyles();






    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Remover contato</h2>
                        <p id="transition-modal-description">Tem certeza que desejar remover esse contato?</p>
                        <Button onClick={handleClose} color="secondary">Cancelar</Button>
                        <Button onClick={() => handleRemove(removeId)} color="secondary">Remover</Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default Modalc