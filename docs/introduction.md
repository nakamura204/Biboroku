---
sidebar_position: 1
---

## docsの書き方

### 以下の手順でマニュアルを作成する

1. git pull origin mainを行う

2. docsフォルダー直下にてマニュアルを作成する

3. GIT_USER={githubユーザID} USE_SSH=true npm run deployを実行しデプロイを行う。
------------------------------------------------
ここまででdocsの作成が完了

4. git add .
※.docusaurus build node_modulesを除いたもの

5. git commit -m "{コミットメッセージを書く}"でコミットを行う。

6. git push origin mainでmainブランチにpushを行う。

### もしくはターミナル上でシェルスクリプトを実行する
./deploy.sh {githubユーザーID} {コミットメッセージ}
*引数を正しく入力しないと実行されない
*途中でエラーが出た場合はエラーで止まった場所から手動で実行すること


参考記事:
[React製の静的サイトジェネレータDocusaurus v2を、GitHub Pagesにデプロイする](https://qiita.com/y_catch/items/46b7eb7d618d95fbc9c3)

writer: kazuki