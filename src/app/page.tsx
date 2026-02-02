import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center py-6">
      <Image
        src="/img/static/home-page/SIL-SIL-Bonney-AHF004-A-2.jpg"
        alt="Home Page Logo"
        width={300}
        height={300}
      />
    </div>
  );
}
