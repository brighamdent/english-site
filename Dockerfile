# Build frontend
FROM node:16 as build-stage
WORKDIR /app/frontend
COPY ./site/package*.json ./
RUN npm install
COPY ./site/ .
RUN npm run build

# Build backend
FROM node:16 as production-stage
WORKDIR /english-site
COPY --from=build-stage /english-site/site/build /english-site/public

# Setup backend
COPY ./server/package*.json ./backend/
RUN npm install --prefix server
COPY ./server ./server

EXPOSE 4000
CMD ["node", "./backend/src/server.js"]
