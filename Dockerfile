FROM keymetrics/pm2:10-alpine

RUN npm install pm2 -g
RUN mkdir /var/tass-docs

COPY . /var/tass-docs

WORKDIR /var/tass-docs

RUN npm install --update-binary --no-shrinkwrap
RUN npm run start
CMD [ "pm2-runtime", "start", "pm2.json" ]
