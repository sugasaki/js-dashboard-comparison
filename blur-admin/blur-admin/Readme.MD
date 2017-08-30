# Markdown File

ビルド方法


## デバッグ用
gulp -b --color --gulpfile Gulpfile.js dev-release

で、dev-release配下にデバッグ用のindex.htmlとその他jsファイルが作成される。


## リリース用

gulp -b --color --gulpfile Gulpfile.js default

で、release配下にindex.htmlとその他js（ミニファイズされた）ファイルが作成される。


