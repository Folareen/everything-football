import { Box } from "@mui/material";
import TodayMatches from "../../../components/Match/TodayMatches";
import MatchesNav from "../../../components/Match/MatchesNav";
import Loader from "../../../components/Loader";
import { useState, useEffect } from "react";

const Match = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b46a755c58msh18b29b50c9486bfp1ff880jsna3d8784fac25",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };
    const date = new Date();
    const fullDate = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}`;

    fetch(
      `https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=${fullDate}&Timezone=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ width: "100%", pb: 2 }}>
      <MatchesNav />
      {<TodayMatches data={data} />}
    </Box>
  );
};

export default Match;
