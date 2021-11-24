import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '11.00 AM - 12.00 PM',
        space: 8,
        price: 25
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.00 AM - 11.00 AM',
        space: 7,
        price: 35
    },
    {
        id: 3,
        name: 'Teeth Protection',
        time: '11.00 AM - 12.00 PM',
        space: 10,
        price: 15
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '8.00 AM - 9.00 AM',
        space: 5,
        price: 20
    },
    {
        id: 5,
        name: 'Pendiatric Dental',
        time: '9.00 AM - 10.00 AM',
        space: 10,
        price: 30
    },
    {
        id: 6,
        name: 'Oral Protection',
        time: '11.00 AM - 12.00 PM',
        space: 15,
        price: 12
    }
]


const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main' }}>Available Appointments on {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">Booking successful!</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}

                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;