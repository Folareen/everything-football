import { Box, Paper, Typography } from "@mui/material"

const Match = ({match}) => {
  const {Eps, Tr1, Tr2, T1, T2} = match
  const team1 = T1[0]
  const team2 = T2[0]
  return<Box sx={{my: 2,  width: '100%', mx: 'auto', maxWidth: '700px', display: 'flex', flexDirection: 'row', borderLeftColor: 'warning.main', borderLeftWidth: 2, borderLeftStyle: 'solid' }}>

    <Typography sx={{color: 'warning.main', fontSize: 15, fontFamily: 'Signika', textAlign: 'center', mx:2, alignSelf: 'center'}}>
      {Eps}
    </Typography>

    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>

      <Box sx={{display: 'flex',justifyContent: 'flex-start',flex: 1}}>
        <img src={`https://lsm-static-prod.livescore.com/medium/${team1.Img}`} style={{width: '20px', height: '20px'}} />
        <Typography sx={{ fontFamily: 'Signika', fontSize: {xs: 14, lg: 18}}}>
          {team1.Nm}
        </Typography>
      </Box>

      <Box sx={{display: 'flex', flex: 1,}}>
        <img src={`https://lsm-static-prod.livescore.com/medium/${team2.Img}`} style={{width: '20px', height: '20px'}} />
        <Typography sx={{fontFamily: 'Signika', fontSize: {xs: 14, lg: 18}}}>
          {team2.Nm}
        </Typography>
      </Box>

    </Box>

    <Box sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
      <Typography sx={{mx: 2, color: 'primary.main', fontFamily: 'Signika'}}>
        {Tr1}
      </Typography>
      <Typography sx={{mx: 2, color: 'primary.main', fontFamily: 'Signika'}}>
        {Tr2}
      </Typography>
    </Box>

  </Box>
}

const League = ({league}) => {
  const {Snm, Cnm, Events} = league
  console.log(league)
  return <Paper elevation={2} sx={{my: 2, p: 2,pt: 1, fontFamily: 'Signika'}} >
    <Box sx={{textAlign: 'center', borderBottomColor: 'primary.dark', borderBottomWidth: 1, borderBottomStyle: 'solid', py: 1}}>
      <Typography component={'h3'} sx={{fontFamily: 'Signika'}}>
        {Snm}
      </Typography>
      <Typography component={'h4'} sx={{fontFamily: 'Signika', fontSize: 14 }}>
        {Cnm}
      </Typography>
    </Box>

    {
      Events.map(
        (event) => {
          return <Match match={event} />
        }
      )
    }
  </Paper>
}

const LiveMatches = ({data}) => {
  console.log(data)
  const {Stages} = data
  console.log(Stages)
  return (
    <>
    {
      Stages.map((stage) => {
        return <League league={stage}  />
      })
    }
    </>
  )
}

export default LiveMatches