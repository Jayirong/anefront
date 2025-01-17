# Etapa 1: Construccion
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration=production --project=anefront

#Etapa 2: Servidor web
FROM nginx:latest AS runtime

COPY --from=build /app/dist/anefront/browser /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]