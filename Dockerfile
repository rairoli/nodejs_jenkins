FROM node:14
WORKDIR /usr/src/app
COPY app .
RUN npm install
CMD npm run start
EXPOSE 9999