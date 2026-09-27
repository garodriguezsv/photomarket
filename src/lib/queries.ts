import { supabase } from "./supabase";
import type { Categoria, Fotografia } from "./types";

export async function getCategorias(): Promise<Categoria[]> {
    const { data, error } = await supabase
        .from("categorias")
        .select("*")
        .order("nombre");

    if (error) {
        throw new Error(error.message);
    }

    return data ?? [];
}

export async function getFotografias(): Promise<Fotografia[]> {
    const { data, error } = await supabase
        .from("fotografias")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data ?? [];
}

export async function getFotografiaById(
    id: number
): Promise<Fotografia | null> {
    const { data, error } = await supabase
        .from("fotografias")
        .select("*")
        .eq("id", id)
        .maybeSingle<Fotografia>();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getCategoriaBySlug(slug: string) {
    const { data, error } = await supabase
        .from("categorias")
        .select("*")
        .eq("slug", slug)
        .maybeSingle<Categoria>();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getFotografiasByCategoria(
    categoriaId: number
): Promise<Fotografia[]> {
    const { data, error } = await supabase
        .from("fotografias")
        .select("*")
        .eq("categoria_id", categoriaId)
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data ?? [];
}