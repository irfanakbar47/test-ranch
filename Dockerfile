FROM node:latest

#RUN npm install -g pm2@4

WORKDIR /var/app
COPY package.json /var/app/package.json
RUN yarn 
COPY ./ /var/app
# RUN npm install -D @swc/cli @swc/core
RUN yarn build

#VOLUME [ "/var/app/log" ]
#VOLUME [ "/root/.pm2/logs" ]
CMD ["yarn", "start"]
