import '../app/styles/index.scss';
import { Suspense } from 'react';
import { AppRouterProvider } from 'app/providers/RouterProvider';

const App = () => (
    <div>
        <Suspense fallback=''>
            <div className='content-page'>
                <AppRouterProvider />
            </div>
        </Suspense>
    </div>
);
export default App;
