FROM node:16-alpine AS BUILD_IMAGE

# Work Directory
WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install Dependencies
RUN npm i

COPY . .

# compile application
RUN npm run build

# remove development dependencies
RUN npm prune --production

# ------------------------ SECOND IMAGE ------------------------

FROM node:lts

# Work Directory
WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app .
ENV ext=js
ENV PORT=4000
ENV MONGODB_URL=mongodb+srv://bishop:bishop@restfulcluster.creso.mongodb.net/shopwell?retryWrites=true&w=majority
ENV JWT_SECRET=somethingsecret
ENV PAYPAL_CLIENT_ID=db


EXPOSE 4000

CMD [ "npm", "run", "serve" ]
