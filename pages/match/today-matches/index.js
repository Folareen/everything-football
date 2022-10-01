import Box from "@mui/material/Box";
import TodayMatches from "../../../components/TodayMatches";
import MatchesNav from "../../../components/MatchesNav";

const match = ({ todayData }) => {
  return (
    <Box sx={{ width: "100%", pb: 2 }}>
      <MatchesNav />
      <TodayMatches data={todayData} />
    </Box>
  );
};

export default match;

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const date = new Date();
  const fullDate = `${date.getFullYear()}${
    date.getMonth() + 1
  }${date.getDate()}`;

  const todayResponse = await fetch(
    `https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=${fullDate}`,
    options
  );
  const todayData = await todayResponse.json();

  return {
    props: {
      todayData,
    },
  };
};
