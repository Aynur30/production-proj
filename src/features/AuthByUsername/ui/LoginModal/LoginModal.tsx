import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import  LoginForm  from '../LoginForm/LoginForm';
import { Suspense } from 'react';
//import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}

    >
        <Suspense fallback={<Loader/>}>
            <LoginForm/>
        </Suspense>
    </Modal>
);
