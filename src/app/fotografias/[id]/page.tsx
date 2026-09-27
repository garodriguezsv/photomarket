import { notFound } from "next/navigation";
import { getFotografiaById } from "@/lib/queries";
import Image from "next/image";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function FotografiaPage({ params }: Props) {
    const { id } = await params;

    const fotografia = await getFotografiaById(Number(id));

    if (!fotografia) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16">
            <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
                <div className="grid md:grid-cols-2">
                    <div className="relative aspect-[4/3] bg-stone-200">
                        <Image
                            src={fotografia.imagen_url ?? ""}
                            alt={fotografia.titulo}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                            Fotografía
                        </p>

                        <h1 className="mt-3 text-3xl font-bold text-stone-900">
                            {fotografia.titulo}
                        </h1>

                        <p className="mt-5 leading-7 text-stone-600">
                            {fotografia.descripcion}
                        </p>

                        <p className="mt-8 text-3xl font-bold text-stone-900">
                            ${fotografia.precio.toFixed(2)}
                        </p>

                        <a
                            href="/"
                            className="mt-8 inline-block w-fit rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                        >
                            Volver al catálogo
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}