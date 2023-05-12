# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install any needed packages
RUN npm install --silent

# Copy the rest of the application's code into the container at /app
COPY . .

# Build the React app for production
RUN npm run build

# Set the command to start the server
CMD ["npm", "start"]
