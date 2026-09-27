export type Categoria = {
    id: number;
    nombre: string;
    slug: string;
};

export type Fotografia = {
    id: number;
    titulo: string;
    descripcion: string | null;
    precio: number;
    imagen_url: string | null;
    categoria_id: number;
    created_at: string;
};