FROM node:21-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci 

RUN npm run build

FROM nginx:alpine3.18

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm /etc/nginx/conf.d/default.conf
COPY /configs/deployments/nginx.conf /etc/nginx/conf.d

COPY --from=builder --chown=appuser:appuser /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
