FROM nginx:alpine

LABEL maintainer="the.duong@ntq-solution.com.vn"

WORKDIR /usr/share/nginx/html

COPY ./docker/vhost.conf /etc/nginx/conf.d/default.conf

COPY build .
