import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import useSWR from "swr";

const match = () => {
  const {
    query: { matchId },
  } = useRouter();

  const { data, error } = useSWR("matchId", async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://livescore6.p.rapidapi.com/matches/v2/detail?Eid=${matchId}&Category=soccer&LiveTable=false`,
      options
    );
    const data = await response.json();
    return data;
  });

  if (error) {
    return <Typography>Error!</Typography>;
  }

  if (!data) {
    return <Typography>Loading..</Typography>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default match;
