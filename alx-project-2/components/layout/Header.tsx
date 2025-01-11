import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white"> 
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold">Marc</h1>

                <nav>
                    <ul className="list-none flex gap-4">
                        <li>
                            <Link href="/" className="hover:text-gray-300 duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
                        </li>
                    </ul>

                </nav>
            </div>

        </header>
    )
        
};