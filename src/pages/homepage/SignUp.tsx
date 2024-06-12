import logoYte from '../../assets/img/logoYte.png'
export default function SignUp() {
    return (
        <div className="sign-up">
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-heading">
                            <span className='d-flex justify-content-center mb-3'><img style={{
                                borderRadius: "15px"
                            }} src={logoYte} alt="" /></span>
                            <h2 className="title">Đăng ký tài khoản</h2>
                            <h4 className="title">Hệ thống khai báo y tế thành phố Đà Nẵng</h4>
                        </div>
                        <div className="card-body">
                            <form method="POST" >

                                <div className="form-row">
                                    <div className="name">CCCD</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name="cccd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Email</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="email" name="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Mật khẩu</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="password" name="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row p-t-20">
                                    <div className="">
                                        <label className="label label--block">Giới tính</label>
                                    </div>
                                    <div style={{ marginLeft: "60px" }} className="">
                                        <label className="radio-container m-r-55">Nam
                                            <input type="radio" name="gender" value="Nam" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Nữ
                                            <input type="radio" name="gender" value="Nữ" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Địa Chỉ</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name="street" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">BHYT</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name="bhyt" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <button style={{ marginRight: '10px' }} className="btn btn--radius-2 btn--blue" type="button">Trở Lại</button>
                                    <button className="btn btn--radius-2 btn--red" type="submit">Đăng Ký</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


