from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i> Error redis</i>"

    html = "<h3>Hello HAHA {name}!</h3>"

    return html.format(name=os.getenv("NAME", "world"))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)