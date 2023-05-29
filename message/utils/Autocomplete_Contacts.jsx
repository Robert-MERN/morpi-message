import React, { useState, } from 'react'
import TextField from '@mui/material/TextField';
import Chip from "@mui/material/Chip";
import Autocomplete from '@mui/material/Autocomplete';
import ContactsIcon from '@mui/icons-material/Contacts';

const Autocomplete_Contacts = ({ emails, setEmails, enteredEmails, setEnteredEmails, inputChange, value, check, error, onBlur, loading }) => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

    const filterOptions = (options, { inputValue }) => {
        const filtered = options.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        if (inputValue && !filtered.length && EMAIL_REGEX.test(inputValue)) {
            return [`Add this email ${inputValue} to share`];
        }

        return filtered;
    };

    const handleSelect = (event, newValue) => {
        let selectedValue;
        if (typeof newValue === 'string') {
            // When a new option is added
            selectedValue = newValue;
        } else {
            // When an existing option is selected
            selectedValue = newValue[newValue.length - 1];
        }
        if (selectedValue) {
            if (selectedValue.includes('Add this email')) {
                // Extract email from option text
                const email = selectedValue.split("email")[1].split("to")[0].trim();
                setEnteredEmails([...enteredEmails, email]);
                setEmails(prev => ([...prev, email]));
            } else {
                setEnteredEmails(newValue);
            }
        }

    };
    const handleDelete = (index) => {
        setEnteredEmails((prev) => {
            const newValue = [...prev];
            newValue.splice(index, 1);
            return newValue;
        });
    };

    return (

        <Autocomplete
            className='w-full'
            id="size-small-filled-multi"
            multiple
            size="small"
            filterOptions={filterOptions}
            options={emails}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            clearOnEscape
            onChange={handleSelect}
            value={enteredEmails}
            disabled={!check.contacts}
            noOptionsText={loading ? "Loading..." : "Invalid email"}
            disableClearable
            onInputChange={inputChange}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        size="small"
                        {...getTagProps({ index })}
                        onDelete={() => handleDelete(index)}
                    />
                ))
            }
            renderOption={(props, option) =>
                option.includes('Add this email') ? (
                    <div {...props}>
                        Add this email <strong className='mx-2'> {value} </strong> to share
                    </div>
                ) : (
                    <div {...props}>
                        <ContactsIcon className='scale-[.8] mr-2 text-stone-500' />
                        {option}
                    </div>
                )
            }
            renderInput={(params) => (
                <TextField {...params}
                    error={error}
                    onBlur={onBlur}
                    label="Recepient(s) email"
                    placeholder="Type email..."
                />
            )} />

    )
}

export default Autocomplete_Contacts