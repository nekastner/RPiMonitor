import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import data_retrieval

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://192.168.0.26:5173"], # TODO: set origins in config file
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def run(ip: tuple[int, int, int, int], port: int) -> None:
    uvicorn.run(app, host=".".join([str(i) for i in ip]), port=port, log_level="debug")

@app.get("/", response_class=JSONResponse)
async def get_temp():
    return {
        "temp": data_retrieval.data["temp"](),
        "cool": data_retrieval.data["cool"]()
    }
