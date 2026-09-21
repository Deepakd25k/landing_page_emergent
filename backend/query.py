import asyncio
from services.mongo import sessions
import json
async def run():
    count = await sessions.count_documents({"created_at": {"$gte": "2026-09-01", "$lte": "2026-09-01T23:59:59.999Z"}})
    docs = [d async for d in sessions.find({}).limit(5)]
    print("Count:", count)
    print("Sample:", [d.get("created_at") for d in docs])
asyncio.run(run())
