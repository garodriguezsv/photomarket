import type { Fotografia } from "@/lib/types";
import PhotoCard from "./PhotoCard";

type PhotoGridProps = {
    fotografias: Fotografia[];
};

export default function PhotoGrid({ fotografias }: PhotoGridProps) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fotografias.map((fotografia) => (
                <PhotoCard
                    key={fotografia.id}
                    fotografia={fotografia}
                />
            ))}
        </div>
    );
}