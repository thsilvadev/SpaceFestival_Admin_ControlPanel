
import { Routes, Route} from 'react-router-dom';
import Ingressos from '../pages/Ingressos'
import Produtos from '../pages/Produtos'


function AppRoutes () {

    return (
        <Routes>
        <Route path="/" exact element={<Ingressos />} />

        <Route path="produtos" element={<Produtos />}/>
    </Routes>
    )
}


export default AppRoutes;