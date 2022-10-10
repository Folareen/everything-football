import { Box, Link, Typography } from "@mui/material";

const news = ({ data }) => {
  return (
    <Box sx={{ p: 2, pb: 6, maxWidth: "1000px", mx: "auto" }}>
      <Typography
        component="h2"
        sx={{ fontSize: 22, textAlign: "center", mb: 2 }}
      >
        Latest News
      </Typography>
      {data.map(({ mainMedia, publishedAt, title, url }) => {
        return (
          <Link
            href={`https://www.livescore.com${url}`}
            sx={{
              display: "flex",
              mb: 2,
              "&:hover": { boxShadow: "0 0 5px grey" },
              bgcolor: "rgba(0, 51, 102, 0.1)",
            }}
            target={"_blank"}
            underline="none"
          >
            <Box
              sx={{
                width: { lg: "250px", xs: "200px" },
                height: { lg: "150px", xs: "100px" },
              }}
            >
              <img
                src={mainMedia.thumbnail.url}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box sx={{ pl: 2, pr: 1 }}>
              <Typography
                sx={{
                  color: "primary.dark",
                  mb: 1,
                  fontSize: { lg: 20 },
                  mt: 1,
                }}
              >
                {title}
              </Typography>
              <Typography sx={{ color: "text.disabled", fontSize: 14 }}>
                {new Date(publishedAt).toGMTString()}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default news;

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://livescore6.p.rapidapi.com/news/v2/list",
    options
  );
  const data = await response.json();

  return {
    props: {
      data: data.topStories,
    },
  };
};
