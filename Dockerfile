FROM node:18.16.0-alpine
WORKDIR /src/App
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install
# Build the app
# RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "run", "dev" ] 