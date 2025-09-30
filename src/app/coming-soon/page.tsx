import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div style={{ fontFamily: 'Candara, sans-serif' }} className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <Image 
          src="/logo-full.png" 
          alt="Linea Capital" 
          width={400} 
          height={100} 
          className="mx-auto mb-12"
        />
        <h1 className="text-5xl font-light mb-6" style={{ color: '#1a1f4d' }}>
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Our new website is under construction. Please check back soon.
        </p>
        <p className="text-gray-600">
          For inquiries, please contact us at{' '}
          <a href="mailto:info@lineacapital.com" className="text-[#4a7c71] hover:underline">
            info@lineacapital.com
          </a>
        </p>
      </div>
    </div>
  );
}