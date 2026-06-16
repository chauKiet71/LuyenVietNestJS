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

  const s11 = "HSK Standard Course 2 - Lesson 11";
  const s12 = "HSK Standard Course 2 - Lesson 12";
  const s13 = "HSK Standard Course 2 - Lesson 13";
  const s14 = "HSK Standard Course 2 - Lesson 14";
  const s15 = "HSK Standard Course 2 - Lesson 15";

  return {
    level: "HSK2",
    lessons: [
      lesson("hsk2-l11", 11, "他比我大三岁", "Anh ấy lớn hơn tôi ba tuổi.", [
        item("word", "nhảy múa", "跳舞", [word("跳舞", "tiaowu", "tiào wǔ", "verb", "nhảy múa")], s11),
        item("word", "nói chuyện", "说话", [word("说话", "shuohua", "shuō huà", "verb", "nói chuyện")], s11),
        item("word", "nữ", "女", [word("女", "nv", "nǚ", "noun", "nữ")], s11),
        item("word", "trẻ con", "孩子", [word("孩子", "haizi", "hái zi", "noun", "trẻ con")], s11),
        item("word", "hát", "唱歌", [word("唱歌", "changge", "chàng gē", "verb", "hát")], s11),
        item("word", "nam", "男", [word("男", "nan", "nán", "noun", "nam")], s11),
        item("word", "lớn hơn", "大", [word("大", "da", "dà", "adj", "lớn hơn")], s11),
        item("word", "nhỏ hơn", "小", [word("小", "xiao", "xiǎo", "adj", "nhỏ hơn")], s11),
        item("word", "tuổi", "岁", [word("岁", "sui", "suì", "noun", "tuổi")], s11),
        item("word", "hơn", "比", [word("比", "bi", "bǐ", "prep", "hơn")], s11),

        item("phrase", "lớn hơn ba tuổi", "大三岁", [
          word("大", "da", "dà", "adj", "lớn hơn"),
          word("三岁", "san sui", "sān suì", "noun", "ba tuổi"),
        ], s11),
        item("phrase", "nhỏ hơn tôi", "比我小", [
          word("比", "bi", "bǐ", "prep", "hơn"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("小", "xiao", "xiǎo", "adj", "nhỏ"),
        ], s11),
        item("phrase", "con trai", "男孩子", [
          word("男", "nan", "nán", "noun", "nam"),
          word("孩子", "haizi", "hái zi", "noun", "trẻ con"),
        ], s11),
        item("phrase", "con gái", "女孩子", [
          word("女", "nv", "nǚ", "noun", "nữ"),
          word("孩子", "haizi", "hái zi", "noun", "trẻ con"),
        ], s11),

        item("sentence", "Anh ấy lớn hơn tôi ba tuổi.", "他比我大三岁。", [
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("比", "bi", "bǐ", "prep", "hơn"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("大", "da", "dà", "adj", "lớn"),
          word("三岁", "san sui", "sān suì", "noun", "ba tuổi"),
        ], s11),
        item("sentence", "Em gái tôi nhỏ hơn tôi hai tuổi.", "我妹妹比我小两岁。", [
          word("我妹妹", "wo meimei", "wǒ mèi mei", "noun", "em gái tôi"),
          word("比", "bi", "bǐ", "prep", "hơn"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("小", "xiao", "xiǎo", "adj", "nhỏ"),
          word("两岁", "liang sui", "liǎng suì", "noun", "hai tuổi"),
        ], s11),
        item("sentence", "Con gái thích hát, con trai thích nhảy múa.", "女孩子喜欢唱歌，男孩子喜欢跳舞。", [
          word("女孩子", "nv haizi", "nǚ hái zi", "noun", "con gái"),
          word("喜欢", "xihuan", "xǐ huan", "verb", "thích"),
          word("唱歌", "changge", "chàng gē", "verb", "hát"),
          word("男孩子", "nan haizi", "nán hái zi", "noun", "con trai"),
          word("喜欢", "xihuan", "xǐ huan", "verb", "thích"),
          word("跳舞", "tiaowu", "tiào wǔ", "verb", "nhảy múa"),
        ], s11),
        item("sentence", "Hai đứa trẻ đang ngồi đó nói chuyện.", "两个孩子在那儿说话。", [
          word("两个孩子", "liang ge haizi", "liǎng ge hái zi", "noun", "hai đứa trẻ"),
          word("在那儿", "zai nar", "zài nàr", "phrase", "ở đó"),
          word("说话", "shuohua", "shuō huà", "verb", "nói chuyện"),
        ], s11),

        item("mixed", "Hôm nay anh ấy hát hay hơn tôi.", "今天他唱歌比我好。", [
          word("今天", "jintian", "jīn tiān", "noun", "hôm nay"),
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("唱歌", "changge", "chàng gē", "verb", "hát"),
          word("比", "bi", "bǐ", "prep", "hơn"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("好", "hao", "hǎo", "adj", "hay hơn"),
        ], s11),
        item("mixed", "Người đàn ông đó đang nói chuyện với một đứa trẻ.", "那个男的在跟一个孩子说话。", [
          word("那个男的", "na ge nan de", "nà ge nán de", "noun", "người đàn ông đó"),
          word("在跟", "zai gen", "zài gēn", "prep", "đang với"),
          word("一个孩子", "yi ge haizi", "yí ge hái zi", "noun", "một đứa trẻ"),
          word("说话", "shuohua", "shuō huà", "verb", "nói chuyện"),
        ], s11),
      ]),

      lesson("hsk2-l12", 12, "你穿得太少了", "Bạn mặc ít quá rồi.", [
        item("word", "vợ", "妻子", [word("妻子", "qizi", "qī zi", "noun", "vợ")], s12),
        item("word", "ngủ", "睡觉", [word("睡觉", "shuijiao", "shuì jiào", "verb", "ngủ")], s12),
        item("word", "phòng", "房间", [word("房间", "fangjian", "fáng jiān", "noun", "phòng")], s12),
        item("word", "tuyết rơi", "下雪", [word("下雪", "xiaxue", "xià xuě", "verb", "tuyết rơi")], s12),
        item("word", "dậy giường", "起床", [word("起床", "qichuang", "qǐ chuáng", "verb", "dậy giường")], s12),
        item("word", "nhà", "房子", [word("房子", "fangzi", "fáng zi", "noun", "nhà")], s12),
        item("word", "mặc", "穿", [word("穿", "chuan", "chuān", "verb", "mặc")], s12),
        item("word", "ít", "少", [word("少", "shao", "shǎo", "adj", "ít")], s12),
        item("word", "quá", "太", [word("太", "tai", "tài", "adv", "quá")], s12),
        item("word", "quần áo", "衣服", [word("衣服", "yifu", "yī fu", "noun", "quần áo")], s12),

        item("phrase", "mặc ít quá", "穿得太少", [
          word("穿", "chuan", "chuān", "verb", "mặc"),
          word("得", "de", "de", "particle", "đến mức"),
          word("太少", "tai shao", "tài shǎo", "adj", "ít quá"),
        ], s12),
        item("phrase", "trong phòng", "在房间里", [
          word("在", "zai", "zài", "prep", "ở"),
          word("房间里", "fangjian li", "fáng jiān lǐ", "noun", "trong phòng"),
        ], s12),
        item("phrase", "dậy rồi", "起床了", [
          word("起床", "qichuang", "qǐ chuáng", "verb", "dậy"),
          word("了", "le", "le", "particle", "rồi"),
        ], s12),
        item("phrase", "trời đang tuyết rơi", "在下雪", [
          word("在", "zai", "zài", "adv", "đang"),
          word("下雪", "xiaxue", "xià xuě", "verb", "tuyết rơi"),
        ], s12),

        item("sentence", "Bạn mặc ít quá rồi.", "你穿得太少了。", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("穿", "chuan", "chuān", "verb", "mặc"),
          word("得", "de", "de", "particle", "đến mức"),
          word("太少", "tai shao", "tài shǎo", "adj", "ít quá"),
          word("了", "le", "le", "particle", "rồi"),
        ], s12),
        item("sentence", "Ngoài trời đang tuyết rơi, bạn nên mặc nhiều hơn một chút.", "外边在下雪，你应该多穿一点儿。", [
          word("外边", "waibian", "wài biān", "noun", "ngoài trời"),
          word("在下雪", "zai xiaxue", "zài xià xuě", "phrase", "đang tuyết rơi"),
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("应该", "yinggai", "yīng gāi", "adv", "nên"),
          word("多穿一点儿", "duo chuan yidianr", "duō chuān yì diǎnr", "phrase", "mặc nhiều hơn một chút"),
        ], s12),
        item("sentence", "Vợ tôi vẫn đang ngủ trong phòng.", "我妻子还在房间里睡觉。", [
          word("我妻子", "wo qizi", "wǒ qī zi", "noun", "vợ tôi"),
          word("还", "hai", "hái", "adv", "vẫn"),
          word("在房间里", "zai fangjian li", "zài fáng jiān lǐ", "phrase", "trong phòng"),
          word("睡觉", "shuijiao", "shuì jiào", "verb", "ngủ"),
        ], s12),
        item("sentence", "Căn nhà đó có ba phòng.", "那个房子有三个房间。", [
          word("那个房子", "na ge fangzi", "nà ge fáng zi", "noun", "căn nhà đó"),
          word("有", "you", "yǒu", "verb", "có"),
          word("三个房间", "san ge fangjian", "sān ge fáng jiān", "noun", "ba phòng"),
        ], s12),

        item("mixed", "Tôi vừa dậy, vẫn chưa mặc quần áo.", "我刚起床，还没穿衣服。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("刚起床", "gang qichuang", "gāng qǐ chuáng", "phrase", "vừa dậy"),
          word("还没", "hai mei", "hái méi", "adv", "vẫn chưa"),
          word("穿衣服", "chuan yifu", "chuān yī fu", "phrase", "mặc quần áo"),
        ], s12),
        item("mixed", "Mùa đông ở đây tuyết rơi nhiều, đừng mặc ít quá.", "这里冬天下雪很多，别穿得太少。", [
          word("这里冬天", "zheli dongtian", "zhè lǐ dōng tiān", "noun", "mùa đông ở đây"),
          word("下雪很多", "xiaxue henduo", "xià xuě hěn duō", "phrase", "tuyết rơi nhiều"),
          word("别", "bie", "bié", "adv", "đừng"),
          word("穿得太少", "chuan de tai shao", "chuān de tài shǎo", "phrase", "mặc ít quá"),
        ], s12),
      ]),

      lesson("hsk2-l13", 13, "门开着呢", "Cửa đang mở đấy.", [
        item("word", "bút chì", "铅笔", [word("铅笔", "qianbi", "qiān bǐ", "noun", "bút chì")], s13),
        item("word", "tay", "手", [word("手", "shou", "shǒu", "noun", "tay")], s13),
        item("word", "khách sạn", "宾馆", [word("宾馆", "binguan", "bīn guǎn", "noun", "khách sạn")], s13),
        item("word", "cầm, lấy", "拿", [word("拿", "na", "ná", "verb", "cầm, lấy")], s13),
        item("word", "mắt", "眼睛", [word("眼睛", "yanjing", "yǎn jing", "noun", "mắt")], s13),
        item("word", "ngã tư", "路口", [word("路口", "lukou", "lù kǒu", "noun", "ngã tư")], s13),
        item("word", "cửa", "门", [word("门", "men", "mén", "noun", "cửa")], s13),
        item("word", "mở", "开", [word("开", "kai", "kāi", "verb", "mở")], s13),
        item("word", "đang", "着", [word("着", "zhe", "zhe", "particle", "đang ở trạng thái")], s13),
        item("word", "đóng", "关", [word("关", "guan", "guān", "verb", "đóng")], s13),

        item("phrase", "cửa đang mở", "门开着", [
          word("门", "men", "mén", "noun", "cửa"),
          word("开着", "kai zhe", "kāi zhe", "phrase", "đang mở"),
        ], s13),
        item("phrase", "cầm bút chì", "拿铅笔", [
          word("拿", "na", "ná", "verb", "cầm"),
          word("铅笔", "qianbi", "qiān bǐ", "noun", "bút chì"),
        ], s13),
        item("phrase", "mở mắt", "睁着眼睛", [
          word("睁着", "zheng zhe", "zhēng zhe", "phrase", "mở ra"),
          word("眼睛", "yanjing", "yǎn jing", "noun", "mắt"),
        ], s13),
        item("phrase", "ở ngã tư", "在路口", [
          word("在", "zai", "zài", "prep", "ở"),
          word("路口", "lukou", "lù kǒu", "noun", "ngã tư"),
        ], s13),

        item("sentence", "Cửa đang mở đấy.", "门开着呢。", [
          word("门", "men", "mén", "noun", "cửa"),
          word("开着", "kai zhe", "kāi zhe", "phrase", "đang mở"),
          word("呢", "ne", "ne", "particle", "đấy"),
        ], s13),
        item("sentence", "Tôi đang đứng ở cửa khách sạn đợi bạn.", "我在宾馆门口等你。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("在", "zai", "zài", "prep", "ở"),
          word("宾馆门口", "binguan menkou", "bīn guǎn mén kǒu", "noun", "cửa khách sạn"),
          word("等", "deng", "děng", "verb", "đợi"),
          word("你", "ni", "nǐ", "pron", "bạn"),
        ], s13),
        item("sentence", "Bạn cầm bút chì bằng tay trái hay tay phải?", "你拿铅笔用左手还是右手？", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("拿铅笔", "na qianbi", "ná qiān bǐ", "phrase", "cầm bút chì"),
          word("用", "yong", "yòng", "verb", "dùng"),
          word("左手", "zuoshou", "zuǒ shǒu", "noun", "tay trái"),
          word("还是", "haishi", "hái shì", "adv", "hay là"),
          word("右手", "youshou", "yòu shǒu", "noun", "tay phải"),
        ], s13),
        item("sentence", "Qua ngã tư rồi rẽ trái là tới khách sạn.", "过了路口以后左拐就是宾馆。", [
          word("过了路口以后", "guo le lukou yihou", "guò le lù kǒu yǐ hòu", "phrase", "qua ngã tư rồi"),
          word("左拐", "zuoguai", "zuǒ guǎi", "verb", "rẽ trái"),
          word("就是", "jiushi", "jiù shì", "verb", "chính là"),
          word("宾馆", "binguan", "bīn guǎn", "noun", "khách sạn"),
        ], s13),

        item("mixed", "Mắt cô ấy đang mở, nhưng vẫn chưa nói gì.", "她眼睛睁着，可是还没说话。", [
          word("她", "ta", "tā", "pron", "cô ấy"),
          word("眼睛睁着", "yanjing zheng zhe", "yǎn jing zhēng zhe", "phrase", "mắt đang mở"),
          word("可是", "keshi", "kě shì", "adv", "nhưng"),
          word("还没说话", "hai mei shuohua", "hái méi shuō huà", "phrase", "vẫn chưa nói gì"),
        ], s13),
        item("mixed", "Đừng cầm đồ bằng một tay, cẩn thận làm rơi.", "别只用一只手拿，小心掉了。", [
          word("别", "bie", "bié", "adv", "đừng"),
          word("只用一只手", "zhi yong yi zhi shou", "zhǐ yòng yì zhī shǒu", "phrase", "chỉ dùng một tay"),
          word("拿", "na", "ná", "verb", "cầm"),
          word("小心", "xiaoxin", "xiǎo xīn", "adv", "cẩn thận"),
          word("掉了", "diao le", "diào le", "verb", "rơi mất"),
        ], s13),
      ]),

      lesson("hsk2-l14", 14, "你看过那个电影吗", "Bạn đã xem bộ phim đó chưa?", [
        item("word", "rạp chiếu phim", "电影院", [word("电影院", "dianyingyuan", "diàn yǐng yuàn", "noun", "rạp chiếu phim")], s14),
        item("word", "đợi", "等", [word("等", "deng", "děng", "verb", "đợi")], s14),
        item("word", "trời nắng", "晴", [word("晴", "qing", "qíng", "adj", "trời nắng")], s14),
        item("word", "một trăm", "一百", [word("一百", "yibai", "yì bǎi", "num", "một trăm")], s14),
        item("word", "gọi điện thoại", "打电话", [word("打电话", "dadianhua", "dǎ diàn huà", "verb", "gọi điện thoại")], s14),
        item("word", "chơi", "玩儿", [word("玩儿", "wanr", "wánr", "verb", "chơi")], s14),
        item("word", "xem", "看", [word("看", "kan", "kàn", "verb", "xem")], s14),
        item("word", "đã từng", "过", [word("过", "guo", "guo", "particle", "đã từng")], s14),
        item("word", "phim", "电影", [word("电影", "dianying", "diàn yǐng", "noun", "phim")], s14),
        item("word", "vé", "票", [word("票", "piao", "piào", "noun", "vé")], s14),

        item("phrase", "xem phim", "看电影", [
          word("看", "kan", "kàn", "verb", "xem"),
          word("电影", "dianying", "diàn yǐng", "noun", "phim"),
        ], s14),
        item("phrase", "đã xem qua", "看过", [
          word("看", "kan", "kàn", "verb", "xem"),
          word("过", "guo", "guo", "particle", "đã từng"),
        ], s14),
        item("phrase", "gọi điện cho tôi", "给我打电话", [
          word("给我", "gei wo", "gěi wǒ", "phrase", "cho tôi"),
          word("打电话", "dadianhua", "dǎ diàn huà", "verb", "gọi điện"),
        ], s14),
        item("phrase", "mua vé", "买票", [
          word("买", "mai", "mǎi", "verb", "mua"),
          word("票", "piao", "piào", "noun", "vé"),
        ], s14),

        item("sentence", "Bạn đã xem bộ phim đó chưa?", "你看过那个电影吗？", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("看过", "kan guo", "kàn guo", "phrase", "đã xem"),
          word("那个电影", "na ge dianying", "nà ge diàn yǐng", "noun", "bộ phim đó"),
          word("吗", "ma", "ma", "particle", "chưa"),
        ], s14),
        item("sentence", "Tôi chưa từng đi rạp chiếu phim này.", "我没去过这个电影院。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("没去过", "mei qu guo", "méi qù guo", "phrase", "chưa từng đi"),
          word("这个电影院", "zhe ge dianyingyuan", "zhè ge diàn yǐng yuàn", "noun", "rạp chiếu phim này"),
        ], s14),
        item("sentence", "Nếu trời nắng, chúng ta ra ngoài chơi nhé.", "明天天晴的话，我们出去玩儿吧。", [
          word("明天", "mingtian", "míng tiān", "noun", "ngày mai"),
          word("晴", "qing", "qíng", "adj", "trời nắng"),
          word("的话", "de hua", "de hua", "particle", "nếu"),
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("出去玩儿", "chuqu wanr", "chū qù wánr", "phrase", "ra ngoài chơi"),
          word("吧", "ba", "ba", "particle", "nhé"),
        ], s14),
        item("sentence", "Tôi mua hai tấm vé, rồi gọi điện cho bạn.", "我买了两张票，然后给你打电话。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("买了两张票", "mai le liang zhang piao", "mǎi le liǎng zhāng piào", "phrase", "mua hai tấm vé"),
          word("然后", "ranhou", "rán hòu", "adv", "sau đó"),
          word("给你打电话", "gei ni dadianhua", "gěi nǐ dǎ diàn huà", "phrase", "gọi điện cho bạn"),
        ], s14),

        item("mixed", "Tôi đã đợi bạn ở rạp chiếu phim hơn một tiếng rồi.", "我在电影院等了你一个多小时。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("在电影院", "zai dianyingyuan", "zài diàn yǐng yuàn", "phrase", "ở rạp chiếu phim"),
          word("等了你", "deng le ni", "děng le nǐ", "phrase", "đợi bạn"),
          word("一个多小时", "yi ge duo xiaoshi", "yí ge duō xiǎo shí", "noun", "hơn một tiếng"),
        ], s14),
        item("mixed", "Em bé đó đang chơi, còn bố em ấy đang gọi điện thoại.", "那个孩子在玩儿，他爸爸在打电话。", [
          word("那个孩子", "na ge haizi", "nà ge hái zi", "noun", "em bé đó"),
          word("在玩儿", "zai wanr", "zài wánr", "phrase", "đang chơi"),
          word("他爸爸", "ta baba", "tā bà ba", "noun", "bố em ấy"),
          word("在打电话", "zai dadianhua", "zài dǎ diàn huà", "phrase", "đang gọi điện thoại"),
        ], s14),
      ]),

      lesson("hsk2-l15", 15, "新年就要到了", "Năm mới sắp đến rồi.", [
        item("word", "năm mới", "新年", [word("新年", "xinnian", "xīn nián", "noun", "năm mới")], s15),
        item("word", "vé, phiếu", "票", [word("票", "piao", "piào", "noun", "vé, phiếu")], s15),
        item("word", "du lịch", "旅游", [word("旅游", "lvyou", "lǚ yóu", "verb", "du lịch")], s15),
        item("word", "giúp đỡ", "帮助", [word("帮助", "bangzhu", "bāng zhù", "verb", "giúp đỡ")], s15),
        item("word", "âm u", "阴", [word("阴", "yin", "yīn", "adj", "âm u")], s15),
        item("word", "ga tàu", "火车站", [word("火车站", "huochezhan", "huǒ chē zhàn", "noun", "ga tàu")], s15),
        item("word", "sắp", "就要", [word("就要", "jiuyao", "jiù yào", "adv", "sắp")], s15),
        item("word", "đến", "到", [word("到", "dao", "dào", "verb", "đến")], s15),
        item("word", "xe buýt", "公共汽车", [word("公共汽车", "gonggong qiche", "gōng gòng qì chē", "noun", "xe buýt")], s15),
        item("word", "xe đạp", "自行车", [word("自行车", "zixingche", "zì xíng chē", "noun", "xe đạp")], s15),

        item("phrase", "năm mới sắp đến", "新年就要到了", [
          word("新年", "xinnian", "xīn nián", "noun", "năm mới"),
          word("就要", "jiuyao", "jiù yào", "adv", "sắp"),
          word("到了", "dao le", "dào le", "verb", "đến rồi"),
        ], s15),
        item("phrase", "đi du lịch", "去旅游", [
          word("去", "qu", "qù", "verb", "đi"),
          word("旅游", "lvyou", "lǚ yóu", "verb", "du lịch"),
        ], s15),
        item("phrase", "mua vé tàu", "买火车票", [
          word("买", "mai", "mǎi", "verb", "mua"),
          word("火车票", "huoche piao", "huǒ chē piào", "noun", "vé tàu"),
        ], s15),
        item("phrase", "đến ga tàu", "到火车站", [
          word("到", "dao", "dào", "verb", "đến"),
          word("火车站", "huochezhan", "huǒ chē zhàn", "noun", "ga tàu"),
        ], s15),

        item("sentence", "Năm mới sắp đến rồi.", "新年就要到了。", [
          word("新年", "xinnian", "xīn nián", "noun", "năm mới"),
          word("就要", "jiuyao", "jiù yào", "adv", "sắp"),
          word("到了", "dao le", "dào le", "verb", "đến rồi"),
        ], s15),
        item("sentence", "Năm nay chúng tôi muốn đi du lịch cùng nhau.", "今年我们想一起去旅游。", [
          word("今年", "jinnian", "jīn nián", "noun", "năm nay"),
          word("我们", "women", "wǒ men", "pron", "chúng tôi"),
          word("想", "xiang", "xiǎng", "verb", "muốn"),
          word("一起", "yiqi", "yì qǐ", "adv", "cùng nhau"),
          word("去旅游", "qu lvyou", "qù lǚ yóu", "phrase", "đi du lịch"),
        ], s15),
        item("sentence", "Tôi đang ở ga tàu đợi bạn, trời hôm nay hơi âm u.", "我在火车站等你，今天天有点儿阴。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("在火车站", "zai huochezhan", "zài huǒ chē zhàn", "phrase", "ở ga tàu"),
          word("等你", "deng ni", "děng nǐ", "phrase", "đợi bạn"),
          word("今天", "jintian", "jīn tiān", "noun", "hôm nay"),
          word("有点儿阴", "you dianr yin", "yǒu diǎnr yīn", "adj", "hơi âm u"),
        ], s15),
        item("sentence", "Cảm ơn bạn đã giúp tôi mua vé.", "谢谢你帮助我买票。", [
          word("谢谢你", "xiexie ni", "xiè xie nǐ", "phrase", "cảm ơn bạn"),
          word("帮助", "bangzhu", "bāng zhù", "verb", "giúp"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("买票", "mai piao", "mǎi piào", "phrase", "mua vé"),
        ], s15),

        item("mixed", "Tôi đi ga tàu bằng xe buýt, còn anh ấy đi xe đạp.", "我坐公共汽车去火车站，他骑自行车去。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("坐公共汽车", "zuo gonggong qiche", "zuò gōng gòng qì chē", "phrase", "đi bằng xe buýt"),
          word("去火车站", "qu huochezhan", "qù huǒ chē zhàn", "phrase", "đi ga tàu"),
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("骑自行车去", "qi zixingche qu", "qí zì xíng chē qù", "phrase", "đi bằng xe đạp"),
        ], s15),
        item("mixed", "Nếu ngày mai không mưa, chúng ta sẽ ra ngoài chơi đón năm mới.", "要是明天不下雨，我们就出去玩儿过新年。", [
          word("要是", "yaoshi", "yào shì", "particle", "nếu"),
          word("明天不下雨", "mingtian bu xiayu", "míng tiān bù xià yǔ", "phrase", "ngày mai không mưa"),
          word("我们", "women", "wǒ men", "pron", "chúng ta"),
          word("就", "jiu", "jiù", "adv", "thì sẽ"),
          word("出去玩儿", "chuqu wanr", "chū qù wánr", "phrase", "ra ngoài chơi"),
          word("过新年", "guo xinnian", "guò xīn nián", "phrase", "đón năm mới"),
        ], s15),
      ]),
    ],
  };
});
