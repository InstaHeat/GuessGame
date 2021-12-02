#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:InstaHeat/GuessGame.git master:gh-pages

cd -

# chmod +x deploy.sh
# ssh-keygen -t ed25519 -C ""
# git remote add origin https://github.com/username/hello-world.git

# git push -u origin master