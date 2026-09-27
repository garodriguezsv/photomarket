export default function Header() {
    return (
        <header className="border-b border-stone-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="/" className="text-2xl font-bold tracking-tight text-stone-900">
                    PhotoMarket
                </a>

                <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
                    <a href="#fotografias" className="transition hover:text-stone-900">
                        Fotografías
                    </a>

                    <a href="#categorias" className="transition hover:text-stone-900">
                        Categorías
                    </a>
                </nav>
            </div>
        </header>
    );
}