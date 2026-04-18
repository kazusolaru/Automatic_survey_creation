function createExecutiveElectionForm() {
  // フォームの作成
  const form = FormApp.create('次期幹部選出に関するアンケート');
  
  // 設定
  form.setLimitOneResponsePerUser(true); // 回答を1回に制限する
  form.setProgressBar(true);             // 進行状況バーを表示する

  // 説明文の設定
  form.setDescription('3/15までに回答してください。\n部員の皆さんの意見を参考に、次期幹部を決定します。部長・副部長・会計のそれぞれについて、男女1名ずつ適任だと思う人を選び、その理由も記入してください。\n※このアンケート結果は現幹部および顧問の先生のみが確認し、選考の参考にさせていただきます。');

  // 選択肢の定義（ここは手動で追加）
  const menChoices = ['泉', '大川', '片山', '河野', '齋藤'];
  const womenChoices = ['網代', '春日井', '楠見', '小寺', '高木'];

  // セクション1
  form.addTextItem().setTitle('あなたの名前').setRequired(true);

  // セクション2
  form.addPageBreakItem().setTitle('男子幹部の選出');
  
  const rolesMen = ['男子部長', '男子副部長', '男子会計'];
  rolesMen.forEach(role => {
    form.addListItem()
        .setTitle(role)
        .setChoiceValues(menChoices)
        .setRequired(true);
    form.addParagraphTextItem()
        .setTitle('理由（' + role + '）')
        .setRequired(true);
  });

  // セクション3
  form.addPageBreakItem().setTitle('女子幹部の選出');
  
  const rolesWomen = ['女子部長', '女子副部長', '女子会計'];
  rolesWomen.forEach(role => {
    form.addListItem()
        .setTitle(role)
        .setChoiceValues(womenChoices)
        .setRequired(true);
    form.addParagraphTextItem()
        .setTitle('理由（' + role + '）')
        .setRequired(true);
  });

  console.log('設定完了済みフォームURL: ' + form.getEditUrl());
}