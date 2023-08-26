npm run build 

echo 'korotkaya.com' > build/CNAME 

cp .gitignore build 

git checkout production

git checkout main -- build/*

# Deletes all files except build folder
shopt -s extglob
rm -rf !build
shopt -u extglob

# Copies files from the build folder to the root
cp -r build/* .
rm -rf build

git add .

git commit -m "New build"

git push origin production --force

git checkout main