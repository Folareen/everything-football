import { useState } from "react";
import Box from "@mui/material/Box";
import LiveMatches from "../../components/LiveMatches";
import MatchesNav from "../../components/MatchesNav";

const match = ({ liveData }) => {
  return (
    <Box sx={{ width: "100%", pb: 2 }}>
      <MatchesNav />
      <LiveMatches data={liveData} />
    </Box>
  );
};

export default match;

export const getStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
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
