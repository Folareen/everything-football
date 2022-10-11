import { Box, Typography } from "@mui/material";
import StandingsNav from "../../components/Standings/StandingsNav";
import Table from "../../components/Standings/Table";
import useSwr from "swr";

const Standings = () => {
  const { data, error } = useSwr("today-matches", async () => {
    const seasonsOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "73b0945536msh8ea50af6e2d00b7p1388cejsnd67b8bc47222",
        "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
      },
    };

    const seasonResponse = await fetch(
      "https://transfermarket.p.rapidapi.com/competitions/list-default?domain=de",
      seasonsOptions
    );
    const season = await seasonResponse.json();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "73b0945536msh8ea50af6e2d00b7p1388cejsnd67b8bc47222",
        "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://transfermarket.p.rapidapi.com/competitions/get-table?id=L1&seasonID=2022&domain=de`,
      options
    );
    const tableResponse = await response.json();
    const data = [season.defaultCompetitions, tableResponse.table];

    return data;
  });

  return (
    <Box sx={{ pb: 2 }}>
      {!data && !error && <Typography>Loading..</Typography>}
      {data && (
        <>
          <StandingsNav leagues={data[0]} />
          <Table table={data[1]} />
        </>
      )}
    </Box>
  );
};

export default Standings;
