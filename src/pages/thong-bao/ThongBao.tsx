import React from 'react';
import { Card, Typography, Layout } from 'antd';

const { Title, Text } = Typography;
const { Content } = Layout;

const notifications = [
  {
    title: "Thông Báo Khẩn Cấp",
    date: "08/06/2024",
    content: "Do tình hình dịch bệnh COVID-19 đang diễn biến phức tạp, yêu cầu mọi người hạn chế đi lại và tuân thủ các biện pháp phòng dịch."
  },
  {
    title: "Hướng Dẫn Phòng Chống Dịch Bệnh",
    date: "05/06/2024",
    content: "Để phòng tránh dịch bệnh, mọi người cần rửa tay thường xuyên bằng xà phòng, đeo khẩu trang khi ra ngoài, và giữ khoảng cách tối thiểu 2m."
  },
  {
    title: "Cập Nhật Tình Hình Dịch Bệnh",
    date: "02/06/2024",
    content: "Tính đến ngày hôm nay, đã có 50 ca nhiễm mới được ghi nhận tại thành phố. Mọi người nên theo dõi thông tin từ các nguồn chính thống và thực hiện các biện pháp bảo vệ bản thân."
  }
];

const ThongBao: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ maxWidth: '600px', width: '100%', padding: '20px' }}>
        <Title level={2} style={{ textAlign: 'center' }}>Thông Báo Y Tế</Title>
        {notifications.map((notification, index) => (
          <Card key={index} style={{ marginBottom: '20px' }}>
            <Title level={4} style={{ color: '#1890ff' }}>{notification.title}</Title>
            <Text type="secondary">Ngày: {notification.date}</Text>
            <p>{notification.content}</p>
          </Card>
        ))}
      </Content>
    </Layout>
  );
};

export default ThongBao;
