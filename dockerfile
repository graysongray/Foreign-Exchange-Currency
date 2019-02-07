FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s -l 3000 build
EXPOSE 3000

# Install all dependencies of the current project.
COPY package*.json ./
COPY npm-shrinkwrap.json ./
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm run build --production