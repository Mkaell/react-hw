import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './form.css'

interface IUser {
    username: string,
    age: string,
    email: string,
    password: string,
    status: string,
    gender: string,
};


export const Form = () => {

    const [inputs, setInputs] = useState<IUser>({
        username: '',
        age: '',
        email: '',
        password: '',
        status: '',
        gender: '',
    });

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        setInputs(() => ({
            username: '',
            age: '',
            email: '',
            password: '',
            status: '',
            gender: '',
        }))
    }

    const handleChange = (event: any) => {
        const name: any = event.target.name;
        const value: any = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setOpen(() => true);
    }

    const style: {} = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <TextField
                    label="Name:" variant="outlined"
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                    required
                />
                <br />
                <TextField
                    label="Age:" variant="outlined"
                    type="number"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                    required
                />
                <br />
                <TextField
                    label="Email:" variant="outlined"
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <TextField
                    label="Enter your password:" variant="outlined"
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <FormControl fullWidth>
                    <InputLabel id="select">Status</InputLabel>
                    <Select
                        labelId="select"
                        id="select"
                        name="status"
                        value={inputs.status}
                        label="Status"
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value={'Single'}>Single</MenuItem>
                        <MenuItem value={'Married'}>Married</MenuItem>
                        <MenuItem value={'Widowed'}>Widowed</MenuItem>
                        <MenuItem value={'Divorced'}>Divorced</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="gender"
                        value={inputs.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <br />

                <Button size='large' type="submit" variant="contained">Hello World</Button>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Name - {inputs.username}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Age - {inputs.age}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Email - {inputs.email}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Password - {inputs.password}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Status - {inputs.status}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Gender - {inputs.gender}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}


