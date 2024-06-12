import './KhaiBao.css'
export default function KhaiBao() {
    return (
        <div className="health-declaration">
            <h2>Tờ khai y tế</h2>
            <p>Trung thực khai báo những bệnh đã mắc phải trước khi vào thành phố.</p>
            <form>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="declarationType"
                            value="Bệnh nhân"
                        />
                        Bệnh nhân
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="declarationType"
                            value="Khai hộ"
                        />
                        Khai hộ
                    </label>
                </div>
                <div>
                    <label>
                        Căn cước công dân
                        <input
                            type="text"
                            name="citizenID"
                        />
                    </label>
                    <label>
                        Số CCCD của người khai (nếu khai hộ)
                        <input
                            type="text"
                            name="relativeID"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Bệnh phổ biến
                        <select
                            name="commonDisease"
                        >
                            <option value="Sốt xuất huyết">Sốt xuất huyết</option>
                            <option value="Nổi ban đỏ">Nổi ban đỏ</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Hoặc bệnh khác
                        <input
                            type="text"
                            name="otherDisease"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Có triệu chứng
                        <textarea
                            name="symptoms"
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Lịch trình
                        <textarea
                            name="travelHistory"
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Tải lên minh chứng
                        <input type="file" />
                    </label>
                </div>
                <div className="buttons">
                    <button type="button" onClick={() => console.log('Canceled')}>Hủy bỏ</button>
                    <button type="submit">Lưu thông tin</button>
                </div>
            </form>
        </div>
    );
};



