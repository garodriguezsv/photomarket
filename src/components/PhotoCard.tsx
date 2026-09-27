import Image from "next/image";
import Link from "next/link";
import type { Fotografia } from "@/lib/types";

type PhotoCardProps = {
    fotografia: Fotografia;
};

export default function PhotoCard({ fotografia }: PhotoCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <Link href={`/fotografias/${fotografia.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                        src={fotografia.imagen_url ?? ""}
                        alt={fotografia.titulo}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 hover:scale-105"
                    />
                </div>

                <div className="p-5">
                    <h3 className="text-xl font-semibold text-stone-900">
                        {fotografia.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-stone-600">
                        {fotografia.descripcion}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                        <span className="text-lg font-bold text-stone-900">
                            ${fotografia.precio.toFixed(2)}
                        </span>

                        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                            Fotografía
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}