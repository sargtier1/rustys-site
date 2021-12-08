import * as React from 'react'
import {
  Box,
  Heading,
  Text,
  Input,
  Flex,
  FormControl,
  Textarea,
  Stack,
  FormLabel,
  Button,
  Alert,
  AlertIcon
} from '@chakra-ui/react'

export const ContactForm = () => {
  const [status, setStatus] = React.useState<any>({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  })

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    details: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        details: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <Flex
      width='100%'
      bg='gray.800'
      p={4}
    >
      <Box
        maxWidth='800px'
        width='100%'
        margin='auto'
        mb={8}
      >
        <Flex
          direction='column'
          justifyContent='center'
          align={{ xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' }}
          textAlign={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'left',
          }}
        >
          <Heading px='2rem' pb='.5rem' pt='3rem' color="white">
            Contact Us
          </Heading>
          <Text px='2rem' pb='.5rem' color='gray.500'>
            Thanks for checking us out. We look forward to working with your business andhelping you reach your goals.
          </Text>
        </Flex>
        <form onSubmit={handleOnSubmit}>
          <FormControl p={[3, 4, 5, 6]}>
            <Stack spacing={8}>
              <Box>
                <FormLabel ml={2} mb={2} htmlFor='name' color="white">
                  Full Name
                </FormLabel>
                <Input
                  placeholder='Jane Doe'
                  id='name' value={inputs.name}
                  onChange={handleOnChange}
                />
              </Box>
              <Box>
                <FormLabel ml={2} mb={2} htmlFor='email' color="white">
                  Email Address
                </FormLabel>
                <Input
                  placeholder='jane.doe@doemail.com'
                  id='email' value={inputs.email}
                  onChange={handleOnChange}
                />
              </Box>
              <Box>
                <FormLabel ml={2} mb={2} htmlFor='details' color="white">
                  Project Details
                </FormLabel>
                <Textarea
                  id='details'
                  placeholder='Details, budget, time-frame, wishlist'
                  height='23vh'
                  value={inputs.details}
                  onChange={handleOnChange}
                />
              </Box>
              <Button
                type='submit'
                isLoading={status.submitting}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Reach Out'
                    : 'Submitted'
                  : 'Submitting...'}
              </Button>
              {status.info.error && (
                <Alert status="error">
                  <AlertIcon />
                  Error: {status.info.msg}
                </Alert>
              )}
              {!status.info.error && status.info.msg && (
                <Alert status="success">
                  <AlertIcon />
                  {status.info.msg}
                </Alert>
              )}
            </Stack>
          </FormControl>
        </form>
      </Box>
    </Flex>
  )
}