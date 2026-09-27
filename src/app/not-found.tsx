import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
            <div className="max-w-md text-center">
                <p className="text-6xl font-bold text-stone-300">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold text-stone-900">
                    Fotografía no encontrada
                </h1>

                <p className="mt-4 text-stone-600">
                    El contenido que buscas no existe o ya no está disponible.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                    Volver al catálogo
                </Link>
            </div>
        </main>
    );
}