(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  root.lessonContent[data.level] = root.lessonContent[data.level] || {};
  for (const lesson of data.lessons) {
    root.lessonContent[data.level][lesson.id] = {
      id: lesson.id,
      no: lesson.no,
      title: lesson.titleZh,
      titleZh: lesson.titleZh,
      titleVi: lesson.titleVi,
      items: lesson.items,
    };
  }
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

  function lesson(id, no, titleZh, titleVi, items) {
    return { id, no, titleZh, titleVi, items };
  }

  const s6 = "HSK Standard Course 2 - Lesson 6";
  const s7 = "HSK Standard Course 2 - Lesson 7";
  const s8 = "HSK Standard Course 2 - Lesson 8";
  const s9 = "HSK Standard Course 2 - Lesson 9";
  const s10 = "HSK Standard Course 2 - Lesson 10";

  return {
    level: "HSK2",
    lessons: [
      lesson("hsk2-l6", 6, "你怎么不吃了", "Sao bạn không ăn nữa?", [
        item("word", "sữa bò", "牛奶", [word("牛奶", "niunai", "niú nǎi", "noun", "sữa bò")], s6),
        item("word", "dậy giường", "起床", [word("起床", "qichuang", "qǐ chuáng", "verb", "dậy giường")], s6),
        item("word", "chạy bộ", "跑步", [word("跑步", "paobu", "pǎo bù", "verb", "chạy bộ")], s6),
        item("word", "báo giấy", "报纸", [word("报纸", "baozhi", "bào zhǐ", "noun", "báo giấy")], s6),
        item("word", "uống thuốc", "吃药", [word("吃药", "chiyao", "chī yào", "verb", "uống thuốc")], s6),
        item("word", "chơi bóng rổ", "打篮球", [word("打篮球", "dalanqiu", "dǎ lánqiú", "verb", "chơi bóng rổ")], s6),
        item("word", "để, bảo", "让", [word("让", "rang", "ràng", "verb", "để, bảo")], s6),
        item("word", "tham gia", "参加", [word("参加", "canjia", "cān jiā", "verb", "tham gia")], s6),
        item("word", "dạ tiệc buổi tối", "晚会", [word("晚会", "wanhui", "wǎn huì", "noun", "dạ tiệc buổi tối")], s6),
        item("word", "nữa rồi", "了", [word("了", "le", "le", "particle", "nữa rồi")], s6),

        item("phrase", "uống sữa bò", "喝牛奶", [
          word("喝", "he", "hē", "verb", "uống"),
          word("牛奶", "niunai", "niú nǎi", "noun", "sữa bò"),
        ], s6),
        item("phrase", "đọc báo", "看报纸", [
          word("看", "kan", "kàn", "verb", "đọc, xem"),
          word("报纸", "baozhi", "bào zhǐ", "noun", "báo giấy"),
        ], s6),
        item("phrase", "chơi bóng rổ", "打篮球", [
          word("打", "da", "dǎ", "verb", "chơi, đánh"),
          word("篮球", "lanqiu", "lán qiú", "noun", "bóng rổ"),
        ], s6),
        item("phrase", "uống thuốc rồi", "吃药了", [
          word("吃药", "chiyao", "chī yào", "verb", "uống thuốc"),
          word("了", "le", "le", "particle", "rồi"),
        ], s6),

        item("sentence", "Sao bạn không ăn nữa?", "你怎么不吃了？", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("怎么", "zenme", "zěn me", "adv", "sao"),
          word("不", "bu", "bù", "adv", "không"),
          word("吃", "chi", "chī", "verb", "ăn"),
          word("了", "le", "le", "particle", "nữa rồi"),
        ], s6),
        item("sentence", "Anh ấy bảo bạn tham gia dạ tiệc tối nay à?", "他让你参加晚会吗？", [
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("让", "rang", "ràng", "verb", "bảo"),
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("参加", "canjia", "cān jiā", "verb", "tham gia"),
          word("晚会", "wanhui", "wǎn huì", "noun", "dạ tiệc"),
          word("吗", "ma", "ma", "particle", "không"),
        ], s6),
        item("sentence", "Tôi dậy xong thì uống sữa bò trước.", "我起床以后先喝牛奶。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("起床以后", "qichuang yihou", "qǐ chuáng yǐ hòu", "phrase", "sau khi dậy"),
          word("先", "xian", "xiān", "adv", "trước"),
          word("喝", "he", "hē", "verb", "uống"),
          word("牛奶", "niunai", "niú nǎi", "noun", "sữa bò"),
        ], s6),
        item("sentence", "Cô ấy bị bệnh rồi, nên uống thuốc.", "她生病了，应该吃药。", [
          word("她", "ta", "tā", "pron", "cô ấy"),
          word("生病了", "shengbing le", "shēng bìng le", "phrase", "bị bệnh rồi"),
          word("应该", "yinggai", "yīng gāi", "adv", "nên"),
          word("吃药", "chiyao", "chī yào", "verb", "uống thuốc"),
        ], s6),

        item("mixed", "Tối nay chúng ta đi chạy bộ hay chơi bóng rổ?", "今天晚上我们跑步还是打篮球？", [
          word("今天晚上", "jintian wanshang", "jīn tiān wǎn shang", "noun", "tối nay"),
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("跑步", "paobu", "pǎo bù", "verb", "chạy bộ"),
          word("还是", "haishi", "hái shì", "adv", "hay là"),
          word("打篮球", "dalanqiu", "dǎ lánqiú", "verb", "chơi bóng rổ"),
        ], s6),
        item("mixed", "Đọc xong báo thì tôi đi làm.", "看完报纸以后我去上班。", [
          word("看完报纸以后", "kanwan baozhi yihou", "kàn wán bào zhǐ yǐ hòu", "phrase", "sau khi đọc xong báo"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("去上班", "qu shangban", "qù shàng bān", "phrase", "đi làm"),
        ], s6),
      ]),

      lesson("hsk2-l7", 7, "你家离公司远吗", "Nhà bạn có xa công ty không?", [
        item("word", "thi cử", "考试", [word("考试", "kaoshi", "kǎo shì", "noun", "thi cử")], s7),
        item("word", "cửa hàng", "商店", [word("商店", "shangdian", "shāng diàn", "noun", "cửa hàng")], s7),
        item("word", "sân bay", "机场", [word("机场", "jichang", "jī chǎng", "noun", "sân bay")], s7),
        item("word", "con đường", "路", [word("路", "lu", "lù", "noun", "con đường")], s7),
        item("word", "phòng học", "教室", [word("教室", "jiaoshi", "jiào shì", "noun", "phòng học")], s7),
        item("word", "thời gian", "时间", [word("时间", "shijian", "shí jiān", "noun", "thời gian")], s7),
        item("word", "cách", "离", [word("离", "li", "lí", "prep", "cách")], s7),
        item("word", "gần", "近", [word("近", "jin", "jìn", "adj", "gần")], s7),
        item("word", "xa", "远", [word("远", "yuan", "yuǎn", "adj", "xa")], s7),
        item("word", "đi bộ", "走路", [word("走路", "zoulu", "zǒu lù", "verb", "đi bộ")], s7),

        item("phrase", "xa công ty", "离公司远", [
          word("离", "li", "lí", "prep", "cách"),
          word("公司", "gongsi", "gōng sī", "noun", "công ty"),
          word("远", "yuan", "yuǎn", "adj", "xa"),
        ], s7),
        item("phrase", "đi bộ đi", "走路去", [
          word("走路", "zoulu", "zǒu lù", "verb", "đi bộ"),
          word("去", "qu", "qù", "verb", "đi"),
        ], s7),
        item("phrase", "từ nhà đến công ty", "从家到公司", [
          word("从", "cong", "cóng", "prep", "từ"),
          word("家", "jia", "jiā", "noun", "nhà"),
          word("到", "dao", "dào", "prep", "đến"),
          word("公司", "gongsi", "gōng sī", "noun", "công ty"),
        ], s7),
        item("phrase", "đi sân bay", "去机场", [
          word("去", "qu", "qù", "verb", "đi"),
          word("机场", "jichang", "jī chǎng", "noun", "sân bay"),
        ], s7),

        item("sentence", "Nhà bạn có xa công ty không?", "你家离公司远吗？", [
          word("你家", "nijia", "nǐ jiā", "noun", "nhà bạn"),
          word("离", "li", "lí", "prep", "cách"),
          word("公司", "gongsi", "gōng sī", "noun", "công ty"),
          word("远", "yuan", "yuǎn", "adj", "xa"),
          word("吗", "ma", "ma", "particle", "không"),
        ], s7),
        item("sentence", "Từ nhà tôi đến trường, đi bộ hai mươi phút.", "从我家到学校走路二十分钟。", [
          word("从我家到学校", "cong wojia dao xuexiao", "cóng wǒ jiā dào xué xiào", "phrase", "từ nhà tôi đến trường"),
          word("走路", "zoulu", "zǒu lù", "verb", "đi bộ"),
          word("二十分钟", "ershi fenzhong", "èr shí fēn zhōng", "noun", "hai mươi phút"),
        ], s7),
        item("sentence", "Cửa hàng cách phòng học rất gần.", "商店离教室很近。", [
          word("商店", "shangdian", "shāng diàn", "noun", "cửa hàng"),
          word("离", "li", "lí", "prep", "cách"),
          word("教室", "jiaoshi", "jiào shì", "noun", "phòng học"),
          word("很近", "hen jin", "hěn jìn", "adj", "rất gần"),
        ], s7),
        item("sentence", "Bây giờ còn sớm, chúng ta đi sân bay trước nhé.", "现在时间还早，我们先去机场吧。", [
          word("现在", "xianzai", "xiàn zài", "noun", "bây giờ"),
          word("时间", "shijian", "shí jiān", "noun", "thời gian"),
          word("还早", "hai zao", "hái zǎo", "adj", "còn sớm"),
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("先", "xian", "xiān", "adv", "trước"),
          word("去机场", "qu jichang", "qù jī chǎng", "phrase", "đi sân bay"),
          word("吧", "ba", "ba", "particle", "nhé"),
        ], s7),

        item("mixed", "Con đường này đi thế nào?", "这条路怎么走？", [
          word("这条路", "zhe tiao lu", "zhè tiáo lù", "noun", "con đường này"),
          word("怎么", "zenme", "zěn me", "adv", "thế nào"),
          word("走", "zou", "zǒu", "verb", "đi"),
        ], s7),
        item("mixed", "Thi xong tôi đi cửa hàng mua đồ.", "考试以后我去商店买东西。", [
          word("考试以后", "kaoshi yihou", "kǎo shì yǐ hòu", "phrase", "sau khi thi"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("去商店", "qu shangdian", "qù shāng diàn", "phrase", "đi cửa hàng"),
          word("买东西", "mai dongxi", "mǎi dōng xi", "verb", "mua đồ"),
        ], s7),
      ]),

      lesson("hsk2-l8", 8, "让我想想再告诉你", "Để tôi nghĩ rồi nói cho bạn sau.", [
        item("word", "màu đen", "黑", [word("黑", "hei", "hēi", "adj", "màu đen")], s8),
        item("word", "màu trắng", "白", [word("白", "bai", "bái", "adj", "màu trắng")], s8),
        item("word", "thời tiết", "天气", [word("天气", "tianqi", "tiān qì", "noun", "thời tiết")], s8),
        item("word", "nhân viên phục vụ", "服务员", [word("服务员", "fuwuyuan", "fú wù yuán", "noun", "nhân viên phục vụ")], s8),
        item("word", "vận động", "运动", [word("运动", "yundong", "yùn dòng", "verb", "vận động")], s8),
        item("word", "đợi", "等", [word("等", "deng", "děng", "verb", "đợi")], s8),
        item("word", "lại, rồi mới", "再", [word("再", "zai", "zài", "adv", "lại, rồi mới")], s8),
        item("word", "nói cho biết", "告诉", [word("告诉", "gaosu", "gào su", "verb", "nói cho biết")], s8),
        item("word", "nghĩ", "想", [word("想", "xiang", "xiǎng", "verb", "nghĩ")], s8),
        item("word", "cùng nhau", "一起", [word("一起", "yiqi", "yì qǐ", "adv", "cùng nhau")], s8),

        item("phrase", "cái màu đen", "黑的", [
          word("黑", "hei", "hēi", "adj", "đen"),
          word("的", "de", "de", "particle", "cái ..."),
        ], s8),
        item("phrase", "cái màu trắng", "白的", [
          word("白", "bai", "bái", "adj", "trắng"),
          word("的", "de", "de", "particle", "cái ..."),
        ], s8),
        item("phrase", "đợi một lát", "等一等", [
          word("等", "deng", "děng", "verb", "đợi"),
          word("一等", "yi deng", "yì děng", "phrase", "một lát"),
        ], s8),
        item("phrase", "nói cho bạn", "告诉你", [
          word("告诉", "gaosu", "gào su", "verb", "nói cho biết"),
          word("你", "ni", "nǐ", "pron", "bạn"),
        ], s8),

        item("sentence", "Để tôi nghĩ rồi nói cho bạn sau.", "让我想想再告诉你。", [
          word("让", "rang", "ràng", "verb", "để"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("想想", "xiangxiang", "xiǎng xiang", "verb", "nghĩ một chút"),
          word("再", "zai", "zài", "adv", "rồi mới"),
          word("告诉你", "gaosu ni", "gào su nǐ", "phrase", "nói cho bạn"),
        ], s8),
        item("sentence", "Thời tiết hôm nay đẹp thế này, chúng ta cùng đi vận động nhé.", "今天天气这么好，我们一起去运动吧。", [
          word("今天天气", "jintian tianqi", "jīn tiān tiān qì", "noun", "thời tiết hôm nay"),
          word("这么好", "zheme hao", "zhè me hǎo", "adj", "đẹp thế này"),
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("一起", "yiqi", "yì qǐ", "adv", "cùng nhau"),
          word("去运动", "qu yundong", "qù yùn dòng", "phrase", "đi vận động"),
          word("吧", "ba", "ba", "particle", "nhé"),
        ], s8),
        item("sentence", "Nhân viên phục vụ, cho tôi cái màu trắng kia.", "服务员，请给我那件白的。", [
          word("服务员", "fuwuyuan", "fú wù yuán", "noun", "nhân viên phục vụ"),
          word("请", "qing", "qǐng", "adv", "xin"),
          word("给我", "gei wo", "gěi wǒ", "phrase", "cho tôi"),
          word("那件", "na jian", "nà jiàn", "noun", "cái kia"),
          word("白的", "bai de", "bái de", "phrase", "màu trắng"),
        ], s8),
        item("sentence", "Cái màu đen đó tôi không thích lắm.", "那件黑的我不太喜欢。", [
          word("那件黑的", "na jian hei de", "nà jiàn hēi de", "phrase", "cái màu đen đó"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("不太", "bu tai", "bú tài", "adv", "không lắm"),
          word("喜欢", "xihuan", "xǐ huan", "verb", "thích"),
        ], s8),

        item("mixed", "Bạn đợi một lát, tôi xem thêm chút nữa.", "你先等一等，我再看看。", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("先", "xian", "xiān", "adv", "trước"),
          word("等一等", "deng yi deng", "děng yì děng", "phrase", "đợi một lát"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("再看看", "zai kankan", "zài kàn kan", "verb", "xem lại thêm chút"),
        ], s8),
        item("mixed", "Hai cái áo này, một cái màu đen, một cái màu trắng.", "这两件衣服一件黑的，一件白的。", [
          word("这两件衣服", "zhe liang jian yifu", "zhè liǎng jiàn yī fu", "noun", "hai cái áo này"),
          word("一件黑的", "yi jian hei de", "yí jiàn hēi de", "phrase", "một cái màu đen"),
          word("一件白的", "yi jian bai de", "yí jiàn bái de", "phrase", "một cái màu trắng"),
        ], s8),
      ]),

      lesson("hsk2-l9", 9, "题太多，我没做完", "Bài nhiều quá, tôi chưa làm xong.", [
        item("word", "hát", "唱歌", [word("唱歌", "changge", "chàng gē", "verb", "hát")], s9),
        item("word", "nhảy múa", "跳舞", [word("跳舞", "tiaowu", "tiào wǔ", "verb", "nhảy múa")], s9),
        item("word", "thứ nhất, đầu tiên", "第一", [word("第一", "diyi", "dì yī", "adv", "thứ nhất, đầu tiên")], s9),
        item("word", "đúng", "对", [word("对", "dui", "duì", "adj", "đúng")], s9),
        item("word", "sai", "错", [word("错", "cuo", "cuò", "adj", "sai")], s9),
        item("word", "vấn đề, câu hỏi", "问题", [word("问题", "wenti", "wèn tí", "noun", "vấn đề, câu hỏi")], s9),
        item("word", "xong", "完", [word("完", "wan", "wán", "verb", "xong")], s9),
        item("word", "từ", "从", [word("从", "cong", "cóng", "prep", "từ")], s9),
        item("word", "bắt đầu", "开始", [word("开始", "kaishi", "kāi shǐ", "verb", "bắt đầu")], s9),
        item("word", "nhiều quá", "太多", [word("太多", "taiduo", "tài duō", "adj", "nhiều quá")], s9),

        item("phrase", "câu thứ nhất", "第一题", [
          word("第一", "diyi", "dì yī", "adv", "thứ nhất"),
          word("题", "ti", "tí", "noun", "câu, bài"),
        ], s9),
        item("phrase", "bắt đầu từ tám giờ", "从八点开始", [
          word("从", "cong", "cóng", "prep", "từ"),
          word("八点", "ba dian", "bā diǎn", "noun", "tám giờ"),
          word("开始", "kaishi", "kāi shǐ", "verb", "bắt đầu"),
        ], s9),
        item("phrase", "làm xong rồi", "做完了", [
          word("做完", "zuowan", "zuò wán", "verb", "làm xong"),
          word("了", "le", "le", "particle", "rồi"),
        ], s9),
        item("phrase", "hát và nhảy", "唱歌跳舞", [
          word("唱歌", "changge", "chàng gē", "verb", "hát"),
          word("跳舞", "tiaowu", "tiào wǔ", "verb", "nhảy múa"),
        ], s9),

        item("sentence", "Bài nhiều quá, tôi chưa làm xong.", "题太多，我没做完。", [
          word("题", "ti", "tí", "noun", "bài"),
          word("太多", "taiduo", "tài duō", "adj", "nhiều quá"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("没", "mei", "méi", "adv", "chưa"),
          word("做完", "zuowan", "zuò wán", "verb", "làm xong"),
        ], s9),
        item("sentence", "Câu này bạn làm đúng chưa?", "这道题你做对了吗？", [
          word("这道题", "zhe dao ti", "zhè dào tí", "noun", "câu này"),
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("做对", "zuodui", "zuò duì", "verb", "làm đúng"),
          word("了", "le", "le", "particle", "rồi"),
          word("吗", "ma", "ma", "particle", "không"),
        ], s9),
        item("sentence", "Chúng ta bắt đầu ôn từ bài một nhé.", "我们从第一课开始复习吧。", [
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("从", "cong", "cóng", "prep", "từ"),
          word("第一课", "di yi ke", "dì yī kè", "noun", "bài một"),
          word("开始", "kaishi", "kāi shǐ", "verb", "bắt đầu"),
          word("复习", "fuxi", "fù xí", "verb", "ôn tập"),
          word("吧", "ba", "ba", "particle", "nhé"),
        ], s9),
        item("sentence", "Cô ấy biết hát, cũng biết nhảy.", "她会唱歌，也会跳舞。", [
          word("她", "ta", "tā", "pron", "cô ấy"),
          word("会", "hui", "huì", "adv", "biết"),
          word("唱歌", "changge", "chàng gē", "verb", "hát"),
          word("也", "ye", "yě", "adv", "cũng"),
          word("会", "hui", "huì", "adv", "biết"),
          word("跳舞", "tiaowu", "tiào wǔ", "verb", "nhảy múa"),
        ], s9),

        item("mixed", "Bài thi có quá nhiều câu hỏi, nên anh ấy chưa làm xong.", "考试的问题太多了，所以他没做完。", [
          word("考试的问题", "kaoshi de wenti", "kǎo shì de wèn tí", "noun", "câu hỏi của bài thi"),
          word("太多了", "taiduo le", "tài duō le", "adj", "nhiều quá"),
          word("所以", "suoyi", "suǒ yǐ", "adv", "cho nên"),
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("没做完", "mei zuowan", "méi zuò wán", "verb", "chưa làm xong"),
        ], s9),
        item("mixed", "Buổi tối tám giờ bắt đầu, bạn đừng vào nhầm phòng học.", "晚会八点开始，你不要来错教室。", [
          word("晚会", "wanhui", "wǎn huì", "noun", "buổi tối liên hoan"),
          word("八点开始", "ba dian kaishi", "bā diǎn kāi shǐ", "phrase", "bắt đầu lúc tám giờ"),
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("不要", "buyao", "bú yào", "adv", "đừng"),
          word("来错", "lai cuo", "lái cuò", "verb", "đi nhầm"),
          word("教室", "jiaoshi", "jiào shì", "noun", "phòng học"),
        ], s9),
      ]),

      lesson("hsk2-l10", 10, "别找了，手机在桌子上呢", "Đừng tìm nữa, điện thoại ở trên bàn đây.", [
        item("word", "dưa hấu", "西瓜", [word("西瓜", "xigua", "xī guā", "noun", "dưa hấu")], s10),
        item("word", "trứng gà", "鸡蛋", [word("鸡蛋", "jidan", "jī dàn", "noun", "trứng gà")], s10),
        item("word", "điện thoại di động", "手机", [word("手机", "shouji", "shǒu jī", "noun", "điện thoại di động")], s10),
        item("word", "cái bàn", "桌子", [word("桌子", "zhuozi", "zhuō zi", "noun", "cái bàn")], s10),
        item("word", "nghỉ ngơi", "休息", [word("休息", "xiuxi", "xiū xi", "verb", "nghỉ ngơi")], s10),
        item("word", "uống thuốc", "吃药", [word("吃药", "chiyao", "chī yào", "verb", "uống thuốc")], s10),
        item("word", "chuẩn bị", "准备", [word("准备", "zhunbei", "zhǔn bèi", "verb", "chuẩn bị")], s10),
        item("word", "bữa trưa", "午饭", [word("午饭", "wufan", "wǔ fàn", "noun", "bữa trưa")], s10),
        item("word", "tìm", "找", [word("找", "zhao", "zhǎo", "verb", "tìm")], s10),
        item("word", "đừng", "别", [word("别", "bie", "bié", "adv", "đừng")], s10),

        item("phrase", "ở trên bàn", "在桌子上", [
          word("在", "zai", "zài", "prep", "ở"),
          word("桌子上", "zhuozi shang", "zhuō zi shàng", "noun", "trên bàn"),
        ], s10),
        item("phrase", "chuẩn bị bữa trưa", "准备午饭", [
          word("准备", "zhunbei", "zhǔn bèi", "verb", "chuẩn bị"),
          word("午饭", "wufan", "wǔ fàn", "noun", "bữa trưa"),
        ], s10),
        item("phrase", "ăn trứng gà", "吃鸡蛋", [
          word("吃", "chi", "chī", "verb", "ăn"),
          word("鸡蛋", "jidan", "jī dàn", "noun", "trứng gà"),
        ], s10),
        item("phrase", "đừng tìm nữa", "别找了", [
          word("别", "bie", "bié", "adv", "đừng"),
          word("找", "zhao", "zhǎo", "verb", "tìm"),
          word("了", "le", "le", "particle", "nữa"),
        ], s10),

        item("sentence", "Đừng tìm nữa, điện thoại ở trên bàn đây.", "别找了，手机在桌子上呢。", [
          word("别找了", "bie zhao le", "bié zhǎo le", "phrase", "đừng tìm nữa"),
          word("手机", "shouji", "shǒu jī", "noun", "điện thoại"),
          word("在", "zai", "zài", "prep", "ở"),
          word("桌子上", "zhuozi shang", "zhuō zi shàng", "noun", "trên bàn"),
          word("呢", "ne", "ne", "particle", "đây"),
        ], s10),
        item("sentence", "Mẹ đang ở bếp chuẩn bị bữa trưa.", "妈妈在厨房准备午饭。", [
          word("妈妈", "mama", "mā ma", "noun", "mẹ"),
          word("在厨房", "zai chufang", "zài chú fáng", "phrase", "ở bếp"),
          word("准备", "zhunbei", "zhǔn bèi", "verb", "chuẩn bị"),
          word("午饭", "wufan", "wǔ fàn", "noun", "bữa trưa"),
        ], s10),
        item("sentence", "Anh ấy không khỏe, ở nhà nghỉ ngơi và đã uống thuốc.", "他不舒服，在家休息，还吃了药。", [
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("不舒服", "bu shufu", "bù shū fu", "adj", "không khỏe"),
          word("在家", "zai jia", "zài jiā", "phrase", "ở nhà"),
          word("休息", "xiuxi", "xiū xi", "verb", "nghỉ ngơi"),
          word("还", "hai", "hái", "adv", "còn"),
          word("吃了药", "chi le yao", "chī le yào", "phrase", "đã uống thuốc"),
        ], s10),
        item("sentence", "Tôi mua dưa hấu và trứng gà rồi.", "我买了西瓜和鸡蛋。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("买了", "mai le", "mǎi le", "verb", "đã mua"),
          word("西瓜", "xigua", "xī guā", "noun", "dưa hấu"),
          word("和", "he", "hé", "prep", "và"),
          word("鸡蛋", "jidan", "jī dàn", "noun", "trứng gà"),
        ], s10),

        item("mixed", "Điện thoại không ở trong túi, nó ở trên bàn đấy.", "手机不在包里，在桌子上呢。", [
          word("手机", "shouji", "shǒu jī", "noun", "điện thoại"),
          word("不在包里", "bu zai bao li", "bú zài bāo lǐ", "phrase", "không ở trong túi"),
          word("在桌子上呢", "zai zhuozi shang ne", "zài zhuō zi shàng ne", "phrase", "ở trên bàn đấy"),
        ], s10),
        item("mixed", "Ăn xong bữa trưa thì chúng ta nghỉ một chút nhé.", "吃完午饭以后我们休息一下吧。", [
          word("吃完午饭以后", "chiwan wufan yihou", "chī wán wǔ fàn yǐ hòu", "phrase", "sau khi ăn xong bữa trưa"),
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("休息一下", "xiuxi yixia", "xiū xi yí xià", "verb", "nghỉ một chút"),
          word("吧", "ba", "ba", "particle", "nhé"),
        ], s10),
      ]),
    ],
  };
});
