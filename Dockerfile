# setting node.js version
FROM node:10.12.0

# make dir
RUN mkdir -p /Users/ronghua.wu/prod/littlemalladmin

# setting dir
WORKDIR /Users/ronghua.wu/prod/littlemalladmin

# copy package.json  to workspace
COPY package.json /Users/ronghua.wu/prod/littlemalladmin/package.json

# install npm package
RUN npm i

# copy source code to workspace
COPY . /Users/ronghua.wu/prod/littlemalladmin

# epxort port
EXPOSE 8088

CMD npm run serve