import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Usestate from './components/usestate';
import Useeffect from './components/Useeffect'
import Useref from './components/Useref'
import Usereducer from './components/Usereducer'
import PageNotFound from './components/PageNotFound'
import UseLayoutEffect from './components/UseLayoutEffect';
import ParentComponent from './components/parentComponent';
import UseContextHook from './components/UseContextHook';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >
                <Route path="usestate" element={<Usestate />} />
                <Route path="useeffect" element={<Useeffect />} />
                <Route path="useref" element={<Useref />} />
                <Route path="usereducer" element={<Usereducer />} />
                <Route path="uselayouteffect" element={<UseLayoutEffect />} />
                <Route path="useimperativehandle" element={<ParentComponent />} />
                <Route path="usecontexthook" element={<UseContextHook />} />
                <Route path='*' element={ <PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

