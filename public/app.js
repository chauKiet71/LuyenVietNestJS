const VIETNAMESE_QA_HOOK =
  "HOOK: Vietnamese UI, prompts, and explanations must be natural, accurate, and idiomatic for Vietnamese learners.";

const i18n = {
  vi: {
    brandSubtitle: "Dành cho người Việt học tiếng Trung",
    review: "Ôn câu sai",
    lang: "中文",
    dashboard: "Bảng học hôm nay",
    todayGoal: "Mục tiêu hôm nay",
    goalText: "Hoàn thành 1 bài học hoặc 1 chủ đề.",
    saved: "Từ đã lưu",
    wrong: "Câu sai",
    streak: "Ngày học",
    xp: "Điểm luyện tập",
    choose: "Chọn lộ trình học",
    chooseSub: "Học theo giáo trình HSK hoặc luyện các chủ đề giao tiếp thường dùng.",
    hskTitle: "Khóa HSK",
    hskSub: "HSK2 đến HSK5, học theo từng bài trong giáo trình.",
    dailyTitle: "Tiếng Trung thông dụng",
    dailySub: "Tình huống học tập, công việc và đời sống hằng ngày.",
    enter: "Vào học",
    continue: "Tiếp tục",
    path: "Lộ trình",
    hskCourse: "Chọn cấp độ và bài học HSK",
    dailyCourse: "Chọn chủ đề tiếng Trung thông dụng",
    lesson: "Bài",
    translate: "Việt → Trung",
    dictation: "Nghe viết",
    stageWord: "Từ mới",
    stagePhrase: "Cụm từ",
    stageSentence: "Câu",
    stageMixed: "Ôn tập",
    play: "Nghe",
    slow: "Nghe chậm",
    showAnswer: "Đáp án",
    next: "Tiếp",
    mastered: "Đã thuộc",
    favorite: "Lưu",
    translateHint: "Nhìn tiếng Việt, gõ pinyin hoặc chữ Hán.",
    dictationHint: "Nghe tiếng Trung, gõ pinyin hoặc chữ Hán.",
    inputPlaceholder: "Gõ pinyin hoặc chữ Hán",
    good: "Đúng rồi. Tiếp tục nào.",
    continuePrompt: "Nhấn Enter hoặc Space để sang câu tiếp theo",
    bad: "Chưa đúng. Nghe lại tiếng Trung rồi thử tiếp.",
    done: "Hoàn thành!",
    completeTitle: "Bài học hoàn thành",
    completeSub: "Bạn đã hoàn thành mục tiêu hôm nay.",
    backHome: "Về trang chính",
    nextLesson: "Bài tiếp theo",
    teacherPreview: "Bản xem trước cho giáo viên",
    answerTitle: "Nội dung cần nhớ",
    modeLabel: "Chế độ luyện tập",
    topicCount: "chủ đề",
    itemCount: "mục luyện",
  },
  zh: {
    brandSubtitle: "给越南学生使用的中文练习",
    review: "错题复习",
    lang: "VI",
    dashboard: "今日学习面板",
    todayGoal: "今日学习目标",
    goalText: "完成 1 个 lesson 或 1 个主题。",
    saved: "生词收藏",
    wrong: "错题",
    streak: "连续学习",
    xp: "练习积分",
    choose: "选择学习路径",
    chooseSub: "按 HSK 教材学习，或练习高频生活/职场中文。",
    hskTitle: "HSK课程",
    hskSub: "HSK2 到 HSK5，按教材第几课排列。",
    dailyTitle: "高频汉语",
    dailySub: "学习、工作和生活场景里的常用中文。",
    enter: "进入",
    continue: "继续",
    path: "学习路径",
    hskCourse: "选择HSK等级和课程章节",
    dailyCourse: "选择高频汉语主题",
    lesson: "第",
    translate: "越译中",
    dictation: "听写",
    stageWord: "生词",
    stagePhrase: "短语",
    stageSentence: "句子",
    stageMixed: "混合复习",
    play: "播放",
    slow: "慢速",
    showAnswer: "答案",
    next: "下一题",
    mastered: "掌握",
    favorite: "收藏",
    translateHint: "看越南语提示，输入拼音或汉字。",
    dictationHint: "听中文语音，输入拼音或汉字。",
    inputPlaceholder: "输入拼音或汉字",
    good: "正确，继续。",
    continuePrompt: "按 Enter / 空格继续",
    bad: "还不对，听一下再试。",
    done: "完成！",
    completeTitle: "Lesson 完成",
    completeSub: "今日目标已完成。",
    backHome: "返回首页",
    nextLesson: "下一课",
    teacherPreview: "老师中文预览",
    answerTitle: "记忆内容",
    modeLabel: "练习模式",
    topicCount: "个主题",
    itemCount: "个练习",
  },
};

const posText = {
  vi: {
    pron: "đại từ",
    noun: "danh từ",
    verb: "động từ",
    adj: "tính từ",
    adv: "phó từ",
    phrase: "cụm từ",
    grammar: "ngữ pháp",
  },
  zh: {
    pron: "代词",
    noun: "名词",
    verb: "动词",
    adj: "形容词",
    adv: "副词",
    phrase: "短语",
    grammar: "语法",
  },
};

const stageKey = {
  word: "stageWord",
  phrase: "stagePhrase",
  sentence: "stageSentence",
  mixed: "stageMixed",
};

function w(text, pinyin, tone, pos, vi) {
  return { text, pinyin, tone, pos, vi };
}

