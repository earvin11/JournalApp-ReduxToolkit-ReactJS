import { Routes, Route, Navigate } from 'react-router-dom';
import { JorunalPage } from '../pages';

export const JournalRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <JorunalPage /> } />

            <Route path="/" element={ <Navigate to="/" /> } />
        </Routes>
    )
}