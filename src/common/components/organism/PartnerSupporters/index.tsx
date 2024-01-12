import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ethereumLogo from "../../../../../public/networks/Ethereum.png"
import BSCLogo from "../../../../../public/networks/BSC.png"
import AvalancheLogo from "../../../../../public/networks/Avalanche.png"
import PolygonLogo from "../../../../../public/networks/Polygon.png"
import zkSyncLogo from "../../../../../public/networks/zksync.png"

export default function PartnerSupporters() {
  return (
    <Box marginBottom={6} className=' py-8 px-2 rounded-[10px]' marginTop={10}>
        <Box component='a' id='partners' className='relative xs:-top-[150px] lg:-top-[80px]'></Box>
        <Stack className='flex justify-center'>
            <Typography variant='h4' className='font-bold text-center mb-4'>Supported Networks</Typography>
            <Grid container columnSpacing={4} rowSpacing={0} alignItems='center' justifyContent='center' paddingX={6}>
                <Grid item xs={12} md={3}>
                    <Image src={ethereumLogo} width={100} height={100} alt='Ethereum Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain hover:scale-105 transition' />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src={BSCLogo} width={100} height={100} alt='Binance Smart Chain Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain  hover:scale-105 transition' />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src={PolygonLogo} width={100} height={100} alt='Polygon Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain  hover:scale-105 transition' />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src={zkSyncLogo} width={100} height={100} alt='ZKSync Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain  hover:scale-105 transition' />
                </Grid>
            </Grid>
        </Stack>
    </Box>
  )
}
