if [ $# -eq 2 ]; then
    git pull origin main
    GIT_USER=$1 USE_SSH=true npm run deploy
    git add .
    git commit -m $2
    git push origin main
else
    echo "引数が足りない"
    echo $#
fi
