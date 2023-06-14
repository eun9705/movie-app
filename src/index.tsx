import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient,QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
reportWebVitals();
