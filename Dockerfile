FROM keymetrics/pm2:10-alpine

RUN npm install pm2 -g
RUN mkdir /var/swagger-api

COPY . /var/swagger-api

WORKDIR /var/swagger-api

RUN npm install --update-binary --no-shrinkwrap
RUN npm run start
CMD [ "pm2-runtime", "start", "pm2.json" ]
