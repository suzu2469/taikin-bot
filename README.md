Taikin Bot
===
毎日指定の時間に退勤を促してくれる優しいリマインダーです

# How to Use
## 1. .envを設定する

```bash
$ cp .env-example .env
```

LINE Notifyのアクセスキーを[ここ](https://notify-bot.line.me/ja/)から発行して下さい   
発行したトークンは`LINE_NOTIFY_APIKEY`に記載します   
`NOTIFY_TIME`にはあなたの退勤時刻を入れて下さい

## 2. Herokuにデプロイする
Heroku Cliが無い方は[こちら](https://devcenter.heroku.com/articles/heroku-cli)からインストールして下さい

```bash
$ heroku create
Creating app... done, ⬢ [Your app name]

$ heroku git:remote [Your app name]
$ heroku plugins:install heroku-config
$ heroku config:push
$ git push heroku master
```

## 3. 定時に退勤する
お疲れ様です
