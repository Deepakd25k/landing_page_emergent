import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os

async def main():
    client = AsyncIOMotorClient("mongodb://localhost:27017")
    db = client["emergent"]
    
    # Check bookings
    print("--- BOOKINGS ---")
    async for b in db.bookings.find().sort("created_at", -1).limit(3):
        print(f"UID: {b.get('booking_uid')}, Status: {b.get('status')}, Trigger: {b.get('webhook_history', [{}])[-1].get('trigger')}")
        
    print("\n--- EVENTS ---")
    async for e in db.events.find({"source": "server_webhook"}).sort("created_at", -1).limit(3):
        print(f"Event: {e.get('event_name')}, UID: {e.get('booking_uid')}, CAPI: {e.get('capi')}")

if __name__ == "__main__":
    asyncio.run(main())
