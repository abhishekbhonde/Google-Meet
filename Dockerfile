# Step 1: Build the React application
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# Step 2: Serve the React application from a Node.js server
FROM node:14

WORKDIR /app

COPY --from=build /app/dist ./build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]