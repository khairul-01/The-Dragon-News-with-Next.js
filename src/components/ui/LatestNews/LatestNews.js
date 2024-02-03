import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from '@/assets/top-news.png';
import topNews2 from '@/assets/top-news2.png';
import Image from "next/image";

const LatestNews = () => {
    return (
        <>
            <Box className='my-5'>
                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={topNews} width={800} alt="Top News" />
                        </CardMedia>
                        <CardContent>
                            <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded">Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Aggain
                            </Typography>
                            <Typography gutterBottom className="my-3" >
                                By Khairul Alam - February 3 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                It is long established fact that a reader will be distracted by the readable content of a page when looking at this layout..
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} width={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded">Technology</p>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Aggain
                                    </Typography>
                                    <Typography gutterBottom className="my-3" >
                                        By Khairul Alam - February 3 2024
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is long established fact that a reader will be distracted by the readable content of a page when looking at this layout..
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} width={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded">Technology</p>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Aggain
                                    </Typography>
                                    <Typography gutterBottom className="my-3" >
                                        By Khairul Alam - February 3 2024
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is long established fact that a reader will be distracted by the readable content of a page when looking at this layout..
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} width={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded">Technology</p>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Aggain
                                    </Typography>
                                    <Typography gutterBottom className="my-3" >
                                        By Khairul Alam - February 3 2024
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is long established fact that a reader will be distracted by the readable content of a page when looking at this layout..
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} width={800} alt="Top News" />
                                </CardMedia>
                                <CardContent>
                                    <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded">Technology</p>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Aggain
                                    </Typography>
                                    <Typography gutterBottom className="my-3" >
                                        By Khairul Alam - February 3 2024
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is long established fact that a reader will be distracted by the readable content of a page when looking at this layout..
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default LatestNews;