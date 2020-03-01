# Stage 1 
# commented below line as required for development
#FROM node:12.16.1-alpine as node
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm config set registry http://registry.npmjs.org/  
#RUN npm install
#COPY . .
#RUN npm run build

# Stage 2
FROM nginx:1.16-alpine
#COPY --from=node /usr/src/app/dist/contact-ui /usr/share/nginx/html
COPY ./dist/contact-ui /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