function item(stage, vi, hanzi, words, source = "sample") {
  return {
    stage,
    vi,
    hanzi,
    words,
    source,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function lesson(id, no, title, items) {
  return { id, no, title, items };
}

const hskLevels = {
  HSK2: [
    lesson("hsk2-l1", 1, "认识你很高兴", [
      item("word", "xin chào", "你好", [w("你好", "ni hao", "nǐ hǎo", "phrase", "xin chào")]),
      item("word", "bạn", "你", [w("你", "ni", "nǐ", "pron", "bạn")]),
      item("word", "tôi", "我", [w("我", "wo", "wǒ", "pron", "tôi")]),
      item("word", "quen biết", "认识", [w("认识", "renshi", "rènshi", "verb", "quen biết")]),
      item("phrase", "rất vui", "很高兴", [w("很", "hen", "hěn", "adv", "rất"), w("高兴", "gaoxing", "gāoxìng", "adj", "vui")]),
      item("sentence", "Rất vui được gặp bạn.", "认识你很高兴。", [
        w("认识", "renshi", "rènshi", "verb", "quen biết"),
        w("你", "ni", "nǐ", "pron", "bạn"),
        w("很高兴", "hen gaoxing", "hěn gāoxìng", "phrase", "rất vui"),
      ]),
      item("mixed", "Tôi rất vui.", "我很高兴。", [w("我", "wo", "wǒ", "pron", "tôi"), w("很高兴", "hen gaoxing", "hěn gāoxìng", "phrase", "rất vui")]),
    ]),
    lesson("hsk2-l2", 2, "今天几号", [
      item("word", "hôm nay", "今天", [w("今天", "jintian", "jīntiān", "noun", "hôm nay")]),
      item("phrase", "mấy giờ", "几点", [w("几", "ji", "jǐ", "pron", "mấy"), w("点", "dian", "diǎn", "noun", "giờ")]),
      item("sentence", "Bây giờ là mấy giờ?", "现在几点？", [w("现在", "xianzai", "xiànzài", "noun", "bây giờ"), w("几点", "ji dian", "jǐ diǎn", "phrase", "mấy giờ")]),
    ]),
    lesson("hsk2-l3", 3, "我想学中文", [
      item("word", "học", "学", [w("学", "xue", "xué", "verb", "học")]),
      item("phrase", "học tiếng Trung", "学中文", [w("学", "xue", "xué", "verb", "học"), w("中文", "zhongwen", "Zhōngwén", "noun", "tiếng Trung")]),
      item("sentence", "Tôi muốn học tiếng Trung.", "我想学中文。", [w("我", "wo", "wǒ", "pron", "tôi"), w("想", "xiang", "xiǎng", "verb", "muốn"), w("学中文", "xue zhongwen", "xué Zhōngwén", "phrase", "học tiếng Trung")]),
    ]),
  ],
  HSK3: [
    lesson("hsk3-l1", 1, "周末你有什么打算", [
      item("word", "cuối tuần", "周末", [w("周末", "zhoumo", "zhōumò", "noun", "cuối tuần")]),
      item("phrase", "có dự định", "有打算", [w("有", "you", "yǒu", "verb", "có"), w("打算", "dasuan", "dǎsuàn", "noun", "dự định")]),
      item("sentence", "Cuối tuần bạn có dự định gì?", "周末你有什么打算？", [w("周末", "zhoumo", "zhōumò", "noun", "cuối tuần"), w("你", "ni", "nǐ", "pron", "bạn"), w("有什么打算", "you shenme dasuan", "yǒu shénme dǎsuàn", "phrase", "có dự định gì")]),
    ]),
    lesson("hsk3-l2", 2, "他什么时候回来", [
      item("word", "trở về", "回来", [w("回来", "huilai", "huílái", "verb", "trở về")]),
      item("sentence", "Khi nào anh ấy trở về?", "他什么时候回来？", [w("他", "ta", "tā", "pron", "anh ấy"), w("什么时候", "shenme shihou", "shénme shíhou", "phrase", "khi nào"), w("回来", "huilai", "huílái", "verb", "trở về")]),
    ]),
  ],
  HSK4: [
    lesson("hsk4-l1", 1, "简单的爱情", [
      item("word", "đơn giản", "简单", [w("简单", "jiandan", "jiǎndān", "adj", "đơn giản")]),
      item("sentence", "Tình yêu không đơn giản.", "爱情不简单。", [w("爱情", "aiqing", "àiqíng", "noun", "tình yêu"), w("不", "bu", "bù", "adv", "không"), w("简单", "jiandan", "jiǎndān", "adj", "đơn giản")]),
    ]),
    lesson("hsk4-l2", 2, "真正的朋友", [
      item("word", "thật sự", "真正", [w("真正", "zhenzheng", "zhēnzhèng", "adj", "thật sự")]),
      item("sentence", "Bạn thật sự là bạn của tôi.", "你是真正的朋友。", [w("你", "ni", "nǐ", "pron", "bạn"), w("真正的朋友", "zhenzheng de pengyou", "zhēnzhèng de péngyou", "phrase", "người bạn thật sự")]),
    ]),
  ],
  HSK5: [
    lesson("hsk5-l1", 1, "人生有选择", [
      item("word", "lựa chọn", "选择", [w("选择", "xuanze", "xuǎnzé", "verb", "lựa chọn")]),
      item("sentence", "Trong cuộc sống luôn có lựa chọn.", "人生总有选择。", [w("人生", "rensheng", "rénshēng", "noun", "cuộc sống"), w("总有", "zong you", "zǒng yǒu", "phrase", "luôn có"), w("选择", "xuanze", "xuǎnzé", "noun", "lựa chọn")]),
    ]),
    lesson("hsk5-l2", 2, "工作效率", [
      item("word", "hiệu suất", "效率", [w("效率", "xiaolv", "xiàolǜ", "noun", "hiệu suất")]),
      item("sentence", "Chúng ta cần nâng cao hiệu suất làm việc.", "我们需要提高工作效率。", [w("我们", "women", "wǒmen", "pron", "chúng ta"), w("需要", "xuyao", "xūyào", "verb", "cần"), w("提高", "tigao", "tígāo", "verb", "nâng cao"), w("工作效率", "gongzuo xiaolv", "gōngzuò xiàolǜ", "phrase", "hiệu suất làm việc")]),
    ]),
  ],
};

if (globalThis.lessonContent) {
  Object.entries(globalThis.lessonContent).forEach(([levelKey, lessonMap]) => {
    if (!hskLevels[levelKey]) return;
    Object.entries(lessonMap).forEach(([lessonId, lessonValue]) => {
      const lessonIndex = hskLevels[levelKey].findIndex((entry) => entry.id === lessonId);
      if (lessonIndex >= 0) {
        hskLevels[levelKey][lessonIndex] = lessonValue;
      } else {
        hskLevels[levelKey].push(lessonValue);
      }
    });
    hskLevels[levelKey].sort((a, b) => (a.no || 0) - (b.no || 0));
  });
}

const dailyThemes = globalThis.highFrequencyTopics || [
  ["greeting", "Hi", "Chào hỏi và giới thiệu", "问候与介绍", "#58cc02"],
  ["interview", "CV", "Phỏng vấn xin việc", "工作面试", "#1cb0f6"],
  ["classroom", "BK", "Học trên lớp", "课堂学习", "#ce82ff"],
  ["travel", "TR", "Du lịch", "旅游", "#ff9600"],
  ["shopping", "SH", "Ăn uống và mua sắm", "点餐购物", "#ff4b4b"],
  ["transport", "GO", "Đi lại", "出行交通", "#00c2a8"],
  ["renting", "HM", "Thuê nhà", "租房生活", "#7c5cff"],
  ["sickleave", "DR", "Ốm đau và xin nghỉ", "生病与请假", "#ff6b9a"],
  ["office", "OF", "Đời sống công sở", "职场生活", "#64748b"],
  ["factory", "FX", "Xưởng sản xuất", "工厂车间", "#a855f7"],
  ["ecommerce", "EC", "Công việc TMĐT", "电商职场", "#f97316"],
  ["relationship", "RL", "Quan hệ thân mật", "亲密关系", "#e11d48"],
].map(([id, icon, vi, zh, color]) => ({
  id,
  icon,
  vi,
  zh,
  color,
  items: [
    item("word", "xin chào", "你好", [w("你好", "ni hao", "nǐ hǎo", "phrase", "xin chào")]),
    item("phrase", "rất vui", "很高兴", [w("很", "hen", "hěn", "adv", "rất"), w("高兴", "gaoxing", "gāoxìng", "adj", "vui")]),
    item("sentence", "Bạn hãy nói chậm một chút.", "请说慢一点儿。", [w("请", "qing", "qǐng", "verb", "xin hãy"), w("说慢一点儿", "shuo man yidianr", "shuō màn yìdiǎnr", "phrase", "nói chậm một chút")]),
    item("mixed", "Tôi muốn học tiếng Trung.", "我想学中文。", [w("我", "wo", "wǒ", "pron", "tôi"), w("想", "xiang", "xiǎng", "verb", "muốn"), w("学中文", "xue zhongwen", "xué Zhōngwén", "phrase", "học tiếng Trung")]),
  ],
}));

const hskTags = {
  "hsk2-l1": { text: "Du lịch", class: "tag-travel", icon: "🌲" },
  "hsk2-l2": { text: "Thói quen", class: "tag-habit", icon: "🕒" },
  "hsk2-l3": { text: "Mua sắm", class: "tag-shopping", icon: "🛍️" },
  "hsk2-l4": { text: "Công việc", class: "tag-work", icon: "💼" },
  "hsk2-l5": { text: "Mua sắm", class: "tag-shopping", icon: "🛍️" },
  "hsk2-l6": { text: "Ẩm thực", class: "tag-food", icon: "🍜" },
  "hsk2-l7": { text: "Giao tiếp", class: "tag-chat", icon: "💬" },
  "hsk2-l8": { text: "Giao tiếp", class: "tag-chat", icon: "💬" },
  "hsk2-l9": { text: "Học tập", class: "tag-study", icon: "📚" },
  "hsk2-l10": { text: "Thói quen", class: "tag-habit", icon: "🕒" },
};

function getHskTag(lessonId) {
  return hskTags[lessonId] || { text: "Học tập", class: "tag-study", icon: "📚" };
}

function getHskStatusBadge(lessonId) {
  if (lessonId === "hsk2-l1") return `<span class="badge-status badge-new">★ Mới</span>`;
  if (lessonId === "hsk2-l4") return `<span class="badge-status badge-popular">★ Phổ biến</span>`;
  return "";
}

const themeCategories = {
  greeting: ["giao-tiep", "pho-bien"],
  greeting_introduction: ["giao-tiep", "pho-bien"],
  interview: ["cong-viec", "pho-bien"],
  job_interview: ["cong-viec", "pho-bien"],
  classroom: ["hoc-tap"],
  classroom_learning: ["hoc-tap"],
  travel: ["du-lich", "pho-bien"],
  tourism_travel: ["du-lich", "pho-bien"],
  shopping: ["giao-tiep", "pho-bien"],
  dining_shopping: ["giao-tiep", "pho-bien"],
  ordering_shopping: ["giao-tiep", "pho-bien"],
  transport: ["du-lich"],
  transportation: ["du-lich"],
  renting: ["giao-tiep"],
  renting_life: ["giao-tiep"],
  sickleave: ["cong-viec"],
  illness_leave: ["cong-viec"],
  sick_leave: ["cong-viec"],
  office: ["cong-viec"],
  office_life: ["cong-viec"],
  factory: ["cong-viec"],
  factory_workshop: ["cong-viec"],
  ecommerce: ["cong-viec"],
  ecommerce_workplace: ["cong-viec"],
  relationship: ["giao-tiep"],
  close_relationships: ["giao-tiep"],
};

function getThemeIcon(visualType) {
  const icons = {
    chat: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 5.82 2 10.5c0 1.83.69 3.52 1.87 4.88-.17.65-.63 1.95-1.72 2.75-.15.11-.18.31-.07.45.07.09.18.14.3.14.32 0 1.62-.07 3.09-.76 1.45.86 3.12 1.34 4.93 1.34 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm-3.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    book: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="15" rx="3"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="6" x2="12" y2="21"/></svg>`,
    cart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    bus: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="8" y1="3" x2="8" y2="9"/><line x1="16" y1="3" x2="16" y2="9"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/><line x1="6" y1="19" x2="6" y2="21"/><line x1="18" y1="19" x2="18" y2="21"/></svg>`,
    home: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    clinic: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/></svg>`,
    desk: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="8" rx="2"/><path d="M6 14h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2z"/><path d="M5 11v3M19 11v3"/><line x1="12" y1="17" x2="12" y2="20"/><path d="M8 21h8M12 20l-3 2M12 20l3 2"/></svg>`,
    gear: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22 22H2V10l6 4v-4l6 4v-4l6 4v8zM17 14h2v2h-2v-2zm-5 2h2v2h-2v-2zm-5 0h2v2H7v-2z"/></svg>`,
    shop: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  };
  return icons[visualType] || `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
}

const state = {
  lang: localStorage.getItem("v2-lang") || "vi",
  screen: "home",
  module: "hsk",
  level: "HSK2",
  lessonId: "hsk2-l1",
  themeId: "greeting",
  mode: "translate",
  index: 0,
  activeWord: 0,
  activeInput: "",
  slotProgress: [],
  lastBadInput: "",
  solved: [],
  complete: false,
  score: 0,
  wrong: new Set(JSON.parse(localStorage.getItem("v2-wrong") || "[]")),
  saved: new Set(JSON.parse(localStorage.getItem("v2-saved") || "[]")),
  completed: new Set(JSON.parse(localStorage.getItem("v2-completed") || "[]")),
  hskSearchQuery: "",
  hskFilterTab: "newest",
  dailySearchQuery: "",
  dailyFilterTab: "all",
  user: JSON.parse(localStorage.getItem("v2-user") || "null"),
  adminKey: localStorage.getItem("v2-admin-key") || "",
  adminUsers: [],
  adminStatus: "",
};

const $ = (selector) => document.querySelector(selector);
const screens = {
  home: $("#homeScreen"),
  roadmap: $("#roadmapScreen"),
  course: $("#courseScreen"),
  practice: $("#practiceScreen"),
  complete: $("#completeScreen"),
  admin: $("#adminScreen"),
};
const t = (key) => i18n[state.lang][key] || i18n.vi[key] || key;
const shouldShowTeacherPreview = (currentState) =>
  globalThis.practiceRules?.shouldShowTeacherPreview
    ? globalThis.practiceRules.shouldShowTeacherPreview(currentState)
    : currentState.complete;
const getTeachingPosLabelKey = (rawPos) =>
  globalThis.lessonRuntimeRules?.getTeachingPosLabelKey
    ? globalThis.lessonRuntimeRules.getTeachingPosLabelKey(rawPos)
    : rawPos;
const getPromptSizeVariant = (text) =>
  globalThis.lessonRuntimeRules?.getPromptSizeVariant
    ? globalThis.lessonRuntimeRules.getPromptSizeVariant(text)
    : "normal";

const themeVisuals = {
  greeting: "chat",
  greeting_introduction: "chat",
  interview: "briefcase",
  job_interview: "briefcase",
  classroom: "book",
  classroom_learning: "book",
  travel: "map",
  tourism_travel: "map",
  shopping: "cart",
  dining_shopping: "cart",
  ordering_shopping: "cart",
  transport: "bus",
  transportation: "bus",
  renting: "home",
  renting_life: "home",
  sickleave: "clinic",
  illness_leave: "clinic",
  sick_leave: "clinic",
  office: "desk",
  office_life: "desk",
  factory: "gear",
  factory_workshop: "gear",
  ecommerce: "shop",
  ecommerce_workplace: "shop",
  relationship: "heart",
  close_relationships: "heart",
};

function lessonVisualClass(index) {
  return `lesson-visual-${index % 6}`;
}

function themeVisualClass(theme) {
  return `theme-visual-${themeVisuals[theme.id] || "chat"}`;
}

function themeIconLabel(theme) {
  const labels = {
    greeting: "问",
    greeting_introduction: "问",
    interview: "职",
    job_interview: "职",
    classroom: "书",
    classroom_learning: "书",
    travel: "行",
    tourism_travel: "行",
    shopping: "购",
    dining_shopping: "购",
    ordering_shopping: "购",
    transport: "车",
    transportation: "车",
    renting: "家",
    renting_life: "家",
    sickleave: "医",
    illness_leave: "医",
    sick_leave: "医",
    office: "办",
    workplace_life: "办",
    office_life: "办",
    factory: "工",
    factory_workshop: "工",
    ecommerce: "商",
    ecommerce_workplace: "商",
    relationship: "友",
    close_relationship: "友",
    close_relationships: "友",
  };
  return labels[theme.id] || theme.icon;
}

let audioContext;
let slowSpeech = false;
let preferredChineseVoice = null;

function currentCollection() {
  if (state.module === "hsk") {
    const lessonItem = hskLevels[state.level].find((entry) => entry.id === state.lessonId);
    if (!lessonItem) return null;
    return {
      ...lessonItem,
      title:
        state.lang === "vi"
          ? lessonItem.titleVi || lessonItem.title
          : lessonItem.titleZh || lessonItem.title,
    };
  }
  const theme = dailyThemes.find((itemTheme) => itemTheme.id === state.themeId);
  return { id: theme.id, no: "", title: state.lang === "vi" ? theme.vi : theme.zh, items: theme.items };
}

function currentItem() {
  const collection = currentCollection();
  state.index = Math.max(0, Math.min(state.index, collection.items.length - 1));
  const itemNow = collection.items[state.index];
  const words = globalThis.practiceAnswerRules?.normalizePracticeWords
    ? globalThis.practiceAnswerRules.normalizePracticeWords(itemNow.words)
    : itemNow.words;
  return {
    ...itemNow,
    words,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function normalizeLatin(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ü/g, "u")
    .replace(/v/g, "u")
    .replace(/[^a-z0-9]/g, "");
}

function normalizeHanzi(value) {
  return value.replace(/[。？！、，,.!?\s]/g, "");
}

function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const BACKEND_DISABLED = false;

async function apiRequest(path, options = {}) {
  if (BACKEND_DISABLED && path.startsWith("/api/")) {
    throw new Error("Backend đã bị vô hiệu hóa.");
  }

  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Không thể kết nối server.");
  }
  return data;
}

function formatDateTime(value) {
  if (!value) return "Chưa có";
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function slotPinyinLength(word) {
  return Math.max(1, normalizeLatin(word?.pinyin || "").length);
}

function slotProgressText(index, word) {
  const done = Math.min(state.slotProgress[index] || 0, slotPinyinLength(word));
  return `${done}/${slotPinyinLength(word)}`;
}

function slotProgressPercent(index, word) {
  return `${Math.min(100, Math.round(((state.slotProgress[index] || 0) / slotPinyinLength(word)) * 100))}%`;
}

function getDisplayPosLabel(rawPos) {
  const posKey = getTeachingPosLabelKey(rawPos);
  if (!posKey) return "";
  const beginnerPosText = {
    vi: {
      noun: "danh từ",
      verb: "động từ",
      adj: "tính từ",
      adv: "phó từ",
      prep: "giới từ",
      particle: "trợ từ",
      pron: "đại từ",
      "possessive-pron": "đại từ sở hữu",
      phrase: "cụm từ",
    },
    zh: {
      noun: "名词",
      verb: "动词",
      adj: "形容词",
      adv: "副词",
      prep: "介词",
      particle: "助词",
      pron: "代词",
      "possessive-pron": "物主代词",
      phrase: "短语",
    },
  };
  return beginnerPosText[state.lang]?.[posKey] || "";
}

function isMatch(input, expectedPinyin, expectedHanzi) {
  return (
    normalizeLatin(input) === normalizeLatin(expectedPinyin) ||
    normalizeHanzi(input) === normalizeHanzi(expectedHanzi)
  );
}

function saveState() {
  localStorage.setItem("v2-lang", state.lang);
  localStorage.setItem("v2-wrong", JSON.stringify([...state.wrong]));
  localStorage.setItem("v2-saved", JSON.stringify([...state.saved]));
  localStorage.setItem("v2-completed", JSON.stringify([...state.completed]));
  if (state.user) localStorage.setItem("v2-user", JSON.stringify(state.user));
  else localStorage.removeItem("v2-user");
  if (state.adminKey) localStorage.setItem("v2-admin-key", state.adminKey);
  else localStorage.removeItem("v2-admin-key");
}

function isAdminUser() {
  return state.user?.role === "admin";
}

function setScreen(name) {
  state.screen = name;
  Object.entries(screens).forEach(([key, node]) => node.classList.toggle("hidden", key !== name));
  $("#backBtn").classList.toggle("hidden", name === "home" || name === "roadmap" || name === "course" || name === "admin");

  // Render the global footer outside the screen boundaries
  renderGlobalFooter();

  const appNode = $("#app");
  if (appNode) {
    appNode.className = "app-shell screen-" + name;
  }

  // Highlight active middle navigation items
  const navRoadmap = $("#navRoadmapBtn");
  const navHsk = $("#navHskBtn");
  const navDaily = $("#navDailyBtn");
  const navAdmin = $("#navAdminBtn");
  const mNavRoadmap = $("#mobileRoadmapBtn");
  const mNavHsk = $("#mobileHskBtn");
  const mNavDaily = $("#mobileDailyBtn");
  const mNavAdmin = $("#mobileAdminBtn");

  if (navRoadmap && navHsk && navDaily && navAdmin) {
    navRoadmap.classList.toggle("active", name === "roadmap");
    navHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    navDaily.classList.toggle("active", name === "course" && state.module === "daily");
    navAdmin.classList.toggle("active", name === "admin");
  }
  if (mNavRoadmap && mNavHsk && mNavDaily && mNavAdmin) {
    mNavRoadmap.classList.toggle("active", name === "roadmap");
    mNavHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    mNavDaily.classList.toggle("active", name === "course" && state.module === "daily");
    mNavAdmin.classList.toggle("active", name === "admin");
  }
}

function renderChrome() {
  document.documentElement.lang = state.lang === "vi" ? "vi" : "zh-CN";
  $("#brandSubtitle").textContent = t("brandSubtitle");
  $("#reviewBtn").textContent = t("review");
  const loginBtn = $("#loginBtn");
  const registerBtn = $("#registerBtn");
  const mobileLoginBtn = $("#mobileLoginBtn");
  const mobileRegisterBtn = $("#mobileRegisterBtn");
  const navAdmin = $("#navAdminBtn");
  const mobileAdmin = $("#mobileAdminBtn");
  const sidebarLoginBtn = $("#sidebarLoginBtn");
  const sidebarRegisterBtn = $("#sidebarRegisterBtn");
  const canViewAdmin = isAdminUser();
  if (navAdmin) navAdmin.classList.toggle("hidden", !canViewAdmin);
  if (mobileAdmin) mobileAdmin.classList.toggle("hidden", !canViewAdmin);
  if (!canViewAdmin && state.screen === "admin") {
    renderHome();
    setScreen("home");
  }

  if (state.user) {
    if (loginBtn) loginBtn.textContent = state.user.fullName || "Tài khoản";
    if (registerBtn) registerBtn.textContent = "Đăng xuất";
    if (mobileLoginBtn) mobileLoginBtn.textContent = state.user.fullName || "Tài khoản";
    if (mobileRegisterBtn) mobileRegisterBtn.textContent = "Đăng xuất";
  } else {
    if (loginBtn) loginBtn.textContent = "Đăng nhập";
    if (registerBtn) registerBtn.textContent = "Đăng ký";
    if (mobileLoginBtn) mobileLoginBtn.textContent = "Đăng nhập";
    if (mobileRegisterBtn) mobileRegisterBtn.textContent = "Đăng ký";
  }

  if (loginBtn) {
    loginBtn.disabled = false;
    loginBtn.removeAttribute("title");
  }
  if (registerBtn) {
    registerBtn.disabled = false;
    registerBtn.removeAttribute("title");
  }
  if (mobileLoginBtn) {
    mobileLoginBtn.disabled = false;
    mobileLoginBtn.removeAttribute("title");
  }
  if (mobileRegisterBtn) {
    mobileRegisterBtn.disabled = false;
    mobileRegisterBtn.removeAttribute("title");
  }
  if (sidebarLoginBtn) {
    sidebarLoginBtn.disabled = false;
    sidebarLoginBtn.removeAttribute("title");
  }
  if (sidebarRegisterBtn) {
    sidebarRegisterBtn.disabled = false;
    sidebarRegisterBtn.removeAttribute("title");
  }

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.innerHTML = `
      <span class="lang-vi ${state.lang === "vi" ? "active" : ""}">VI</span>
      <span class="lang-divider">|</span>
      <span class="lang-en ${state.lang === "zh" ? "active" : ""}">EN</span>
    `;
  }
}

function getLessonTotalItems(item) {
  if (item.lessonId) {
    for (const level of Object.values(hskLevels)) {
      const found = level.find(l => l.id === item.lessonId);
      if (found) return found.items.length;
    }
  } else if (item.themeId) {
    const found = dailyThemes.find(t => t.id === item.themeId);
    if (found) return found.items.length;
  }
  return item.totalItems || 3;
}

const dailyRoadmap = [
  { day: 1, title: "Chào hỏi cơ bản", label: "Cơ bản 1", totalItems: 7, lessonId: "hsk2-l1" },
  { day: 2, title: "Phiên âm Pinyin", label: "Cơ bản", totalItems: 20, lessonId: "hsk2-l2" },
  { day: 3, title: "Từ vựng thông dụng", label: "Cơ bản 3", totalItems: 20, lessonId: "hsk2-l3" },
  { day: 4, title: "Mẫu câu giao tiếp", label: "Màu sắc", totalItems: 4, themeId: "greeting" },
  { day: 5, title: "Giới thiệu công việc", label: "Công việc", totalItems: 20, lessonId: "hsk2-l4" },
  { day: 6, title: "Mua sắm lựa chọn", label: "Lựa chọn", totalItems: 20, lessonId: "hsk2-l5" },
  { day: 7, title: "Ăn uống giao tiếp", label: "Ăn uống", totalItems: 20, lessonId: "hsk2-l6" }
];

function renderRoadmap() {
  const completedDaysCount = dailyRoadmap.filter(d => {
    const id = d.lessonId || d.themeId;
    return state.completed.has(id);
  }).length;

  const completedCount = [...state.completed].length;

  screens.roadmap.innerHTML = `
    <div class="roadmap-layout">
      <!-- Left Column: Flowing pathway -->
      <div class="roadmap-panel">
        <div class="roadmap-header-title">
          <h2>Lộ trình học tập</h2>
          <p>Hoàn thành mỗi bài học hàng ngày để mở khóa nội dung tiếp theo</p>
        </div>
        
        <div class="roadmap-timeline">
          ${dailyRoadmap.map((item, index) => {
            const id = item.lessonId || item.themeId;
            const isCompleted = state.completed.has(id);
            const isCurrentActive = !isCompleted && (index === 0 || state.completed.has(dailyRoadmap[index - 1].lessonId || dailyRoadmap[index - 1].themeId));
            const isLocked = !isCompleted && !isCurrentActive;

            let statusClass = "locked";
            if (isCompleted) statusClass = "done";
            else if (isCurrentActive) statusClass = "active";

            const totalItems = getLessonTotalItems(item);
            const progressText = isCompleted ? `${totalItems}/${totalItems}` : `0/${totalItems}`;

            return `
              <div class="roadmap-timeline-item status-${statusClass}">
                <div class="timeline-node-col">
                  <button class="roadmap-node-circle" type="button" data-roadmap-day="${item.day}" data-lesson-id="${item.lessonId || ''}" data-theme-id="${item.themeId || ''}" ${isLocked ? "disabled" : ""}>
                    <div class="node-circle-inner">
                      ${isCompleted ? `<span class="node-star-gold">★</span>` : ""}
                      ${isCurrentActive ? `<span class="node-star-active">★</span>` : ""}
                      ${isLocked ? `
                        <span class="node-icon-locked">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                          </svg>
                        </span>
                      ` : ""}
                    </div>
                  </button>
                </div>
                
                <div class="timeline-content-col">
                  <div class="timeline-meta">
                    <span class="day-badge">Ngày ${item.day}</span>
                    <span class="progress-info">${progressText} câu đã học</span>
                  </div>
                  <h3 class="lesson-label">${item.label}</h3>
                  <p class="lesson-title">${item.title}</p>
                </div>
                
                <div class="timeline-action-col">
                  <button class="btn-timeline-action ${statusClass}" type="button" data-roadmap-day="${item.day}" data-lesson-id="${item.lessonId || ''}" data-theme-id="${item.themeId || ''}" ${isLocked ? "disabled" : ""}>
                    ${isCompleted ? "Ôn tập" : isCurrentActive ? "Học ngay" : "Chưa mở khóa"}
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
      
      <!-- Right Column: Sidebar Stats -->
      <aside class="roadmap-sidebar">
        <div class="sidebar-card stats-card">
          <h3>Thống kê</h3>
          <div class="stats-underline"></div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper progress-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>Tiến độ</span>
              <strong>${completedDaysCount}/${dailyRoadmap.length} ngày</strong>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper lesson-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>Bài học hoàn thành</span>
              <strong>${completedCount}</strong>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper streak-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2c1 2 2 3.5 3 5.5s1 3 1 4.5c0 3-2.5 5.5-5.5 5.5S5 15 5 12c0-2.5 2.5-5.5 5-7.5l2-2.5z"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>Chuỗi học</span>
              <strong>${completedCount} ngày</strong>
            </div>
          </div>
        </div>
        
        <div class="sidebar-card cta-card">
          <div class="cta-info">
            <div class="cta-icon">✍️</div>
            <p>Hãy đăng ký / đăng nhập để lưu tiến độ học tập của bạn.</p>
          </div>
          <button class="btn-sidebar-login" id="sidebarLoginBtn" type="button" disabled title="Đăng nhập/Đăng ký tạm thời bị vô hiệu hóa">Đăng nhập</button>
          <button class="btn-sidebar-register" id="sidebarRegisterBtn" type="button" disabled title="Đăng nhập/Đăng ký tạm thời bị vô hiệu hóa">Đăng ký</button>
        </div>
        
        <!-- Bottom illustration -->
        <div class="sidebar-deco-bottom">
          <img src="assets/benefit_resources.png" alt="Resources" />
        </div>
      </aside>
    </div>
  `;
}

async function loadAdminUsers() {
  if (!state.adminKey) {
    state.adminStatus = "Nhập admin key để tải danh sách người dùng.";
    state.adminUsers = [];
    renderAdmin();
    return;
  }

  state.adminStatus = "Đang tải danh sách người dùng...";
  renderAdmin();
  try {
    const data = await apiRequest("/api/admin/users", {
      method: "GET",
      headers: { "X-Admin-Key": state.adminKey },
    });
    state.adminUsers = data.users || [];
    state.adminStatus = `Đã tải ${state.adminUsers.length} người dùng.`;
  } catch (error) {
    state.adminUsers = [];
    state.adminStatus = error.message;
  }
  renderAdmin();
}

function renderAdmin() {
  const rows = state.adminUsers.map((user) => `
    <tr data-user-id="${escapeAttr(user.id)}">
      <td>
        <input class="admin-table-input" data-field="fullName" value="${escapeAttr(user.fullName)}" />
      </td>
      <td>
        <input class="admin-table-input" data-field="email" value="${escapeAttr(user.email)}" />
      </td>
      <td>
        <select class="admin-table-input" data-field="role">
          <option value="student" ${user.role === "student" ? "selected" : ""}>student</option>
          <option value="admin" ${user.role === "admin" ? "selected" : ""}>admin</option>
        </select>
      </td>
      <td>
        <label class="admin-active-toggle">
          <input type="checkbox" data-field="isActive" ${user.isActive ? "checked" : ""} />
          <span>${user.isActive ? "Đang mở" : "Đã khóa"}</span>
        </label>
      </td>
      <td>${formatDateTime(user.createdAt)}</td>
      <td>${formatDateTime(user.lastLoginAt)}</td>
      <td>
        <div class="admin-row-actions">
          <button class="admin-save-user" type="button">Lưu</button>
          <button class="admin-delete-user" type="button">Xóa</button>
        </div>
      </td>
    </tr>
  `).join("");

  screens.admin.innerHTML = `
    <div class="admin-layout">
      <section class="admin-hero">
        <div>
          <span class="admin-eyebrow">Quản trị</span>
          <h1>Người dùng đăng ký</h1>
          <p>Theo dõi tài khoản đã đăng ký và quản lý trạng thái học viên từ database Neon PostgreSQL.</p>
        </div>
        <button class="admin-refresh-btn" id="adminRefreshBtn" type="button">Tải lại</button>
      </section>

      <section class="admin-key-panel">
        <label for="adminKeyInput">Admin key</label>
        <div class="admin-key-row">
          <input id="adminKeyInput" type="password" value="${escapeAttr(state.adminKey)}" placeholder="Nhập ADMIN_KEY của server" />
          <button id="adminLoadUsersBtn" type="button">Kết nối</button>
        </div>
        <p class="admin-status ${state.adminStatus.includes("không") || state.adminStatus.includes("lỗi") || state.adminStatus.includes("hợp lệ") ? "error" : ""}">${escapeAttr(state.adminStatus)}</p>
      </section>

      <section class="admin-users-panel">
        <div class="admin-table-wrap">
          <table class="admin-users-table">
            <thead>
              <tr>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Role</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Đăng nhập cuối</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              ${rows || `<tr><td colspan="7" class="admin-empty">Chưa có dữ liệu người dùng.</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function showModal(type) {
  const modalDiv = document.createElement("div");
  modalDiv.id = "authModal";
  modalDiv.className = "auth-modal-overlay";

  const isLogin = type === "login";
  modalDiv.innerHTML = `
    <div class="auth-modal-content">
      <button class="auth-modal-close" id="closeAuthModal" type="button">&times;</button>
      <div class="auth-modal-logo">中</div>
      <h2>${isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}</h2>
      <p class="auth-modal-sub">${isLogin ? "Chào mừng bạn quay trở lại!" : "Bắt đầu hành trình học tiếng Trung ngay hôm nay."}</p>
      
      <form id="authForm" onsubmit="event.preventDefault();">
        ${!isLogin ? `
        <div class="form-group">
          <label for="authName">Họ và tên</label>
          <input type="text" id="authName" placeholder="Nguyễn Văn A" required />
        </div>
        ` : ""}
        <div class="form-group">
          <label for="authEmail">Email</label>
          <input type="email" id="authEmail" placeholder="example@gmail.com" required />
        </div>
        <div class="form-group">
          <label for="authPassword">Mật khẩu</label>
          <input type="password" id="authPassword" placeholder="••••••••" required />
        </div>
        ${!isLogin ? `
        <div class="form-group checkbox-group">
          <input type="checkbox" id="authTerms" required />
          <label for="authTerms">Tôi đồng ý với các điều khoản dịch vụ</label>
        </div>
        ` : ""}
        <p class="auth-form-message" id="authFormMessage" role="status"></p>
        <button type="submit" class="btn-auth-submit">${isLogin ? "Đăng nhập" : "Đăng ký"}</button>
      </form>
      
      <div class="auth-modal-footer">
        <span>${isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}</span>
        <button class="btn-auth-switch" id="authSwitchBtn" type="button">${isLogin ? "Đăng ký ngay" : "Đăng nhập"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  document.getElementById("closeAuthModal").onclick = () => modalDiv.remove();
  modalDiv.onclick = (e) => { if (e.target === modalDiv) modalDiv.remove(); };

  document.getElementById("authSwitchBtn").onclick = () => {
    modalDiv.remove();
    showModal(isLogin ? "register" : "login");
  };

  document.getElementById("authForm").onsubmit = async (e) => {
    e.preventDefault();
    const message = document.getElementById("authFormMessage");
    const submitBtn = modalDiv.querySelector(".btn-auth-submit");
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    const fullName = document.getElementById("authName")?.value.trim();

    message.textContent = "";
    message.className = "auth-form-message";
    submitBtn.disabled = true;
    submitBtn.textContent = isLogin ? "Đang đăng nhập..." : "Đang đăng ký...";

    try {
      const data = await apiRequest(isLogin ? "/api/login" : "/api/register", {
        method: "POST",
        body: JSON.stringify(isLogin ? { email, password } : { fullName, email, password }),
      });
      state.user = data.user;
      saveState();
      renderChrome();
      message.textContent = isLogin ? "Đăng nhập thành công." : "Đăng ký thành công.";
      message.classList.add("success");
      setTimeout(() => modalDiv.remove(), 500);
    } catch (error) {
      message.textContent = error.message;
      message.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = isLogin ? "Đăng nhập" : "Đăng ký";
    }
  };
}

function showQuitModal() {
  const modalDiv = document.createElement("div");
  modalDiv.id = "quitModal";
  modalDiv.className = "quit-modal-overlay";

  modalDiv.innerHTML = `
    <div class="quit-modal-content">
      <button class="quit-modal-close" id="closeQuitModal" type="button">&times;</button>
      
      <div class="quit-modal-illustration">
        <svg viewBox="0 0 160 160" width="120" height="120">
          <!-- Antlers -->
          <path d="M50 45 C45 35 48 20 40 15 C38 12 33 15 35 20 C37 25 42 32 46 40" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M42 27 C35 25 32 18 28 20 C25 22 28 28 35 30" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" fill="none" />
          
          <path d="M110 45 C115 35 112 20 120 15 C122 12 127 15 125 20 C123 25 118 32 114 40" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M118 27 C125 25 128 18 132 20 C135 22 132 28 125 30" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" fill="none" />
          
          <!-- Ears -->
          <path d="M38 52 C20 50 25 62 36 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="2" />
          <path d="M122 52 C140 50 135 62 124 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="2" />
          
          <!-- Head / Face -->
          <path d="M45 60 C45 105 55 120 80 120 C105 120 115 105 115 60 C115 45 105 45 80 45 C55 45 45 45 45 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="3" />
          
          <!-- White belly/snout area -->
          <ellipse cx="80" cy="108" rx="25" ry="12" fill="#ffffff" />
          
          <!-- Nose -->
          <ellipse cx="80" cy="95" rx="5" ry="3.5" fill="#1e293b" />
          
          <!-- Glasses Rim -->
          <circle cx="62" cy="72" r="18" fill="none" stroke="#000000" stroke-width="4" />
          <circle cx="98" cy="72" r="18" fill="none" stroke="#000000" stroke-width="4" />
          <!-- Glasses Bridge -->
          <path d="M76 72 L84 72" stroke="#000000" stroke-width="4" />
          
          <!-- Sad Eyes inside glasses -->
          <!-- Left Eye -->
          <path d="M58 70 C60 67 64 67 66 70" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="62" cy="76" r="2.5" fill="#1e293b" />
          
          <!-- Right Eye -->
          <path d="M94 70 C96 67 100 67 102 70" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="98" cy="76" r="2.5" fill="#1e293b" />
          
          <!-- Tears (Blue) -->
          <!-- Left tear -->
          <path d="M62 78 C58 88 56 102 62 108 C64 102 64 88 62 78" fill="#38bdf8" opacity="0.85" />
          <path d="M60 84 C56 94 54 102 58 106 C60 102 60 94 60 84" fill="#38bdf8" opacity="0.6" />
          <!-- Right tear -->
          <path d="M98 78 C102 88 104 102 98 108 C96 102 96 88 98 78" fill="#38bdf8" opacity="0.85" />
          <path d="M100 84 C104 94 106 102 102 106 C100 102 100 94 100 84" fill="#38bdf8" opacity="0.6" />
        </svg>
      </div>
      
      <h2>Khoan, đừng đi!</h2>
      <p class="quit-modal-sub">Chỉ còn 2 phút thôi! Bạn có chắc chắn muốn thoát không?</p>
      
      <div class="quit-modal-buttons">
        <button id="btnKeepLearning" class="btn-keep-learning" type="button">HỌC TIẾP</button>
        <button id="btnQuitLearning" class="btn-quit-learning" type="button">KẾT THÚC</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeModal = () => {
    modalDiv.classList.add("fade-out");
    setTimeout(() => modalDiv.remove(), 200);
  };

  document.getElementById("closeQuitModal").onclick = closeModal;
  document.getElementById("btnKeepLearning").onclick = closeModal;
  modalDiv.onclick = (e) => { if (e.target === modalDiv) closeModal(); };

  document.getElementById("btnQuitLearning").onclick = () => {
    closeModal();
    if (state.fromRoadmap) {
      renderRoadmap();
      setScreen("roadmap");
    } else {
      renderCourse();
      setScreen("course");
    }
  };
}

function renderGlobalFooter() {
  const footerNode = $("#globalFooter");
  if (!footerNode) return;

  if (state.screen === "home" || state.screen === "roadmap" || state.screen === "course") {
    footerNode.innerHTML = `
        <div class="footer-container">
          <div class="footer-brand-col">
            <div class="footer-logo">
              <div class="footer-logo-circle">中</div>
              <span class="footer-logo-text">Học Tiếng Trung</span>
            </div>
            <p class="footer-tagline">Học dễ hiểu - Nhớ lâu - Ứng dụng ngay</p>
            <div class="footer-socials">
              <a href="#" class="social-icon social-fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3A4.5 4.5 0 0 0 9 5.5V8z"/></svg>
              </a>
              <a href="#" class="social-icon social-yt" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
              </a>
              <a href="#" class="social-icon social-tt" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.5 2v10c0 1.9-1.6 3.5-3.5 3.5S5.5 13.9 5.5 12s1.6-3.5 3.5-3.5c.5 0 1 .1 1.4.3v-4c-1.4-.6-3-.7-4.5-.4-2.7.6-4.9 2.8-5.3 5.6C.1 16.5 3 20 6.5 20h2c3.9 0 7-3.1 7-7V6.8c1.3.9 2.8 1.4 4.5 1.2V4c-1.8 0-3.3-.9-4.1-2.4l-1.4.4z"/></svg>
              </a>
              <a href="mailto:hello@hoctiengtrung.vn" class="social-icon social-mail" aria-label="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </a>
            </div>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">KHÁM PHÁ</h4>
            <ul class="footer-list">
              <li><a href="#" data-footer-nav="course">Khóa học</a></li>
              <li><a href="#" data-footer-nav="course">Lộ trình</a></li>
              <li><a href="#" data-footer-nav="blog">Blog</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">VỀ CHÚNG TÔI</h4>
            <ul class="footer-list">
              <li><a href="#">Giảng viên</a></li>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Chính sách</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">LIÊN HỆ</h4>
            <ul class="footer-list footer-contact-list">
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>0988 888 888</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                <span>hello@hoctiengtrung.vn</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2024 Học Tiếng Trung. Tất cả quyền được bảo lưu.</p>
        </div>
    `;
    footerNode.classList.remove("hidden");
  } else {
    footerNode.innerHTML = "";
    footerNode.classList.add("hidden");
  }

}

function renderHome() {
  screens.home.innerHTML = `
    <section class="redesigned-home">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            Học tiếng Trung<br>
            dễ dàng cùng<br>
            <span class="hero-highlight">lộ trình rõ ràng<span class="highlight-line"></span></span>
          </h1>

          
          <p class="hero-subtitle">
            Khóa học bài bản cho người mới bắt đầu đến nâng cao, giúp bạn tự tin giao tiếp, học HSK và ứng dụng trong công việc.
          <div class="hero-buttons">
            <button id="heroStartBtn" class="btn-hero-primary" type="button">
              Bắt đầu học ngay <span class="arrow-icon">›</span>
            </button>
          </div>
        </div>
        
        <div class="hero-image-container">
          <div class="hero-media-card">
            <div class="hero-media-glow"></div>
            <img src="assets/hero_illustration.png" class="hero-main-img" alt="Học tiếng Trung" />
            <div class="hero-badge hero-badge-top">HSK 1-5</div>
            <div class="hero-badge hero-badge-bottom">+1000 bài tập</div>
            <div class="hero-stat-pill">
              <span>4.9</span>
              <small>Đánh giá</small>
            </div>
          </div>
          
          <div class="bubble-overlay bubble-nihao">
            <div class="bubble-text">
              <strong>你好</strong>
              <span>Nǐ hǎo</span>
            </div>
            <div class="bubble-icon cap-icon">🎓</div>
          </div>
          
          <div class="bubble-overlay bubble-jiayou">
            <div class="bubble-text">
              <strong>加油!</strong>
              <span>Jiāyóu!</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section: Vì sao nên học cùng chúng tôi? -->
      <section class="features-section">
        <h2 class="section-title text-center">
          Vì sao nên học cùng chúng tôi?
        </h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-wrapper color-route">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 class="feature-title">Lộ trình rõ ràng</h3>
            <p class="feature-desc">Lộ trình khóa học theo từng cấp độ, dễ dàng theo dõi và bứt phá.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper color-teacher">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 class="feature-title">Giảng viên tận tâm</h3>
            <p class="feature-desc">Giảng viên giàu kinh nghiệm, nhiệt tình đồng hành cùng bạn.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper color-book">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 class="feature-title">Bài học dễ hiểu</h3>
            <p class="feature-desc">Nội dung tinh gọn, sinh động, dễ hiểu và dễ áp dụng vào thực tế.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper color-support">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <h3 class="feature-title">Hỗ trợ 1:1</h3>
            <p class="feature-desc">Hỗ trợ riêng từng học viên, giải đáp nhanh chóng, tiến bộ mỗi ngày.</p>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <h2 class="section-title text-center">
          Bạn nghĩ gì về HuaMei với tư cách là một người học ngôn ngữ?
        </h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-bg" style="background-image: url('assets/review_user_1.png');"></div>
            <div class="testimonial-overlay">
              <div class="testimonial-header theme-green-a">Nguyênnhana</div>
              <div class="testimonial-body">
                <div class="stars">★★★★★</div>
                <p>Cuối cùng tôi đã tìm thấy lộ trình học tiếng Trung hiệu quả và có thể giao tiếp tự tin với các đối tác nước ngoài.</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-bg" style="background-image: url('assets/review_user_2.png');"></div>
            <div class="testimonial-overlay">
              <div class="testimonial-header theme-green-b">Anh</div>
              <div class="testimonial-body">
                <div class="stars">★★★★★</div>
                <p>Cảm giác xem phim Trung Quốc cổ trang mà không cần nhìn phụ đề thật là đã quá đi... Cảm ơn Học Tiếng Trung ♥</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-bg" style="background-image: url('assets/review_user_3.png');"></div>
            <div class="testimonial-overlay">
              <div class="testimonial-header theme-green-c">Dung</div>
              <div class="testimonial-body">
                <div class="stars">★★★★★</div>
                <p>Ứng dụng 5*, có thể học nhiều mẫu câu giao tiếp với giá cả hợp lý, học tiện lợi hơn nhiều so với ở trung tâm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </section>
  `;
}

function renderCourse() {
  if (state.module === "hsk") renderHskCourse();
  else renderDailyCourse();
}

function renderHskLessonListHTML() {
  let filteredLessons = hskLevels[state.level].map((lessonItem, index) => ({ lessonItem, index }));

  if (state.hskSearchQuery.trim()) {
    const query = normalizeLatin(state.hskSearchQuery.trim());
    filteredLessons = filteredLessons.filter(({ lessonItem }) => {
      const matchNo = `bai ${lessonItem.no}`.includes(query);
      const matchVi = normalizeLatin(lessonItem.titleVi || lessonItem.title).includes(query);
      const matchZh = normalizeLatin(lessonItem.titleZh || lessonItem.title).includes(query);
      return matchNo || matchVi || matchZh;
    });
  }

  if (state.hskFilterTab === "completed") {
    filteredLessons = filteredLessons.filter(({ lessonItem }) => state.completed.has(lessonItem.id));
  }

  return filteredLessons.length > 0 ? filteredLessons.map(({ lessonItem }) => {
    const isCompleted = state.completed.has(lessonItem.id);
    const tagObj = getHskTag(lessonItem.id);
    const statusBadge = getHskStatusBadge(lessonItem.id);

    let progressIndicator = "";
    if (isCompleted) {
      progressIndicator = `<span class="lesson-check-badge">✓</span>`;
    } else if (lessonItem.id === "hsk2-l3") {
      progressIndicator = `
        <div class="lesson-radial-progress">
          <div class="lesson-radial-inner">45%</div>
        </div>
      `;
    }

    return `
      <div class="hsk-lesson-card" data-lesson="${lessonItem.id}">
        <div class="hsk-lesson-left">
          <div class="hsk-lesson-number">${lessonItem.no}</div>
          <div class="hsk-lesson-info">
            <h4>Bài ${lessonItem.no}</h4>
            <p>${state.lang === "vi" ? (lessonItem.titleVi || lessonItem.title) : (lessonItem.titleZh || lessonItem.title)}</p>
          </div>
        </div>
        
        <div class="hsk-lesson-center">
          <span class="hsk-tag ${tagObj.class}">${tagObj.icon} ${tagObj.text}</span>
          ${statusBadge}
          ${progressIndicator}
        </div>
        
        <div class="hsk-lesson-right">
          <span class="hsk-items-count">${lessonItem.items.length} mục luyện</span>
          <button class="hsk-lesson-arrow-btn" type="button" aria-label="Luyện tập">›</button>
        </div>
      </div>
    `;
  }).join("") : `
    <div class="hsk-no-results">
      Không tìm thấy bài học nào phù hợp.
    </div>
  `;
}

function renderHskCourse() {
  const totalLessons = hskLevels[state.level].length;
  const completedLessonsInLevel = hskLevels[state.level].filter(l => state.completed.has(l.id)).length;
  const hskProgressPercent = totalLessons > 0 ? Math.round((completedLessonsInLevel / totalLessons) * 100) : 0;
  const totalItemsInLevel = hskLevels[state.level].reduce((acc, l) => acc + l.items.length, 0);

  screens.course.innerHTML = `
    <section class="hsk-course-layout">
      <!-- Left Column: Sidebar -->
      <aside class="hsk-sidebar">
        <div class="hsk-sidebar-header">
          <div class="hsk-header-icon">🏆</div>
          <div class="hsk-header-copy">
            <h2>Khóa HSK</h2>
            <p>Học theo cấp độ HSK với lộ trình bài bản và hiệu quả.</p>
          </div>
        </div>
        
        <div class="hsk-search-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" id="hskSearchInput" placeholder="Tìm kiếm bài học..." value="${escapeAttr(state.hskSearchQuery)}" />
        </div>
        
        <div class="hsk-level-section">
          <h3>Chọn cấp độ</h3>
          <div class="hsk-level-list">
            ${Object.keys(hskLevels).map((level) => {
    const isActive = level === state.level;
    return `
                <button class="hsk-level-btn ${isActive ? "active" : ""}" data-level="${level}" type="button">
                  <span>${level}</span>
                  <span class="arrow-icon">›</span>
                </button>
              `;
  }).join("")}
          </div>
        </div>
        
        <div class="hsk-stats-section">
          <h3>Thống kê nhanh</h3>
          <div class="hsk-stats-grid">
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-lessons">📚</div>
              <div class="stat-card-info">
                <strong>${totalLessons}</strong>
                <span>Tổng số bài</span>
              </div>
            </div>
            
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-progress">📊</div>
              <div class="stat-card-info">
                <strong>${hskProgressPercent}%</strong>
                <span>Tiến độ học</span>
              </div>
            </div>
            
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-items">✍️</div>
              <div class="stat-card-info">
                <strong>${totalItemsInLevel}</strong>
                <span>Tổng số mục luyện</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <!-- Right Column: Main Content -->
      <section class="hsk-main-content">
        <!-- Banner Recommendation -->
        <div class="hsk-recom-card">
          <div class="recom-target-wrapper">
            <svg viewBox="0 0 100 100" class="banner-target-svg">
              <circle cx="50" cy="50" r="45" fill="#d1fae5" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#10b981" stroke-width="6" />
              <circle cx="50" cy="50" r="21" fill="none" stroke="#047857" stroke-width="5" />
              <circle cx="50" cy="50" r="10" fill="#0ea855" />
              <line x1="82" y1="18" x2="55" y2="45" stroke="#047857" stroke-width="4" stroke-linecap="round" />
              <polygon points="52,48 57,41 47,44" fill="#047857" />
            </svg>
          </div>
          <div class="hsk-recom-info">
            <h2>Lộ trình đề xuất hôm nay</h2>
            <p>Hoàn thành 2-3 bài học để duy trì thói quen học tập hiệu quả.</p>
            <div class="hsk-recom-meta">
              <span>📖 ${completedLessonsInLevel} / ${totalLessons} bài đã học</span>
              <span class="meta-divider">|</span>
              <span>🕒 ~ 20 phút</span>
            </div>
          </div>
          <button id="hskContinueBtn" class="btn-continue-learn" type="button">
            <span>▶</span> Tiếp tục học
          </button>
        </div>
        
        <!-- Lesson List Section -->
        <div class="hsk-lessons-header">
          <h2>Danh sách bài học ${state.level}</h2>
          <div class="hsk-lessons-actions">
            <div class="hsk-filter-tabs">
              <button class="${state.hskFilterTab === "newest" ? "active" : ""}" data-hsk-filter="newest" type="button">Mới nhất</button>
              <button class="${state.hskFilterTab === "popular" ? "active" : ""}" data-hsk-filter="popular" type="button">Phổ biến</button>
              <button class="${state.hskFilterTab === "completed" ? "active" : ""}" data-hsk-filter="completed" type="button">Đã học</button>
            </div>
            <button class="hsk-filter-settings-btn" type="button" aria-label="Bộ lọc">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hsk-lessons-list">
          ${renderHskLessonListHTML()}
        </div>
      </section>
    </section>
  `;
}

function renderDailyThemesListHTML() {
  let filteredThemes = dailyThemes;

  if (state.dailySearchQuery.trim()) {
    const query = normalizeLatin(state.dailySearchQuery.trim());
    filteredThemes = filteredThemes.filter(theme =>
      normalizeLatin(theme.vi).includes(query) ||
      normalizeLatin(theme.zh).includes(query)
    );
  }

  if (state.dailyFilterTab !== "all") {
    filteredThemes = filteredThemes.filter(theme => {
      const cats = themeCategories[theme.id] || [];
      return cats.includes(state.dailyFilterTab);
    });
  }

  return filteredThemes.length > 0 ? filteredThemes.map((theme) => {
    const visualClass = themeVisuals[theme.id] || "chat";
    const themeIcon = getThemeIcon(visualClass);
    return `
      <div class="daily-theme-card" data-theme="${theme.id}">
        <div class="daily-theme-left" style="background: ${theme.color}15; color: ${theme.color}">
          <span class="daily-theme-icon-badge">${themeIcon}</span>
        </div>
        <div class="daily-theme-body">
          <h4>${theme.zh}</h4>
          <p>${theme.vi}</p>
          <div class="daily-theme-footer">
            <span class="daily-theme-count-pill">${theme.items.length} mục luyện</span>
            <span class="daily-enter-text">Vào học <span class="arrow-right-icon">➔</span></span>
          </div>
        </div>
      </div>
    `;
  }).join("") : `
    <div class="daily-no-results">
      Không tìm thấy chủ đề nào phù hợp.
    </div>
  `;
}

function renderDailyCourse() {
  const totalThemes = dailyThemes.length;
  const totalItemsInThemes = dailyThemes.reduce((acc, t) => acc + t.items.length, 0);

  screens.course.innerHTML = `
    <section class="daily-course-layout">
      <!-- Top Banner section -->
      <div class="daily-banner-card">
        <div class="daily-banner-decor-left">
          <svg viewBox="0 0 100 100" fill="none" stroke="rgba(16,185,129,0.12)" stroke-width="1.5">
            <path d="M10 80 Q 20 50 40 40 Q 20 45 10 80" fill="rgba(16,185,129,0.04)" />
            <path d="M5 60 Q 25 35 45 30 Q 22 38 5 60" fill="rgba(16,185,129,0.04)" />
            <path d="M2 40 Q 28 20 48 25 Q 24 28 2 40" fill="rgba(16,185,129,0.04)" />
          </svg>
        </div>
        <div class="daily-banner-decor-right">
          <svg viewBox="0 0 100 120" fill="none" stroke="rgba(16,185,129,0.08)" stroke-width="1.2">
            <!-- Pagoda silhouette in banner background -->
            <g transform="translate(45, 20) scale(0.65)" fill="none" stroke="rgba(16,185,129,0.06)">
              <path d="M 23 0 L 23 20" />
              <circle cx="23" cy="5" r="2" />
              <path d="M 23 22 L 5 35 Q 23 30 41 35 Z" fill="rgba(16,185,129,0.02)" />
              <rect x="15" y="33" width="16" height="12" />
              <path d="M 23 42 L 2 58 Q 23 52 44 58 Z" fill="rgba(16,185,129,0.02)" />
              <rect x="12" y="55" width="22" height="15" />
              <path d="M 23 66 L 0 88 Q 23 80 46 88 Z" fill="rgba(16,185,129,0.02)" />
              <rect x="8" y="84" width="30" height="20" />
            </g>
          </svg>
        </div>

        <div class="daily-banner-left">
          <span class="daily-banner-tag">TIẾNG TRUNG THÔNG DỤNG</span>
          <h1>Chọn chủ đề tiếng Trung thông dụng</h1>
          <p>Chọn chủ đề phù hợp để bắt đầu luyện tập các đoạn hội thoại thực tế, nâng cao kỹ năng giao tiếp tiếng Trung mỗi ngày.</p>
          
          <div class="daily-banner-stats">
            <div class="daily-stat-pill">
              <span class="stat-pill-icon color-grid">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </span>
              <div class="daily-stat-pill-text">
                <span>Tổng số chủ đề</span>
                <strong>${totalThemes}</strong>
              </div>
            </div>
            <div class="daily-stat-pill">
              <span class="stat-pill-icon color-doc">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              <div class="daily-stat-pill-text">
                <span>Tổng số mục luyện</span>
                <strong>${totalItemsInThemes}</strong>
              </div>
            </div>
          </div>
        </div>
        
        <div class="daily-banner-right">
          <!-- Books vector drawing -->
          <div class="banner-books-wrapper">
            <svg viewBox="0 0 160 120" class="banner-books-svg">
              <ellipse cx="80" cy="95" rx="55" ry="12" fill="rgba(16,185,129,0.06)" />
              <path d="M 35 75 L 115 75 C 120 75, 120 87, 115 87 L 35 87 C 30 87, 30 75, 35 75 Z" fill="#eed9b3" stroke="#d4b483" stroke-width="1" />
              <path d="M 32 73 L 112 73 L 112 85 L 32 85 Z" fill="#65a30d" />
              <g transform="rotate(-6 80 60)">
                <path d="M 45 45 L 125 45 C 130 45, 130 57, 125 57 L 45 57 C 40 57, 40 45, 45 45 Z" fill="#fafaf9" />
                <path d="M 40 43 L 120 43 L 120 55 L 40 55 Z" fill="#15803d" />
                <text x="65" y="52" fill="#eed9b3" font-size="8" font-weight="bold" font-family="var(--font-zh)">汉语</text>
              </g>
              <line x1="100" y1="35" x2="60" y2="85" stroke="#78350f" stroke-width="3.5" stroke-linecap="round" />
              <polygon points="58,88 62,82 56,80" fill="#0f172a" />
              <path d="M 115 80 C 115 90, 125 90, 125 80 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
              <ellipse cx="120" cy="78" rx="5" ry="2" fill="#15803d" opacity="0.6" />
            </svg>
          </div>
          <button id="dailyStartBtn" class="btn-start-daily" type="button">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Bắt đầu học
          </button>
        </div>
      </div>
      
      <!-- Search and Filter row -->
      <div class="daily-filter-row">
        <div class="daily-search-wrapper">
          <span class="search-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input type="text" id="dailySearchInput" placeholder="Tìm chủ đề..." value="${escapeAttr(state.dailySearchQuery)}" />
        </div>
        
        <div class="daily-filter-tabs">
          <button class="${state.dailyFilterTab === "all" ? "active" : ""}" data-daily-filter="all" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            Tất cả
          </button>
          <button class="${state.dailyFilterTab === "pho-bien" ? "active" : ""}" data-daily-filter="pho-bien" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>
            </svg>
            Phổ biến
          </button>
          <button class="${state.dailyFilterTab === "giao-tiep" ? "active" : ""}" data-daily-filter="giao-tiep" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Giao tiếp
          </button>
          <button class="${state.dailyFilterTab === "cong-viec" ? "active" : ""}" data-daily-filter="cong-viec" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Công việc
          </button>
          <button class="${state.dailyFilterTab === "du-lich" ? "active" : ""}" data-daily-filter="du-lich" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1.85-2H18l-5-4H9l3 4H7L5 4H3l2 4H3v2h2l-2 4h2l2-4h5l-3 4h4l5-4h1.15A2 2 0 0 0 21 16z"/>
            </svg>
            Du lịch
          </button>
        </div>
      </div>
      
      <!-- Cards Grid -->
      <div class="daily-theme-grid">
        ${renderDailyThemesListHTML()}
      </div>

      <!-- Bottom wave & pagoda decoration -->
      <div class="daily-bottom-decor">
        <svg class="decor-pagoda-svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
          <!-- Left waves -->
          <path d="M 0 100 Q 125 70 250 100 T 500 100" fill="none" stroke="rgba(14, 168, 85, 0.35)" stroke-width="2" />
          <path d="M 0 110 Q 125 85 250 110 T 500 110" fill="none" stroke="rgba(14, 168, 85, 0.25)" stroke-width="1.5" />
          <!-- Right waves -->
          <path d="M 500 100 Q 625 70 750 100 T 1000 100" fill="none" stroke="rgba(14, 168, 85, 0.35)" stroke-width="2" />
          <path d="M 500 110 Q 625 85 750 110 T 1000 110" fill="none" stroke="rgba(14, 168, 85, 0.25)" stroke-width="1.5" />
          <!-- Pagoda silhouette in center -->
          <g transform="translate(485, 20) scale(0.65)" fill="rgba(14, 168, 85, 0.45)">
            <!-- Top spire -->
            <path d="M 23 0 L 23 20 L 21 20 L 21 25 L 25 25 L 25 20 L 23 20" />
            <circle cx="23" cy="5" r="2" />
            <circle cx="23" cy="11" r="2.5" />
            <!-- Tier 3 roof -->
            <path d="M 23 22 L 5 35 Q 23 30 41 35 Z" />
            <!-- Tier 3 body -->
            <rect x="15" y="33" width="16" height="12" />
            <!-- Tier 2 roof -->
            <path d="M 23 42 L 2 58 Q 23 52 44 58 Z" />
            <!-- Tier 2 body -->
            <rect x="12" y="55" width="22" height="15" />
            <!-- Tier 1 roof -->
            <path d="M 23 66 L 0 88 Q 23 80 46 88 Z" />
            <!-- Tier 1 body -->
            <rect x="8" y="84" width="30" height="20" />
            <!-- Base/Platform -->
            <rect x="4" y="104" width="38" height="6" rx="2" />
          </g>
        </svg>
      </div>
    </section>
  `;
}

function resetPractice() {
  const itemNow = currentItem();
  const promptVariant = state.mode === "dictation" ? "dictation" : getPromptSizeVariant(itemNow.vi);
  state.activeWord = 0;
  state.activeInput = "";
  state.slotProgress = itemNow.words.map(() => 0);
  state.lastBadInput = "";
  state.solved = itemNow.words.map(() => false);
  state.complete = false;
  $("#burstLayer").innerHTML = "";
}

function startPractice(options = {}) {
  if (options.lessonId) {
    state.module = "hsk";
    state.lessonId = options.lessonId;
    const foundLevel = Object.keys(hskLevels).find((level) => hskLevels[level].some((lessonItem) => lessonItem.id === options.lessonId));
    if (foundLevel) state.level = foundLevel;
  }
  if (options.themeId) {
    state.module = "daily";
    state.themeId = options.themeId;
  }
  state.mode = options.mode || "translate";
  state.index = 0;
  state.score = 0;
  resetPractice();
  renderPractice();
  setScreen("practice");
  setTimeout(() => {
    if (state.mode === "translate") speak();
    focusInput();
  }, 100);
}

function renderPractice() {
  const collection = currentCollection();
  const itemNow = currentItem();
  const promptVariant = state.mode === "dictation" ? "dictation" : getPromptSizeVariant(itemNow.vi);
  screens.practice.innerHTML = `
    <header class="practice-top">
      <button id="practiceCloseBtn" class="practice-close-btn" type="button" aria-label="Close">&times;</button>  
      <div class="practice-meta">
        <strong>${collection.title}</strong>
        <span>${state.index + 1}/${collection.items.length}</span>
      </div>
      <div class="thin-progress"><span style="width:${((state.index + 1) / collection.items.length) * 100}%"></span></div>
      <div class="mode-switch" aria-label="${t("modeLabel")}">
        <button class="${state.mode === "translate" ? "active" : ""}" data-mode="translate" type="button">${t("translate")}</button>
        <button class="${state.mode === "dictation" ? "active" : ""}" data-mode="dictation" type="button">${t("dictation")}</button>
      </div>
    </header>
    <section class="practice-layout">
      <section class="exercise-card">
        <span class="stage-pill">${t(stageKey[itemNow.stage])}</span>
        <p>${state.mode === "translate" ? t("translateHint") : t("dictationHint")}</p>
        <h1 class="practice-prompt practice-prompt--${promptVariant}">${state.mode === "dictation" ? "听一听" : itemNow.vi}</h1>
        <div class="slot-row">
          ${itemNow.words.map((word, index) => {
    const active = practiceRules.shouldRenderAnswerInput(state, index);
    const posLabel = getDisplayPosLabel(word.pos);
    return `
              <div class="answer-slot color-${index % 6} ${active ? "active" : ""} ${(state.slotProgress[index] || 0) > 0 ? "progress" : ""} ${state.solved[index] ? "solved" : ""}">
                <div class="slot-line">
                  <i class="slot-progress-fill" style="width:${slotProgressPercent(index, word)}"></i>
                  ${active ? `<input id="answerInput" placeholder="${t("inputPlaceholder")}" autocomplete="off" inputmode="latin" value="${escapeAttr(state.activeInput)}" />` : `<strong>${state.solved[index] ? word.text : ""}</strong><small>${state.solved[index] ? word.tone : ""}</small>`}
                </div>
                ${active && !state.solved[index] ? `<span class="slot-progress-text">${slotProgressText(index, word)}</span>` : ""}
                ${practiceRules.shouldShowSlotMeta(state, index) && posLabel ? `<span>${posLabel} · ${word.vi}</span>` : ""}
              </div>
            `;
  }).join("")}
        </div>
        ${shouldShowTeacherPreview(state)
      ? `<div class="teacher-preview">
          <span>${t("teacherPreview")}</span>
          <strong>${itemNow.hanzi}</strong>
          <em>${itemNow.tone}</em>
        </div>`
      : ""
    }
        <p id="feedback" class="feedback ${state.complete ? "good" : ""}">${state.complete ? t("continuePrompt") : ""}</p>
      </section>
      <aside class="memory-panel ${state.complete ? "ready" : ""}">
        <p class="eyebrow">${t("answerTitle")}</p>
        <strong>${state.complete ? itemNow.hanzi : "?"}</strong>
        <span>${state.complete ? itemNow.tone : itemNow.stage.toUpperCase()}</span>
        <p>${state.complete ? itemNow.vi : state.lang === "vi" ? "Trả lời đúng để mở thẻ ghi nhớ." : "答对后打开记忆卡。"}</p>
        <div>
          ${practiceRules.shouldShowMemoryDetails(state) ? itemNow.words.map((word) => { const posLabel = getDisplayPosLabel(word.pos); const detailParts = [word.text, word.tone, posLabel, word.vi].filter(Boolean); return `<em>${detailParts.join(" · ")}</em>`; }).join("") : ""}
        </div>
      </aside>
    </section>
    <footer class="function-dock">
      <button id="playBtn" type="button"><span>▶</span>${t("play")}</button>
      <button id="slowBtn" type="button"><span>◷</span>${t("slow")}</button>
      <button id="saveBtn" type="button"><span>★</span>${t("favorite")}</button>
      <button id="answerBtn" type="button"><span>?</span>${t("showAnswer")}</button>
      <button id="nextBtn" class="primary" type="button"><span>↵</span>${t("next")}</button>
    </footer>
  `;
  focusInput();
}

function focusInput() {
  $("#answerInput")?.focus();
}

function setActiveSlotProgress(match) {
  if (!match || match.kind !== "progress") return;
  state.slotProgress[match.start] = Math.min(match.inputLength, match.totalLength);
  const activeSlot = $(".answer-slot.active");
  const fill = activeSlot?.querySelector(".slot-progress-fill");
  const text = activeSlot?.querySelector(".slot-progress-text");
  const itemNow = currentItem();
  const word = itemNow.words[match.start];
  activeSlot?.classList.add("progress");
  activeSlot?.classList.remove("error");
  if (fill) fill.style.width = slotProgressPercent(match.start, word);
  if (text) text.textContent = slotProgressText(match.start, word);
}

function setInputFeedback(kind, message = "") {
  const feedbackNode = $("#feedback");
  if (!feedbackNode) return;
  feedbackNode.textContent = message;
  feedbackNode.className = `feedback ${kind || ""}`.trim();
}

function handleLiveAnswerInput(value) {
  if (state.complete) return;
  state.activeInput = value;
  const itemNow = currentItem();
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(value, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;

  if (!String(value || "").trim()) {
    state.slotProgress[state.activeWord] = 0;
    state.lastBadInput = "";
    $(".answer-slot.active")?.classList.remove("progress", "error");
    setInputFeedback("", "");
    return;
  }

  if (match?.kind === "full" || match?.kind === "partial") {
    submitAnswer(value);
    return;
  }

  if (match?.kind === "progress") {
    setActiveSlotProgress(match);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }

  $(".answer-slot.active")?.classList.add("error");
  setInputFeedback("bad", state.lang === "vi" ? "Pinyin chưa khớp." : "拼音不匹配。");
  if (state.lastBadInput !== value) {
    playTone("error");
    state.lastBadInput = value;
  }
}

function submitAnswer(value) {
  if (state.complete) {
    nextItem();
    return;
  }
  const itemNow = currentItem();
  const answer = value || $("#answerInput")?.value || "";
  if (!answer.trim()) return;
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(answer, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  if (match?.kind === "full" || isMatch(answer, itemNow.pinyin, itemNow.hanzi)) {
    state.solved = itemNow.words.map(() => true);
    state.slotProgress = itemNow.words.map((word) => slotPinyinLength(word));
    state.activeInput = "";
    finishItem({ autoAdvance: true });
    return;
  }
  if (match?.kind === "partial" && match.count > 0) {
    const start = Number.isInteger(match.start) ? match.start : state.activeWord;
    for (let index = start; index < Math.min(itemNow.words.length, start + match.count); index += 1) {
      state.solved[index] = true;
      state.slotProgress[index] = slotPinyinLength(itemNow.words[index]);
    }
    state.activeInput = "";
    state.lastBadInput = "";
    playTone("correct");
    const nextUnsolved = state.solved.findIndex((solved) => !solved);
    if (nextUnsolved !== -1) {
      state.activeWord = nextUnsolved;
      renderPractice();
      const remaining = state.solved.filter((solved) => !solved).length;
      const recognized = match.tokenCount || match.count;
      const feedback = state.lang === "vi"
        ? `Đã nhận ${recognized} phần, còn ${remaining} phần.`
        : `已识别 ${recognized} 个，还差 ${remaining} 个。`;
      const feedbackNode = $("#feedback");
      if (feedbackNode) {
        feedbackNode.textContent = feedback;
        feedbackNode.className = "feedback good";
      }
    } else {
      finishItem({ autoAdvance: true });
    }
    return;
  }
  if (match?.kind === "progress") {
    setActiveSlotProgress(match);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }
  state.wrong.add(`${currentCollection().id}:${state.index}`);
  saveState();
  $("#feedback").textContent = t("bad");
  $("#feedback").className = "feedback bad";
  playTone("error");
}

function canSubmitCurrentAnswer(value) {
  const answer = value || $("#answerInput")?.value || "";
  if (!answer.trim()) return false;
  const itemNow = currentItem();
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(answer, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  if (match?.kind === "full" || match?.kind === "partial") return true;
  return isMatch(answer, itemNow.pinyin, itemNow.hanzi);
}

function finishItem(options = {}) {
  state.complete = true;
  state.score += 100;
  renderPractice();
  burst();
  playTone("success");
  if (options.autoAdvance) {
    setTimeout(() => speak(), 360);
  }
}

function nextItem() {
  const collection = currentCollection();
  $("#burstLayer").innerHTML = "";
  if (state.index >= collection.items.length - 1) {
    state.completed.add(collection.id);
    saveState();
    renderComplete();
    setScreen("complete");
    return;
  }
  state.index += 1;
  resetPractice();
  renderPractice();
  if (state.mode === "translate") setTimeout(speak, 120);
}

function showAnswer() {
  state.solved = currentItem().words.map(() => true);
  finishItem();
}

function renderComplete() {
  const collection = currentCollection();
  screens.complete.innerHTML = `
    <section class="complete-card">
      <span class="trophy">✓</span>
      <h1>${t("completeTitle")}</h1>
      <p>${t("completeSub")}</p>
      <div class="complete-stats">
        <span><strong>${collection.items.length}</strong>${t("itemCount")}</span>
        <span><strong>${state.score}</strong>XP</span>
        <span><strong>${state.wrong.size}</strong>${t("wrong")}</span>
      </div>
      <div class="complete-actions">
        <button class="secondary" data-complete="home" type="button">${t("backHome")}</button>
        <button class="primary" data-complete="next" type="button">${t("nextLesson")}</button>
      </div>
    </section>
  `;
}

function chooseChineseVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  preferredChineseVoice = globalThis.speechConfig?.choosePreferredChineseVoice
    ? globalThis.speechConfig.choosePreferredChineseVoice(voices)
    : voices.find((voice) => voice.lang?.toLowerCase().startsWith("zh")) || null;
  return preferredChineseVoice;
}

function speak() {
  const config = globalThis.speechConfig?.getSpeechPlaybackConfig
    ? globalThis.speechConfig.getSpeechPlaybackConfig({ slow: slowSpeech, stage: currentItem().stage })
    : { lang: "zh-CN", rate: slowSpeech ? 0.48 : currentItem().stage === "sentence" ? 0.84 : 0.98, pitch: 1 };
  const utterance = new SpeechSynthesisUtterance(currentItem().hanzi);
  utterance.lang = config.lang;
  utterance.voice = preferredChineseVoice || chooseChineseVoice();
  utterance.rate = config.rate;
  utterance.pitch = config.pitch;
  window.speechSynthesis?.cancel();
  window.speechSynthesis?.speak(utterance);
  slowSpeech = false;
}

function ensureAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
}

function playTone(kind) {
  ensureAudio();
  if (!audioContext) return;
  const pattern = globalThis.soundEffects?.getTonePattern
    ? globalThis.soundEffects.getTonePattern(kind)
    : { frequencies: [1250], waveform: "square", volume: 0.012, duration: 0.038, step: 0.034, attack: 0.004 };
  const now = audioContext.currentTime;
  pattern.frequencies.forEach((freq, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * pattern.step;
    osc.type = pattern.waveform;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(pattern.volume, start + pattern.attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + pattern.duration);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(start);
    osc.stop(start + pattern.duration + 0.02);
  });
}

function burst() {
  const layer = $("#burstLayer");
  layer.innerHTML = "";
  for (let i = 0; i < 38; i += 1) {
    const part = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 38;
    const dist = 80 + Math.random() * 140;
    part.className = "particle";
    part.style.left = `${window.innerWidth / 2}px`;
    part.style.top = `${window.innerHeight / 2}px`;
    part.style.setProperty("--x", `${Math.cos(angle) * dist}px`);
    part.style.setProperty("--y", `${Math.sin(angle) * dist}px`);
    layer.appendChild(part);
    part.addEventListener("animationend", () => part.remove());
  }
}

function bindEvents() {
  $("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "vi" ? "zh" : "vi";
    saveState();
    renderAll();
  });
  const menuToggleBtn = $("#menuToggleBtn");
  const mobileMenu = $("#mobileMenu");
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
  $("#backBtn").addEventListener("click", () => {
    if (state.screen === "practice" || state.screen === "complete") {
      if (state.fromRoadmap) {
        renderRoadmap();
        setScreen("roadmap");
      } else {
        renderCourse();
        setScreen("course");
      }
    } else if (state.screen === "course") {
      setScreen("home");
    }
  });
  $("#app").addEventListener("click", (event) => {
    // Mobile menu handlers
    const mobileRoadmapBtn = event.target.closest("#mobileRoadmapBtn");
    if (mobileRoadmapBtn) {
      state.fromRoadmap = false;
      renderRoadmap();
      setScreen("roadmap");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileHskBtn = event.target.closest("#mobileHskBtn");
    if (mobileHskBtn) {
      state.fromRoadmap = false;
      state.module = "hsk";
      renderCourse();
      setScreen("course");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileDailyBtn = event.target.closest("#mobileDailyBtn");
    if (mobileDailyBtn) {
      state.fromRoadmap = false;
      state.module = "daily";
      renderCourse();
      setScreen("course");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileAdminBtn = event.target.closest("#mobileAdminBtn");
    if (mobileAdminBtn) {
      if (!isAdminUser()) return;
      state.fromRoadmap = false;
      renderAdmin();
      setScreen("admin");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const loginBtn = event.target.closest("#loginBtn") || event.target.closest("#mobileLoginBtn") || event.target.closest("#sidebarLoginBtn");
    if (loginBtn) {
      if (!state.user) {
        showModal("login");
      }
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const registerBtn = event.target.closest("#registerBtn") || event.target.closest("#mobileRegisterBtn") || event.target.closest("#sidebarRegisterBtn");
    if (registerBtn) {
      if (state.user) {
        state.user = null;
        saveState();
        renderChrome();
      } else {
        showModal("register");
      }
      $("#mobileMenu")?.classList.remove("active");
      return;
    }

    // Middle Nav Items Click Handlers
    const navRoadmapBtn = event.target.closest("#navRoadmapBtn");
    if (navRoadmapBtn) {
      state.fromRoadmap = false;
      renderRoadmap();
      setScreen("roadmap");
      return;
    }
    const navHskBtn = event.target.closest("#navHskBtn");
    if (navHskBtn) {
      state.fromRoadmap = false;
      state.module = "hsk";
      renderCourse();
      setScreen("course");
      return;
    }
    const navDailyBtn = event.target.closest("#navDailyBtn");
    if (navDailyBtn) {
      state.fromRoadmap = false;
      state.module = "daily";
      renderCourse();
      setScreen("course");
      return;
    }
    const navAdminBtn = event.target.closest("#navAdminBtn");
    if (navAdminBtn) {
      if (!isAdminUser()) return;
      state.fromRoadmap = false;
      renderAdmin();
      setScreen("admin");
      return;
    }

    const adminLoadUsersBtn = event.target.closest("#adminLoadUsersBtn") || event.target.closest("#adminRefreshBtn");
    if (adminLoadUsersBtn) {
      state.adminKey = $("#adminKeyInput")?.value.trim() || state.adminKey;
      saveState();
      loadAdminUsers();
      return;
    }

    const adminSaveUser = event.target.closest(".admin-save-user");
    if (adminSaveUser) {
      const row = adminSaveUser.closest("[data-user-id]");
      const userId = row.dataset.userId;
      const payload = {
        fullName: row.querySelector('[data-field="fullName"]').value.trim(),
        email: row.querySelector('[data-field="email"]').value.trim(),
        role: row.querySelector('[data-field="role"]').value,
        isActive: row.querySelector('[data-field="isActive"]').checked,
      };
      state.adminStatus = "Đang lưu thay đổi...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: { "X-Admin-Key": state.adminKey },
        body: JSON.stringify(payload),
      })
        .then(() => loadAdminUsers())
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminDeleteUser = event.target.closest(".admin-delete-user");
    if (adminDeleteUser) {
      const row = adminDeleteUser.closest("[data-user-id]");
      const email = row.querySelector('[data-field="email"]').value.trim();
      if (!confirm(`Xóa tài khoản ${email}?`)) return;
      state.adminStatus = "Đang xóa người dùng...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(row.dataset.userId)}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": state.adminKey },
      })
        .then(() => loadAdminUsers())
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    if (event.target.closest("#heroStartBtn") || event.target.closest("#heroCourseBtn")) {
      state.fromRoadmap = false;
      renderRoadmap();
      setScreen("roadmap");
      return;
    }

    // Roadmap Day clicks
    const roadmapDay = event.target.closest("[data-roadmap-day]");
    if (roadmapDay) {
      const lessonId = roadmapDay.dataset.lessonId;
      const themeId = roadmapDay.dataset.themeId;
      state.fromRoadmap = true;
      if (lessonId) {
        startPractice({ lessonId, mode: "translate" });
      } else if (themeId) {
        startPractice({ themeId, mode: "translate" });
      }
      return;
    }

    const benefitBtn = event.target.closest("[data-benefit]");
    if (benefitBtn) {
      const benefitType = benefitBtn.dataset.benefit;
      if (benefitType === "communication") {
        state.module = "daily";
      } else {
        state.module = "hsk";
      }
      state.fromRoadmap = false;
      renderCourse();
      setScreen("course");
      return;
    }
    const footerNav = event.target.closest("[data-footer-nav]");
    if (footerNav) {
      event.preventDefault();
      const navType = footerNav.dataset.footerNav;
      if (navType === "course") {
        state.module = "hsk";
        state.fromRoadmap = false;
        renderCourse();
        setScreen("course");
      } else if (navType === "blog") {
        alert(state.lang === "vi" ? "Tính năng Blog đang được phát triển!" : "博客功能正在开发中！");
      }
      return;
    }

    const quickLesson = event.target.closest("[data-quick-lesson]");
    if (quickLesson) {
      startPractice({ lessonId: quickLesson.dataset.quickLesson, mode: "translate" });
      return;
    }
    const moduleBtn = event.target.closest("[data-module]");
    if (moduleBtn) {
      state.module = moduleBtn.dataset.module;
      renderCourse();
      setScreen("course");
      return;
    }
    const levelBtn = event.target.closest("[data-level]");
    if (levelBtn) {
      state.level = levelBtn.dataset.level;
      renderHskCourse();
      return;
    }
    const lessonBtn = event.target.closest("[data-lesson]");
    if (lessonBtn) {
      startPractice({ lessonId: lessonBtn.dataset.lesson, mode: "translate" });
      return;
    }
    const themeBtn = event.target.closest("[data-theme]");
    if (themeBtn) {
      startPractice({ themeId: themeBtn.dataset.theme, mode: "translate" });
      return;
    }

    const practiceCloseBtn = event.target.closest("#practiceCloseBtn");
    if (practiceCloseBtn) {
      showQuitModal();
      return;
    }
    const modeBtn = event.target.closest("[data-mode]");
    if (modeBtn) {
      state.mode = modeBtn.dataset.mode;
      resetPractice();
      renderPractice();
      if (state.mode === "dictation") speak();
      return;
    }
    if (event.target.closest("#playBtn")) speak();
    if (event.target.closest("#slowBtn")) {
      slowSpeech = true;
      speak();
    }
    if (event.target.closest("#answerBtn")) showAnswer();
    if (event.target.closest("#nextBtn")) nextItem();
    if (event.target.closest("#saveBtn")) {
      state.saved.add(currentItem().hanzi);
      saveState();
      playTone("correct");
    }
    const completeBtn = event.target.closest("[data-complete]");
    if (completeBtn) {
      if (completeBtn.dataset.complete === "home") {
        if (state.fromRoadmap) {
          renderRoadmap();
          setScreen("roadmap");
        } else {
          renderHome();
          setScreen("home");
        }
      } else {
        if (state.fromRoadmap) {
          renderRoadmap();
          setScreen("roadmap");
        } else {
          renderCourse();
          setScreen("course");
        }
      }
      return;
    }

    // Redesigned HSK course click handlers
    const hskContinueBtn = event.target.closest("#hskContinueBtn");
    if (hskContinueBtn) {
      const incompleteLesson = hskLevels[state.level].find(l => !state.completed.has(l.id)) || hskLevels[state.level][0];
      if (incompleteLesson) {
        startPractice({ lessonId: incompleteLesson.id, mode: "translate" });
      }
      return;
    }

    const hskFilterBtn = event.target.closest("[data-hsk-filter]");
    if (hskFilterBtn) {
      state.hskFilterTab = hskFilterBtn.dataset.hskFilter;
      document.querySelectorAll("[data-hsk-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.hskFilter === state.hskFilterTab);
      });
      const listContainer = $(".hsk-lessons-list");
      if (listContainer) {
        listContainer.innerHTML = renderHskLessonListHTML();
      }
      return;
    }

    // Redesigned daily themes click handlers
    const dailyStartBtn = event.target.closest("#dailyStartBtn");
    if (dailyStartBtn) {
      const firstTheme = dailyThemes.find(t => !state.completed.has(t.id)) || dailyThemes[0];
      if (firstTheme) {
        startPractice({ themeId: firstTheme.id, mode: "translate" });
      }
      return;
    }

    const dailyFilterBtn = event.target.closest("[data-daily-filter]");
    if (dailyFilterBtn) {
      state.dailyFilterTab = dailyFilterBtn.dataset.dailyFilter;
      document.querySelectorAll("[data-daily-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.dailyFilter === state.dailyFilterTab);
      });
      const gridContainer = $(".daily-theme-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderDailyThemesListHTML();
      }
      return;
    }
  });
  $("#app").addEventListener("keydown", (event) => {
    if (event.target.id === "answerInput") {
      if (event.key.length === 1 || event.key === "Backspace") playTone("key");
      if (event.key === "Enter") {
        event.preventDefault();
        submitAnswer(event.target.value);
        return;
      }
      if (event.key === " ") {
        const value = event.target.value;
        if (canSubmitCurrentAnswer(value)) {
          event.preventDefault();
          submitAnswer(value);
        }
      }
    }
  });
  $("#app").addEventListener("input", (event) => {
    if (event.target.id === "answerInput") {
      handleLiveAnswerInput(event.target.value);
    }
    if (event.target.id === "hskSearchInput") {
      state.hskSearchQuery = event.target.value;
      const listContainer = $(".hsk-lessons-list");
      if (listContainer) {
        listContainer.innerHTML = renderHskLessonListHTML();
      }
    }
    if (event.target.id === "dailySearchInput") {
      state.dailySearchQuery = event.target.value;
      const gridContainer = $(".daily-theme-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderDailyThemesListHTML();
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.target?.id === "answerInput") return;
    if (state.screen === "practice" && state.complete && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      nextItem();
    }
  });
}

function renderAll() {
  renderChrome();
  renderHome();
  if (state.screen === "roadmap") renderRoadmap();
  if (state.screen === "course") renderCourse();
  if (state.screen === "practice") renderPractice();
  if (state.screen === "complete") renderComplete();
  if (state.screen === "admin") renderAdmin();
}

function init() {
  console.info(VIETNAMESE_QA_HOOK);
  bindEvents();
  renderAll();
  setScreen("home");
}

init();
