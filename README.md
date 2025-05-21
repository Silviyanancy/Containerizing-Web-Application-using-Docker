# Containerizing Web Application using Docker

## Step 1: Creating a ReactApp

#### Check the version of node -> node --version
#### Create react app -> npx create-react-app react-docker-app
#### Working of React App -> npm start

## Step 2: Create Dockerfile in the root directory

#### touch Dockerfile

## Step 3: Build the Docker Image by navigative to the react app

docker build -t react-docker-app .

## Step 4: Run the Docker Container in detached mode 

docker run -d -p 3000:3000 react-docker-app

## Step 5: Changing name of the container

docker run -d -p 3000:3000 --name nancy-docker-react react-docker-app


