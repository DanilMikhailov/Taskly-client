import PropTypes from 'prop-types';
import { Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';

export default function DeleteConfirmation({ alertTitle, handleClick, isOpen, onClose }) {
    return (
        <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>{alertTitle}</AlertDialogHeader>
                    <AlertDialogBody>Are you sure? You can&apos;t undo this action.</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme='red' onClick={handleClick} ml={3}>Delete</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}

// Добавляем propTypes для всех props компонента
DeleteConfirmation.propTypes = {
    alertTitle: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
