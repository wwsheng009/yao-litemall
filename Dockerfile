#docker build --build-arg ARCH=amd64 --build-arg VERSION=0.10.5 --tag yao-litemall .
#docker run -d --restart unless-stopped --name yao-litemall -p 5099:5099 yao-litemall

ARG ARCH
FROM wwsheng009/yao-${ARCH}:latest

ARG ARCH
ARG VERSION
WORKDIR /data/app

COPY litemall-api .

# RUN curl -fsSL "https://github.com/wwsheng009/yao-plugin-command/releases/download/command-linux-plugin/command-linux-${ARCH}.so" -o /data/app/plugins/command.so && \
#     chmod +x /data/app/plugins/command.so

# RUN curl -fsSL "https://github.com/wwsheng009/yao-plugin-psutil/releases/download/psutil-linux-plugin/psutil-linux-${ARCH}.so" -o /data/app/plugins/psutil.so && \
#     chmod +x /data/app/plugins/psutil.so

# RUN curl -fsSL "https://github.com/wwsheng009/yao-plugin-email/releases/download/email-linux-plugin/email-linux-${ARCH}.so" -o /data/app/plugins/email.so && \
#     chmod +x /data/app/plugins/email.so

RUN apk add --no-cache nodejs npm

WORKDIR /data/app
RUN npm i yarn -g
RUN yarn install --production

USER root
VOLUME [ "/data/app" ]
WORKDIR /data/app
EXPOSE 5099
CMD ["sh", "init.sh"]
