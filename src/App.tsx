import {Route, Routes} from "react-router-dom";
import ManageUser from "./pages/manage-user";
import Admin from "./pages/Admin.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {App as AppAntd} from 'antd'
import UserCreate from "./pages/manage-user/UserCreate.tsx";
import UserUpdate from "./pages/manage-user/UserUpdate.tsx";
import {SignUp, Login} from './pages/auth'
import KhaiBao from "./pages/khai-bao/KhaiBao.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import QuanLyBenhDich from "./pages/quan-ly-benh-dich";
import ManageNotification from "./pages/manage-notification";
import Profile from "./pages/profile";
import HomePage from "./pages/homepage";
import ThongBao from "./pages/thong-bao";
import Client from "./pages/Client.tsx";
import KhaiBaoManage from "./pages/khai-bao/KhaiBaoManage.tsx";

function App() {

    return <AppAntd>
        <Routes>
            <Route path='/' element={<Client/>}>
                <Route index element={<HomePage />}/>
                <Route path='thong-bao' element={<ThongBao />}/>
            </Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/admin' element={<Admin/>}>
                <Route path='quan-ly-nguoi-dung' element={<ManageUser/>}/>
                <Route path='them-moi-nguoi-dung' element={<UserCreate/>}/>
                <Route path='cap-nhap-nguoi-dung/:cccd' element={<UserUpdate/>}/>
                <Route path='quan-ly-benh-dich' element={<QuanLyBenhDich/>}/>
                <Route path='quan-ly-thong-bao' element={<ManageNotification/>}/>
                <Route path='khai-bao' element={<KhaiBaoManage/>}></Route>
                <Route path='tao-moi-khai-bao' element={<KhaiBao/>}></Route>
                <Route path='ho-so' element={<Profile/>}></Route>
            </Route>
        </Routes>
    </AppAntd>
}

export default App
