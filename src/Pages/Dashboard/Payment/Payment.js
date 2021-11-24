import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JyhHfFHKfJInTKl6lHp3PdSV3pML7OuYHWTNdcafX27xpFj8nCz7DXmW1c16VJOxkeLLbf3PyL3gpYxsIo8cPWY007odZzMse');


const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));


    }, [appointmentId]);


    return (
        <div>
            <h2>Please pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: {appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;


/*
1. install stripe and stripe-react
2. set publishble key
3. Elements
4. Chceckout Form
--------
5. create payment method
6. server create payment Intent api
7. Load client secret
8. confirmcard payment
9. handle user error


*/