import { notFound } from "next/navigation";
import {
    getCategoriaBySlug,
    getFotografiasByCategoria,
} from "@/lib/queries";
import PhotoGrid from "@/components/PhotoGrid";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function CategoriaPage({ params }: Props) {
    const { slug } = await params;

    const categoria = await getCategoriaBySlug(slug);

    if (!categoria) {
        notFound();
    }

    const fotografias = await getFotografiasByCategoria(categoria.id);

    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Categoría
                </p>

                <h1 className="mt-2 text-4xl font-bold text-stone-900">
                    {categoria.nombre}
                </h1>

                <p className="mt-3 max-w-2xl text-stone-600">
                    Explora nuestra selección de fotografías de {categoria.nombre.toLowerCase()}.
                </p>

                <div className="mt-10">
                    {fotografias.length > 0 ? (
                        <PhotoGrid fotografias={fotografias} />
                    ) : (
                        <p className="text-stone-600">
                            No hay fotografías disponibles en esta categoría.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}