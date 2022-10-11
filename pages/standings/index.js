import { Box } from "@mui/material";
import StatsNav from "../../components/StandingsNav";
import Table from "../../components/Table";

const Standings = ({ leagues, table }) => {
  return (
    <Box sx={{ pb: 2 }}>
      <StatsNav leagues={leagues} />
      <Table table={table} />
    </Box>
  );
};

export default Standings;

export const getServerSideProps = async () => {
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

  return {
    props: {
      leagues: season.defaultCompetitions,
      table: tableResponse.table,
    },
  };
};
