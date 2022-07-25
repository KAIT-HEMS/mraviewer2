<!-- views/AboutView.vue -->
<!-- About page を作成する -->

<template>
  <div class="about">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">MRA Viewer について</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-this-tool">
        <div>
          <p>
            MRA Viewer は、エコーネットコンソーシアムが公開している MRA
            データの内容を表示するプログラムです。 MRA データの元となる APPENDIX
            ECHONET
            機器オブジェクト詳細規定の表形式部分の表記を参考にして表示しています。
            Windows または MacOS 上で動作します。
          </p>
          <p>
            日本語と英語の切り替えや、APPENDIX の各 Release の選択が可能です。
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">MRA データについて</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-jikkenn-server">
        <div>
          <p>
            Machine Readable APPENDIX (MAR) データは、ECHONET Lite
            の仕様書のひとつである 「APPENDIX ECHONET 機器オブジェクト詳細規定」
            の中の表形式で記述された情報を、構造化した JSON
            データで表現したものです。エコーネットコンソーシアムの HP
            で公開されています。MRA データは以下のような特徴があります。
          </p>
          <ul>
            <li>
              プロパティデータの構造やデータタイプなどを JSON Schema
              ライクな表現で記述しています。
            </li>
            <li>日本語版と英語版の情報を記述しています。</li>
            <li>Release A から最新の Release までの情報を記述しています。</li>
            <li>
              ECHONET Lite WebAPI Device Descriptions で利用するための property
              name や state を shortName として記述しています。
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">MRA Viewer の使い方</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="instruction">
        <div>
          <ol>
            <li>
              MRA Viewer
              をダウンロードし、ユーザーマニュアルに従いインストールします。
            </li>
            <li>
              <a href="https://echonet.jp/spec_g/#standard-08" target="_blank"
                >エコーネットコンソーシアムのHP</a
              >から「MRAデータ Version x.x.x (JSON)
              [zip圧縮]」をダウンロードし、ZIP ファイルを解凍します。
            </li>
            <li>MRA Viewer を起動すると、Setting 画面が表示されます。</li>
            <li>「MRA folder を選択」というボタンをクリックします。</li>
            <li>
              フォルダ選択画面で、 解凍したMRA データの中の "mraData"
              フォルダを指定し、「アップロード」ボタンをクリックします。
            </li>
            <li>ポップアップ画面でアップロードボタンをクリックします。</li>
            <li>
              正常に処理が終了すると、Version, Release の情報と、読み込んだ json
              file 名が表示されます。
            </li>
            <li>
              画面右上の「家のアイコン」をクリックして、Home 画面に移動します。
            </li>
            <li>
              画面左上のプルダウンメニューから、機器オブジェクトとリリースを選択すると、対応した情報
              が表示されます。
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">Trouble shooting</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="troubleShooting">
        <div>
          <p>
            MRA データの読み込み以降に画面が正しく表示されず、
            プログラムを再起動しても症状が繰り返される場合は、
            以下の操作を行いブラウザの local storage をクリアしたのちに、 正しい
            MRA データを読み込み直してください。
          </p>
          <h5>Windows の Chrome の場合</h5>
          <ul>
            <li>"Google Chrome の設定" をクリック</li>
            <li>"その他のツール"/"デベロッパーツール" を選択</li>
            <li>"Console" タブをクリック</li>
            <li>localStorage.clear(); を入力する</li>
            <li>プログラムを CTRL-C で終了し、プログラムを起動しなおす</li>
          </ul>
          <h5>Mac OS の Chrome の場合</h5>
          <ul>
            <li>"表示" メニューをクリック</li>
            <li>"開発/管理"/"デベロッパーツール" を選択</li>
            <li>"Console" タブをクリック</li>
            <li>localStorage.clear(); を入力する</li>
            <li>プログラムを CTRL-C で終了し、プログラムを起動しなおす</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
