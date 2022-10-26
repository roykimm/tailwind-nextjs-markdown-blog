import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-900 mb-8 py-4 text-white"> 
                <div className="container mx-auto flex justify-center">
                    <Link href="/">
                        <div>Home</div>
                    </Link>
                    <span className="mx-auto">Roykimm&apos;s Blog</span>
                </div>               
            </header>
            <main className="container mx-auto flex-1">{children}</main>
            <footer className="bg-gray-900 mt-8 py-4 text-white">
                <div className="container mx-auto flex justify-center">
                    <p>2002 Go Bella</p>
                </div>
            </footer>
        </div>
    )
}