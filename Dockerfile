FROM nginx:alpine
COPY ./docs/dist /usr/share/nginx/html
