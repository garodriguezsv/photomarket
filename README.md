# 📸 PhotoMarket

PhotoMarket es una plataforma web desarrollada con Next.js para presentar y explorar un catálogo de fotografías de naturaleza.

El proyecto utiliza Supabase como backend para almacenar las categorías y fotografías, y Next.js App Router para construir las páginas y rutas dinámicas.

## 🚀 Tecnologías utilizadas

- Next.js 16
- TypeScript
- React
- Tailwind CSS
- Supabase
- PostgreSQL
- pnpm
- Git
- GitHub
- Vercel

## ✨ Funcionalidades

- Catálogo de fotografías.
- Visualización de fotografías individuales.
- Categorías de fotografías.
- Filtrado de fotografías por categoría.
- Rutas dinámicas con Next.js.
- Datos obtenidos desde Supabase.
- Server Components.
- Manejo de estados de carga.
- Manejo de errores.
- Página personalizada 404.
- Optimización de imágenes mediante `next/image`.
- Navegación mediante `next/link`.
- Diseño responsive.
- Row Level Security (RLS) en Supabase.

## 🗂️ Estructura principal

```text
photomarket/
├── src/
│   ├── app/
│   │   ├── categorias/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── fotografias/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── CategoryList.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PhotoCard.tsx
│   │   └── PhotoGrid.tsx
│   │
│   └── lib/
│       ├── queries.ts
│       ├── supabase.ts
│       └── types.ts
│
├── public/
├── .gitignore
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── README.md


## 🗄️ Base de datos

El proyecto utiliza Supabase como backend y PostgreSQL como sistema gestor de base de datos.

### Tabla `categorias`

Campos principales:

- `id`
- `nombre`
- `slug`

Categorías actuales:

- Naturaleza
- Paisajes
- Aves
- Fauna
- Macro

### Tabla `fotografias`

Campos principales:

- `id`
- `titulo`
- `descripcion`
- `precio`
- `imagen_url`
- `categoria_id`
- `created_at`

La tabla `fotografias` mantiene una relación con `categorias` mediante:

```text
fotografias.categoria_id
        │
        ▼
categorias.id
```

Las tablas utilizan Row Level Security (RLS) y políticas de lectura pública para permitir la consulta del catálogo.

## 🌐 Rutas de la aplicación

### Página principal

```text
/
```

Presenta el catálogo de fotografías y las categorías disponibles.

### Detalle de fotografía

```text
/fotografias/[id]
```

Ejemplo:

```text
/fotografias/1
```

### Fotografías por categoría

```text
/categorias/[slug]
```

Ejemplo:

```text
/categorias/aves
```

## ⚠️ Manejo de estados y errores

El proyecto utiliza los mecanismos de Next.js para gestionar diferentes estados de la aplicación:

- `loading.tsx` — estado de carga.
- `error.tsx` — manejo de errores.
- `not-found.tsx` — página personalizada para recursos inexistentes.

## 🖼️ Optimización de imágenes

Las imágenes se muestran utilizando el componente `next/image`.

Las imágenes externas de Unsplash están configuradas mediante `remotePatterns` en `next.config.ts`.

## 🔐 Variables de entorno

Para ejecutar el proyecto localmente es necesario crear:

```text
.env.local
```

con:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=tu_publishable_key
```

El archivo `.env.local` está incluido en `.gitignore y no debe subirse al repositorio.

## 💻 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/garodriguezsv/photomarket.git
```

Entrar al proyecto:

```bash
cd photomarket
```

Instalar las dependencias:

```bash
pnpm install
```

Configurar las variables de entorno en `.env.local`.

## ▶️ Ejecutar el proyecto

Modo desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## 🏗️ Producción

Construir el proyecto:

```bash
pnpm build
```

Ejecutar la versión de producción:

```bash
pnpm start
```

## 📚 Conceptos de Next.js utilizados

- App Router.
- Server Components.
- Dynamic Routes.
- Parámetros dinámicos.
- `async/await`.
- `loading.tsx`.
- `error.tsx`.
- `not-found.tsx`.
- `next/image`.
- `next/link`.
- TypeScript.
- Integración con Supabase.
- Variables de entorno.

---

# 📝 Nota final

Este proyecto seguirá desarrollándose, actualmente se manejan imágenes de un repositorio de imágenes de ejemplo, dichas imágenes serán reemplazadas con las fotos originales de los proyectos fotográficos realizados en:

- Tierra Blanca (Usulután)
- Bahía de Jiquilisco (Usulután)
- Golfo de Fonseca (La Unión)

Este trabajo forma parte del proyecto de **Censos de Aves Acuáticas y Playeras** que se desarrolló desde **2020 hasta 2023**.

# 📷 Proyecto Fotográfico

## Censo de Aves Acuáticas y Playeras 2020 - 2023

Proyecto fotográfico relacionado con el registro y documentación de aves acuáticas y playeras realizado entre los años **2020 y 2023**.

Parte del material fotográfico que será incorporado posteriormente a PhotoMarket corresponderá a los proyectos fotográficos realizados en:

- Tierra Blanca, Usulután
- Bahía de Jiquilisco, Usulután
- Golfo de Fonseca, La Unión

Las imágenes de ejemplo utilizadas actualmente serán reemplazadas progresivamente por las fotografías originales obtenidas durante estos proyectos.

## 👨‍💻 Autor

**Gerson Rodríguez**