import Link from "next/link";

function Header() {
  return (
    <header className="bg-green-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-white">Auth</span>
          <span className="text-gray-300">App</span>
        </Link>
        <ul className="flex gap-4 text-lg font-bold text-green-100">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/sign-in" className="hover:text-white">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
