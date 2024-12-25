#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# copy index.html to 404.html for GitHub Pages SPA routing
cp index.html 404.html

# initialize a new Git repo
git init
git add -A
git commit -m 'deploy'

# push to GitHub Pages
 git push -f  https://github.com/alejandromilla99/VueAsador.git main:gh-pages

cd -
