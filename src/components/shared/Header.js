import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headingImg from '@/assets/The Dragon News.jpg'
import { displayCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = displayCurrentDate();
    return (
        <Box className='my-5 w-full'>
            <Container>
                <Image className='mx-auto' src={headingImg} width={500} height={500} alt='Heading Image' ></Image>
                <Typography variant="body2" color='gray' textAlign='center' className='my-2' >
                Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign='center' >
                {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;