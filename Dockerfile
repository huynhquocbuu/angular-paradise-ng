# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
## nodejs 18
FROM node:hydrogen-alpine as build
#FROM node:gallium-alpine as build
# Set the working directory
WORKDIR /usr/src/app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm cache verify
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist/paradise-ng /usr/share/nginx/html

# Expose port 80
EXPOSE 80