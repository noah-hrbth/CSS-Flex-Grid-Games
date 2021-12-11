FROM node:12-alpine
WORKDIR /browser-learn-games
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]