import logoYte from '../../assets/img/logoYte.png'
export default function Login() {
    return (
        <div className="sign-up">
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-heading">
                            <span className='d-flex justify-content-center mb-3'><img style={{
                                borderRadius: "15px"
                            }} src={logoYte} alt="" /></span>
                            <h2 className="title">Đăng Nhập</h2>
                        </div>
                        <div className="card-body">
                            <form method="POST" >
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
                                <span className='d-flex fs-6 fw-bold justify-content-end mb-3'>Quên mật khẩu?</span>

                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <button style={{ marginRight: '10px' }} className="btn btn--radius-2 btn--blue" type="button">Trở Lại</button>
                                    <button className="btn btn--radius-2 btn--red" type="submit">Đăng Nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


