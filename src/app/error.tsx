"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
            <div className="max-w-md text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Algo salió mal
                </p>

                <h1 className="mt-3 text-3xl font-bold text-stone-900">
                    No pudimos cargar el contenido
                </h1>

                <p className="mt-4 text-stone-600">
                    Ocurrió un problema al cargar la información. Intenta nuevamente.
                </p>

                <button
                    onClick={() => reset()}
                    className="mt-8 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                    Intentar nuevamente
                </button>
            </div>
        </main>
    );
}