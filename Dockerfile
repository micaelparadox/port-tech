# Use the official Node.js 16 image as a parent image
FROM node:20.9.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build the TypeScript project
RUN npm run build

# Bind the port that the app runs on
EXPOSE 3000

# Define the Docker container's command to run your app
CMD [ "npm", "start" ]
