FROM node:16-alpine AS BUILD_IMAGE

# Work Directory
WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install dev Dependencies
RUN npm i --dev

# InstLL Dependencies
RUN npm i

COPY . .

# compile application
RUN npm run build

# remove development dependencies
# RUN npm prune --production

# ------------------------ SECOND IMAGE ------------------------

FROM node:16-alpine

# Work Directory
WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app .
ENV ext=js
ENV PORT=3000



EXPOSE 3000

CMD [ "npm", "run", "start" ]
