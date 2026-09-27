import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
import CategoryList from "@/components/CategoryList";
import { getCategorias, getFotografias } from "@/lib/queries";

export default async function HomePage() {
  const [fotografias, categorias] = await Promise.all([
    getFotografias(),
    getCategorias(),
  ]);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section
          id="fotografias"
          className="bg-stone-50 px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Catálogo
              </p>

              <h2 className="mt-2 text-3xl font-bold text-stone-900">
                Fotografías destacadas
              </h2>

              <p className="mt-3 max-w-2xl text-stone-600">
                Explora nuestra selección de fotografías de naturaleza,
                paisajes y vida silvestre.
              </p>
            </div>

            <PhotoGrid fotografias={fotografias} />
          </div>
        </section>

        <section
          id="categorias"
          className="bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Explora
            </p>

            <h2 className="mt-2 text-3xl font-bold text-stone-900">
              Categorías
            </h2>

            <p className="mt-3 max-w-2xl text-stone-600">
              Encuentra fotografías según el tipo de naturaleza que deseas
              explorar.
            </p>

            <CategoryList categorias={categorias} />
          </div>
        </section>
      </main>
    </>
  );
}