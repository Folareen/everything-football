import { Box, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

const navItems = [
    {
        title: 'match', route: '/match'
    },
    {
        title: 'stats', route: '/stats'
    },
    {
        title: 'video', route: '/video'
    },
    {
        title: 'news', route: '/news'
    }
]

const NavBar = () => {
    const {pathname} = useRouter()
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', maxWidth: '800px', mx: 'auto'}}>
        {
            navItems.map(
                ({title, route}, index) => {
                    return(
                        <Link href={route} key={index}>
                            <Button sx={{px: 4, py: 1, borderRadius: 0, fontFamily: 'inherit', fontSize: 18, borderBottomColor: 'primary.light', borderBottomWidth: (pathname === route ? 3 : 0 ), borderBottomStyle: 'solid', mx: 2, color: (pathname === route ? 'primary.light' : 'primary.dark' )}}   >
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

export default NavBar