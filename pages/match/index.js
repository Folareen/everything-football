import Box from "@mui/material/Box";
import LiveMatches from "../../components/Match/LiveMatches";
import MatchesNav from "../../components/Match/MatchesNav";

const Match = ({ liveData }) => {
  return (
    <Box sx={{ width: "100%", pb: 2 }}>
      <MatchesNav />
      <LiveMatches data={liveData} />
    </Box>
  );
};

export default Match;

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b46a755c58msh18b29b50c9486bfp1ff880jsna3d8784fac25",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };
  const liveResponse = await fetch(
    "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer",
    options
  );
  const liveData = await liveResponse.json();

  return {
    props: {
      liveData,
    },
  };
};
