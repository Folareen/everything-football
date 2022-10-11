import { Box, Typography } from "@mui/material";
import LiveMatches from "../../components/Match/LiveMatches";
import MatchesNav from "../../components/Match/MatchesNav";
import useSwr from "swr";

const Match = () => {
  const { data, error } = useSwr("today-matches", async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b46a755c58msh18b29b50c9486bfp1ff880jsna3d8784fac25",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=1",
      options
    );
    const data = await response.json();

    return data;
  });

  return (
    <Box sx={{ width: "100%", pb: 2 }}>
      <MatchesNav />
      {!data && !error && <Typography>Loading..</Typography>}
      {data && <LiveMatches data={data} />}
    </Box>
  );
};

export default Match;
