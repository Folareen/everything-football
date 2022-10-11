import { Box, Button} from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

const StandingsNav = ({leagues}) => {
    const {query: {standingId}} = useRouter()
  return (
    <Box sx={{display: 'flex', bgcolor: 'rgba(0, 51, 102, 0.1)', boxShadow: '0 0 3px gray', p: 1, width: 'max-content' }}>
        {
            leagues.map(
                ({title,id}) => {
                    return(
                        <Link href={`/standings/${id}`} key={id}>
                                <Button sx={{p:1, width: 'max-content',wordBreak: 'normal', borderRadius: 0, fontFamily: 'inherit', fontSize: 17, borderBottomColor: 'primary.light', borderBottomWidth: (standingId === id ? 3 : 0 ), borderBottomStyle: 'solid', mx: 1, color: (standingId === id ? 'primary.light' : 'primary.main' )}}   >
                                    {title}
                                </Button>
                        </Link>
                    )
                }
            )
        }
    </Box>
  )
}

export default StandingsNav