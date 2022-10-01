import { Box} from "@mui/material"
import Link from "next/link"
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const LinkTab = (props) => {
  return (
      <Link href={props.href}>
        <Tab
        component='p'
        {...props}
        />
      </Link>

  );
}

const StandingsNav = ({leagues}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mx: 'auto', bgcolor: 'rgba(0, 51, 102, 0.1)', boxShadow: '0 0 3px gray'}}>
        {
        <Tabs value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary" variant="scrollable" scrollButtons
            allowScrollButtonsMobile aria-label="standings navs">
            {
                leagues.map(
                    ({title, id}) => {
                        return (
                            <LinkTab label={title} href={`/standings/${id}`} key={id} />
                        )
                    }
                )
            }
        </Tabs>
        }
    </Box>
  )
}

export default StandingsNav