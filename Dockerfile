FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x run-via-docker.sh
RUN npm run build
RUN npm run postbuild
EXPOSE 6666 
CMD ["npm", "run", "start"]
