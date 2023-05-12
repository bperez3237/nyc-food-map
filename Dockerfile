# Build stage for Django backend
FROM python:3.9-slim AS backend-build
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY server/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY server/ /app/
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Build stage for React frontend
FROM node:14 AS frontend-build
WORKDIR /app
COPY jwt-react/package*.json ./
RUN npm install
COPY jwt-react/ ./
RUN npm run build

# Production stage
FROM python:3.9-slim AS production
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY --from=backend-build /app/ /app/
COPY --from=frontend-build /app/build/ /app/jwt-react/build/
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
