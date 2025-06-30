import Link from 'next/link';
import Picture3 from '../asset/Kingfaisal4.jpg'; // Example image import

const PortfolioPage = () => {
  return (
    
    <div className="min-h-screen max-100% bg-light-100 font-sans mt-65 px-4">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-700">KINGFAISAL</h1>
        <button className="text-2xl text-teal-700">&#9776;</button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-12 bg-white shadow-lg rounded-lg p-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">Feisal Ibrahim Hussein</h2>
          <p className="text-gray-700 mb-2">
            A freelance product designer by day, and digital marketer by night.
          </p>
          <p className="text-gray-700 mb-6">
            My name is Feisal Ibrahim Hussein, and this is my portfolio.
          </p>
          <div className="flex space-x-4">
           <Link href="/Portfolio" className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition">
           View my Work</Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden">
            {/* Replace with actual image */}
            <img
              src={Picture3.src}
              alt="Feisal Ibrahim"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <h3 className="text-3xl font-semibold text-teal-700 mb-4">About Feisal.</h3>
        <p className="text-light-700 leading-relaxed">
          With more than 10 years of professional experience under his belt, Feisal Ibrahim is a
          software developer and digital marketer. He has helped brands establish their online
          presence with his innovative product designs and marketing strategies to promote them.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { title: 'Software developer', icon: '🌐' },
          { title: 'SEO Marketing', icon: '📈' },
          { title: 'Video Editing', icon: '🎬' },
        ].map((service) => (
          <div
            key={service.title}
            className="bg-lightgray shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold text-light-700">{service.title}</h4>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
