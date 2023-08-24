import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routerConfig';

export const AppRouterProvider = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                path={path}
                key={path}
                element={
                    <Suspense fallback={<PageLoader />}>
                        <div className='page-wrapper'>{element}</div>
                    </Suspense>
                }
            />
        ))}
    </Routes>
);
