import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Divider, Stack } from "@mui/material";
import Image from "next/image";
import sideBarNews from '@/assets/side-top-news.png';
import SidebarNewsCard from "./SidebarNewsCard";
import sideBottomNews from "@/assets/side-bottom-img.png";

const Sidebar = () => {
    return (
        <Box className='my-5'>
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideBarNews} width={800} alt="Top News" />
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
            <Divider />
            <Stack my={3} columnGap={2}>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
                <SidebarNewsCard></SidebarNewsCard>
            </Stack>

            <Box>
                <Image
                    src={sideBottomNews}
                    height={400}
                    width={350}
                    alt="rectangle world image"
                />
            </Box>

        </Box>
    );
};

export default Sidebar;