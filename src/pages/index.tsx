import Head from 'next/head'
import { Box } from '@mui/material'
import BackgorundGradient from '@/common/components/atoms/BackgroundGradient'
import Appnav from '@/common/components/organism/Appnav'
import ContainerPage from '@/common/components/atoms/ContainerPage'
import HeroSite from '@/common/components/organism/HeroSite'
import Instruction from '@/common/components/organism/Instruction'
import TopCoins from '@/common/components/organism/TopCoins'
import Steps from '@/common/components/organism/Steps'
import Academy from '@/common/components/organism/Acadamy'
import PartnerSupporters from '@/common/components/organism/PartnerSupporters'
import Footer from '@/common/components/organism/Footer'
import Features1 from '@/common/components/organism/Features1'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fidec - Safe Key To Access Blockchain Ecosystem</title>
      </Head>
      <Appnav />
      <Box className='relative'>
        <BackgorundGradient />
      </Box>
      <ContainerPage>
        <HeroSite />
        <Instruction />
        {/* <TopCoins /> */}
      </ContainerPage>
      <Box className='w-screen h-full xs:px-0 xs:py-8 lg:p-8 bg-[#000000]'>
        <ContainerPage>
          <Steps />
        </ContainerPage>
      </Box>
      
      <Box className='w-screen h-full xs:px-0 xs:py-8 lg:p-8 bg-[#000000]'>
        <ContainerPage>
        <Features1/>
        </ContainerPage>
      </Box>
      <Box className='relative'>
        <ContainerPage>
          <Academy />
          <PartnerSupporters />
          <Footer />
        </ContainerPage>
      </Box>
    </>
  )
}
