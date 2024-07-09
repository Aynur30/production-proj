import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/Providers/ThemeProvider';
import { AppRouter } from './Providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from "widgets/sidebar";
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();




    useEffect(()=>{
        dispatch(userActions.InitAuthByData());
    }, [dispatch])


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
