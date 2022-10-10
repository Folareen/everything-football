import { Box } from "@mui/material";
import StandingsNav from "../../components/StandingsNav";
import Table from "../../components/Table";

const standing = ({ leagues, table }) => {
  return (
    <Box sx={{ pb: 2 }}>
      <StandingsNav leagues={leagues} />
      <Table table={table} />
    </Box>
  );
};

export default standing;

export const getStaticPaths = async () => {
  const seasonsOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
      "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
    },
  };

  const seasonResponse = await fetch(
    "https://transfermarket.p.rapidapi.com/competitions/list-default?domain=de",
    seasonsOptions
  );
  const season = await seasonResponse.json();

  const paths = season.defaultCompetitions.map((league) => {
    return {
      params: {
        standingId: league.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const seasonsOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
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
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
      "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://transfermarket.p.rapidapi.com/competitions/get-table?id=${params.standingId}&seasonID=2022&domain=de`,
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
