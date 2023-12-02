import React from 'react'
import { AppBar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import Link from 'next/link';
import ContainerPage from '../../atoms/ContainerPage';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Cookies from 'js-cookie';
import ButtonContained from '../../atoms/ButtonContained';
import ButtonOutlined from '../../atoms/ButtonOutlined';
import { handleLogOut } from '@/common/utils/logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

// Changes on Scroll
function ChangesOnScroll(props: any) {
    const { children } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
        threshold: 100, //0 means trigger the event listener as soon as the user starts scrolling.
    });
    return React.cloneElement(children, {
        elevation: trigger ? 0 : 0  //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
    });
}

type Anchor = 'left';

export default function Appnav() {
    const trigger = useScrollTrigger({
        disableHysteresis: true, 
        threshold: 0,
    })
    const [drawer, setDrawer] = React.useState({ left: false });
    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;
        }
        setDrawer({ ...drawer, [anchor]: open })
    }
    const getUserInfo = Cookies.get('loginInfo')
    const router = useRouter()
  return (
    <ChangesOnScroll>
        <AppBar sx={{ backgroundColor: trigger ? "#000" : 'transparent', boxShadow: trigger ? 2 : 0, borderBottomColor: '#363636', borderBottomWidth: '1px', }} className='transition-all duration-700 ease-in-out'>
            <Toolbar sx={{height: trigger? {xs: 75, md: 85, lg: 75 } : {xs: 65, md: 80, lg: 60}}} className='transition-all duration-700 ease-in-out'>
                <ContainerPage disableGutters>
                <Grid container spacing={1} alignItems='center' className='relative' justifyContent='space-between'>
                    <Grid item xs={2} sx={{ display: {xs: 'flex', md: 'none' }}}>
                    {(['left'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button variant='outlined' className='w-[10px]' onClick={toggleDrawer(anchor, true)} sx={{ color: 'primary' }}><MenuIcon /></Button>
                            <Drawer anchor={anchor} open={drawer[anchor]} onClose={toggleDrawer(anchor, false)} PaperProps={{ sx: {backgroundColor: '#020617'}}} className='opacity-[0.98]'>
                                <Box className='pt-4 backdrop-blur-2xl h-screen relative' sx={{ width: 240 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                                    {/* <Typography variant='h6' sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize: 18}}>BYTRADE</Typography> */}
                                    <Link href='/'>
                                        <Stack direction='row' spacing={1} className='flex items-center text-lg' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                <img src='C:\Users\84386\Downloads\bytrade-landing-master\bytrade-landing-master\.next\cache\images\bw9YAh578kEALZubgndknimpcaV9hY4ZETSPWQdQB8U=\229319251b61dd3f8470 1.png' />
                                                <Typography variant='h5' className='font-bold uppercase'>Bytrade</Typography>
                                        </Stack>
                                    </Link>
                                    <Divider className='pt-5 border-gray-600' />
                                    <List>
                                        {MenuItems.map(item => {
                                            return (
                                                <>
                                                    <ListItem disablePadding>
                                                        <Link href={item.link}>
                                                            <ListItemButton className='w-[240px] justify-center py-4'>
                                                                <Typography variant='body1'>{item.label}</Typography>
                                                            </ListItemButton>
                                                        </Link>
                                                    </ListItem>
                                                </>
                                            )
                                        })}
                                    </List>
                                    <List className='absolute bottom-8'>
                                        <ListItem className='w-[240px] justify-center py-4'>
                                            { getUserInfo === undefined ? 
                                                <>
                                                    <Stack direction='row' spacing={1}>
                                                        <Link href='/register'>
                                                            <ButtonContained label='Register' />
                                                        </Link>
                                                        <Link href='/sign-in'>
                                                            <ButtonOutlined label='Login' />
                                                        </Link>
                                                    </Stack>
                                                </>
                                             : 
                                                <>
                                                    <Stack direction='column' spacing={2} alignItems='center' className='max-w-[200px] truncate'>
                                                        <Link href='/register'>
                                                            <ButtonContained label={getUserInfo} variant='text' size='large' className='align-middle max-w-[150px] truncate normal-case text-[16px] rounded-[2px] brightness-125' startIcon={<AccountCircleIcon fontSize='small' color='primary' />} />
                                                        </Link>
                                                        <Link href='/'>
                                                            <ButtonOutlined label='Logout' onClick={handleLogOut} />
                                                        </Link>
                                                    </Stack>
                                                </>
                                            }
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </React.Fragment>
                    ))}
                    </Grid>
                    <Grid item xs={8} className='justify-center'>
                        <Link href='/'>
                            <Stack direction='row' spacing={1} className='flex items-center text-lg'>
                            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3141 33.75H8.66062C7.19024 33.75 5.61288 32.587 5.13556 31.1508L0.137378 16.0992C-0.339946 14.663 0.466566 13.5 1.93694 13.5H26.5904C28.0608 13.5 29.6382 14.663 30.1155 16.0992L35.1137 31.1508C35.5882 32.587 34.7845 33.75 33.3141 33.75Z" fill="#C26028"/>
<path opacity="0.9" d="M36.3131 27H11.6604C10.19 27 8.61271 25.837 8.1354 24.4008L3.13737 9.34924C2.66006 7.91296 3.46655 6.75 4.93688 6.75H29.5896C31.06 6.75 32.6373 7.91296 33.1146 9.34924L38.1126 24.4008C38.5899 25.8344 37.7834 27 36.3131 27Z" fill="#EEC141"/>
<path opacity="0.9" d="M40.1043 20.25H15.9761C14.5371 20.25 12.9933 19.087 12.5261 17.6508L7.63445 2.59925C7.1673 1.16296 7.95663 0 9.39567 0H33.5239C34.963 0 36.5067 1.16296 36.9739 2.59925L41.8656 17.6508C42.3327 19.087 41.5434 20.25 40.1043 20.25Z" fill="#EEC141"/>
</svg>
                                <Typography variant='h5' className='font-bold uppercase' style={{
                                    color: '#E6C333',
                                }}>fidec</Typography>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid item className='absolute flex right-0'>
                        <Stack spacing={{ md: 2, lg: 4}} direction='row' sx={{ display: {xs: 'none', md: 'flex' }}} alignItems='center'>
                            {MenuItems.map(item => {
                                return (
                                    <>
                                        <Link href={item.link} className='text-light'>
                                            <Typography variant='body1' className='hover:brightness-75 hover:text-underline underline-offset-8'>{item.label}</Typography>
                                        </Link>
                                    </>
                                )
                            })}
                            { getUserInfo === undefined ? 
                                <Stack direction='row' spacing={{ md: 2, lg: 4}}>
                                    <ButtonContained label='Register' onClick={() => router.push('/register')} />
                                    <ButtonOutlined label='Login' onClick={() => router.push('/sign-in')} />
                                </Stack>
                                : 
                                <Stack direction='row' spacing={{ md: 2, lg: 4}}>
                                    <ButtonContained label={getUserInfo} variant='text' startIcon={<AccountCircleIcon fontSize='small' color='primary' />} className='align-middle max-w-[150px] truncate normal-case text-[16px] rounded-[2px] brightness-125' />
                                    <ButtonOutlined label='Logout' onClick={handleLogOut} />
                                </Stack>
                            }
                        </Stack>
                    </Grid>
                </Grid>
                </ContainerPage>
            </Toolbar>
        </AppBar>
    </ChangesOnScroll>
  )
}

export const MenuItems = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Features',
        link: '#features'
    },
    {
        label: 'Markets',
        link: '#top-coins'
    },
    {
        label: 'Academy',
        link: '/#academy'
    },
    {
        label: 'Partners',
        link: '/#partners'
    },
]
