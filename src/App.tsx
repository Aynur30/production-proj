import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {useTheme} from "./theme/useTheme";
import { classNames } from './helpers/classNames/classNames';
import { Theme } from './theme/ThemeContext';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme] )}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;