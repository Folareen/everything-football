const match = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default match;

export const getStaticPaths = async () => {
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

  const eventsArr = todayData.Stages.map((league) => {
    return league.Events;
  });

  let matchIdArr = [];
  eventsArr.forEach((matchesArr) => {
    matchesArr.forEach((match) => {
      matchIdArr.push(match.Eid);
    });
  });

  const paths = matchIdArr.map((id) => {
    return {
      params: {
        matchId: id,
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

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://livescore6.p.rapidapi.com/matches/v2/detail?Eid=${params.matchId}&Category=soccer&LiveTable=false`,
    options
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
