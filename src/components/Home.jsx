import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w="full" h={'100vh'}>
          <Image src='assets/1.jpg' h="full" w={'full'} objectFit={'cover'}  />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOption}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src='assets/2.jpg ' h="full" w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.900'}
            color={'black'}
            {...headingOption}
          >
            Future is Gaming
          </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src='assets/3.jpg'  h="full" w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOption}
          >
            Gaming on Console
          </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src='assets/4.jpg' h="full" w={'full'} objectFit={'cover'}  />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOption}
          >
            Night life is cool
          </Heading>
        </Box>
      </Carousel>

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid black '}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row ']}
        >
          <Image
            src='assets/5.png'
            h={['40', '400']}
            filter={'hue-rotate(-130deg) '}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
