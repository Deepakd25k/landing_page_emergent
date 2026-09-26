import asyncio
import sys
import os

sys.path.append(os.path.join(os.getcwd(), 'backend'))

from services.mongo import sessions, bookings

async def main():
    lead_count = await sessions.count_documents({"funnel.Lead": {"$exists": True}})
    ic_count = await sessions.count_documents({"funnel.InitiateCheckout": {"$exists": True}})
    cb_count = await sessions.count_documents({"funnel.cohort_booked": {"$exists": True}})
    print(f"Sessions with Lead: {lead_count}")
    print(f"Sessions with InitiateCheckout: {ic_count}")
    print(f"Sessions with Cohort Booked: {cb_count}")

    # let's see paid bookings
    paid_bookings = await bookings.find({"status": "paid"}).to_list(10)
    for b in paid_bookings:
        print("Paid booking email:", b.get("email"), "session_id:", b.get("session_id"))

asyncio.run(main())
