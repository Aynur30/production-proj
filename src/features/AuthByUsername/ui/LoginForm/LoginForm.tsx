import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/Modal/Slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/Modal/Selectors/selectLoginState/getLoginState';
import { loginByusername } from 'features/AuthByUsername/Modal/services/loginByusername/loginByusername';
import { Text, TextTheme } from 'shared/ui/Text/text';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo( ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {username, password, error, isLoading} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string)=>{
        dispatch(loginActions.setUsername(value));
    }, [dispatch])


    const onChangePassword = useCallback((value: string)=>{
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback(()=>{
        dispatch(loginByusername({username, password}))
    }, [dispatch, username, password])

    return (
        
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}

            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;