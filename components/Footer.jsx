import { Typography } from "@mui/material"

const Footer = () => {
  return (
    <Typography sx={{textAlign: 'center', borderTop: '1px solid grey', fontFamily: 'Signika', position: 'absolute', bottom: 0, width: '100%'}}>
      Everything Football &copy; 2022
    </Typography>
  )
}

export default Footer