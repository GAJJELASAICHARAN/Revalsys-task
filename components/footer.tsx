import Link from 'next/link';
import BackToTop from '@/components/back-to-top';

const columns = [
  {
    heading: 'Get to Know Us',
    links: [
      { label: 'About TechHub', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Shop with Us',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'Today\u2019s Deals', href: '/deals' },
      { label: 'Your Cart', href: '/cart' },
    ],
  },
  {
    heading: 'Your Account',
    links: [
      { label: 'Your Account', href: '/account' },
      { label: 'Your Orders', href: '/account/orders' },
      { label: 'Your Wishlist', href: '/account/wishlist' },
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
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
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

      {/* Bottom strip */}
      <div className="bg-[#131921] pb-8 px-4">
        <p className="text-center text-xs text-[#767676]">
          © {new Date().getFullYear()} TechHub, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}
