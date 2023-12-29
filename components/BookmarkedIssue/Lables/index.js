import React from 'react'
import { Chip } from '@mui/material'

const Labels = ({ node, onClick }) => {
  const { name, color } = node
  return (
    <Chip
      label={name}
      sx={{
        bgcolor: `#${color}`,
        color: 'white',
        fontSize: 10,
        mr: 2,
        fontWeight: 'bold'
      }}
      size='small'
    />
  )
}
export default Labels
