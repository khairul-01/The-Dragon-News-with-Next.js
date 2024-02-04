import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category);
    return (
        <div className='my-5'>
            <h1>Total <strong>{searchParams.category}</strong> news: {data.length} </h1>

            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news => (
                        <Grid key={news.id} item xs={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card >
                                    <CardActionArea sx={{
                                        "& img": {
                                            width: "100%",
                                            height: "250px",
                                        }
                                    }}>
                                        <CardMedia>
                                            <Image src={news.thumbnail_url} width={800} height={150} alt="Top News" />
                                        </CardMedia>
                                        <CardContent>
                                            <p className="bg-red-500 text-white p-2 max-w-fit my-3 rounded"> {news.category} </p>
                                            <Typography gutterBottom variant='h6' >
                                                {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                            </Typography>
                                            <Typography gutterBottom className="my-2" >
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    );
};

export default DynamicNewsPage;