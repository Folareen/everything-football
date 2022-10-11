import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const Video = () => {
  const [loading, setLoading] = useState(true);
  const [videosCount, setVideosCount] = useState(5);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
        "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
      },
    };

    fetch("https://free-football-soccer-videos.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => setVideos(response.slice(0, videosCount)))
      .catch((err) => console.error(err));

    setLoading(false);
  }, [videosCount]);

  if (loading) {
    return <Typography>Loading..</Typography>;
  }

  if (!videos) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Box sx={{ px: 3, pb: 4 }}>
      {videos.map((video, index) => {
        return (
          <Box
            sx={{ my: 1, width: { xs: "100%", lg: "900px" }, mx: "auto" }}
            key={index}
            dangerouslySetInnerHTML={{ __html: video.embed }}
          ></Box>
        );
      })}
      <Button
        onClick={() => {
          setVideosCount(videosCount + 5);
        }}
        variant="contained"
        sx={{ mx: "auto", display: "block", width: "max-content" }}
      >
        Load more
      </Button>
    </Box>
  );
};

export default Video;
