import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import StandingsNav from "../../components/StandingsNav";
import Table from "../../components/Table";
import { useRouter } from "next/router";

const Standing = ({ leagues }) => {
  const {
    query: { standingId },
  } = useRouter();
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setLoading(true);

    // (async () => {
    //   try {
    //     const options = {
    //       method: "GET",
    //       headers: {
    //         "X-RapidAPI-Key":
    //           "73b0945536msh8ea50af6e2d00b7p1388cejsnd67b8bc47222",
    //         "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
    //       },
    //     };
    //     const response = await fetch(
    //       `https://transfermarket.p.rapidapi.com/competitions/get-table?id=${standingId}&seasonID=2022&domain=de`,
    //       options
    //     );
    //     const data = await response.json();
    //     setTableData(data.table);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    setLoading(false);
  }, [standingId]);

  return (
    <Box sx={{ pb: 2 }}>
      <StandingsNav leagues={leagues} />
      {loading && <Typography>Loading..</Typography>}
      {tableData && !loading && <Table table={tableData} />}
    </Box>
  );
};

export default Standing;

// export const getServerSideProps = async () => {
//   const seasonsOptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "73b0945536msh8ea50af6e2d00b7p1388cejsnd67b8bc47222",
//       "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
//     },
//   };

//   const seasonResponse = await fetch(
//     "https://transfermarket.p.rapidapi.com/competitions/list-default?domain=de",
//     seasonsOptions
//   );
//   const season = await seasonResponse.json();
//   return {
//     props: {
//       leagues: season.defaultCompetitions,
//     },
//   };
// };
