import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [

    {
        name: 'Fluoride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea amet perferendis repellat recusandae rerum tempore facere sequi debitis dicta aperiam praesentium, molestiae sit omnis veritatis eos. Iste, accusantium facere.",
        img: fluoride
    },
    {
        name: 'Cavity',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea amet perferendis repellat recusandae rerum tempore facere sequi debitis dicta aperiam praesentium, molestiae sit omnis veritatis eos. Iste, accusantium facere.",
        img: cavity
    },
    {
        name: 'Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea amet perferendis repellat recusandae rerum tempore facere sequi debitis dicta aperiam praesentium, molestiae sit omnis veritatis eos. Iste, accusantium facere.",
        img: whitening
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 400, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;