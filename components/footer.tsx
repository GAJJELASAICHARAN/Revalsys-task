import Link from 'next/link';
import BackToTop from '@/components/back-to-top';

const columns = [
  {
    heading: 'Get to Know Us',
    links: [
      { label: 'About TechHub', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Press Releases', href: '#' },
      { label: 'TechHub Science', href: '#' },
    ],
  },
  {
    heading: 'Make Money with Us',
    links: [
      { label: 'Sell on TechHub', href: '#' },
      { label: 'Sell Under Private Brands', href: '#' },
      { label: 'Become an Affiliate', href: '#' },
      { label: 'Advertise Your Products', href: '#' },
    ],
  },
  {
    heading: 'TechHub Payment',
    links: [
      { label: 'TechHub Business Card', href: '#' },
      { label: 'Shop with Points', href: '#' },
      { label: 'Reload Your Balance', href: '#' },
      { label: 'Currency Converter', href: '#' },
    ],
  },
  {
    heading: 'Let Us Help You',
    links: [
      { label: 'Your Account', href: '#' },
      { label: 'Your Orders', href: '#' },
      { label: 'Shipping Rates & Policies', href: '#' },
      { label: 'Returns & Replacements', href: '#' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Back to top */}
      <BackToTop />

      {/* Main footer */}
      <div className="bg-[#232F3E] py-10 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map(col => (
            <div key={col.heading}>
              <h3 className="text-white font-bold text-sm mb-4">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#ddd] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="bg-[#37475A] h-px" />

      {/* Logo strip */}
      <div className="bg-[#131921] py-5 flex justify-center">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-white font-bold text-2xl">Tech</span>
          <span className="text-[#FF9900] font-bold text-2xl">Hub</span>
        </Link>
      </div>

      {/* Bottom links */}
      <div className="bg-[#131921] pb-8 px-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#ddd]">
          <Link href="#" className="hover:text-white hover:underline">Conditions of Use</Link>
          <Link href="#" className="hover:text-white hover:underline">Privacy Notice</Link>
          <Link href="#" className="hover:text-white hover:underline">Your Ads Privacy Choices</Link>
          <Link href="#" className="hover:text-white hover:underline">Consumer Health Data</Link>
          <Link href="#" className="hover:text-white hover:underline">Cookie Notice</Link>
          <Link href="#" className="hover:text-white hover:underline">Interest-Based Ads</Link>
        </div>
        <p className="text-center text-xs text-[#767676] mt-3">
          © 1996–2025, TechHub, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}
