import Head from 'next/head';
import Image from 'next/image';
import { GradientBackgroundContainer } from './components/QuoteGenerator/QuoteGeneratorElements';

export default function Home() {
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
      <GradientBackgroundContainer></GradientBackgroundContainer>
    </>
  );
}
