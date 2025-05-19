# backend/supabase_client.py
# Creates a Supabase client using environment variables.
# It should be imported and used by the API modules.

import os
from supabase import create_client, Client

url: str = os.getenv("SUPABASE_URL", "")
key: str = os.getenv("SUPABASE_SERVICE_KEY", "")

supabase: Client = create_client(url, key)
