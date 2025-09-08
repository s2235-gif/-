<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>校内Wiki（デモ）</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

<!-- ログイン -->
<div id="login" class="auth hidden">
  <h2>校内Wiki ログイン</h2>
  <p class="meta">※フロントのみのデモです。アクセス制御は本物ではありません。</p>
  <form id="loginForm">
    <div class="row">
      <input id="email" type="email" placeholder="you@school.ac.jp" required />
    </div>
    <div class="row">
      <input id="invite" placeholder="招待コード（例：HELLO-SCHOOL）" required />
    </div>
    <div class="row">
      <button type="submit">入場</button>
    </div>
  </form>
</div>

<!-- 本体 -->
<div id="app">
  <header>
    <div class="brand"><a href="#/wiki/ホーム">校内Wiki</a></div>
    <form id="searchForm">
      <input id="searchInput" name="q" placeholder="検索" />
      <button>検索</button>
    </form>
    <div id="userbox"></div>
  </header>

  <div class="main" id="main">
    <nav>
      <b>メニュー</b>
      <ul>
        <li><a href="#/wiki/ホーム">メインページ</a></li>
        <li><a href="#/recent">最近の更新</a></li>
        <li><a href="#/random">おまかせ表示</a></li>
      </ul>

      <div class="card" style="margin-top:12px">
        <b>バックアップ</b>
        <div class="row" style="margin-top:6px">
          <button id="btnExport">エクスポート</button>
          <input id="fileImport" type="file" accept="application/json" />
        </div>
      </div>
    </nav>

    <section>
      <article class="card">
        <h1 id="articleTitle">ページ</h1>
        <div id="tabs" class="tabs"></div>
        <div id="articleBody"></div>
        <p class="meta">最終更新: <span id="updatedAt"></span></p>
      </article>
    </section>
  </div>
</div>

<script src="app.js"></script>
</body>
</html>
