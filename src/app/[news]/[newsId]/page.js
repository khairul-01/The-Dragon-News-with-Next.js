import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, Avatar } from "@mui/material";
import Image from 'next/image';
import { getSingleNews } from '@/utils/getSingleNews';

const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(news);
    return (
        <Box className="my-5">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} height={500} width={800} alt="news" ></Image>
                        <Grid container spacing={2} className='mt-2' >
                            <Grid item lg={6}>
                                <Image src={news.image_url} height={500} width={800} alt="news" ></Image>
                            </Grid>
                            <Grid item lg={6}>
                            <Image src={news.image_url} height={500} width={800} alt="news" ></Image>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" component="h2" >{news.title}</Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: 3,
                            alignItems: 'center'
                        }}>
                        <Avatar alt="author" src={news.author.img} />
                        <Typography  >By {news.author.name}</Typography>
                        <Typography  >Published: {news.author.published_date}</Typography>
                        </Box>
                        <Typography style={{
                            textAlign: 'justify',
                            whiteSpace: "pre-line",
                            margin: "10px 0px",
                            color: 'gray'
                        }} >Published: {news.details}</Typography>
                        <Typography variant='h6' >``Many desktop publishing packages and web pages editors now use as their default model text!``</Typography>
                        <Typography variant='h6' >---Jhankar Mahbub Bhai</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;
