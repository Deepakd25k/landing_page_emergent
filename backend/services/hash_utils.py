import hashlib
import re
from typing import Optional


def sha256(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def normalize_email(value: str) -> str:
    return value.strip().lower()


def normalize_phone(value: str, default_country_code: str = "91") -> str:
    digits = re.sub(r"[^0-9]", "", value or "")
    digits = digits.lstrip("0")
    if len(digits) == 10:
        digits = default_country_code + digits
    return digits


def normalize_name(value: str) -> str:
    return re.sub(r"[^a-z\u0900-\u097F]", "", value.strip().lower())


def normalize_city(value: str) -> str:
    return re.sub(r"[^a-z]", "", value.strip().lower())


def normalize_zip(value: str) -> str:
    return re.sub(r"[^0-9a-z]", "", value.strip().lower())


def normalize_country(value: str) -> str:
    return value.strip().lower()[:2]


def hash_if(value: Optional[str], normalizer) -> Optional[str]:
    if not value:
        return None
    normalized = normalizer(value)
    return sha256(normalized) if normalized else None


def split_name(full_name: str):
    parts = (full_name or "").strip().split()
    if not parts:
        return None, None
    if len(parts) == 1:
        return parts[0], None
    return parts[0], " ".join(parts[1:])


def build_hashed_user_data(*, email=None, phone=None, first_name=None, last_name=None,
                           city=None, zip_code=None, country=None, external_id=None) -> dict:
    data = {}
    pairs = [
        ("em", email, normalize_email),
        ("ph", phone, normalize_phone),
        ("fn", first_name, normalize_name),
        ("ln", last_name, normalize_name),
        ("ct", city, normalize_city),
        ("zp", zip_code, normalize_zip),
        ("country", country, normalize_country),
        ("external_id", external_id, lambda v: v.strip()),
    ]
    for key, value, normalizer in pairs:
        hashed = hash_if(value, normalizer)
        if hashed:
            data[key] = [hashed]
    return data
