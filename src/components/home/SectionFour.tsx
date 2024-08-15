'use client';
import { Card } from '../ui/card';
import { FileCheck, HousePlus, TvMinimalPlay } from 'lucide-react';
import Colors from '@/constants/color';

const SectionFour = () => {
  return (
    <section className='bg-primaryDark text-white py-8 px-4 md:px-9 h-auto md:h-[600px] flex flex-col'>
      <main className='border-b border-b-slate-500 pb-9'>
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-around font-semibold gap-5'>
          <div className='text-2xl md:text-3xl max-w-md text-center md:text-left'>
            <span>Chúng tôi làm cho </span>
            <span className='text-primaryLight'>người thuê nhà </span>
            <span>và </span>
            <span className='text-primaryLight'>chủ nhà</span>
            <span> trở nên dễ dàng hơn</span>
          </div>

          <span className='text-sm text-slate-300 max-w-md text-center md:text-left'>
            Dù là bán căn nhà hiện tại, tìm kiếm tài chính, hay mua một căn nhà
            mới, chúng tôi làm cho mọi thứ trở nên dễ dàng và hiệu quả. Điều
            tuyệt vời nhất? Bạn sẽ tiết kiệm được rất nhiều tiền và thời gian
            với dịch vụ của chúng tôi.
          </span>
        </div>

        <div className='mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
          <Card className='bg-blue-900 rounded-xl text-white flex items-center px-5 py-4 gap-x-5'>
            <div className='rounded-full px-3 py-3 bg-primaryDark w-fit text-white'>
              <TvMinimalPlay size={20} />
            </div>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-xl font-semibold'>Tham quan nhà ảo</h1>
              <span className='text-slate-300 text-sm max-w-md'>
                Bạn có thể giao tiếp trực tiếp với chủ nhà và chúng tôi cung cấp
                cho bạn chuyến tham quan ảo trước khi mua hoặc thuê bất động
                sản.
              </span>
            </div>
          </Card>

          <Card className='bg-slate-300 rounded-xl flex items-center px-5 py-4 gap-x-5'>
            <div className='rounded-full px-3 py-3 bg-slate-200 w-fit text-white'>
              <HousePlus size={20} color={Colors.primaryLightBackgroundColor} />
            </div>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-xl font-semibold'>Tìm ưu đãi tốt nhất</h1>
              <span className='text-slate-600 text-sm max-w-md'>
                Duyệt qua hàng ngàn bất động sản, lưu lại những lựa chọn yêu
                thích và thiết lập thông báo tìm kiếm để không bỏ lỡ ưu đãi nhà
                tốt nhất!
              </span>
            </div>
          </Card>

          <Card className='bg-primaryLight rounded-xl text-white flex items-center px-5 py-4 gap-x-5'>
            <div className='rounded-full px-3 py-3 w-fit bg-white text-white'>
              <FileCheck size={20} color={Colors.primaryLightBackgroundColor} />
            </div>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-xl font-semibold'>Sẵn sàng nộp hồ sơ</h1>
              <span className='text-slate-300 text-sm max-w-md'>
                Đã tìm thấy ngôi nhà mơ ước? Bạn chỉ cần làm rất ít hoặc không
                cần làm gì và bạn có thể bắt đầu chuyển vào ngôi nhà mơ ước mới
                của mình!
              </span>
            </div>
          </Card>
        </div>
      </main>

      <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-5 mt-9 justify-items-center'>
        <div className='flex items-center flex-col py-5 md:py-0'>
          <h1 className='font-semibold text-3xl'>7.4%</h1>
          <span className='text-slate-500 text-xl text-center'>
            Tỷ lệ hoàn trả bất động sản
          </span>
        </div>
        <div className='flex items-center flex-col py-5 md:py-0'>
          <h1 className='font-semibold text-3xl'>3,856</h1>
          <span className='text-slate-500 text-xl text-center'>
            Bất động sản đang bán & cho thuê
          </span>
        </div>
        <div className='flex items-center flex-col py-5 md:py-0'>
          <h1 className='font-semibold text-3xl'>2,540</h1>
          <span className='text-slate-500 text-xl text-center'>
            Giao dịch hoàn thành hàng ngày
          </span>
        </div>
      </main>
    </section>
  );
};

export default SectionFour;
