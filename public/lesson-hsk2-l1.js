(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  root.lessonContent.HSK2 = root.lessonContent.HSK2 || {};
  root.lessonContent.HSK2[data.id] = {
    id: data.id,
    no: data.no,
    title: data.titleZh,
    titleZh: data.titleZh,
    titleVi: data.titleVi,
    items: data.items,
  };
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function word(text, pinyin, tone, pos, vi) {
    return { text, pinyin, tone, pos, vi };
  }

  function item(stage, vi, hanzi, words, source) {
    return {
      stage,
      vi,
      hanzi,
      words,
      source,
      pinyin: words.map((entry) => entry.pinyin).join(" "),
      tone: words.map((entry) => entry.tone).join(" "),
    };
  }

  const source = "HSK Standard Course 2 - Lesson 1";

  return {
    id: "hsk2-l1",
    no: 1,
    titleZh: "九月去北京旅游最好",
    titleVi: "Tháng chín là thời điểm đẹp nhất để du lịch Bắc Kinh",
    items: [
      item("word", "du lịch", "旅游", [word("旅游", "lvyou", "lǚyóu", "verb", "du lịch")], source),
      item("word", "thấy, cho rằng", "觉得", [word("觉得", "juede", "juéde", "verb", "thấy, cho rằng")], source),
      item("word", "nhất", "最", [word("最", "zui", "zuì", "adv", "nhất")], source),
      item("word", "tại sao", "为什么", [word("为什么", "weishenme", "wèishénme", "pron", "tại sao")], source),
      item("word", "cũng", "也", [word("也", "ye", "yě", "adv", "cũng")], source),
      item("word", "thể thao, vận động", "运动", [word("运动", "yundong", "yùndòng", "noun", "thể thao, vận động")], source),
      item("word", "cùng nhau", "一起", [word("一起", "yiqi", "yìqǐ", "adv", "cùng nhau")], source),
      item("word", "muốn", "要", [word("要", "yao", "yào", "verb", "muốn")], source),
      item("word", "mới", "新", [word("新", "xin", "xīn", "adj", "mới")], source),
      item("word", "mắt", "眼睛", [word("眼睛", "yanjing", "yǎnjing", "noun", "mắt")], source),

      item("phrase", "đá bóng", "踢足球", [word("踢足球", "ti zuqiu", "tī zúqiú", "phrase", "đá bóng")], source),
      item("phrase", "đi du lịch Bắc Kinh", "去北京旅游", [word("去北京旅游", "qu Beijing lvyou", "qù Běijīng lǚyóu", "phrase", "đi du lịch Bắc Kinh")], source),
      item("phrase", "mắt của nó", "它的眼睛", [word("它", "ta", "tā", "pron", "nó"), word("的", "de", "de", "particle", "của"), word("眼睛", "yanjing", "yǎnjing", "noun", "mắt")], source),
      item("phrase", "những chiếc ghế mới", "新的椅子", [word("新", "xin", "xīn", "adj", "mới"), word("的", "de", "de", "particle", "của"), word("椅子", "yizi", "yǐzi", "noun", "ghế")], source),

      item("sentence", "Tháng chín đi du lịch Bắc Kinh là đẹp nhất.", "九月去北京旅游最好。", [
        word("九月", "jiuyue", "jiǔyuè", "noun", "tháng chín"),
        word("去北京旅游", "qu Beijing lvyou", "qù Běijīng lǚyóu", "phrase", "đi du lịch Bắc Kinh"),
        word("最好", "zui hao", "zuì hǎo", "phrase", "đẹp nhất, tốt nhất"),
      ], source),
      item("sentence", "Thời tiết Bắc Kinh vào tháng chín không lạnh cũng không nóng.", "九月的北京天气不冷也不热。", [
        word("九月的北京", "jiuyue de Beijing", "jiǔyuè de Běijīng", "phrase", "Bắc Kinh vào tháng chín"),
        word("天气", "tianqi", "tiānqì", "noun", "thời tiết"),
        word("不冷也不热", "bu leng ye bu re", "bù lěng yě bù rè", "phrase", "không lạnh cũng không nóng"),
      ], source),
      item("sentence", "Tôi thích đá bóng nhất.", "我最喜欢踢足球。", [
        word("我", "wo", "wǒ", "pron", "tôi"),
        word("最喜欢", "zui xihuan", "zuì xǐhuan", "phrase", "thích nhất"),
        word("踢足球", "ti zuqiu", "tī zúqiú", "phrase", "đá bóng"),
      ], source),
      item("sentence", "Chiều nay chúng ta cùng đi đá bóng nhé.", "下午我们一起去踢足球吧。", [
        word("下午", "xiawu", "xiàwǔ", "noun", "buổi chiều"),
        word("我们", "women", "wǒmen", "pron", "chúng tôi"),
        word("一起去", "yiqi qu", "yìqǐ qù", "phrase", "cùng đi"),
        word("踢足球吧", "ti zuqiu ba", "tī zúqiú ba", "phrase", "đi đá bóng nhé"),
      ], source),

      item("mixed", "Bạn thấy khi nào đi là tốt nhất?", "你觉得什么时候去最好？", [
        word("你", "ni", "nǐ", "pron", "bạn"),
        word("觉得", "juede", "juéde", "verb", "thấy, cho rằng"),
        word("什么时候", "shenme shihou", "shénme shíhou", "phrase", "khi nào"),
        word("去最好", "qu zui hao", "qù zuì hǎo", "phrase", "đi là tốt nhất"),
      ], source),
      item("mixed", "Chúng ta có nên mua mấy chiếc ghế mới không?", "我们要不要买几个新的椅子？", [
        word("我们", "women", "wǒmen", "pron", "chúng tôi"),
        word("要不要", "yao bu yao", "yào bu yào", "phrase", "có nên ... hay không"),
        word("买几个", "mai ji ge", "mǎi jǐ ge", "phrase", "mua mấy cái"),
        word("新的椅子", "xin de yizi", "xīn de yǐzi", "phrase", "ghế mới"),
      ], source),
    ],
  };
});
