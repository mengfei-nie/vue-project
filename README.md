# install yarn(包管理)
npm install -g yarn
yarn config set registry 'https://registry.npm.taobao.org'
yarn config set registry https://registry.npm.taobao.org(windows系统下)

# install dependencies
yarn install(遇到node-sass装不上的情况，先执行 set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ 再执行 yarn add node-sass)

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build