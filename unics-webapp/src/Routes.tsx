import {BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom'

import About from './pages/About'
import Committee from './pages/Committee'
import Sponsors from './pages/Sponsors'
import Events from './pages/Events'
import Loading from './pages/Loading'

import PageNotFound from './error/PageNotFound'



function Routes() {
    return (
        <div>
            <BrowserRouter>
                <RoutesDom>
                    <Route path='/loading' element={<Loading/>}/>

                    <Route index element={<About/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/events' element={<Events/>}/>
                    <Route path='/committee' element={<Committee/>}/>
                    <Route path='/sponsors' element={<Sponsors/>}/>

                    <Route path='*' element={<PageNotFound/>}/>
                </RoutesDom>
            </BrowserRouter>
        </div>
    )
}

export default Routes