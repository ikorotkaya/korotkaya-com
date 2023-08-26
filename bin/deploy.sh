npm run build 

echo 'korotkaya.com' > build/CNAME 

cp .gitignore build 

git push origin `git subtree split --prefix build main`:production --force