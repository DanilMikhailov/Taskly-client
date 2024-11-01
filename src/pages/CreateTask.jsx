import { Box, Heading, Button } from '@chakra-ui/react'; 
import { Link as RouterLink } from 'react-router-dom'; 
import { BsChevronLeft } from 'react-icons/bs'; 
import TaskForm from '../components/TaskForm'; 

export default function CreateTask() { 
    return ( 
        <Box p='3' maxW='4xl' mx='auto'> 
            <Button 
                as={RouterLink} 
                to={`/tasks`} 
                colorScheme='teal' 
                variant='link' 
                leftIcon={<BsChevronLeft />} 
                mb='4' // Отступ снизу для отделения от заголовка
            >
                All Tasks
            </Button>
            <Heading 
                as='h1' 
                fontSize='3xl' 
                fontWeight='semibold' 
                textAlign='center' 
                my='7' 
            > 
                Create a New Task 
            </Heading> 
            <TaskForm type='create' /> 
        </Box> 
    ); 
}
