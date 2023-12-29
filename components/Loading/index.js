import { Grid } from 'react-loader-spinner'
import { Container } from '@mui/material'

const Loading = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Grid
        type='Oval'
        color='#2dba5f'
        height={150}
        width={150}
        timeout={3000}
      />
    </Container>
  )
}

export default Loading
