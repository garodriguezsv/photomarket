export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
            <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-300 border-t-stone-900" />

                <p className="mt-4 text-sm text-stone-600">
                    Cargando fotografías...
                </p>
            </div>
        </main>
    );
}