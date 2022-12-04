import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { authRegisterRequest } from '../../apis/authService';
import { AuthRegisterType } from '../../types/auth/authType';

const useAuthRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthRegisterType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      checkPassword: '',
    },
  });

  const handleAuthRegisterSubmit = useCallback(
    async (userData: AuthRegisterType) => {
      const { email, nickname, password, checkPassword } = userData;
      const res = await authRegisterRequest(
        email,
        nickname,
        password,
        checkPassword,
      );
      console.log(res);
    },
    [],
  );

  return {
    register,
    errors,
    handleSubmit,
    handleAuthRegisterSubmit,
  };
};

export default useAuthRegister;
