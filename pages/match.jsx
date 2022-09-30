import {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LiveMatches from '../components/LiveMatches'
import TodayMatches from '../components/TodayMatches'

const match = ({live, today}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'gray' }}>
          <TabList onChange={handleChange} aria-label="Matches" centered textColor="secondary" indicatorColor="secondary">
            <Tab label="Live Matches" value="1" sx={{mx: 2, fontFamily: 'Signika'}}/>
            <Tab label="Today Matches" value="2" sx={{mx: 2, fontFamily: 'Signika'}} />
          </TabList>
        </Box>
        <TabPanel value="1"><LiveMatches data={live}/></TabPanel>
        <TabPanel value="2"><TodayMatches data={today} /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default match

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };
  const liveResponse = await fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer', options)
  const liveData = await liveResponse.json()

  const secondOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };

  const date = new Date()
  const fullDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`

  console.log(fullDate)

  const todayResponse = await fetch(`https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=${fullDate}`, secondOptions)
  const todayData = await todayResponse.json()

  return{
    props:{
      live: liveData,
      today: todayData
    }
  }
}