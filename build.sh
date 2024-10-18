cd litemall-vue
yarn install
yarn build
rm -rf node_modules

cd ../litemall-api

yarn install --production
