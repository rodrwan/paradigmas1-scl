FROM node:8.2.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

COPY src/* ./

CMD [ "npm", "run", "imperative" ]
