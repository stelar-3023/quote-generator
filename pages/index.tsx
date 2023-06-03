import React, { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

// Components
import {
  CloudThunder,
  CloudyWeather,
  FooterContainer,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  GradientBackgroundContainer,
  QuoteGeneratorContainer,
  QuoteGeneratorInnerContainer,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
} from './components/QuoteGenerator/QuoteGeneratorElements';

// Assets
import cloudyWeather from '@/assets/cloudy-weather.png';
import cloudThunder from '@/assets/cloud-and-thunder.png';

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta
          name='description'
          content='Project to generate inspirational quotes'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Background */}
      <GradientBackgroundContainer>
        {/* Quote Generator */}
        <QuoteGeneratorContainer>
          <QuoteGeneratorInnerContainer>
            <QuoteGeneratorTitle>Daily Quote</QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Generate a quote card with a random inspirational quote provided
              by the{' '}
              <FooterLink
                href='https://zenquotes.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                ZenQuotes API
              </FooterLink>
              .
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorContainer>

        <CloudyWeather src={cloudyWeather} height='300' alt='cloudy-weather' />
        <CloudThunder src={cloudThunder} height='300' alt='cloud-and-thunder' />

        {/* Footer */}
        <FooterContainer>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed by{' '}
            <FooterLink href='' target='_blank' rel='noopener noreferrer'>
              {' '}
              Steve Larsen.
            </FooterLink>
          </>
        </FooterContainer>
      </GradientBackgroundContainer>
    </>
  );
}
