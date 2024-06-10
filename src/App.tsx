import {Route, Routes} from "react-router-dom";
import ManageUser from "./pages/manage-user";
import Admin from "./pages/Admin.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {App as AppAntd} from 'antd'
import UserCreate from "./pages/manage-user/UserCreate.tsx";
import './App.css'
import UserUpdate from "./pages/manage-user/UserUpdate.tsx";

function App() {

    return <AppAntd>
        <Routes>
            <Route path='/admin' element={<Admin/>}>
                <Route path='quan-ly-nguoi-dung' element={<ManageUser/>}/>
                <Route path='them-moi-nguoi-dung' element={<UserCreate/>}/>
                <Route path='cap-nhap-nguoi-dung/:cccd' element={<UserUpdate/>}/>
            </Route>
        </Routes>
    </AppAntd>
}

export default App
