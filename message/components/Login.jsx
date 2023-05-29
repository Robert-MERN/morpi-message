import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useStateContext from '../context/ContextProvider';
import { FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

const Login = () => {

    const { handleLoginAPI } = useStateContext();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        showPassword: false,
        errors: {
            email: '',
            password: '',
        },
    });

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
            case 'email':
                if (!value) {
                    error = 'Please enter an email';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case 'password':
                if (!value) {
                    error = 'Please enter a password';
                }
                break;
            default:
                break;
        }
        return error;
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        const error = validateField(name, value);
        setFormState((prevState) => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [name]: error,
            },
        }));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }



    const handleClickShowPassword = () => {
        setFormState({
            ...formState,
            showPassword: !formState.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        Object.keys(formState).forEach((fieldName) => {
            const error = validateField(fieldName, formState[fieldName]);
            if (error) {
                errors[fieldName] = error;
            }
        });
        setFormState((prevState) => ({
            ...prevState,
            errors,
        }));
        if (Object.values(errors).every((error) => !error)) {
            // Form is valid, submit it
            const { showPassword, errors, ...other } = formState;
            handleLoginAPI(other);
        }
    }
    return (

        <form onSubmit={handleSubmit} className='flex flex-col gap-8 md:p-[10px]' >
            <div className='flex flex-col w-full gap-4 justify-center items-center' >
                <p className='text-[16px] md:text-[17px] font-semibold text-slate-500 text-center' >Morpi's got yout back, login and send messages now.</p>
            </div>


            <div className='w-full flex flex-col gap-4' >
                <div className='w-full' >
                    <FormControl
                        className='w-full mt-3'
                    >
                        <TextField
                            size='small'
                            name="email"
                            label="Enter your Email to get started"
                            error={Boolean(formState.errors.email)}
                            helperText={formState.errors.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={formState.email}
                        />
                    </FormControl>
                </div>

                <div className='w-full' >
                    <FormControl
                        className='w-full mt-3'
                        variant="outlined"
                        size='small'
                    >
                        <InputLabel
                            error={Boolean(formState.errors.password)}
                            htmlFor="outlined-adornment-password">
                            Enter your Password to get started
                        </InputLabel>
                        <OutlinedInput
                            label="Enter your Password to get started"
                            type={formState.showPassword ? 'text' : 'password'}
                            value={formState.password}
                            name="password"
                            error={Boolean(formState.errors.password)}
                            helpertext={formState.errors.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {formState.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                        {formState.errors.password && <FormHelperText error>{formState.errors.password}</FormHelperText>}
                    </FormControl>
                </div>
            </div>

            <button className='bg-indigo-600 text-slate-100 text-[15px] md:text-[17px] w-full py-[8px] rounded-md mt-6 hover:opacity-80 transition-all' >Login</button>
        </form>

    )
}

export default Login