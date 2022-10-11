import { Box, Typography } from "@mui/material";
import Link from "next/link";

const News = ({ data }) => {
  return (
    <Box sx={{ p: 2, maxWidth: "1000px", mx: "auto" }}>
      <Typography
        component="h2"
        sx={{ fontSize: 22, textAlign: "center", mb: 2 }}
      >
        Latest News
      </Typography>
      {data.map(({ title, image, published_at, id }) => {
        return (
          <Link href={`news/${id}`} key={published_at}>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                "&:hover": { boxShadow: "0 0 5px grey", cursor: "pointer" },
                bgcolor: "rgba(0, 51, 102, 0.1)",
              }}
            >
              <Box
                sx={{
                  width: { lg: "250px", xs: "200px" },
                  height: { lg: "150px", xs: "100px" },
                }}
              >
                <img
                  src={image.data.urls.uploaded.thumbnail}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  lazy="true"
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
                  {new Date(published_at).toGMTString()}
                </Typography>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default News;

export const getServerSideProps = async () => {
  const idOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "73b0945536msh8ea50af6e2d00b7p1388cejsnd67b8bc47222",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const idResponse = await fetch(
    "https://livescore6.p.rapidapi.com/news/v2/list",
    idOptions
  );
  const idData = await idResponse.json();

  const id = idData.categories[0].id;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "73b0945536msh8ea50af6e2d00b7p1388cejsnd67b8bc47222",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=${id}&page=1`,
    options
  );
  const data = await response.json();

  return {
    props: {
      data: data.data,
    },
  };
};