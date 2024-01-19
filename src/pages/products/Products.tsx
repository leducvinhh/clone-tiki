import { Container, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {},
  left: {
    width: '250px',
    backgroundColor: 'red'
  },
  right: {
    flex: '1 1 auto',
    backgroundColor: 'blue'
  }
}))

export default function Products() {
  const classes = useStyles()

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item className={classes.left}>
          <h1>Test</h1>
        </Grid>
        <Grid item className={classes.right}>
          <h1>Test</h1>
        </Grid>
      </Grid>
    </Container>
  )
}
