export interface UserResponse {
    cccd: string,
    machucvu: number,
    chucvu: ChucVu,
    sdt: string
    diachi: string
    email: string
    hovaten: string
    anhdaidien: string
    ngaysinh: string
    ngaytao: string
    matkhau: string
    gioitinh: string
    so_BHYT: string
}

export interface UserRequest {
    cccd: string,
    hovaten: string
    sdt: string
    email: string
    matkhau: string
    ngaysinh: string
    gioitinh: string
    diachi: string
    anhdaidien: string | null
    so_BHYT: string
    machucvu: number,
}

interface ChucVu {
    machucvu: number
    tenchucvu: string
}