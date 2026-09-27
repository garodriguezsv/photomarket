export default function Hero() {
    return (
        <section className="bg-stone-950 px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
                        Fotografía artística
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Fotografías que cuentan historias.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                        Descubre fotografías de naturaleza, paisajes y vida silvestre
                        capturadas desde una perspectiva auténtica.
                    </p>

                    <a
                        href="#fotografias"
                        className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200"
                    >
                        Explorar fotografías
                    </a>
                </div>
            </div>
        </section>
    );
}