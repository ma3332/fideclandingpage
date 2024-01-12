import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Instruction() {
  return (
    <Box component='section' marginBottom={10}>
        <Box component='a' id='Instruction' className='relative xs:-top-[190px] lg:-top-[150px]'></Box>
        <Grid container rowSpacing={2} className='xs:-translate-y-20 lg:-translate-y-0'>
          <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0}}>
            <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
              5+
            </Typography>
            <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
              EVM Networks Support
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0}}>
            <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
              All Tokens
            </Typography>
            <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
              ERC20, NFT, ERC1155
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0}}>
            <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
              Payment 
            </Typography>
            <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
              Ecommerce Web3
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0}}>
            <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
              24h/7days
            </Typography>
            <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
              User Supports
            </Typography>
          </Grid>
        </Grid>
    </Box>
  )
}
