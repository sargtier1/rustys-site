import {
  Flex,
  Image,
  Stack,
} from '@chakra-ui/react';
import { ContactForm } from './contactForm';

export function ContactFormSection() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'flex-start'} justify={'flex-start'}>
        <ContactForm />
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1605658781469-50bcc2522522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}