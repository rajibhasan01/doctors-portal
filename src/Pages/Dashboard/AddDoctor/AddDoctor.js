import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();

        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully');
                    console.log('Doctor added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h1>Add Doctor</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "50%" }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: "50%" }}
                    label="email"
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <Input
                    sx={{ width: "50%" }}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button sx={{ width: "50%" }} variant="contained" type="submit">
                    Add Doctor
                </Button>

            </form>
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;