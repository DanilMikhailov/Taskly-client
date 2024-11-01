import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { API_BASE_URL } from '../util.js';
import { useUser } from './../context/UserContext.jsx';
import {
    FormControl,
    Input,
    Button,
    Text,
    Box,
    Flex,
    Heading,
    Stack,
    FormErrorMessage
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const { updateUser } = useUser();
    const navigate = useNavigate();

    // Функция для обработки отправки формы
    const doSubmit = async (values) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            if (res.status === 200) {
                toast.success('Регистрация прошла успешно. Вы вошли в систему');
                updateUser(data); // Обновляем пользователя только при успешной регистрации
                navigate('/'); // Переход на главную страницу или куда-то еще
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Что-то пошло не так');
        }
    };

    return (
        <Box p="3" maxW="lg" mx="auto">
            <Heading
                as="h1"
                textAlign="center"
                fontSize="3xl"
                fontWeight="semibold"
                my="7"
            >
                Создайте аккаунт
            </Heading>

            <form onSubmit={handleSubmit(doSubmit)}>
                <Stack gap="4">
                    {/* Поле для имени пользователя */}
                    <FormControl isInvalid={errors.username}>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Имя пользователя"
                            {...register('username', { required: 'Имя пользователя обязательно' })}
                        />
                        <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                    </FormControl>

                    {/* Поле для email */}
                    <FormControl isInvalid={errors.email}>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: 'Email обязателен' })}
                        />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>

                    {/* Поле для пароля */}
                    <FormControl isInvalid={errors.password}>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Пароль"
                            {...register('password', { required: 'Пароль обязателен' })}
                        />
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </FormControl>

                    {/* Кнопка регистрации */}
                    <Button
                        type="submit"
                        isLoading={isSubmitting}
                        colorScheme="teal"
                        textTransform="uppercase"
                    >
                        Зарегистрироваться
                    </Button>
                </Stack>
            </form>

            {/* Ссылка на страницу входа */}
            <Flex gap="2" mt="5">
                <Text>Уже есть аккаунт?</Text>
                <Link to="/signin">
                    <Text as="span" color="blue.400">Войти</Text>
                </Link>
            </Flex>
        </Box>
    );
}
