import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    IconButton,
    EmailIcon   
  } from '@chakra-ui/react'


  function Contato(){
    const { isOpen, onOpen, onClose } = useDisclosure()
      
    return(
        <div className='text-center mt-5'>
        <h2 className='text-2xl'>Contato</h2>
        <Button onClick={onOpen} colorScheme='blue' variant='outline' className='mt-5'>enviar um email</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>me envie um email</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
                <FormLabel htmlFor='email'>seu endereço de email</FormLabel>
                <Input id="email" type="email" _placeholder='email'/>
                <FormLabel htmlFor='first-name'>seu nome completo</FormLabel>
                <Input id='first-name' placeholder='nome completo' />
                <FormLabel htmlFor='textarea'>mensagem</FormLabel>
                <Textarea
                    id="textarea"
                    placeholder='insira aqui sua mensagem'
                    size={'lg'}
                />    
            </FormControl>
          </ModalBody>

          <ModalFooter alignItems='center' justifyContent='center'>
             <Button colorScheme='blue' mr={3}>
              Enviar
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
      )
  }

  export default Contato;
  