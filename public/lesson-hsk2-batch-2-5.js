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

  const s2 = "HSK Standard Course 2 - Lesson 2";
  const s3 = "HSK Standard Course 2 - Lesson 3";
  const s4 = "HSK Standard Course 2 - Lesson 4";
  const s5 = "HSK Standard Course 2 - Lesson 5";

  return {
    level: "HSK2",
    lessons: [
      lesson("hsk2-l2", 2, "我每天六点起床", "Tôi mỗi ngày dậy lúc sáu giờ", [
        item("word", "bị ốm", "生病", [word("生病", "shengbing", "shēngbìng", "verb", "bị ốm")], s2),
        item("word", "mỗi, mỗi một", "每", [word("每", "mei", "měi", "pron", "mỗi, mỗi một")], s2),
        item("word", "buổi sáng", "早上", [word("早上", "zaoshang", "zǎoshang", "noun", "buổi sáng")], s2),
        item("word", "chạy bộ", "跑步", [word("跑步", "paobu", "pǎobù", "verb", "chạy bộ")], s2),
        item("word", "thức dậy", "起床", [word("起床", "qichuang", "qǐchuáng", "verb", "thức dậy")], s2),
        item("word", "thuốc", "药", [word("药", "yao", "yào", "noun", "thuốc")], s2),
        item("word", "cơ thể, sức khỏe", "身体", [word("身体", "shenti", "shēntǐ", "noun", "cơ thể, sức khỏe")], s2),
        item("word", "xuất viện", "出院", [word("出院", "chuyuan", "chūyuàn", "verb", "xuất viện")], s2),
        item("word", "nghỉ ngơi", "休息", [word("休息", "xiuxi", "xiūxi", "verb", "nghỉ ngơi")], s2),
        item("word", "thời gian, lúc", "时间", [word("时间", "shijian", "shíjiān", "noun", "thời gian, lúc")], s2),

        item("phrase", "mỗi sáng", "每天早上", [
          word("每天", "meitian", "měitiān", "phrase", "mỗi ngày"),
          word("早上", "zaoshang", "zǎoshang", "noun", "buổi sáng"),
        ], s2),
        item("phrase", "dậy lúc sáu giờ", "六点起床", [
          word("六点", "liu dian", "liù diǎn", "phrase", "sáu giờ"),
          word("起床", "qichuang", "qǐchuáng", "verb", "thức dậy"),
        ], s2),
        item("phrase", "uống thuốc rồi", "吃药了", [
          word("吃药", "chi yao", "chī yào", "phrase", "uống thuốc"),
          word("了", "le", "le", "particle", "rồi"),
        ], s2),
        item("phrase", "đỡ nhiều rồi", "好多了", [
          word("好", "hao", "hǎo", "adj", "khỏe, tốt"),
          word("多了", "duo le", "duō le", "phrase", "nhiều hơn rồi"),
        ], s2),

        item("sentence", "Bạn ít khi bị ốm, có phải là thích vận động không?", "你很少生病，是不是喜欢运动？", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("很少", "henshao", "hěnshǎo", "adv", "rất ít khi"),
          word("生病", "shengbing", "shēngbìng", "verb", "bị ốm"),
          word("是不是", "shi bu shi", "shì bu shì", "phrase", "có phải là ... không"),
          word("喜欢运动", "xihuan yundong", "xǐhuan yùndòng", "phrase", "thích vận động"),
        ], s2),
        item("sentence", "Tôi mỗi sáng đều ra ngoài chạy bộ.", "我每天早上都要出去跑步。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("每天早上", "meitian zaoshang", "měitiān zǎoshang", "phrase", "mỗi sáng"),
          word("都要", "dou yao", "dōu yào", "phrase", "đều phải"),
          word("出去跑步", "chuqu paobu", "chūqù pǎobù", "phrase", "ra ngoài chạy bộ"),
        ], s2),
        item("sentence", "Bạn mỗi ngày mấy giờ thức dậy?", "你每天几点起床？", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("每天", "meitian", "měitiān", "phrase", "mỗi ngày"),
          word("几点", "ji dian", "jǐ diǎn", "phrase", "mấy giờ"),
          word("起床", "qichuang", "qǐchuáng", "verb", "thức dậy"),
        ], s2),
        item("sentence", "Bác sĩ nói tuần sau xuất viện.", "医生说下个星期出院。", [
          word("医生", "yisheng", "yīshēng", "noun", "bác sĩ"),
          word("说", "shuo", "shuō", "verb", "nói"),
          word("下个星期", "xia ge xingqi", "xià ge xīngqī", "phrase", "tuần sau"),
          word("出院", "chuyuan", "chūyuàn", "verb", "xuất viện"),
        ], s2),

        item("mixed", "Bây giờ sức khỏe thế nào?", "现在身体怎么样？", [
          word("现在", "xianzai", "xiànzài", "noun", "bây giờ"),
          word("身体", "shenti", "shēntǐ", "noun", "sức khỏe"),
          word("怎么样", "zenmeyang", "zěnmeyàng", "phrase", "thế nào"),
        ], s2),
        item("mixed", "Uống thuốc xong thì nghỉ ngơi một chút đi.", "吃了药以后休息一下吧。", [
          word("吃了药以后", "chi le yao yihou", "chī le yào yǐhòu", "phrase", "sau khi uống thuốc"),
          word("休息", "xiuxi", "xiūxi", "verb", "nghỉ ngơi"),
          word("一下吧", "yixia ba", "yíxià ba", "phrase", "một chút nhé"),
        ], s2),
      ]),

      lesson("hsk2-l3", 3, "左边那个红色的是我的", "Cái màu đỏ ở bên trái là của tôi", [
        item("word", "đồng hồ đeo tay", "手表", [word("手表", "shoubiao", "shǒubiǎo", "noun", "đồng hồ đeo tay")], s3),
        item("word", "nghìn", "千", [word("千", "qian", "qiān", "num", "nghìn")], s3),
        item("word", "báo", "报纸", [word("报纸", "baozhi", "bàozhǐ", "noun", "báo")], s3),
        item("word", "giao, đưa tới", "送", [word("送", "song", "sòng", "verb", "giao, đưa tới")], s3),
        item("word", "một chút, thử một chút", "一下", [word("一下", "yixia", "yíxià", "measure", "một chút, thử một chút")], s3),
        item("word", "sữa", "牛奶", [word("牛奶", "niunai", "niúnǎi", "noun", "sữa")], s3),
        item("word", "phòng", "房间", [word("房间", "fangjian", "fángjiān", "noun", "phòng")], s3),
        item("word", "chồng", "丈夫", [word("丈夫", "zhangfu", "zhàngfu", "noun", "chồng")], s3),
        item("word", "bên cạnh", "旁边", [word("旁边", "pangbian", "pángbiān", "noun", "bên cạnh")], s3),
        item("word", "màu đỏ", "红色", [word("红色", "hongse", "hóngsè", "noun", "màu đỏ")], s3),

        item("phrase", "cái màu đỏ ở bên trái", "左边那个红色的", [
          word("左边", "zuobian", "zuǒbiān", "noun", "bên trái"),
          word("那个", "na ge", "nà ge", "pron", "cái đó"),
          word("红色的", "hongse de", "hóngsè de", "phrase", "màu đỏ"),
        ], s3),
        item("phrase", "hơn ba nghìn tệ", "三千多块", [
          word("三千", "san qian", "sān qiān", "num", "ba nghìn"),
          word("多块", "duo kuai", "duō kuài", "phrase", "hơn ... tệ"),
        ], s3),
        item("phrase", "người giao báo", "送报纸的", [
          word("送", "song", "sòng", "verb", "giao"),
          word("报纸", "baozhi", "bàozhǐ", "noun", "báo"),
          word("的", "de", "de", "particle", "người / cái mà"),
        ], s3),
        item("phrase", "ở bên cạnh cái bàn", "桌子旁边", [
          word("桌子", "zhuozi", "zhuōzi", "noun", "cái bàn"),
          word("旁边", "pangbian", "pángbiān", "noun", "bên cạnh"),
        ], s3),

        item("sentence", "Cái đồng hồ này là của bạn à?", "这块手表是你的吗？", [
          word("这块手表", "zhe kuai shoubiao", "zhè kuài shǒubiǎo", "phrase", "chiếc đồng hồ này"),
          word("是你的吗", "shi ni de ma", "shì nǐ de ma", "phrase", "là của bạn à"),
        ], s3),
        item("sentence", "Không phải của tôi, là của bố tôi.", "不是我的，是我爸爸的。", [
          word("不是我的", "bu shi wo de", "bú shì wǒ de", "phrase", "không phải của tôi"),
          word("是我爸爸的", "shi wo baba de", "shì wǒ bàba de", "phrase", "là của bố tôi"),
        ], s3),
        item("sentence", "Đây có phải tờ báo sáng nay không?", "这是今天早上的报纸吗？", [
          word("这是", "zhe shi", "zhè shì", "phrase", "đây là"),
          word("今天早上", "jintian zaoshang", "jīntiān zǎoshang", "phrase", "sáng nay"),
          word("的报纸吗", "de baozhi ma", "de bàozhǐ ma", "phrase", "là tờ báo ... à"),
        ], s3),
        item("sentence", "Không phải, là người giao sữa.", "不是，是送牛奶的。", [
          word("不是", "bu shi", "bú shì", "adv", "không phải"),
          word("是", "shi", "shì", "verb", "là"),
          word("送牛奶的", "song niunai de", "sòng niúnǎi de", "phrase", "người giao sữa"),
        ], s3),

        item("mixed", "Cho tôi xem thử một chút nhé.", "我看一下。", [
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("看一下", "kan yixia", "kàn yíxià", "phrase", "xem thử một chút"),
        ], s3),
        item("mixed", "Phòng của tôi ở bên cạnh phòng màu đỏ.", "我的房间在红色房间旁边。", [
          word("我的房间", "wo de fangjian", "wǒ de fángjiān", "phrase", "phòng của tôi"),
          word("在", "zai", "zài", "prep", "ở"),
          word("红色房间旁边", "hongse fangjian pangbian", "hóngsè fángjiān pángbiān", "phrase", "bên cạnh phòng màu đỏ"),
        ], s3),
      ]),

      lesson("hsk2-l4", 4, "这个工作是他帮我介绍的", "Công việc này là do anh ấy giới thiệu cho tôi", [
        item("word", "sinh nhật", "生日", [word("生日", "shengri", "shēngrì", "noun", "sinh nhật")], s4),
        item("word", "vui, vui vẻ", "快乐", [word("快乐", "kuaile", "kuàilè", "adj", "vui, vui vẻ")], s4),
        item("word", "cho, tặng cho", "给", [word("给", "gei", "gěi", "prep", "cho, tặng cho")], s4),
        item("word", "buổi tối", "晚上", [word("晚上", "wanshang", "wǎnshang", "noun", "buổi tối")], s4),
        item("word", "hỏi", "问", [word("问", "wen", "wèn", "verb", "hỏi")], s4),
        item("word", "rất, vô cùng", "非常", [word("非常", "feichang", "fēicháng", "adv", "rất, vô cùng")], s4),
        item("word", "bắt đầu", "开始", [word("开始", "kaishi", "kāishǐ", "verb", "bắt đầu")], s4),
        item("word", "đã", "已经", [word("已经", "yijing", "yǐjīng", "adv", "đã")], s4),
        item("word", "dài, lớn lên", "长", [word("长", "zhang", "zhǎng", "verb", "dài, lớn lên")], s4),
        item("word", "giới thiệu", "介绍", [word("介绍", "jieshao", "jièshào", "verb", "giới thiệu")], s4),

        item("phrase", "chúc mừng sinh nhật", "生日快乐", [
          word("生日", "shengri", "shēngrì", "noun", "sinh nhật"),
          word("快乐", "kuaile", "kuàilè", "adj", "vui vẻ"),
        ], s4),
        item("phrase", "tặng cho bạn", "送给你", [
          word("送", "song", "sòng", "verb", "tặng"),
          word("给你", "gei ni", "gěi nǐ", "phrase", "cho bạn"),
        ], s4),
        item("phrase", "đã bắt đầu rồi", "已经开始了", [
          word("已经", "yijing", "yǐjīng", "adv", "đã"),
          word("开始了", "kaishi le", "kāishǐ le", "phrase", "bắt đầu rồi"),
        ], s4),
        item("phrase", "anh ấy giúp tôi giới thiệu", "帮我介绍", [
          word("帮", "bang", "bāng", "verb", "giúp"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("介绍", "jieshao", "jièshào", "verb", "giới thiệu"),
        ], s4),

        item("sentence", "Chúc mừng sinh nhật! Đây là quà tặng cho bạn.", "生日快乐！这是送给你的！", [
          word("生日快乐", "shengri kuaile", "shēngrì kuàilè", "phrase", "chúc mừng sinh nhật"),
          word("这是", "zhe shi", "zhè shì", "phrase", "đây là"),
          word("送给你的", "song gei ni de", "sòng gěi nǐ de", "phrase", "tặng cho bạn"),
        ], s4),
        item("sentence", "Đúng rồi, quyển sách này là do tôi viết.", "对，这本书是我写的。", [
          word("对", "dui", "duì", "adv", "đúng rồi"),
          word("这本书", "zhe ben shu", "zhè běn shū", "phrase", "quyển sách này"),
          word("是我写的", "shi wo xie de", "shì wǒ xiě de", "phrase", "là do tôi viết"),
        ], s4),
        item("sentence", "Sáng nay có một cuộc điện thoại gọi cho bạn.", "早上有你一个电话。", [
          word("早上", "zaoshang", "zǎoshang", "noun", "buổi sáng"),
          word("有", "you", "yǒu", "verb", "có"),
          word("你一个电话", "ni yi ge dianhua", "nǐ yí ge diànhuà", "phrase", "một cuộc điện thoại cho bạn"),
        ], s4),
        item("sentence", "Tối nay tôi hỏi con trai một chút.", "晚上我问一下儿子。", [
          word("晚上", "wanshang", "wǎnshang", "noun", "buổi tối"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("问一下", "wen yixia", "wèn yíxià", "phrase", "hỏi một chút"),
          word("儿子", "erzi", "érzi", "noun", "con trai"),
        ], s4),

        item("mixed", "Công việc này là do anh ấy giới thiệu cho tôi.", "这个工作是他帮我介绍的。", [
          word("这个工作", "zhe ge gongzuo", "zhè ge gōngzuò", "phrase", "công việc này"),
          word("是", "shi", "shì", "verb", "là"),
          word("他帮我介绍的", "ta bang wo jieshao de", "tā bāng wǒ jièshào de", "phrase", "do anh ấy giới thiệu cho tôi"),
        ], s4),
        item("mixed", "Anh ấy đã bắt đầu làm việc rồi.", "他已经开始工作了。", [
          word("他", "ta", "tā", "pron", "anh ấy"),
          word("已经", "yijing", "yǐjīng", "adv", "đã"),
          word("开始工作了", "kaishi gongzuo le", "kāishǐ gōngzuò le", "phrase", "bắt đầu làm việc rồi"),
        ], s4),
      ]),

      lesson("hsk2-l5", 5, "就买这件吧", "Cứ mua chiếc này đi", [
        item("word", "bên ngoài", "外面", [word("外面", "waimian", "wàimiàn", "noun", "bên ngoài")], s5),
        item("word", "chuẩn bị", "准备", [word("准备", "zhunbei", "zhǔnbèi", "verb", "chuẩn bị")], s5),
        item("word", "thì, cứ", "就", [word("就", "jiu", "jiù", "adv", "thì, cứ")], s5),
        item("word", "cá", "鱼", [word("鱼", "yu", "yú", "noun", "cá")], s5),
        item("word", "nhé, đi", "吧", [word("吧", "ba", "ba", "particle", "nhé, đi")], s5),
        item("word", "chiếc, món (quần áo)", "件", [word("件", "jian", "jiàn", "measure", "chiếc, món quần áo")], s5),
        item("word", "còn, vẫn", "还", [word("还", "hai", "hái", "adv", "còn, vẫn")], s5),
        item("word", "có thể", "可以", [word("可以", "keyi", "kěyǐ", "verb", "có thể")], s5),
        item("word", "không tệ", "不错", [word("不错", "bucuo", "búcuò", "adj", "không tệ")], s5),
        item("word", "cà phê", "咖啡", [word("咖啡", "kafei", "kāfēi", "noun", "cà phê")], s5),

        item("phrase", "cứ mua chiếc này đi", "就买这件吧", [
          word("就", "jiu", "jiù", "adv", "cứ"),
          word("买", "mai", "mǎi", "verb", "mua"),
          word("这件", "zhe jian", "zhè jiàn", "phrase", "chiếc này"),
          word("吧", "ba", "ba", "particle", "đi"),
        ], s5),
        item("phrase", "uống cà phê", "喝咖啡", [
          word("喝", "he", "hē", "verb", "uống"),
          word("咖啡", "kafei", "kāfēi", "noun", "cà phê"),
        ], s5),
        item("phrase", "ở ngoài ăn cơm", "在外面吃饭", [
          word("在外面", "zai waimian", "zài wàimiàn", "phrase", "ở ngoài"),
          word("吃饭", "chi fan", "chī fàn", "phrase", "ăn cơm"),
        ], s5),
        item("phrase", "vẫn có thể", "还可以", [
          word("还", "hai", "hái", "adv", "vẫn"),
          word("可以", "keyi", "kěyǐ", "verb", "có thể"),
        ], s5),

        item("sentence", "Chiếc này thế nào?", "这件怎么样？", [
          word("这件", "zhe jian", "zhè jiàn", "phrase", "chiếc này"),
          word("怎么样", "zenmeyang", "zěnmeyàng", "phrase", "thế nào"),
        ], s5),
        item("sentence", "Chiếc này không tệ, cứ mua chiếc này đi.", "这件不错，就买这件吧。", [
          word("这件", "zhe jian", "zhè jiàn", "phrase", "chiếc này"),
          word("不错", "bucuo", "búcuò", "adj", "không tệ"),
          word("就买这件吧", "jiu mai zhe jian ba", "jiù mǎi zhè jiàn ba", "phrase", "cứ mua chiếc này đi"),
        ], s5),
        item("sentence", "Bạn chuẩn bị khi nào thi?", "你准备什么时候考试？", [
          word("你", "ni", "nǐ", "pron", "bạn"),
          word("准备", "zhunbei", "zhǔnbèi", "verb", "chuẩn bị"),
          word("什么时候", "shenme shihou", "shénme shíhou", "phrase", "khi nào"),
          word("考试", "kaoshi", "kǎoshì", "verb", "thi"),
        ], s5),
        item("sentence", "Chúng ta vào quán cà phê uống cà phê nhé.", "我们在咖啡馆喝咖啡吧。", [
          word("我们", "women", "wǒmen", "pron", "chúng tôi"),
          word("在咖啡馆", "zai kafeiguan", "zài kāfēiguǎn", "phrase", "ở quán cà phê"),
          word("喝咖啡吧", "he kafei ba", "hē kāfēi ba", "phrase", "uống cà phê nhé"),
        ], s5),

        item("mixed", "Sau này tôi vẫn có thể quay lại.", "以后我还可以再来。", [
          word("以后", "yihou", "yǐhòu", "noun", "sau này"),
          word("我", "wo", "wǒ", "pron", "tôi"),
          word("还可以", "hai keyi", "hái kěyǐ", "phrase", "vẫn có thể"),
          word("再来", "zai lai", "zài lái", "verb", "quay lại"),
        ], s5),
        item("mixed", "Con cá này có thể ăn ở ngoài được không?", "这条鱼可以在外面吃吗？", [
          word("这条鱼", "zhe tiao yu", "zhè tiáo yú", "phrase", "con cá này"),
          word("可以", "keyi", "kěyǐ", "verb", "có thể"),
          word("在外面吃吗", "zai waimian chi ma", "zài wàimiàn chī ma", "phrase", "ăn ở ngoài được không"),
        ], s5),
      ]),
    ],
  };
});
