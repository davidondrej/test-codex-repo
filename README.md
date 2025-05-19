<!-- location: README.md -->
<!-- Overview of the Vectal.ai template repository. -->
<!-- Describes how the project is structured. -->

Vectal provides a simple template for a full-stack AI SaaS.
The repository contains a Next.js frontend and a FastAPI backend.
Supabase is used as the database and handles authentication via Google.

## Structure

```
backend/   # FastAPI application
frontend/  # Next.js application
```

### Frontend
- **Next.js** with **Tailwind CSS** for styling.
- Uses **Lucide React** for icons.
- Supabase is initialized in `frontend/utils/supabaseClient.ts`.
- Environment variables live in `.env.local` (see `.env.local.example`).

### Backend
- **FastAPI** with a minimal setup in `backend/main.py`.
- Connects to Supabase using `backend/supabase_client.py`.
- Environment variables live in `.env` (see `.env.example`).

### Running locally

1. Install Node dependencies in `frontend/` and Python dependencies in `backend/`.
2. Provide the required environment variables.
3. Start the backend with `uvicorn backend.main:app --reload`.
4. Start the frontend with `npm run dev` inside `frontend/`.

Both applications are deliberately small to encourage quick understanding and modification.
