# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY react-docker-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY react-docker-app/ ./

# Expose the port the app runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]