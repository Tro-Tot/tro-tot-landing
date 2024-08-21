export interface HouseCardProps {
  image: string;
  price: number;
  name: string;
  address: string;
  bed: number;
  bath: number;
  area: number;
}

export const houses: HouseCardProps[] = [
  {
    image:
      'https://images.unsplash.com/photo-1504971588239-ba9c6ac9097f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 50000000,
    name: 'Biệt Thự Sang Trọng',
    address: '789 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
    bed: 5,
    bath: 4,
    area: 450,
  },
  {
    image:
      'https://images.unsplash.com/photo-1489370321024-e0410ad08da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 40000000,
    name: 'Nhà Hiện Đại Cho Gia Đình',
    address: '456 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
    bed: 4,
    bath: 3,
    area: 300,
  },
  {
    image:
      'https://images.unsplash.com/photo-1508330570239-ce7cabceee22?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 30000000,
    name: 'Nhà Gỗ Ấm Cúng',
    address: '123 Đường Hai Bà Trưng, Quận 3, TP. Hồ Chí Minh',
    bed: 3,
    bath: 2,
    area: 200,
  },
  {
    image:
      'https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 70000000,
    name: 'Bungalow Bên Bờ Biển',
    address: '321 Đường Hoàng Sa, Quận Tân Bình, TP. Hồ Chí Minh',
    bed: 6,
    bath: 5,
    area: 500,
  },
  {
    image:
      'https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 60000000,
    name: 'Khu Nghỉ Dưỡng Trên Núi',
    address: '987 Đường Phạm Văn Đồng, Quận Thủ Đức, TP. Hồ Chí Minh',
    bed: 4,
    bath: 3,
    area: 350,
  },
  {
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 45000000,
    name: 'Căn Hộ Trung Tâm Thành Phố',
    address: '654 Đường Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh',
    bed: 2,
    bath: 2,
    area: 150,
  },
];
