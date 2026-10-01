import asyncio
from services.mongo import sessions, events

async def main():
    print("Backfilling campaigns...")
    async for event in events.find({"campaign": "d2c_growth"}):
        sid = event["session_id"]
        await sessions.update_one({"session_id": sid}, {"$addToSet": {"campaigns": "d2c_growth"}})
    print("Done")

if __name__ == "__main__":
    asyncio.run(main())
