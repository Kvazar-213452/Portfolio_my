$let = Read-Host "Type"

git add -A
$name = Read-Host "Name"
git commit -m $name
git push
