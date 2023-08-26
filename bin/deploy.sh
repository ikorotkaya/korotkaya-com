npm run build 

echo 'korotkaya.com' > build/CNAME 

cp .gitignore build 

git checkout production

git checkout main -- build/*

rm -rf build

git add .

git commit -m "New build"

git push origin production --force

git checkout main