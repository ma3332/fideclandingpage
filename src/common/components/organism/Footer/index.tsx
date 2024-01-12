import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ButtonContained from '../../atoms/ButtonContained'
import { MenuItems as menuItems } from '../Appnav'
import Link from 'next/link'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Cookies from 'js-cookie'

export default function Footer() {
    const getUserInfo = Cookies.get('loginInfo')
  return (
    <>
        <Divider light className='border-gray-600 w-screen absolute left-0' />
        <Stack className='py-8'>
            <Grid container columnSpacing={2} rowSpacing={4}>
                <Grid item xs={12} md={6} lg={3}>
                    {/* <Typography variant='h5' className='font-bold mb-2'>
                        Start earning today
                    </Typography> */}
                    {/* { getUserInfo === undefined ? 
                        <Link href='/register'>
                            <ButtonContained label='Register Now' size='large' fullWidth className='py-3 capitalize text-[16px] rounded-[4px] font-bold' />
                        </Link>
                        : 
                        <Link href='/#top-coins'>
                            <ButtonContained label='Trades Now' size='large' fullWidth className='py-3 capitalize text-[16px] rounded-[4px] font-bold' />
                        </Link>
                    } */}
                </Grid>
                <Grid item xs={12} md={6} lg={3} className='xs:text-start lg:text-end'>
                    <Typography variant='h5' className='font-bold mb-2'>
                        Pages
                    </Typography>
                    {menuItems.map(item=> {
                        return(
                            <>
                                <Link href={item.link}>
                                    <Typography variant='h6' className='hover:brightness-125 transition text-[20px]'>{item.label}</Typography>
                                </Link>
                            </>
                        )
                    })}
                </Grid>
                <Grid item xs={12} md={6} lg={3} className='xs:text-start lg:text-center'>
                    <Typography variant='h5' className='font-bold mb-2'>
                        Community
                    </Typography>
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Link href='#'>
                            <LinkedInIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <FacebookIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <TwitterIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <InstagramIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <YouTubeIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Link href='/'>
                        <Stack direction='row' spacing={1} className='flex items-center text-lg mb-4' sx={{display:'flex', alignItems:'center'}}>
                        <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.3141 33.75H8.66062C7.19024 33.75 5.61288 32.587 5.13556 31.1508L0.137378 16.0992C-0.339946 14.663 0.466566 13.5 1.93694 13.5H26.5904C28.0608 13.5 29.6382 14.663 30.1155 16.0992L35.1137 31.1508C35.5882 32.587 34.7845 33.75 33.3141 33.75Z" fill="#C26028"></path><path opacity="0.9" d="M36.3131 27H11.6604C10.19 27 8.61271 25.837 8.1354 24.4008L3.13737 9.34924C2.66006 7.91296 3.46655 6.75 4.93688 6.75H29.5896C31.06 6.75 32.6373 7.91296 33.1146 9.34924L38.1126 24.4008C38.5899 25.8344 37.7834 27 36.3131 27Z" fill="#EEC141"></path><path opacity="0.9" d="M40.1043 20.25H15.9761C14.5371 20.25 12.9933 19.087 12.5261 17.6508L7.63445 2.59925C7.1673 1.16296 7.95663 0 9.39567 0H33.5239C34.963 0 36.5067 1.16296 36.9739 2.59925L41.8656 17.6508C42.3327 19.087 41.5434 20.25 40.1043 20.25Z" fill="#EEC141"></path></svg>
                            <Typography variant='h5' className='font-bold uppercase text-[35px]'>FIDEC</Typography>
                        </Stack>
                    </Link>
                    <Stack direction='row' spacing={1} marginBottom={1}>
                        <PlaceIcon fontSize='small' color='primary' />
                        <Typography variant='subtitle2'>35/24/ Dang Tien Dong Street/ Dong Da District/ Hanoi</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} marginBottom={1}>
                        <CallIcon fontSize='small' color='primary' />
                        <Typography variant='subtitle2'>+84 918498199</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} marginBottom={1}>
                        <EmailIcon fontSize='small' color='primary' />
                        <Typography variant='subtitle2'>support@fidec.io</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
        <Stack className='py-4'>
            <Divider light className='border-gray-600 mb-3' />
            <Typography variant='subtitle1' className='text-center text-text-secondary'>© 2022 <Link href='/' className='hover:text-primary'>Fidec</Link> - All Rights Reserved</Typography>
        </Stack>
    </>
  )
}
