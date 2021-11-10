import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Carity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5
    },
    {
        id: 2,
        name: 'Carity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5
    },
    {
        id: 3,
        name: 'Carity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5
    },
    {
        id: 4,
        name: 'Carity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5
    },
    {
        id: 5,
        name: 'Carity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Carity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 10
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