# backend/main.py
# Minimal FastAPI app exposing a healthcheck and Supabase example call.
# This file should not hold business logic beyond simple demonstration.

from fastapi import FastAPI
from .supabase_client import supabase

app = FastAPI(title="Vectal Backend")

@app.get("/health")
def health_check():
    """Simple health check endpoint."""
    return {"status": "ok"}

@app.get("/projects")
def list_projects():
    """Example endpoint fetching projects from Supabase."""
    response = supabase.table("projects").select("*").execute()
    return response.data
