FROM node:12
WORKDIR /home/filipe/Documents/dev/docker-compose/clean-node-api
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start