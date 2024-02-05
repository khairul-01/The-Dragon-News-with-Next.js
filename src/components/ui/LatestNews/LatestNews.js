import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from '@/assets/top-news.png';
import topNews2 from '@/assets/top-news2.png';
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
    const { data } = await getAllNews();
    // console.log(data);
    return (
        <>
            <Box className='my-5'>
                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[0].thumbnail_url} height={500} width={800} alt="Top News" />
                        </CardMedia>
                        <CardContent>
                            <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded"> {data[0].category} </p>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography gutterBottom className="my-3" >
                                By {data[0].author.name} - {data[0].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        data.slice(0, 6).map(news => (
                            <Grid key={news.id} item xs={6}>
                                <Card >
                                    <CardActionArea sx={{
                                        "& img": {
                                            width: "100%",
                                            height: "250px",
                                        }
                                    }}>
                                        <CardMedia>
                                            <Image src={news.thumbnail_url} height={500} width={800} alt="Top News" />
                                        </CardMedia>
                                        <CardContent>
                                            <p className="bg-red-500 text-white p-2 max-w-fit my-5 rounded">{news.category}</p>
                                            <Typography gutterBottom >
                                                {news.title}
                                            </Typography>
                                            <Typography gutterBottom className="my-3" >
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </>
    );
};

export default LatestNews;