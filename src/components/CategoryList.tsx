import type { Categoria } from "@/lib/types";

type CategoryListProps = {
    categorias: Categoria[];
};

export default function CategoryList({
    categorias,
}: CategoryListProps) {
    return (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categorias.map((categoria) => (
                <a
                    key={categoria.id}
                    href={`/categorias/${categoria.slug}`}
                    className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                    <h3 className="font-semibold text-stone-900">
                        {categoria.nombre}
                    </h3>

                    <p className="mt-2 text-sm text-stone-500">
                        Explorar fotografías
                    </p>
                </a>
            ))}
        </div>
    );
}