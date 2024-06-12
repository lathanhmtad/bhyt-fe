import {Route, Routes} from "react-router-dom";
import ManageUser from "./pages/manage-user";
import Admin from "./pages/Admin.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {App as AppAntd} from 'antd'
import UserCreate from "./pages/manage-user/UserCreate.tsx";
import UserUpdate from "./pages/manage-user/UserUpdate.tsx";
import {SignUp, Login} from './pages/auth'
import KhaiBao from "./pages/homepage/KhaiBao.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import QuanLyBenhDich from "./pages/quan-ly-benh-dich";
import ManageNotification from "./pages/manage-notification";

function App() {

    return <AppAntd>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/khai-bao' element={<KhaiBao/>}></Route>
            <Route path='/admin' element={<Admin/>}>
                <Route path='quan-ly-nguoi-dung' element={<ManageUser/>}/>
                <Route path='them-moi-nguoi-dung' element={<UserCreate/>}/>
                <Route path='cap-nhap-nguoi-dung/:cccd' element={<UserUpdate/>}/>
                <Route path='quan-ly-benh-dich' element={<QuanLyBenhDich/>}/>
                <Route path='quan-ly-thong-bao' element={<ManageNotification/>}/>
            </Route>
        </Routes>
    </AppAntd>
}

export default App
