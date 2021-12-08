import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Heading,
  Flex,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Divider,
  Spacer,
  ListIcon,
  Collapse,
  Stack,
  IconButton,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react'

import { ChevronRight, Menu, X } from 'react-feather'

export const Header = ({ show, handleToggle, router, ...rest }) => {
  const bgGradient = useColorModeValue(
    `linear(to-b, white ${!show ? '80%' : '100%'}, #ffffffd1) ${!show ? '20%' : '0%'
    }`,
    `linear(to-b, gray.800 ${!show ? '80%' : '100%'}, #1a202cd1) ${!show ? '20%' : '0%'
    }`
  )
  const btnSize = useBreakpointValue({
    base: 'sm',
    md: 'md',
  })

  const iconSize = useBreakpointValue({
    base: '40px',
    sm: '32px',
    md: '40px',
  })

  return (
    <Flex
      position='fixed'
      zIndex='sticky'
      width='100%'
      bgGradient={bgGradient}
      justifyContent='center'
      mb='2rem'
    >
      <Stack
        as='header'
        padding={5}
        boxShadow={show && 'dark-lg'}
        w={{ base: '100%', lg: '8xl' }}
        {...rest}
      >
        <Flex
          as='nav'
          align='center'
          justify='space-between'
          direction={{ base: 'row' }}
          maxW='8xl'
          wrap='wrap'
        >
          <Heading
            as='h1'
            size='lg'
            letterSpacing={'-.1rem'}
            textDecor='underline'
            alignSelf={{ base: 'flex-start' }}
            onClick={() => router.push('/')}
            cursor='pointer'
          >
            Rusty
          </Heading>
          <Stack
            isInline
            mt={{ base: 0, sm: 1, md: 0 }}
            alignSelf='flex-end'
            alignItems='center'
          >
            <Button onClick={() => router.push('/contact')}>
              Reach Out
            </Button>
            {/* <IconButton
              aria-label='Open Nav Menu'
              variant='ghost'
              icon={show ? <X /> : <Menu />}
              onClick={handleToggle}
              display={{ base: 'flex', sm: 'none' }}
            /> */}
            {/* <Button
              display={{ base: 'none', sm: 'flex' }}
              href='/'
              width='100px'
              variant={'ghost'}
              size={btnSize}
            >
              home
            </Button>
            <Button
              display={{ base: 'none', sm: 'flex' }}
              width='100px'
              variant={'ghost'}
              size={btnSize}
            >
              about
            </Button>
            <Button
              display={{ base: 'none', sm: 'flex' }}
              width='100px'
              variant={'ghost'}
              size={btnSize}
            >
              contact
            </Button> */}
          </Stack>
        </Flex>
        {/* 
        <Collapse in={show}>
          <Box
            display={{ base: show ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
          >
            <Spacer h={2} />
            <Divider
              sx={{
                borderColor: 'gray.400',
              }}
            />
            <List spacing={3}>
              <ListItem mt={'.75rem'}>
                {router?.pathname === '/' ? (
                  <ListIcon as={ChevronRight} />
                ) : undefined}
                <Link
                  href='/'
                  mt={{ base: 4, md: 0 }}
                  mr={6}
                  display='block'
                  as={NextLink}
                >
                  home
                </Link>
              </ListItem>
              <ListItem mt={'.75rem'}>
                {router?.pathname === '/about' ? (
                  <ListIcon as={ChevronRight} />
                ) : undefined}
                <Link
                  href='/about'
                  mt={{ base: 4, md: 0 }}
                  mr={6}
                  display='block'
                  as={NextLink}
                >
                  about
                </Link>
              </ListItem>
              <ListItem mt={'.75rem'}>
                {router?.pathname === '/about' ? (
                  <ListIcon as={ChevronRight} />
                ) : undefined}
                <Link
                  href='/contact'
                  mt={{ base: 4, md: 0 }}
                  mr={6}
                  display='block'
                  as={NextLink}
                >
                  contact
                </Link>
              </ListItem>
            </List>
          </Box>
        </Collapse> */}

      </Stack>
    </Flex>

  )
}