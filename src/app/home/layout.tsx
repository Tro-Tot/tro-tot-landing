import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='h-screen grid grid-rows-[auto_1fr_auto] divide-y'>
      <Header />
      {/* <div className=' py-9'>{children}</div> */}
      <Footer />
    </section>
  );
}
