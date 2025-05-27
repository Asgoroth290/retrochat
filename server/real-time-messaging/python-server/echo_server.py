import asyncio
import json
import websockets

async def handler(websocket):
  async for message in websocket:
    print(f"Received: {message}")
    response = json.loads(message)
    response["content"] = f"Echo: {response['content']}"
    await websocket.send(json.dumps(response))

async def main():
  async with websockets.serve(handler, "localhost", 8000):
    await asyncio.Future()

if __name__ == "__main__":
  asyncio.run(main())