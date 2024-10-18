# litemall with Yao



## docker

```sh
docker run -d -p 5099:5099 wwsheng009/yao-litemall-amd64:latest

```


使用已有的配置文件：

```sh
# for manual config
touch .env
# for upload files
mkdir upload

mkdir logs

docker run -d --name=yao-litemall \
    -v ./.env:/data/app/.env \
    -v ./upload:/data/app/data/upload \
    -v ./logs:/data/app/logs \
    -p 6099:5099 \
    wwsheng009/yao-litemall-amd64:latest
```