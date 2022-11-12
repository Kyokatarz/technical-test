import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import SxTheme from '../../../types/theme'
import InfoBox from '../../InfoBox'

type Props = {
  section: {
    sectionName: string
    data: {
      title: string
      value: string
    }[]
  }
}

const styles: SxTheme = {
  wrapper: {
    marginBottom: (theme) => theme.spacing(1),
  },
  divider: {
    margin: (theme) => `${theme.spacing(1)} 0`,
  },
}

const SystemInfoSection = ({ section }: Props) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      key={section.sectionName}
      sx={styles.wrapper}
    >
      <Typography variant="h6">{section.sectionName}</Typography>
      <Divider sx={styles.divider} />
      {section.data.map((info) => (
        <InfoBox key={info.title} title={info.title} value={info.value} />
      ))}
    </Grid>
  )
}

export default SystemInfoSection
