import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ChipClickable from "../../atoms/ChipClickable";
import Article from "../../molecules/Article";
import article2 from "../../../../../public/post/article-2.jpg";

export default function Academy() {
  return (
    <Box component="section" marginTop={4} marginBottom={4}>
      <Box
        component="a"
        id="academy"
        className="relative xs:-top-[120px] lg:-top-[150px]"
      ></Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        rowGap={2}
        justifyContent="space-between"
        alignItems={{ xs: "start", md: "center" }}
        marginBottom={2}
      >
        <Typography variant="h4" className="font-bold">
          Latest Article
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          {/* <Typography variant='body1' className='font-bold text-lg'>Level</Typography>
                <Stack direction='row' spacing={0.5} alignItems='center'>
                    <ChipClickable active='filled' inactive='outlined' label='Beginner' />
                    <ChipClickable active='filled' inactive='outlined' label='Intermediate' />
                    <ChipClickable active='filled' inactive='outlined' label='Advanced' />
                </Stack> */}
        </Stack>
      </Stack>
      <Grid container columnSpacing={3} rowSpacing={6}>
        <Grid item xs={12} md={4}>
          <Article
            src="/post/article-1.jpg"
            level="News"
            link="https://www.theguardian.com/technology/2024/jan/11/bitcoin-etf-approved-sec-explained-meaning-securities-regulator-tweet"
            title="Bitcoin ETF is Approved by SEC"
            body="The SEC has approved bitcoin ETFs. What are they and what does it mean for investors?"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Article
            src="/post/article-3.jpg"
            level="Knowledge"
            link="https://cointelegraph.com/explained/zero-knowledge-proofs-explained"
            title="What is Zero-Knowledge and How Does it Work?"
            body="A zero-knowledge (ZK) proof is a cryptographic protocol that enables one person (the prover) to convince another (the verifier) that a particular claim is true without disclosing any details about the claim itself."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Article
            src={article2}
            level="Fidec"
            link="/"
            title="Fidec Win NFT Track of Winter Ideathon organized by Web3 Space"
            body="We are very proud of winning NFT track organized by Web3 Space for innovative product for blockchain applications"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
