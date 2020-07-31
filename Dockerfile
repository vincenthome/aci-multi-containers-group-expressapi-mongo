FROM node:12.18-alpine
ENV NODE_ENV production
ENV HELLO hello-dockefile
ENV PORT 8080
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
# EXPOSE 80 # NOT BEING USED AT runtime, ALWAYS override by CLI -p 
CMD npm start