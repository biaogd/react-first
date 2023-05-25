FROM node:18.12.0

RUN apt update
RUN apt install -y yarn 