from typing import Callable

paths: dict[str, str] = {
    "temp": "/sys/class/thermal/thermal_zone0/temp",
    "cool": "/sys/class/thermal/cooling_device0/cur_state",
}

def read_state(path: str) -> int:
    try:
        with open(path) as f:
            return int(f.readline().strip())
    except Exception as e:
        print(e)
        return -1

data: dict[str, Callable[[], int]] = {
    "temp": lambda: read_state(paths["temp"]),
    "cool": lambda: read_state(paths["cool"])
}

# TODO: use static class with getters instead of dict
