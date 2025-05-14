FROM python:3.10-slim

WORKDIR /app

COPY . .

RUN pip install chromadb uvicorn

EXPOSE 8000

CMD ["python", "start.py"]



