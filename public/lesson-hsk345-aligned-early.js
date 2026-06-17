(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  for (const [level, lessons] of Object.entries(data.levels)) {
    root.lessonContent[level] = root.lessonContent[level] || {};
    for (const lesson of lessons) {
      root.lessonContent[level][lesson.id] = {
        id: lesson.id,
        no: lesson.no,
        title: lesson.titleZh,
        titleZh: lesson.titleZh,
        titleVi: lesson.titleVi,
        items: lesson.items,
      };
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
  "source": "Textbook alignment candidate - needs human PDF/OCR verification",
  "levels": {
    "HSK3": [
      {
        "id": "hsk3-l1",
        "no": 1,
        "titleZh": "周末你有什么打算",
        "titleVi": "Cuối tuần bạn có dự định gì",
        "items": [
          {
            "stage": "word",
            "vi": "cuối tuần",
            "hanzi": "周末",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhōumò",
                "tone": "zhōumò",
                "pos": "word",
                "vi": "cuối tuần"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhōumò",
            "tone": "zhōumò"
          },
          {
            "stage": "word",
            "vi": "dự định, định",
            "hanzi": "打算",
            "words": [
              {
                "text": "打算",
                "pinyin": "dǎsuàn",
                "tone": "dǎsuàn",
                "pos": "word",
                "vi": "dự định, định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dǎsuàn",
            "tone": "dǎsuàn"
          },
          {
            "stage": "word",
            "vi": "chơi",
            "hanzi": "玩儿",
            "words": [
              {
                "text": "玩儿",
                "pinyin": "wánér",
                "tone": "wánér",
                "pos": "word",
                "vi": "chơi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wánér",
            "tone": "wánér"
          },
          {
            "stage": "word",
            "vi": "phim",
            "hanzi": "电影",
            "words": [
              {
                "text": "电影",
                "pinyin": "diànyǐng",
                "tone": "diànyǐng",
                "pos": "word",
                "vi": "phim"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "diànyǐng",
            "tone": "diànyǐng"
          },
          {
            "stage": "word",
            "vi": "đồ uống",
            "hanzi": "饮料",
            "words": [
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "word",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yǐnliào",
            "tone": "yǐnliào"
          },
          {
            "stage": "word",
            "vi": "bia",
            "hanzi": "啤酒",
            "words": [
              {
                "text": "啤酒",
                "pinyin": "píjiǔ",
                "tone": "píjiǔ",
                "pos": "word",
                "vi": "bia"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "píjiǔ",
            "tone": "píjiǔ"
          },
          {
            "stage": "word",
            "vi": "tham gia",
            "hanzi": "参加",
            "words": [
              {
                "text": "参加",
                "pinyin": "cānjiā",
                "tone": "cānjiā",
                "pos": "word",
                "vi": "tham gia"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "cānjiā",
            "tone": "cānjiā"
          },
          {
            "stage": "word",
            "vi": "mang theo",
            "hanzi": "带",
            "words": [
              {
                "text": "带",
                "pinyin": "dài",
                "tone": "dài",
                "pos": "word",
                "vi": "mang theo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dài",
            "tone": "dài"
          },
          {
            "stage": "word",
            "vi": "bài tập",
            "hanzi": "作业",
            "words": [
              {
                "text": "作业",
                "pinyin": "zuòyè",
                "tone": "zuòyè",
                "pos": "word",
                "vi": "bài tập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zuòyè",
            "tone": "zuòyè"
          },
          {
            "stage": "word",
            "vi": "ôn tập",
            "hanzi": "复习",
            "words": [
              {
                "text": "复习",
                "pinyin": "fùxí",
                "tone": "fùxí",
                "pos": "word",
                "vi": "ôn tập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fùxí",
            "tone": "fùxí"
          },
          {
            "stage": "phrase",
            "vi": "cuối tuần này",
            "hanzi": "这个周末",
            "words": [
              {
                "text": "这个",
                "pinyin": "zhège",
                "tone": "zhège",
                "pos": "phrase",
                "vi": "cuối tuần này"
              },
              {
                "text": "周末",
                "pinyin": "zhōumò",
                "tone": "zhōumò",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhège zhōumò",
            "tone": "zhège zhōumò"
          },
          {
            "stage": "phrase",
            "vi": "có dự định gì",
            "hanzi": "有什么打算",
            "words": [
              {
                "text": "有",
                "pinyin": "yǒu",
                "tone": "yǒu",
                "pos": "phrase",
                "vi": "có dự định gì"
              },
              {
                "text": "什么",
                "pinyin": "shénme",
                "tone": "shénme",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "打算",
                "pinyin": "dǎsuàn",
                "tone": "dǎsuàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yǒu shénme dǎsuàn",
            "tone": "yǒu shénme dǎsuàn"
          },
          {
            "stage": "phrase",
            "vi": "đi xem phim",
            "hanzi": "去看电影",
            "words": [
              {
                "text": "去",
                "pinyin": "qù",
                "tone": "qù",
                "pos": "phrase",
                "vi": "đi xem phim"
              },
              {
                "text": "看",
                "pinyin": "kàn",
                "tone": "kàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "电影",
                "pinyin": "diànyǐng",
                "tone": "diànyǐng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qù kàn diànyǐng",
            "tone": "qù kàn diànyǐng"
          },
          {
            "stage": "phrase",
            "vi": "mang một ít đồ uống",
            "hanzi": "带点儿饮料",
            "words": [
              {
                "text": "带",
                "pinyin": "dài",
                "tone": "dài",
                "pos": "phrase",
                "vi": "mang một ít đồ uống"
              },
              {
                "text": "点儿",
                "pinyin": "diǎnér",
                "tone": "diǎnér",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dài diǎnér yǐnliào",
            "tone": "dài diǎnér yǐnliào"
          },
          {
            "stage": "sentence",
            "vi": "Cuối tuần bạn có dự định gì?",
            "hanzi": "周末你有什么打算",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhōumò",
                "tone": "zhōumò",
                "pos": "sentence",
                "vi": "Cuối tuần bạn có dự định gì?"
              },
              {
                "text": "你有",
                "pinyin": "nǐyǒu",
                "tone": "nǐyǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "什么",
                "pinyin": "shénme",
                "tone": "shénme",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "打算",
                "pinyin": "dǎsuàn",
                "tone": "dǎsuàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhōumò nǐyǒu shénme dǎsuàn",
            "tone": "zhōumò nǐyǒu shénme dǎsuàn"
          },
          {
            "stage": "sentence",
            "vi": "Tôi định đi xem phim.",
            "hanzi": "我打算去看电影",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "sentence",
                "vi": "Tôi định đi xem phim."
              },
              {
                "text": "打算",
                "pinyin": "dǎsuàn",
                "tone": "dǎsuàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "去",
                "pinyin": "qù",
                "tone": "qù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "看",
                "pinyin": "kàn",
                "tone": "kàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "电影",
                "pinyin": "diànyǐng",
                "tone": "diànyǐng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ dǎsuàn qù kàn diànyǐng",
            "tone": "wǒ dǎsuàn qù kàn diànyǐng"
          },
          {
            "stage": "sentence",
            "vi": "Bạn mang một ít đồ uống đến nhé.",
            "hanzi": "你带点儿饮料来吧",
            "words": [
              {
                "text": "你",
                "pinyin": "nǐ",
                "tone": "nǐ",
                "pos": "sentence",
                "vi": "Bạn mang một ít đồ uống đến nhé."
              },
              {
                "text": "带",
                "pinyin": "dài",
                "tone": "dài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "点儿",
                "pinyin": "diǎnér",
                "tone": "diǎnér",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "来",
                "pinyin": "lái",
                "tone": "lái",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "吧",
                "pinyin": "ba",
                "tone": "ba",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nǐ dài diǎnér yǐnliào lái ba",
            "tone": "nǐ dài diǎnér yǐnliào lái ba"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi làm xong bài tập, tôi ôn tiếng Trung.",
            "hanzi": "我写完作业以后复习汉语",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "sentence",
                "vi": "Sau khi làm xong bài tập, tôi ôn tiếng Trung."
              },
              {
                "text": "写",
                "pinyin": "xiě",
                "tone": "xiě",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "完",
                "pinyin": "wán",
                "tone": "wán",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "作业",
                "pinyin": "zuòyè",
                "tone": "zuòyè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "以后",
                "pinyin": "yǐhòu",
                "tone": "yǐhòu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "复习",
                "pinyin": "fùxí",
                "tone": "fùxí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "汉语",
                "pinyin": "hànyǔ",
                "tone": "hànyǔ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ xiě wán zuòyè yǐhòu fùxí hànyǔ",
            "tone": "wǒ xiě wán zuòyè yǐhòu fùxí hànyǔ"
          },
          {
            "stage": "mixed",
            "vi": "Cuối tuần này tôi muốn đi xem phim.",
            "hanzi": "我这个周末想去看电影",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "mixed",
                "vi": "Cuối tuần này tôi muốn đi xem phim."
              },
              {
                "text": "这个",
                "pinyin": "zhège",
                "tone": "zhège",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "周末",
                "pinyin": "zhōumò",
                "tone": "zhōumò",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "想去",
                "pinyin": "xiǎngqù",
                "tone": "xiǎngqù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "看",
                "pinyin": "kàn",
                "tone": "kàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "电影",
                "pinyin": "diànyǐng",
                "tone": "diànyǐng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ zhège zhōumò xiǎngqù kàn diànyǐng",
            "tone": "wǒ zhège zhōumò xiǎngqù kàn diànyǐng"
          },
          {
            "stage": "mixed",
            "vi": "Cuối tuần bạn có dự định gì?",
            "hanzi": "你周末有什么打算",
            "words": [
              {
                "text": "你",
                "pinyin": "nǐ",
                "tone": "nǐ",
                "pos": "mixed",
                "vi": "Cuối tuần bạn có dự định gì?"
              },
              {
                "text": "周末",
                "pinyin": "zhōumò",
                "tone": "zhōumò",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "有",
                "pinyin": "yǒu",
                "tone": "yǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "什么",
                "pinyin": "shénme",
                "tone": "shénme",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "打算",
                "pinyin": "dǎsuàn",
                "tone": "dǎsuàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nǐ zhōumò yǒu shénme dǎsuàn",
            "tone": "nǐ zhōumò yǒu shénme dǎsuàn"
          }
        ]
      },
      {
        "id": "hsk3-l2",
        "no": 2,
        "titleZh": "他什么时候回来",
        "titleVi": "Khi nào anh ấy quay về",
        "items": [
          {
            "stage": "word",
            "vi": "lúc, thời điểm",
            "hanzi": "时候",
            "words": [
              {
                "text": "时候",
                "pinyin": "shíhòu",
                "tone": "shíhòu",
                "pos": "word",
                "vi": "lúc, thời điểm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shíhòu",
            "tone": "shíhòu"
          },
          {
            "stage": "word",
            "vi": "quay lại, trở về",
            "hanzi": "回来",
            "words": [
              {
                "text": "回来",
                "pinyin": "huílái",
                "tone": "huílái",
                "pos": "word",
                "vi": "quay lại, trở về"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "huílái",
            "tone": "huílái"
          },
          {
            "stage": "word",
            "vi": "sân bay",
            "hanzi": "机场",
            "words": [
              {
                "text": "机场",
                "pinyin": "jīchǎng",
                "tone": "jīchǎng",
                "pos": "word",
                "vi": "sân bay"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīchǎng",
            "tone": "jīchǎng"
          },
          {
            "stage": "word",
            "vi": "đón",
            "hanzi": "接",
            "words": [
              {
                "text": "接",
                "pinyin": "jiē",
                "tone": "jiē",
                "pos": "word",
                "vi": "đón"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiē",
            "tone": "jiē"
          },
          {
            "stage": "word",
            "vi": "đợi",
            "hanzi": "等",
            "words": [
              {
                "text": "等",
                "pinyin": "děng",
                "tone": "děng",
                "pos": "word",
                "vi": "đợi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "děng",
            "tone": "děng"
          },
          {
            "stage": "word",
            "vi": "đến muộn",
            "hanzi": "迟到",
            "words": [
              {
                "text": "迟到",
                "pinyin": "chídào",
                "tone": "chídào",
                "pos": "word",
                "vi": "đến muộn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chídào",
            "tone": "chídào"
          },
          {
            "stage": "word",
            "vi": "cuộc họp",
            "hanzi": "会议",
            "words": [
              {
                "text": "会议",
                "pinyin": "huìyì",
                "tone": "huìyì",
                "pos": "word",
                "vi": "cuộc họp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "huìyì",
            "tone": "huìyì"
          },
          {
            "stage": "word",
            "vi": "kết thúc",
            "hanzi": "结束",
            "words": [
              {
                "text": "结束",
                "pinyin": "jiéshù",
                "tone": "jiéshù",
                "pos": "word",
                "vi": "kết thúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiéshù",
            "tone": "jiéshù"
          },
          {
            "stage": "word",
            "vi": "vừa nãy",
            "hanzi": "刚才",
            "words": [
              {
                "text": "刚才",
                "pinyin": "gāngcái",
                "tone": "gāngcái",
                "pos": "word",
                "vi": "vừa nãy"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gāngcái",
            "tone": "gāngcái"
          },
          {
            "stage": "word",
            "vi": "một lát",
            "hanzi": "一会儿",
            "words": [
              {
                "text": "一",
                "pinyin": "yī",
                "tone": "yī",
                "pos": "word",
                "vi": "một lát"
              },
              {
                "text": "会",
                "pinyin": "huì",
                "tone": "huì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "儿",
                "pinyin": "ér",
                "tone": "ér",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yī huì ér",
            "tone": "yī huì ér"
          },
          {
            "stage": "phrase",
            "vi": "khi nào quay lại",
            "hanzi": "什么时候回来",
            "words": [
              {
                "text": "什么时候",
                "pinyin": "shénmeshíhòu",
                "tone": "shénmeshíhòu",
                "pos": "phrase",
                "vi": "khi nào quay lại"
              },
              {
                "text": "回来",
                "pinyin": "huílái",
                "tone": "huílái",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shénmeshíhòu huílái",
            "tone": "shénmeshíhòu huílái"
          },
          {
            "stage": "phrase",
            "vi": "đi sân bay đón người",
            "hanzi": "去机场接人",
            "words": [
              {
                "text": "去",
                "pinyin": "qù",
                "tone": "qù",
                "pos": "phrase",
                "vi": "đi sân bay đón người"
              },
              {
                "text": "机场",
                "pinyin": "jīchǎng",
                "tone": "jīchǎng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "接",
                "pinyin": "jiē",
                "tone": "jiē",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "人",
                "pinyin": "rén",
                "tone": "rén",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qù jīchǎng jiē rén",
            "tone": "qù jīchǎng jiē rén"
          },
          {
            "stage": "phrase",
            "vi": "sau khi cuộc họp kết thúc",
            "hanzi": "会议结束以后",
            "words": [
              {
                "text": "会议",
                "pinyin": "huìyì",
                "tone": "huìyì",
                "pos": "phrase",
                "vi": "sau khi cuộc họp kết thúc"
              },
              {
                "text": "结束",
                "pinyin": "jiéshù",
                "tone": "jiéshù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "以后",
                "pinyin": "yǐhòu",
                "tone": "yǐhòu",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "huìyì jiéshù yǐhòu",
            "tone": "huìyì jiéshù yǐhòu"
          },
          {
            "stage": "phrase",
            "vi": "đợi một lát",
            "hanzi": "等一会儿",
            "words": [
              {
                "text": "等",
                "pinyin": "děng",
                "tone": "děng",
                "pos": "phrase",
                "vi": "đợi một lát"
              },
              {
                "text": "一",
                "pinyin": "yī",
                "tone": "yī",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "会",
                "pinyin": "huì",
                "tone": "huì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "儿",
                "pinyin": "ér",
                "tone": "ér",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "děng yī huì ér",
            "tone": "děng yī huì ér"
          },
          {
            "stage": "sentence",
            "vi": "Khi nào anh ấy quay lại?",
            "hanzi": "他什么时候回来",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Khi nào anh ấy quay lại?"
              },
              {
                "text": "什么时候",
                "pinyin": "shénmeshíhòu",
                "tone": "shénmeshíhòu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "回来",
                "pinyin": "huílái",
                "tone": "huílái",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā shénmeshíhòu huílái",
            "tone": "tā shénmeshíhòu huílái"
          },
          {
            "stage": "sentence",
            "vi": "Tôi đi sân bay đón anh ấy.",
            "hanzi": "我去机场接他",
            "words": [
              {
                "text": "我去",
                "pinyin": "wǒqù",
                "tone": "wǒqù",
                "pos": "sentence",
                "vi": "Tôi đi sân bay đón anh ấy."
              },
              {
                "text": "机场",
                "pinyin": "jīchǎng",
                "tone": "jīchǎng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "接",
                "pinyin": "jiē",
                "tone": "jiē",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒqù jīchǎng jiē tā",
            "tone": "wǒqù jīchǎng jiē tā"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi cuộc họp kết thúc, anh ấy sẽ quay lại.",
            "hanzi": "会议结束以后他就回来",
            "words": [
              {
                "text": "会议",
                "pinyin": "huìyì",
                "tone": "huìyì",
                "pos": "sentence",
                "vi": "Sau khi cuộc họp kết thúc, anh ấy sẽ quay lại."
              },
              {
                "text": "结束",
                "pinyin": "jiéshù",
                "tone": "jiéshù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "以后",
                "pinyin": "yǐhòu",
                "tone": "yǐhòu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "就",
                "pinyin": "jiù",
                "tone": "jiù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "回来",
                "pinyin": "huílái",
                "tone": "huílái",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "huìyì jiéshù yǐhòu tā jiù huílái",
            "tone": "huìyì jiéshù yǐhòu tā jiù huílái"
          },
          {
            "stage": "sentence",
            "vi": "Vừa nãy anh ấy gọi điện cho tôi.",
            "hanzi": "刚才他给我打电话了",
            "words": [
              {
                "text": "刚才",
                "pinyin": "gāngcái",
                "tone": "gāngcái",
                "pos": "sentence",
                "vi": "Vừa nãy anh ấy gọi điện cho tôi."
              },
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "给",
                "pinyin": "gěi",
                "tone": "gěi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "打电话",
                "pinyin": "dǎdiànhuà",
                "tone": "dǎdiànhuà",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gāngcái tā gěi wǒ dǎdiànhuà liǎo",
            "tone": "gāngcái tā gěi wǒ dǎdiànhuà liǎo"
          },
          {
            "stage": "mixed",
            "vi": "Khi nào anh ấy quay lại?",
            "hanzi": "他什么时候回来",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "mixed",
                "vi": "Khi nào anh ấy quay lại?"
              },
              {
                "text": "什么时候",
                "pinyin": "shénmeshíhòu",
                "tone": "shénmeshíhòu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "回来",
                "pinyin": "huílái",
                "tone": "huílái",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā shénmeshíhòu huílái",
            "tone": "tā shénmeshíhòu huílái"
          },
          {
            "stage": "mixed",
            "vi": "Tôi đang đợi bạn ở sân bay.",
            "hanzi": "我在机场等你",
            "words": [
              {
                "text": "我在",
                "pinyin": "wǒzài",
                "tone": "wǒzài",
                "pos": "mixed",
                "vi": "Tôi đang đợi bạn ở sân bay."
              },
              {
                "text": "机场",
                "pinyin": "jīchǎng",
                "tone": "jīchǎng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "等",
                "pinyin": "děng",
                "tone": "děng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "你",
                "pinyin": "nǐ",
                "tone": "nǐ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒzài jīchǎng děng nǐ",
            "tone": "wǒzài jīchǎng děng nǐ"
          }
        ]
      },
      {
        "id": "hsk3-l3",
        "no": 3,
        "titleZh": "桌子上放着很多饮料",
        "titleVi": "Trên bàn có rất nhiều đồ uống",
        "items": [
          {
            "stage": "word",
            "vi": "cái bàn",
            "hanzi": "桌子",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuōzi",
                "tone": "zhuōzi",
                "pos": "word",
                "vi": "cái bàn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuōzi",
            "tone": "zhuōzi"
          },
          {
            "stage": "word",
            "vi": "phía trên, trên",
            "hanzi": "上",
            "words": [
              {
                "text": "上",
                "pinyin": "shàng",
                "tone": "shàng",
                "pos": "word",
                "vi": "phía trên, trên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shàng",
            "tone": "shàng"
          },
          {
            "stage": "word",
            "vi": "đặt, để",
            "hanzi": "放",
            "words": [
              {
                "text": "放",
                "pinyin": "fàng",
                "tone": "fàng",
                "pos": "word",
                "vi": "đặt, để"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fàng",
            "tone": "fàng"
          },
          {
            "stage": "word",
            "vi": "trợ từ chỉ trạng thái tiếp diễn",
            "hanzi": "着",
            "words": [
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "word",
                "vi": "trợ từ chỉ trạng thái tiếp diễn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhe",
            "tone": "zhe"
          },
          {
            "stage": "word",
            "vi": "đồ uống",
            "hanzi": "饮料",
            "words": [
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "word",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yǐnliào",
            "tone": "yǐnliào"
          },
          {
            "stage": "word",
            "vi": "cái cốc",
            "hanzi": "杯子",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bēizi",
                "tone": "bēizi",
                "pos": "word",
                "vi": "cái cốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bēizi",
            "tone": "bēizi"
          },
          {
            "stage": "word",
            "vi": "sữa bò",
            "hanzi": "牛奶",
            "words": [
              {
                "text": "牛奶",
                "pinyin": "niúnǎi",
                "tone": "niúnǎi",
                "pos": "word",
                "vi": "sữa bò"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "niúnǎi",
            "tone": "niúnǎi"
          },
          {
            "stage": "word",
            "vi": "trái cây",
            "hanzi": "水果",
            "words": [
              {
                "text": "水果",
                "pinyin": "shuǐguǒ",
                "tone": "shuǐguǒ",
                "pos": "word",
                "vi": "trái cây"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shuǐguǒ",
            "tone": "shuǐguǒ"
          },
          {
            "stage": "word",
            "vi": "bên cạnh",
            "hanzi": "旁边",
            "words": [
              {
                "text": "旁边",
                "pinyin": "pángbiān",
                "tone": "pángbiān",
                "pos": "word",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pángbiān",
            "tone": "pángbiān"
          },
          {
            "stage": "word",
            "vi": "sạch sẽ",
            "hanzi": "干净",
            "words": [
              {
                "text": "干净",
                "pinyin": "gānjìng",
                "tone": "gānjìng",
                "pos": "word",
                "vi": "sạch sẽ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gānjìng",
            "tone": "gānjìng"
          },
          {
            "stage": "phrase",
            "vi": "trên bàn",
            "hanzi": "桌子上",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuōzi",
                "tone": "zhuōzi",
                "pos": "phrase",
                "vi": "trên bàn"
              },
              {
                "text": "上",
                "pinyin": "shàng",
                "tone": "shàng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuōzi shàng",
            "tone": "zhuōzi shàng"
          },
          {
            "stage": "phrase",
            "vi": "đang để đồ uống",
            "hanzi": "放着饮料",
            "words": [
              {
                "text": "放",
                "pinyin": "fàng",
                "tone": "fàng",
                "pos": "phrase",
                "vi": "đang để đồ uống"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fàng zhe yǐnliào",
            "tone": "fàng zhe yǐnliào"
          },
          {
            "stage": "phrase",
            "vi": "rất nhiều cốc",
            "hanzi": "很多杯子",
            "words": [
              {
                "text": "很多",
                "pinyin": "hěnduō",
                "tone": "hěnduō",
                "pos": "phrase",
                "vi": "rất nhiều cốc"
              },
              {
                "text": "杯子",
                "pinyin": "bēizi",
                "tone": "bēizi",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hěnduō bēizi",
            "tone": "hěnduō bēizi"
          },
          {
            "stage": "phrase",
            "vi": "ở bên cạnh",
            "hanzi": "在旁边",
            "words": [
              {
                "text": "在",
                "pinyin": "zài",
                "tone": "zài",
                "pos": "phrase",
                "vi": "ở bên cạnh"
              },
              {
                "text": "旁边",
                "pinyin": "pángbiān",
                "tone": "pángbiān",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zài pángbiān",
            "tone": "zài pángbiān"
          },
          {
            "stage": "sentence",
            "vi": "Trên bàn có để rất nhiều đồ uống.",
            "hanzi": "桌子上放着很多饮料",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuōzi",
                "tone": "zhuōzi",
                "pos": "sentence",
                "vi": "Trên bàn có để rất nhiều đồ uống."
              },
              {
                "text": "上",
                "pinyin": "shàng",
                "tone": "shàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "放",
                "pinyin": "fàng",
                "tone": "fàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很多",
                "pinyin": "hěnduō",
                "tone": "hěnduō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuōzi shàng fàng zhe hěnduō yǐnliào",
            "tone": "zhuōzi shàng fàng zhe hěnduō yǐnliào"
          },
          {
            "stage": "sentence",
            "vi": "Cái cốc ở bên cạnh sữa.",
            "hanzi": "杯子在牛奶旁边",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bēizi",
                "tone": "bēizi",
                "pos": "sentence",
                "vi": "Cái cốc ở bên cạnh sữa."
              },
              {
                "text": "在",
                "pinyin": "zài",
                "tone": "zài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "牛奶",
                "pinyin": "niúnǎi",
                "tone": "niúnǎi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "旁边",
                "pinyin": "pángbiān",
                "tone": "pángbiān",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bēizi zài niúnǎi pángbiān",
            "tone": "bēizi zài niúnǎi pángbiān"
          },
          {
            "stage": "sentence",
            "vi": "Ở đây có trái cây và đồ uống.",
            "hanzi": "这里有水果和饮料",
            "words": [
              {
                "text": "这里",
                "pinyin": "zhèlǐ",
                "tone": "zhèlǐ",
                "pos": "sentence",
                "vi": "Ở đây có trái cây và đồ uống."
              },
              {
                "text": "有",
                "pinyin": "yǒu",
                "tone": "yǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "水果",
                "pinyin": "shuǐguǒ",
                "tone": "shuǐguǒ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "和",
                "pinyin": "hé",
                "tone": "hé",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhèlǐ yǒu shuǐguǒ hé yǐnliào",
            "tone": "zhèlǐ yǒu shuǐguǒ hé yǐnliào"
          },
          {
            "stage": "sentence",
            "vi": "Cái bàn rất sạch.",
            "hanzi": "桌子很干净",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuōzi",
                "tone": "zhuōzi",
                "pos": "sentence",
                "vi": "Cái bàn rất sạch."
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "干净",
                "pinyin": "gānjìng",
                "tone": "gānjìng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuōzi hěn gānjìng",
            "tone": "zhuōzi hěn gānjìng"
          },
          {
            "stage": "mixed",
            "vi": "Trên bàn có để rất nhiều đồ uống.",
            "hanzi": "桌子上放着很多饮料",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuōzi",
                "tone": "zhuōzi",
                "pos": "mixed",
                "vi": "Trên bàn có để rất nhiều đồ uống."
              },
              {
                "text": "上",
                "pinyin": "shàng",
                "tone": "shàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "放",
                "pinyin": "fàng",
                "tone": "fàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很多",
                "pinyin": "hěnduō",
                "tone": "hěnduō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "饮料",
                "pinyin": "yǐnliào",
                "tone": "yǐnliào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuōzi shàng fàng zhe hěnduō yǐnliào",
            "tone": "zhuōzi shàng fàng zhe hěnduō yǐnliào"
          },
          {
            "stage": "mixed",
            "vi": "Cái cốc ở bên cạnh sữa.",
            "hanzi": "杯子在牛奶旁边",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bēizi",
                "tone": "bēizi",
                "pos": "mixed",
                "vi": "Cái cốc ở bên cạnh sữa."
              },
              {
                "text": "在",
                "pinyin": "zài",
                "tone": "zài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "牛奶",
                "pinyin": "niúnǎi",
                "tone": "niúnǎi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "旁边",
                "pinyin": "pángbiān",
                "tone": "pángbiān",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bēizi zài niúnǎi pángbiān",
            "tone": "bēizi zài niúnǎi pángbiān"
          }
        ]
      },
      {
        "id": "hsk3-l4",
        "no": 4,
        "titleZh": "她总是笑着跟客人说话",
        "titleVi": "Cô ấy luôn mỉm cười nói chuyện với khách",
        "items": [
          {
            "stage": "word",
            "vi": "luôn luôn",
            "hanzi": "总是",
            "words": [
              {
                "text": "总是",
                "pinyin": "zǒngshì",
                "tone": "zǒngshì",
                "pos": "word",
                "vi": "luôn luôn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zǒngshì",
            "tone": "zǒngshì"
          },
          {
            "stage": "word",
            "vi": "cười",
            "hanzi": "笑",
            "words": [
              {
                "text": "笑",
                "pinyin": "xiào",
                "tone": "xiào",
                "pos": "word",
                "vi": "cười"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xiào",
            "tone": "xiào"
          },
          {
            "stage": "word",
            "vi": "trợ từ chỉ trạng thái",
            "hanzi": "着",
            "words": [
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "word",
                "vi": "trợ từ chỉ trạng thái"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhe",
            "tone": "zhe"
          },
          {
            "stage": "word",
            "vi": "với, cùng",
            "hanzi": "跟",
            "words": [
              {
                "text": "跟",
                "pinyin": "gēn",
                "tone": "gēn",
                "pos": "word",
                "vi": "với, cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gēn",
            "tone": "gēn"
          },
          {
            "stage": "word",
            "vi": "khách",
            "hanzi": "客人",
            "words": [
              {
                "text": "客人",
                "pinyin": "kèrén",
                "tone": "kèrén",
                "pos": "word",
                "vi": "khách"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kèrén",
            "tone": "kèrén"
          },
          {
            "stage": "word",
            "vi": "nói chuyện",
            "hanzi": "说话",
            "words": [
              {
                "text": "说话",
                "pinyin": "shuōhuà",
                "tone": "shuōhuà",
                "pos": "word",
                "vi": "nói chuyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shuōhuà",
            "tone": "shuōhuà"
          },
          {
            "stage": "word",
            "vi": "phục vụ",
            "hanzi": "服务",
            "words": [
              {
                "text": "服务",
                "pinyin": "fúwù",
                "tone": "fúwù",
                "pos": "word",
                "vi": "phục vụ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fúwù",
            "tone": "fúwù"
          },
          {
            "stage": "word",
            "vi": "nhiệt tình",
            "hanzi": "热情",
            "words": [
              {
                "text": "热情",
                "pinyin": "rèqíng",
                "tone": "rèqíng",
                "pos": "word",
                "vi": "nhiệt tình"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rèqíng",
            "tone": "rèqíng"
          },
          {
            "stage": "word",
            "vi": "nghiêm túc, cẩn thận",
            "hanzi": "认真",
            "words": [
              {
                "text": "认真",
                "pinyin": "rènzhēn",
                "tone": "rènzhēn",
                "pos": "word",
                "vi": "nghiêm túc, cẩn thận"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rènzhēn",
            "tone": "rènzhēn"
          },
          {
            "stage": "word",
            "vi": "quản lý, giám đốc",
            "hanzi": "经理",
            "words": [
              {
                "text": "经理",
                "pinyin": "jīnglǐ",
                "tone": "jīnglǐ",
                "pos": "word",
                "vi": "quản lý, giám đốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīnglǐ",
            "tone": "jīnglǐ"
          },
          {
            "stage": "phrase",
            "vi": "luôn mỉm cười",
            "hanzi": "总是笑着",
            "words": [
              {
                "text": "总是",
                "pinyin": "zǒngshì",
                "tone": "zǒngshì",
                "pos": "phrase",
                "vi": "luôn mỉm cười"
              },
              {
                "text": "笑",
                "pinyin": "xiào",
                "tone": "xiào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zǒngshì xiào zhe",
            "tone": "zǒngshì xiào zhe"
          },
          {
            "stage": "phrase",
            "vi": "nói chuyện với khách",
            "hanzi": "跟客人说话",
            "words": [
              {
                "text": "跟",
                "pinyin": "gēn",
                "tone": "gēn",
                "pos": "phrase",
                "vi": "nói chuyện với khách"
              },
              {
                "text": "客人",
                "pinyin": "kèrén",
                "tone": "kèrén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "说话",
                "pinyin": "shuōhuà",
                "tone": "shuōhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gēn kèrén shuōhuà",
            "tone": "gēn kèrén shuōhuà"
          },
          {
            "stage": "phrase",
            "vi": "phục vụ rất nhiệt tình",
            "hanzi": "服务很热情",
            "words": [
              {
                "text": "服务",
                "pinyin": "fúwù",
                "tone": "fúwù",
                "pos": "phrase",
                "vi": "phục vụ rất nhiệt tình"
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "热情",
                "pinyin": "rèqíng",
                "tone": "rèqíng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fúwù hěn rèqíng",
            "tone": "fúwù hěn rèqíng"
          },
          {
            "stage": "phrase",
            "vi": "làm việc rất nghiêm túc",
            "hanzi": "工作很认真",
            "words": [
              {
                "text": "工作",
                "pinyin": "gōngzuò",
                "tone": "gōngzuò",
                "pos": "phrase",
                "vi": "làm việc rất nghiêm túc"
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "认真",
                "pinyin": "rènzhēn",
                "tone": "rènzhēn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gōngzuò hěn rènzhēn",
            "tone": "gōngzuò hěn rènzhēn"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy luôn mỉm cười nói chuyện với khách.",
            "hanzi": "她总是笑着跟客人说话",
            "words": [
              {
                "text": "她",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Cô ấy luôn mỉm cười nói chuyện với khách."
              },
              {
                "text": "总是",
                "pinyin": "zǒngshì",
                "tone": "zǒngshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "笑",
                "pinyin": "xiào",
                "tone": "xiào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "跟",
                "pinyin": "gēn",
                "tone": "gēn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "客人",
                "pinyin": "kèrén",
                "tone": "kèrén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "说话",
                "pinyin": "shuōhuà",
                "tone": "shuōhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā zǒngshì xiào zhe gēn kèrén shuōhuà",
            "tone": "tā zǒngshì xiào zhe gēn kèrén shuōhuà"
          },
          {
            "stage": "sentence",
            "vi": "Nhân viên phục vụ này rất nhiệt tình.",
            "hanzi": "这个服务员很热情",
            "words": [
              {
                "text": "这个",
                "pinyin": "zhège",
                "tone": "zhège",
                "pos": "sentence",
                "vi": "Nhân viên phục vụ này rất nhiệt tình."
              },
              {
                "text": "服务",
                "pinyin": "fúwù",
                "tone": "fúwù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "员",
                "pinyin": "yuán",
                "tone": "yuán",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "热情",
                "pinyin": "rèqíng",
                "tone": "rèqíng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhège fúwù yuán hěn rèqíng",
            "tone": "zhège fúwù yuán hěn rèqíng"
          },
          {
            "stage": "sentence",
            "vi": "Quản lý nói cô ấy làm việc rất nghiêm túc.",
            "hanzi": "经理说她工作很认真",
            "words": [
              {
                "text": "经理",
                "pinyin": "jīnglǐ",
                "tone": "jīnglǐ",
                "pos": "sentence",
                "vi": "Quản lý nói cô ấy làm việc rất nghiêm túc."
              },
              {
                "text": "说",
                "pinyin": "shuō",
                "tone": "shuō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "她",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "工作",
                "pinyin": "gōngzuò",
                "tone": "gōngzuò",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "认真",
                "pinyin": "rènzhēn",
                "tone": "rènzhēn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīnglǐ shuō tā gōngzuò hěn rènzhēn",
            "tone": "jīnglǐ shuō tā gōngzuò hěn rènzhēn"
          },
          {
            "stage": "sentence",
            "vi": "Khách thích nói chuyện với cô ấy.",
            "hanzi": "客人喜欢跟她说话",
            "words": [
              {
                "text": "客人",
                "pinyin": "kèrén",
                "tone": "kèrén",
                "pos": "sentence",
                "vi": "Khách thích nói chuyện với cô ấy."
              },
              {
                "text": "喜欢",
                "pinyin": "xǐhuan",
                "tone": "xǐhuan",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "跟",
                "pinyin": "gēn",
                "tone": "gēn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "她",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "说话",
                "pinyin": "shuōhuà",
                "tone": "shuōhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kèrén xǐhuan gēn tā shuōhuà",
            "tone": "kèrén xǐhuan gēn tā shuōhuà"
          },
          {
            "stage": "mixed",
            "vi": "Cô ấy luôn mỉm cười nói chuyện với khách.",
            "hanzi": "她总是笑着跟客人说话",
            "words": [
              {
                "text": "她",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "mixed",
                "vi": "Cô ấy luôn mỉm cười nói chuyện với khách."
              },
              {
                "text": "总是",
                "pinyin": "zǒngshì",
                "tone": "zǒngshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "笑",
                "pinyin": "xiào",
                "tone": "xiào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "跟",
                "pinyin": "gēn",
                "tone": "gēn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "客人",
                "pinyin": "kèrén",
                "tone": "kèrén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "说话",
                "pinyin": "shuōhuà",
                "tone": "shuōhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā zǒngshì xiào zhe gēn kèrén shuōhuà",
            "tone": "tā zǒngshì xiào zhe gēn kèrén shuōhuà"
          },
          {
            "stage": "mixed",
            "vi": "vừa cười vừa nói chuyện",
            "hanzi": "笑着说话",
            "words": [
              {
                "text": "笑",
                "pinyin": "xiào",
                "tone": "xiào",
                "pos": "mixed",
                "vi": "vừa cười vừa nói chuyện"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "说话",
                "pinyin": "shuōhuà",
                "tone": "shuōhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xiào zhe shuōhuà",
            "tone": "xiào zhe shuōhuà"
          }
        ]
      },
      {
        "id": "hsk3-l5",
        "no": 5,
        "titleZh": "我最近越来越胖了",
        "titleVi": "Dạo này tôi ngày càng béo hơn",
        "items": [
          {
            "stage": "word",
            "vi": "gần đây, dạo này",
            "hanzi": "最近",
            "words": [
              {
                "text": "最近",
                "pinyin": "zuìjìn",
                "tone": "zuìjìn",
                "pos": "word",
                "vi": "gần đây, dạo này"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zuìjìn",
            "tone": "zuìjìn"
          },
          {
            "stage": "word",
            "vi": "càng ngày càng",
            "hanzi": "越来越",
            "words": [
              {
                "text": "越来越",
                "pinyin": "yuèláiyuè",
                "tone": "yuèláiyuè",
                "pos": "word",
                "vi": "càng ngày càng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yuèláiyuè",
            "tone": "yuèláiyuè"
          },
          {
            "stage": "word",
            "vi": "béo, mập",
            "hanzi": "胖",
            "words": [
              {
                "text": "胖",
                "pinyin": "pàng",
                "tone": "pàng",
                "pos": "word",
                "vi": "béo, mập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pàng",
            "tone": "pàng"
          },
          {
            "stage": "word",
            "vi": "vận động, tập thể thao",
            "hanzi": "运动",
            "words": [
              {
                "text": "运动",
                "pinyin": "yùndòng",
                "tone": "yùndòng",
                "pos": "word",
                "vi": "vận động, tập thể thao"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yùndòng",
            "tone": "yùndòng"
          },
          {
            "stage": "word",
            "vi": "rèn luyện, tập luyện",
            "hanzi": "锻炼",
            "words": [
              {
                "text": "锻炼",
                "pinyin": "duànliàn",
                "tone": "duànliàn",
                "pos": "word",
                "vi": "rèn luyện, tập luyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "duànliàn",
            "tone": "duànliàn"
          },
          {
            "stage": "word",
            "vi": "khỏe mạnh",
            "hanzi": "健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jiànkāng",
                "tone": "jiànkāng",
                "pos": "word",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiànkāng",
            "tone": "jiànkāng"
          },
          {
            "stage": "word",
            "vi": "ngọt",
            "hanzi": "甜",
            "words": [
              {
                "text": "甜",
                "pinyin": "tián",
                "tone": "tián",
                "pos": "word",
                "vi": "ngọt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tián",
            "tone": "tián"
          },
          {
            "stage": "word",
            "vi": "gầy",
            "hanzi": "瘦",
            "words": [
              {
                "text": "瘦",
                "pinyin": "shòu",
                "tone": "shòu",
                "pos": "word",
                "vi": "gầy"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shòu",
            "tone": "shòu"
          },
          {
            "stage": "word",
            "vi": "thói quen",
            "hanzi": "习惯",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xíguàn",
                "tone": "xíguàn",
                "pos": "word",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xíguàn",
            "tone": "xíguàn"
          },
          {
            "stage": "word",
            "vi": "cơm",
            "hanzi": "米饭",
            "words": [
              {
                "text": "米饭",
                "pinyin": "mǐfàn",
                "tone": "mǐfàn",
                "pos": "word",
                "vi": "cơm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mǐfàn",
            "tone": "mǐfàn"
          },
          {
            "stage": "phrase",
            "vi": "dạo này rất bận",
            "hanzi": "最近很忙",
            "words": [
              {
                "text": "最近",
                "pinyin": "zuìjìn",
                "tone": "zuìjìn",
                "pos": "phrase",
                "vi": "dạo này rất bận"
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "忙",
                "pinyin": "máng",
                "tone": "máng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zuìjìn hěn máng",
            "tone": "zuìjìn hěn máng"
          },
          {
            "stage": "phrase",
            "vi": "càng ngày càng béo",
            "hanzi": "越来越胖",
            "words": [
              {
                "text": "越来越",
                "pinyin": "yuèláiyuè",
                "tone": "yuèláiyuè",
                "pos": "phrase",
                "vi": "càng ngày càng béo"
              },
              {
                "text": "胖",
                "pinyin": "pàng",
                "tone": "pàng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yuèláiyuè pàng",
            "tone": "yuèláiyuè pàng"
          },
          {
            "stage": "phrase",
            "vi": "vận động nhiều hơn",
            "hanzi": "多运动",
            "words": [
              {
                "text": "多",
                "pinyin": "duō",
                "tone": "duō",
                "pos": "phrase",
                "vi": "vận động nhiều hơn"
              },
              {
                "text": "运动",
                "pinyin": "yùndòng",
                "tone": "yùndòng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "duō yùndòng",
            "tone": "duō yùndòng"
          },
          {
            "stage": "phrase",
            "vi": "thói quen lành mạnh",
            "hanzi": "健康的习惯",
            "words": [
              {
                "text": "健康",
                "pinyin": "jiànkāng",
                "tone": "jiànkāng",
                "pos": "phrase",
                "vi": "thói quen lành mạnh"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "习惯",
                "pinyin": "xíguàn",
                "tone": "xíguàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiànkāng de xíguàn",
            "tone": "jiànkāng de xíguàn"
          },
          {
            "stage": "sentence",
            "vi": "Dạo này tôi càng ngày càng béo.",
            "hanzi": "我最近越来越胖了",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "sentence",
                "vi": "Dạo này tôi càng ngày càng béo."
              },
              {
                "text": "最近",
                "pinyin": "zuìjìn",
                "tone": "zuìjìn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "越来越",
                "pinyin": "yuèláiyuè",
                "tone": "yuèláiyuè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "胖",
                "pinyin": "pàng",
                "tone": "pàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ zuìjìn yuèláiyuè pàng liǎo",
            "tone": "wǒ zuìjìn yuèláiyuè pàng liǎo"
          },
          {
            "stage": "sentence",
            "vi": "Bạn nên vận động nhiều hơn.",
            "hanzi": "你应该多运动",
            "words": [
              {
                "text": "你",
                "pinyin": "nǐ",
                "tone": "nǐ",
                "pos": "sentence",
                "vi": "Bạn nên vận động nhiều hơn."
              },
              {
                "text": "应该",
                "pinyin": "yīnggāi",
                "tone": "yīnggāi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "多",
                "pinyin": "duō",
                "tone": "duō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "运动",
                "pinyin": "yùndòng",
                "tone": "yùndòng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nǐ yīnggāi duō yùndòng",
            "tone": "nǐ yīnggāi duō yùndòng"
          },
          {
            "stage": "sentence",
            "vi": "Buổi tối tôi không muốn ăn quá nhiều cơm.",
            "hanzi": "我晚上不想吃太多米饭",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "sentence",
                "vi": "Buổi tối tôi không muốn ăn quá nhiều cơm."
              },
              {
                "text": "晚上",
                "pinyin": "wǎnshàng",
                "tone": "wǎnshàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不想",
                "pinyin": "bùxiǎng",
                "tone": "bùxiǎng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "吃",
                "pinyin": "chī",
                "tone": "chī",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "太多",
                "pinyin": "tàiduō",
                "tone": "tàiduō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "米饭",
                "pinyin": "mǐfàn",
                "tone": "mǐfàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ wǎnshàng bùxiǎng chī tàiduō mǐfàn",
            "tone": "wǒ wǎnshàng bùxiǎng chī tàiduō mǐfàn"
          },
          {
            "stage": "sentence",
            "vi": "Thói quen lành mạnh rất quan trọng.",
            "hanzi": "健康的习惯很重要",
            "words": [
              {
                "text": "健康",
                "pinyin": "jiànkāng",
                "tone": "jiànkāng",
                "pos": "sentence",
                "vi": "Thói quen lành mạnh rất quan trọng."
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "习惯",
                "pinyin": "xíguàn",
                "tone": "xíguàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "重要",
                "pinyin": "zhòngyào",
                "tone": "zhòngyào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiànkāng de xíguàn hěn zhòngyào",
            "tone": "jiànkāng de xíguàn hěn zhòngyào"
          },
          {
            "stage": "mixed",
            "vi": "Dạo này tôi càng ngày càng béo.",
            "hanzi": "我最近越来越胖了",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "mixed",
                "vi": "Dạo này tôi càng ngày càng béo."
              },
              {
                "text": "最近",
                "pinyin": "zuìjìn",
                "tone": "zuìjìn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "越来越",
                "pinyin": "yuèláiyuè",
                "tone": "yuèláiyuè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "胖",
                "pinyin": "pàng",
                "tone": "pàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ zuìjìn yuèláiyuè pàng liǎo",
            "tone": "wǒ zuìjìn yuèláiyuè pàng liǎo"
          },
          {
            "stage": "mixed",
            "vi": "Bạn nên vận động nhiều hơn.",
            "hanzi": "你应该多运动",
            "words": [
              {
                "text": "你",
                "pinyin": "nǐ",
                "tone": "nǐ",
                "pos": "mixed",
                "vi": "Bạn nên vận động nhiều hơn."
              },
              {
                "text": "应该",
                "pinyin": "yīnggāi",
                "tone": "yīnggāi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "多",
                "pinyin": "duō",
                "tone": "duō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "运动",
                "pinyin": "yùndòng",
                "tone": "yùndòng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nǐ yīnggāi duō yùndòng",
            "tone": "nǐ yīnggāi duō yùndòng"
          }
        ]
      }
    ],
    "HSK4": [
      {
        "id": "hsk4-l1",
        "no": 1,
        "titleZh": "简单的爱情",
        "titleVi": "Tình yêu giản dị",
        "items": [
          {
            "stage": "word",
            "vi": "đơn giản",
            "hanzi": "简单",
            "words": [
              {
                "text": "简单",
                "pinyin": "jiǎndān",
                "tone": "jiǎndān",
                "pos": "word",
                "vi": "đơn giản"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiǎndān",
            "tone": "jiǎndān"
          },
          {
            "stage": "word",
            "vi": "tình yêu",
            "hanzi": "爱情",
            "words": [
              {
                "text": "爱情",
                "pinyin": "àiqíng",
                "tone": "àiqíng",
                "pos": "word",
                "vi": "tình yêu"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "àiqíng",
            "tone": "àiqíng"
          },
          {
            "stage": "word",
            "vi": "lãng mạn",
            "hanzi": "浪漫",
            "words": [
              {
                "text": "浪漫",
                "pinyin": "làngmàn",
                "tone": "làngmàn",
                "pos": "word",
                "vi": "lãng mạn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "làngmàn",
            "tone": "làngmàn"
          },
          {
            "stage": "word",
            "vi": "cảm động, làm cảm động",
            "hanzi": "感动",
            "words": [
              {
                "text": "感动",
                "pinyin": "gǎndòng",
                "tone": "gǎndòng",
                "pos": "word",
                "vi": "cảm động, làm cảm động"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gǎndòng",
            "tone": "gǎndòng"
          },
          {
            "stage": "word",
            "vi": "bày tỏ, biểu thị",
            "hanzi": "表示",
            "words": [
              {
                "text": "表示",
                "pinyin": "biǎoshì",
                "tone": "biǎoshì",
                "pos": "word",
                "vi": "bày tỏ, biểu thị"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biǎoshì",
            "tone": "biǎoshì"
          },
          {
            "stage": "word",
            "vi": "ở bên, đi cùng",
            "hanzi": "陪",
            "words": [
              {
                "text": "陪",
                "pinyin": "péi",
                "tone": "péi",
                "pos": "word",
                "vi": "ở bên, đi cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "péi",
            "tone": "péi"
          },
          {
            "stage": "word",
            "vi": "quan tâm",
            "hanzi": "关心",
            "words": [
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "word",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guānxīn",
            "tone": "guānxīn"
          },
          {
            "stage": "word",
            "vi": "tin tưởng",
            "hanzi": "信任",
            "words": [
              {
                "text": "信任",
                "pinyin": "xìnrèn",
                "tone": "xìnrèn",
                "pos": "word",
                "vi": "tin tưởng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xìnrèn",
            "tone": "xìnrèn"
          },
          {
            "stage": "word",
            "vi": "chung, cùng nhau",
            "hanzi": "共同",
            "words": [
              {
                "text": "共同",
                "pinyin": "gòngtóng",
                "tone": "gòngtóng",
                "pos": "word",
                "vi": "chung, cùng nhau"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gòngtóng",
            "tone": "gòngtóng"
          },
          {
            "stage": "word",
            "vi": "hạnh phúc",
            "hanzi": "幸福",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xìngfú",
                "tone": "xìngfú",
                "pos": "word",
                "vi": "hạnh phúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xìngfú",
            "tone": "xìngfú"
          },
          {
            "stage": "phrase",
            "vi": "tình yêu giản dị",
            "hanzi": "简单的爱情",
            "words": [
              {
                "text": "简单",
                "pinyin": "jiǎndān",
                "tone": "jiǎndān",
                "pos": "phrase",
                "vi": "tình yêu giản dị"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "爱情",
                "pinyin": "àiqíng",
                "tone": "àiqíng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiǎndān de àiqíng",
            "tone": "jiǎndān de àiqíng"
          },
          {
            "stage": "phrase",
            "vi": "bày tỏ sự quan tâm",
            "hanzi": "表示关心",
            "words": [
              {
                "text": "表示",
                "pinyin": "biǎoshì",
                "tone": "biǎoshì",
                "pos": "phrase",
                "vi": "bày tỏ sự quan tâm"
              },
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biǎoshì guānxīn",
            "tone": "biǎoshì guānxīn"
          },
          {
            "stage": "phrase",
            "vi": "ở bên anh ấy",
            "hanzi": "陪他一起",
            "words": [
              {
                "text": "陪",
                "pinyin": "péi",
                "tone": "péi",
                "pos": "phrase",
                "vi": "ở bên anh ấy"
              },
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一起",
                "pinyin": "yìqǐ",
                "tone": "yìqǐ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "péi tā yìqǐ",
            "tone": "péi tā yìqǐ"
          },
          {
            "stage": "phrase",
            "vi": "tin tưởng lẫn nhau",
            "hanzi": "互相信任",
            "words": [
              {
                "text": "互相",
                "pinyin": "hùxiāng",
                "tone": "hùxiāng",
                "pos": "phrase",
                "vi": "tin tưởng lẫn nhau"
              },
              {
                "text": "信任",
                "pinyin": "xìnrèn",
                "tone": "xìnrèn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hùxiāng xìnrèn",
            "tone": "hùxiāng xìnrèn"
          },
          {
            "stage": "phrase",
            "vi": "cùng nhau sống",
            "hanzi": "共同生活",
            "words": [
              {
                "text": "共同",
                "pinyin": "gòngtóng",
                "tone": "gòngtóng",
                "pos": "phrase",
                "vi": "cùng nhau sống"
              },
              {
                "text": "生活",
                "pinyin": "shēnghuó",
                "tone": "shēnghuó",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gòngtóng shēnghuó",
            "tone": "gòngtóng shēnghuó"
          },
          {
            "stage": "sentence",
            "vi": "Tình yêu có thể rất giản dị.",
            "hanzi": "爱情可以很简单",
            "words": [
              {
                "text": "爱情",
                "pinyin": "àiqíng",
                "tone": "àiqíng",
                "pos": "sentence",
                "vi": "Tình yêu có thể rất giản dị."
              },
              {
                "text": "可以",
                "pinyin": "kěyǐ",
                "tone": "kěyǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很简单",
                "pinyin": "hěnjiǎndān",
                "tone": "hěnjiǎndān",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "àiqíng kěyǐ hěnjiǎndān",
            "tone": "àiqíng kěyǐ hěnjiǎndān"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy quan tâm cô ấy mỗi ngày.",
            "hanzi": "他每天都关心她",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Anh ấy quan tâm cô ấy mỗi ngày."
              },
              {
                "text": "每天",
                "pinyin": "měitiān",
                "tone": "měitiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "都",
                "pinyin": "dōu",
                "tone": "dōu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "她",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā měitiān dōu guānxīn tā",
            "tone": "tā měitiān dōu guānxīn tā"
          },
          {
            "stage": "sentence",
            "vi": "Tình yêu thật sự cần sự tin tưởng.",
            "hanzi": "真正的爱情需要信任",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "sentence",
                "vi": "Tình yêu thật sự cần sự tin tưởng."
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "爱情",
                "pinyin": "àiqíng",
                "tone": "àiqíng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "需要",
                "pinyin": "xūyào",
                "tone": "xūyào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "信任",
                "pinyin": "xìnrèn",
                "tone": "xìnrèn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng de àiqíng xūyào xìnrèn",
            "tone": "zhēnzhèng de àiqíng xūyào xìnrèn"
          },
          {
            "stage": "sentence",
            "vi": "Họ cùng nhau đối mặt với những vấn đề trong cuộc sống.",
            "hanzi": "他们一起面对生活中的问题",
            "words": [
              {
                "text": "他们",
                "pinyin": "tāmen",
                "tone": "tāmen",
                "pos": "sentence",
                "vi": "Họ cùng nhau đối mặt với những vấn đề trong cuộc sống."
              },
              {
                "text": "一起",
                "pinyin": "yìqǐ",
                "tone": "yìqǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "面对",
                "pinyin": "miànduì",
                "tone": "miànduì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "生活",
                "pinyin": "shēnghuó",
                "tone": "shēnghuó",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "中的",
                "pinyin": "zhōngde",
                "tone": "zhōngde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "问题",
                "pinyin": "wèntí",
                "tone": "wèntí",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tāmen yìqǐ miànduì shēnghuó zhōngde wèntí",
            "tone": "tāmen yìqǐ miànduì shēnghuó zhōngde wèntí"
          },
          {
            "stage": "mixed",
            "vi": "Tình yêu có thể rất giản dị.",
            "hanzi": "爱情可以很简单",
            "words": [
              {
                "text": "爱情",
                "pinyin": "àiqíng",
                "tone": "àiqíng",
                "pos": "mixed",
                "vi": "Tình yêu có thể rất giản dị."
              },
              {
                "text": "可以",
                "pinyin": "kěyǐ",
                "tone": "kěyǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很简单",
                "pinyin": "hěnjiǎndān",
                "tone": "hěnjiǎndān",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "àiqíng kěyǐ hěnjiǎndān",
            "tone": "àiqíng kěyǐ hěnjiǎndān"
          }
        ]
      },
      {
        "id": "hsk4-l2",
        "no": 2,
        "titleZh": "真正的朋友",
        "titleVi": "Người bạn thật sự",
        "items": [
          {
            "stage": "word",
            "vi": "thật sự",
            "hanzi": "真正",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "word",
                "vi": "thật sự"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng",
            "tone": "zhēnzhèng"
          },
          {
            "stage": "word",
            "vi": "bạn bè",
            "hanzi": "朋友",
            "words": [
              {
                "text": "朋友",
                "pinyin": "péngyǒu",
                "tone": "péngyǒu",
                "pos": "word",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "péngyǒu",
            "tone": "péngyǒu"
          },
          {
            "stage": "word",
            "vi": "giúp đỡ",
            "hanzi": "帮助",
            "words": [
              {
                "text": "帮助",
                "pinyin": "bāngzhù",
                "tone": "bāngzhù",
                "pos": "word",
                "vi": "giúp đỡ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bāngzhù",
            "tone": "bāngzhù"
          },
          {
            "stage": "word",
            "vi": "thành thật",
            "hanzi": "诚实",
            "words": [
              {
                "text": "诚实",
                "pinyin": "chéngshí",
                "tone": "chéngshí",
                "pos": "word",
                "vi": "thành thật"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chéngshí",
            "tone": "chéngshí"
          },
          {
            "stage": "word",
            "vi": "hiểu, thông cảm",
            "hanzi": "理解",
            "words": [
              {
                "text": "理解",
                "pinyin": "lǐjiě",
                "tone": "lǐjiě",
                "pos": "word",
                "vi": "hiểu, thông cảm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lǐjiě",
            "tone": "lǐjiě"
          },
          {
            "stage": "word",
            "vi": "động viên",
            "hanzi": "鼓励",
            "words": [
              {
                "text": "鼓励",
                "pinyin": "gǔlì",
                "tone": "gǔlì",
                "pos": "word",
                "vi": "động viên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gǔlì",
            "tone": "gǔlì"
          },
          {
            "stage": "word",
            "vi": "khó khăn",
            "hanzi": "困难",
            "words": [
              {
                "text": "困难",
                "pinyin": "kùnnán",
                "tone": "kùnnán",
                "pos": "word",
                "vi": "khó khăn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kùnnán",
            "tone": "kùnnán"
          },
          {
            "stage": "word",
            "vi": "chia sẻ",
            "hanzi": "分享",
            "words": [
              {
                "text": "分享",
                "pinyin": "fēnxiǎng",
                "tone": "fēnxiǎng",
                "pos": "word",
                "vi": "chia sẻ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fēnxiǎng",
            "tone": "fēnxiǎng"
          },
          {
            "stage": "word",
            "vi": "liên lạc",
            "hanzi": "联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "word",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liánxì",
            "tone": "liánxì"
          },
          {
            "stage": "word",
            "vi": "tình bạn",
            "hanzi": "友谊",
            "words": [
              {
                "text": "友谊",
                "pinyin": "yǒuyì",
                "tone": "yǒuyì",
                "pos": "word",
                "vi": "tình bạn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yǒuyì",
            "tone": "yǒuyì"
          },
          {
            "stage": "phrase",
            "vi": "người bạn thật sự",
            "hanzi": "真正的朋友",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "phrase",
                "vi": "người bạn thật sự"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "朋友",
                "pinyin": "péngyǒu",
                "tone": "péngyǒu",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng de péngyǒu",
            "tone": "zhēnzhèng de péngyǒu"
          },
          {
            "stage": "phrase",
            "vi": "giúp đỡ lẫn nhau",
            "hanzi": "互相帮助",
            "words": [
              {
                "text": "互相",
                "pinyin": "hùxiāng",
                "tone": "hùxiāng",
                "pos": "phrase",
                "vi": "giúp đỡ lẫn nhau"
              },
              {
                "text": "帮助",
                "pinyin": "bāngzhù",
                "tone": "bāngzhù",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hùxiāng bāngzhù",
            "tone": "hùxiāng bāngzhù"
          },
          {
            "stage": "phrase",
            "vi": "gặp khó khăn",
            "hanzi": "遇到困难",
            "words": [
              {
                "text": "遇到",
                "pinyin": "yùdào",
                "tone": "yùdào",
                "pos": "phrase",
                "vi": "gặp khó khăn"
              },
              {
                "text": "困难",
                "pinyin": "kùnnán",
                "tone": "kùnnán",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yùdào kùnnán",
            "tone": "yùdào kùnnán"
          },
          {
            "stage": "phrase",
            "vi": "chia sẻ niềm vui",
            "hanzi": "分享快乐",
            "words": [
              {
                "text": "分享",
                "pinyin": "fēnxiǎng",
                "tone": "fēnxiǎng",
                "pos": "phrase",
                "vi": "chia sẻ niềm vui"
              },
              {
                "text": "快乐",
                "pinyin": "kuàilè",
                "tone": "kuàilè",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fēnxiǎng kuàilè",
            "tone": "fēnxiǎng kuàilè"
          },
          {
            "stage": "phrase",
            "vi": "giữ liên lạc",
            "hanzi": "保持联系",
            "words": [
              {
                "text": "保持",
                "pinyin": "bǎochí",
                "tone": "bǎochí",
                "pos": "phrase",
                "vi": "giữ liên lạc"
              },
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǎochí liánxì",
            "tone": "bǎochí liánxì"
          },
          {
            "stage": "sentence",
            "vi": "Người bạn thật sự sẽ giúp đỡ lẫn nhau.",
            "hanzi": "真正的朋友会互相帮助",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "sentence",
                "vi": "Người bạn thật sự sẽ giúp đỡ lẫn nhau."
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "朋友",
                "pinyin": "péngyǒu",
                "tone": "péngyǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "会",
                "pinyin": "huì",
                "tone": "huì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "互相",
                "pinyin": "hùxiāng",
                "tone": "hùxiāng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "帮助",
                "pinyin": "bāngzhù",
                "tone": "bāngzhù",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng de péngyǒu huì hùxiāng bāngzhù",
            "tone": "zhēnzhèng de péngyǒu huì hùxiāng bāngzhù"
          },
          {
            "stage": "sentence",
            "vi": "Giữa bạn bè nên thành thật.",
            "hanzi": "朋友之间应该诚实",
            "words": [
              {
                "text": "朋友",
                "pinyin": "péngyǒu",
                "tone": "péngyǒu",
                "pos": "sentence",
                "vi": "Giữa bạn bè nên thành thật."
              },
              {
                "text": "之间",
                "pinyin": "zhījiān",
                "tone": "zhījiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "应该",
                "pinyin": "yīnggāi",
                "tone": "yīnggāi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "诚实",
                "pinyin": "chéngshí",
                "tone": "chéngshí",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "péngyǒu zhījiān yīnggāi chéngshí",
            "tone": "péngyǒu zhījiān yīnggāi chéngshí"
          },
          {
            "stage": "sentence",
            "vi": "Khi anh ấy gặp khó khăn, tôi đã động viên anh ấy.",
            "hanzi": "他遇到困难时我鼓励了他",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Khi anh ấy gặp khó khăn, tôi đã động viên anh ấy."
              },
              {
                "text": "遇到",
                "pinyin": "yùdào",
                "tone": "yùdào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "困难",
                "pinyin": "kùnnán",
                "tone": "kùnnán",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "时",
                "pinyin": "shí",
                "tone": "shí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "鼓励",
                "pinyin": "gǔlì",
                "tone": "gǔlì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā yùdào kùnnán shí wǒ gǔlì liǎo tā",
            "tone": "tā yùdào kùnnán shí wǒ gǔlì liǎo tā"
          },
          {
            "stage": "sentence",
            "vi": "Dù rất bận, chúng tôi vẫn thường xuyên liên lạc.",
            "hanzi": "即使很忙我们也经常联系",
            "words": [
              {
                "text": "即使",
                "pinyin": "jíshǐ",
                "tone": "jíshǐ",
                "pos": "sentence",
                "vi": "Dù rất bận, chúng tôi vẫn thường xuyên liên lạc."
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "忙",
                "pinyin": "máng",
                "tone": "máng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我们",
                "pinyin": "wǒmen",
                "tone": "wǒmen",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "也",
                "pinyin": "yě",
                "tone": "yě",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "经常",
                "pinyin": "jīngcháng",
                "tone": "jīngcháng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jíshǐ hěn máng wǒmen yě jīngcháng liánxì",
            "tone": "jíshǐ hěn máng wǒmen yě jīngcháng liánxì"
          },
          {
            "stage": "mixed",
            "vi": "Người bạn thật sự sẽ giúp đỡ lẫn nhau.",
            "hanzi": "真正的朋友会互相帮助",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "mixed",
                "vi": "Người bạn thật sự sẽ giúp đỡ lẫn nhau."
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "朋友",
                "pinyin": "péngyǒu",
                "tone": "péngyǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "会",
                "pinyin": "huì",
                "tone": "huì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "互相",
                "pinyin": "hùxiāng",
                "tone": "hùxiāng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "帮助",
                "pinyin": "bāngzhù",
                "tone": "bāngzhù",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng de péngyǒu huì hùxiāng bāngzhù",
            "tone": "zhēnzhèng de péngyǒu huì hùxiāng bāngzhù"
          }
        ]
      },
      {
        "id": "hsk4-l3",
        "no": 3,
        "titleZh": "经理对我印象不错",
        "titleVi": "Người quản lý có ấn tượng tốt với tôi",
        "items": [
          {
            "stage": "word",
            "vi": "quản lý, giám đốc",
            "hanzi": "经理",
            "words": [
              {
                "text": "经理",
                "pinyin": "jīnglǐ",
                "tone": "jīnglǐ",
                "pos": "word",
                "vi": "quản lý, giám đốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīnglǐ",
            "tone": "jīnglǐ"
          },
          {
            "stage": "word",
            "vi": "ấn tượng",
            "hanzi": "印象",
            "words": [
              {
                "text": "印象",
                "pinyin": "yìnxiàng",
                "tone": "yìnxiàng",
                "pos": "word",
                "vi": "ấn tượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yìnxiàng",
            "tone": "yìnxiàng"
          },
          {
            "stage": "word",
            "vi": "phỏng vấn",
            "hanzi": "面试",
            "words": [
              {
                "text": "面试",
                "pinyin": "miànshì",
                "tone": "miànshì",
                "pos": "word",
                "vi": "phỏng vấn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "miànshì",
            "tone": "miànshì"
          },
          {
            "stage": "word",
            "vi": "căng thẳng",
            "hanzi": "紧张",
            "words": [
              {
                "text": "紧张",
                "pinyin": "jǐnzhāng",
                "tone": "jǐnzhāng",
                "pos": "word",
                "vi": "căng thẳng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jǐnzhāng",
            "tone": "jǐnzhāng"
          },
          {
            "stage": "word",
            "vi": "chuẩn bị",
            "hanzi": "准备",
            "words": [
              {
                "text": "准备",
                "pinyin": "zhǔnbèi",
                "tone": "zhǔnbèi",
                "pos": "word",
                "vi": "chuẩn bị"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhǔnbèi",
            "tone": "zhǔnbèi"
          },
          {
            "stage": "word",
            "vi": "kinh nghiệm",
            "hanzi": "经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jīngyàn",
                "tone": "jīngyàn",
                "pos": "word",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīngyàn",
            "tone": "jīngyàn"
          },
          {
            "stage": "word",
            "vi": "phụ trách, có trách nhiệm",
            "hanzi": "负责",
            "words": [
              {
                "text": "负责",
                "pinyin": "fùzé",
                "tone": "fùzé",
                "pos": "word",
                "vi": "phụ trách, có trách nhiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fùzé",
            "tone": "fùzé"
          },
          {
            "stage": "word",
            "vi": "năng lực",
            "hanzi": "能力",
            "words": [
              {
                "text": "能力",
                "pinyin": "nénglì",
                "tone": "nénglì",
                "pos": "word",
                "vi": "năng lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nénglì",
            "tone": "nénglì"
          },
          {
            "stage": "word",
            "vi": "biểu hiện, thể hiện",
            "hanzi": "表现",
            "words": [
              {
                "text": "表现",
                "pinyin": "biǎoxiàn",
                "tone": "biǎoxiàn",
                "pos": "word",
                "vi": "biểu hiện, thể hiện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biǎoxiàn",
            "tone": "biǎoxiàn"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "jīhuì",
                "tone": "jīhuì",
                "pos": "word",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīhuì",
            "tone": "jīhuì"
          },
          {
            "stage": "phrase",
            "vi": "để lại ấn tượng",
            "hanzi": "留下印象",
            "words": [
              {
                "text": "留下",
                "pinyin": "liúxià",
                "tone": "liúxià",
                "pos": "phrase",
                "vi": "để lại ấn tượng"
              },
              {
                "text": "印象",
                "pinyin": "yìnxiàng",
                "tone": "yìnxiàng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liúxià yìnxiàng",
            "tone": "liúxià yìnxiàng"
          },
          {
            "stage": "phrase",
            "vi": "chuẩn bị phỏng vấn",
            "hanzi": "准备面试",
            "words": [
              {
                "text": "准备",
                "pinyin": "zhǔnbèi",
                "tone": "zhǔnbèi",
                "pos": "phrase",
                "vi": "chuẩn bị phỏng vấn"
              },
              {
                "text": "面试",
                "pinyin": "miànshì",
                "tone": "miànshì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhǔnbèi miànshì",
            "tone": "zhǔnbèi miànshì"
          },
          {
            "stage": "phrase",
            "vi": "kinh nghiệm làm việc",
            "hanzi": "工作经验",
            "words": [
              {
                "text": "工作",
                "pinyin": "gōngzuò",
                "tone": "gōngzuò",
                "pos": "phrase",
                "vi": "kinh nghiệm làm việc"
              },
              {
                "text": "经验",
                "pinyin": "jīngyàn",
                "tone": "jīngyàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gōngzuò jīngyàn",
            "tone": "gōngzuò jīngyàn"
          },
          {
            "stage": "phrase",
            "vi": "nghiêm túc và có trách nhiệm",
            "hanzi": "认真负责",
            "words": [
              {
                "text": "认真",
                "pinyin": "rènzhēn",
                "tone": "rènzhēn",
                "pos": "phrase",
                "vi": "nghiêm túc và có trách nhiệm"
              },
              {
                "text": "负责",
                "pinyin": "fùzé",
                "tone": "fùzé",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rènzhēn fùzé",
            "tone": "rènzhēn fùzé"
          },
          {
            "stage": "phrase",
            "vi": "thể hiện khá tốt",
            "hanzi": "表现不错",
            "words": [
              {
                "text": "表现",
                "pinyin": "biǎoxiàn",
                "tone": "biǎoxiàn",
                "pos": "phrase",
                "vi": "thể hiện khá tốt"
              },
              {
                "text": "不错",
                "pinyin": "búcuò",
                "tone": "búcuò",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biǎoxiàn búcuò",
            "tone": "biǎoxiàn búcuò"
          },
          {
            "stage": "sentence",
            "vi": "Người quản lý có ấn tượng tốt với tôi.",
            "hanzi": "经理对我的印象不错",
            "words": [
              {
                "text": "经理",
                "pinyin": "jīnglǐ",
                "tone": "jīnglǐ",
                "pos": "sentence",
                "vi": "Người quản lý có ấn tượng tốt với tôi."
              },
              {
                "text": "对",
                "pinyin": "duì",
                "tone": "duì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我的",
                "pinyin": "wǒde",
                "tone": "wǒde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "印象",
                "pinyin": "yìnxiàng",
                "tone": "yìnxiàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不错",
                "pinyin": "búcuò",
                "tone": "búcuò",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīnglǐ duì wǒde yìnxiàng búcuò",
            "tone": "jīnglǐ duì wǒde yìnxiàng búcuò"
          },
          {
            "stage": "sentence",
            "vi": "Trước buổi phỏng vấn tôi hơi căng thẳng.",
            "hanzi": "面试前我有点儿紧张",
            "words": [
              {
                "text": "面试",
                "pinyin": "miànshì",
                "tone": "miànshì",
                "pos": "sentence",
                "vi": "Trước buổi phỏng vấn tôi hơi căng thẳng."
              },
              {
                "text": "前",
                "pinyin": "qián",
                "tone": "qián",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我有",
                "pinyin": "wǒyǒu",
                "tone": "wǒyǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "点儿",
                "pinyin": "diǎnér",
                "tone": "diǎnér",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "紧张",
                "pinyin": "jǐnzhāng",
                "tone": "jǐnzhāng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "miànshì qián wǒyǒu diǎnér jǐnzhāng",
            "tone": "miànshì qián wǒyǒu diǎnér jǐnzhāng"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy làm việc nghiêm túc và rất có trách nhiệm.",
            "hanzi": "他工作认真也很负责",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Anh ấy làm việc nghiêm túc và rất có trách nhiệm."
              },
              {
                "text": "工作",
                "pinyin": "gōngzuò",
                "tone": "gōngzuò",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "认真",
                "pinyin": "rènzhēn",
                "tone": "rènzhēn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "也",
                "pinyin": "yě",
                "tone": "yě",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "负责",
                "pinyin": "fùzé",
                "tone": "fùzé",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā gōngzuò rènzhēn yě hěn fùzé",
            "tone": "tā gōngzuò rènzhēn yě hěn fùzé"
          },
          {
            "stage": "sentence",
            "vi": "Buổi phỏng vấn lần này cho tôi một cơ hội tốt.",
            "hanzi": "这次面试给了我一个好机会",
            "words": [
              {
                "text": "这次",
                "pinyin": "zhècì",
                "tone": "zhècì",
                "pos": "sentence",
                "vi": "Buổi phỏng vấn lần này cho tôi một cơ hội tốt."
              },
              {
                "text": "面试",
                "pinyin": "miànshì",
                "tone": "miànshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "给",
                "pinyin": "gěi",
                "tone": "gěi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一个",
                "pinyin": "yígè",
                "tone": "yígè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "好",
                "pinyin": "hǎo",
                "tone": "hǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "机会",
                "pinyin": "jīhuì",
                "tone": "jīhuì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhècì miànshì gěi liǎo wǒ yígè hǎo jīhuì",
            "tone": "zhècì miànshì gěi liǎo wǒ yígè hǎo jīhuì"
          },
          {
            "stage": "mixed",
            "vi": "Người quản lý có ấn tượng tốt với tôi.",
            "hanzi": "经理对我的印象不错",
            "words": [
              {
                "text": "经理",
                "pinyin": "jīnglǐ",
                "tone": "jīnglǐ",
                "pos": "mixed",
                "vi": "Người quản lý có ấn tượng tốt với tôi."
              },
              {
                "text": "对",
                "pinyin": "duì",
                "tone": "duì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "我的",
                "pinyin": "wǒde",
                "tone": "wǒde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "印象",
                "pinyin": "yìnxiàng",
                "tone": "yìnxiàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不错",
                "pinyin": "búcuò",
                "tone": "búcuò",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīnglǐ duì wǒde yìnxiàng búcuò",
            "tone": "jīnglǐ duì wǒde yìnxiàng búcuò"
          }
        ]
      },
      {
        "id": "hsk4-l4",
        "no": 4,
        "titleZh": "不要太着急赚钱",
        "titleVi": "Đừng quá vội kiếm tiền",
        "items": [
          {
            "stage": "word",
            "vi": "sốt ruột, vội vàng",
            "hanzi": "着急",
            "words": [
              {
                "text": "着急",
                "pinyin": "zháojí",
                "tone": "zháojí",
                "pos": "word",
                "vi": "sốt ruột, vội vàng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zháojí",
            "tone": "zháojí"
          },
          {
            "stage": "word",
            "vi": "kiếm tiền",
            "hanzi": "赚钱",
            "words": [
              {
                "text": "赚钱",
                "pinyin": "zhuànqián",
                "tone": "zhuànqián",
                "pos": "word",
                "vi": "kiếm tiền"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuànqián",
            "tone": "zhuànqián"
          },
          {
            "stage": "word",
            "vi": "thành công",
            "hanzi": "成功",
            "words": [
              {
                "text": "成功",
                "pinyin": "chénggōng",
                "tone": "chénggōng",
                "pos": "word",
                "vi": "thành công"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chénggōng",
            "tone": "chénggōng"
          },
          {
            "stage": "word",
            "vi": "quan trọng",
            "hanzi": "重要",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhòngyào",
                "tone": "zhòngyào",
                "pos": "word",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhòngyào",
            "tone": "zhòngyào"
          },
          {
            "stage": "word",
            "vi": "nỗ lực",
            "hanzi": "努力",
            "words": [
              {
                "text": "努力",
                "pinyin": "nǔlì",
                "tone": "nǔlì",
                "pos": "word",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nǔlì",
            "tone": "nǔlì"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "jīhuì",
                "tone": "jīhuì",
                "pos": "word",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīhuì",
            "tone": "jīhuì"
          },
          {
            "stage": "word",
            "vi": "kế hoạch",
            "hanzi": "计划",
            "words": [
              {
                "text": "计划",
                "pinyin": "jìhuà",
                "tone": "jìhuà",
                "pos": "word",
                "vi": "kế hoạch"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jìhuà",
            "tone": "jìhuà"
          },
          {
            "stage": "word",
            "vi": "kinh nghiệm",
            "hanzi": "经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jīngyàn",
                "tone": "jīngyàn",
                "pos": "word",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīngyàn",
            "tone": "jīngyàn"
          },
          {
            "stage": "word",
            "vi": "áp lực",
            "hanzi": "压力",
            "words": [
              {
                "text": "压力",
                "pinyin": "yālì",
                "tone": "yālì",
                "pos": "word",
                "vi": "áp lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yālì",
            "tone": "yālì"
          },
          {
            "stage": "word",
            "vi": "bình tĩnh",
            "hanzi": "冷静",
            "words": [
              {
                "text": "冷静",
                "pinyin": "lěngjìng",
                "tone": "lěngjìng",
                "pos": "word",
                "vi": "bình tĩnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lěngjìng",
            "tone": "lěngjìng"
          },
          {
            "stage": "phrase",
            "vi": "quá vội vàng",
            "hanzi": "太着急",
            "words": [
              {
                "text": "太",
                "pinyin": "tài",
                "tone": "tài",
                "pos": "phrase",
                "vi": "quá vội vàng"
              },
              {
                "text": "着急",
                "pinyin": "zháojí",
                "tone": "zháojí",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tài zháojí",
            "tone": "tài zháojí"
          },
          {
            "stage": "phrase",
            "vi": "vội kiếm tiền",
            "hanzi": "急着赚钱",
            "words": [
              {
                "text": "急着",
                "pinyin": "jízhe",
                "tone": "jízhe",
                "pos": "phrase",
                "vi": "vội kiếm tiền"
              },
              {
                "text": "赚钱",
                "pinyin": "zhuànqián",
                "tone": "zhuànqián",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jízhe zhuànqián",
            "tone": "jízhe zhuànqián"
          },
          {
            "stage": "phrase",
            "vi": "tích lũy kinh nghiệm",
            "hanzi": "积累经验",
            "words": [
              {
                "text": "积累",
                "pinyin": "jīlěi",
                "tone": "jīlěi",
                "pos": "phrase",
                "vi": "tích lũy kinh nghiệm"
              },
              {
                "text": "经验",
                "pinyin": "jīngyàn",
                "tone": "jīngyàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīlěi jīngyàn",
            "tone": "jīlěi jīngyàn"
          },
          {
            "stage": "phrase",
            "vi": "lập kế hoạch",
            "hanzi": "制定计划",
            "words": [
              {
                "text": "制定",
                "pinyin": "zhìdìng",
                "tone": "zhìdìng",
                "pos": "phrase",
                "vi": "lập kế hoạch"
              },
              {
                "text": "计划",
                "pinyin": "jìhuà",
                "tone": "jìhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhìdìng jìhuà",
            "tone": "zhìdìng jìhuà"
          },
          {
            "stage": "phrase",
            "vi": "giữ bình tĩnh",
            "hanzi": "保持冷静",
            "words": [
              {
                "text": "保持",
                "pinyin": "bǎochí",
                "tone": "bǎochí",
                "pos": "phrase",
                "vi": "giữ bình tĩnh"
              },
              {
                "text": "冷静",
                "pinyin": "lěngjìng",
                "tone": "lěngjìng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǎochí lěngjìng",
            "tone": "bǎochí lěngjìng"
          },
          {
            "stage": "sentence",
            "vi": "Người trẻ đừng quá vội kiếm tiền.",
            "hanzi": "年轻人不要太着急赚钱",
            "words": [
              {
                "text": "年轻",
                "pinyin": "niánqīng",
                "tone": "niánqīng",
                "pos": "sentence",
                "vi": "Người trẻ đừng quá vội kiếm tiền."
              },
              {
                "text": "人",
                "pinyin": "rén",
                "tone": "rén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不要",
                "pinyin": "búyào",
                "tone": "búyào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "太",
                "pinyin": "tài",
                "tone": "tài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着急",
                "pinyin": "zháojí",
                "tone": "zháojí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "赚钱",
                "pinyin": "zhuànqián",
                "tone": "zhuànqián",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "niánqīng rén búyào tài zháojí zhuànqián",
            "tone": "niánqīng rén búyào tài zháojí zhuànqián"
          },
          {
            "stage": "sentence",
            "vi": "Thành công cần thời gian và nỗ lực.",
            "hanzi": "成功需要时间和努力",
            "words": [
              {
                "text": "成功",
                "pinyin": "chénggōng",
                "tone": "chénggōng",
                "pos": "sentence",
                "vi": "Thành công cần thời gian và nỗ lực."
              },
              {
                "text": "需要",
                "pinyin": "xūyào",
                "tone": "xūyào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "时间",
                "pinyin": "shíjiān",
                "tone": "shíjiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "和",
                "pinyin": "hé",
                "tone": "hé",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "努力",
                "pinyin": "nǔlì",
                "tone": "nǔlì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chénggōng xūyào shíjiān hé nǔlì",
            "tone": "chénggōng xūyào shíjiān hé nǔlì"
          },
          {
            "stage": "sentence",
            "vi": "Khi chưa có kinh nghiệm, áp lực sẽ khá lớn.",
            "hanzi": "没有经验时压力会比较大",
            "words": [
              {
                "text": "没有",
                "pinyin": "méiyǒu",
                "tone": "méiyǒu",
                "pos": "sentence",
                "vi": "Khi chưa có kinh nghiệm, áp lực sẽ khá lớn."
              },
              {
                "text": "经验",
                "pinyin": "jīngyàn",
                "tone": "jīngyàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "时",
                "pinyin": "shí",
                "tone": "shí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "压力",
                "pinyin": "yālì",
                "tone": "yālì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "会",
                "pinyin": "huì",
                "tone": "huì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "比较",
                "pinyin": "bǐjiào",
                "tone": "bǐjiào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "大",
                "pinyin": "dà",
                "tone": "dà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "méiyǒu jīngyàn shí yālì huì bǐjiào dà",
            "tone": "méiyǒu jīngyàn shí yālì huì bǐjiào dà"
          },
          {
            "stage": "sentence",
            "vi": "Trước khi làm việc gì, tốt nhất nên có kế hoạch.",
            "hanzi": "做事以前最好先有计划",
            "words": [
              {
                "text": "做事",
                "pinyin": "zuòshì",
                "tone": "zuòshì",
                "pos": "sentence",
                "vi": "Trước khi làm việc gì, tốt nhất nên có kế hoạch."
              },
              {
                "text": "以前",
                "pinyin": "yǐqián",
                "tone": "yǐqián",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "最好",
                "pinyin": "zuìhǎo",
                "tone": "zuìhǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "先",
                "pinyin": "xiān",
                "tone": "xiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "有",
                "pinyin": "yǒu",
                "tone": "yǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "计划",
                "pinyin": "jìhuà",
                "tone": "jìhuà",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zuòshì yǐqián zuìhǎo xiān yǒu jìhuà",
            "tone": "zuòshì yǐqián zuìhǎo xiān yǒu jìhuà"
          },
          {
            "stage": "mixed",
            "vi": "Người trẻ đừng quá vội kiếm tiền.",
            "hanzi": "年轻人不要太着急赚钱",
            "words": [
              {
                "text": "年轻",
                "pinyin": "niánqīng",
                "tone": "niánqīng",
                "pos": "mixed",
                "vi": "Người trẻ đừng quá vội kiếm tiền."
              },
              {
                "text": "人",
                "pinyin": "rén",
                "tone": "rén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不要",
                "pinyin": "búyào",
                "tone": "búyào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "太",
                "pinyin": "tài",
                "tone": "tài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "着急",
                "pinyin": "zháojí",
                "tone": "zháojí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "赚钱",
                "pinyin": "zhuànqián",
                "tone": "zhuànqián",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "niánqīng rén búyào tài zháojí zhuànqián",
            "tone": "niánqīng rén búyào tài zháojí zhuànqián"
          }
        ]
      },
      {
        "id": "hsk4-l5",
        "no": 5,
        "titleZh": "只买对的，不买贵的",
        "titleVi": "Chỉ mua thứ phù hợp, không mua thứ đắt",
        "items": [
          {
            "stage": "word",
            "vi": "mua",
            "hanzi": "买",
            "words": [
              {
                "text": "买",
                "pinyin": "mǎi",
                "tone": "mǎi",
                "pos": "word",
                "vi": "mua"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mǎi",
            "tone": "mǎi"
          },
          {
            "stage": "word",
            "vi": "đắt",
            "hanzi": "贵",
            "words": [
              {
                "text": "贵",
                "pinyin": "guì",
                "tone": "guì",
                "pos": "word",
                "vi": "đắt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guì",
            "tone": "guì"
          },
          {
            "stage": "word",
            "vi": "rẻ",
            "hanzi": "便宜",
            "words": [
              {
                "text": "便宜",
                "pinyin": "piányi",
                "tone": "piányi",
                "pos": "word",
                "vi": "rẻ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "piányi",
            "tone": "piányi"
          },
          {
            "stage": "word",
            "vi": "phù hợp",
            "hanzi": "合适",
            "words": [
              {
                "text": "合适",
                "pinyin": "héshì",
                "tone": "héshì",
                "pos": "word",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "héshì",
            "tone": "héshì"
          },
          {
            "stage": "word",
            "vi": "chất lượng",
            "hanzi": "质量",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhìliàng",
                "tone": "zhìliàng",
                "pos": "word",
                "vi": "chất lượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhìliàng",
            "tone": "zhìliàng"
          },
          {
            "stage": "word",
            "vi": "giá cả",
            "hanzi": "价格",
            "words": [
              {
                "text": "价格",
                "pinyin": "jiàgé",
                "tone": "jiàgé",
                "pos": "word",
                "vi": "giá cả"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiàgé",
            "tone": "jiàgé"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuǎnzé",
                "tone": "xuǎnzé",
                "pos": "word",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xuǎnzé",
            "tone": "xuǎnzé"
          },
          {
            "stage": "word",
            "vi": "so sánh",
            "hanzi": "比较",
            "words": [
              {
                "text": "比较",
                "pinyin": "bǐjiào",
                "tone": "bǐjiào",
                "pos": "word",
                "vi": "so sánh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǐjiào",
            "tone": "bǐjiào"
          },
          {
            "stage": "word",
            "vi": "lãng phí",
            "hanzi": "浪费",
            "words": [
              {
                "text": "浪费",
                "pinyin": "làngfèi",
                "tone": "làngfèi",
                "pos": "word",
                "vi": "lãng phí"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "làngfèi",
            "tone": "làngfèi"
          },
          {
            "stage": "word",
            "vi": "thiết thực, hữu dụng",
            "hanzi": "实用",
            "words": [
              {
                "text": "实用",
                "pinyin": "shíyòng",
                "tone": "shíyòng",
                "pos": "word",
                "vi": "thiết thực, hữu dụng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shíyòng",
            "tone": "shíyòng"
          },
          {
            "stage": "phrase",
            "vi": "mua thứ phù hợp",
            "hanzi": "买对的",
            "words": [
              {
                "text": "买",
                "pinyin": "mǎi",
                "tone": "mǎi",
                "pos": "phrase",
                "vi": "mua thứ phù hợp"
              },
              {
                "text": "对",
                "pinyin": "duì",
                "tone": "duì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mǎi duì de",
            "tone": "mǎi duì de"
          },
          {
            "stage": "phrase",
            "vi": "không mua thứ đắt",
            "hanzi": "不买贵的",
            "words": [
              {
                "text": "不",
                "pinyin": "bù",
                "tone": "bù",
                "pos": "phrase",
                "vi": "không mua thứ đắt"
              },
              {
                "text": "买",
                "pinyin": "mǎi",
                "tone": "mǎi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "贵的",
                "pinyin": "guìde",
                "tone": "guìde",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bù mǎi guìde",
            "tone": "bù mǎi guìde"
          },
          {
            "stage": "phrase",
            "vi": "giá cả phù hợp",
            "hanzi": "价格合适",
            "words": [
              {
                "text": "价格",
                "pinyin": "jiàgé",
                "tone": "jiàgé",
                "pos": "phrase",
                "vi": "giá cả phù hợp"
              },
              {
                "text": "合适",
                "pinyin": "héshì",
                "tone": "héshì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiàgé héshì",
            "tone": "jiàgé héshì"
          },
          {
            "stage": "phrase",
            "vi": "chất lượng khá tốt",
            "hanzi": "质量不错",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhìliàng",
                "tone": "zhìliàng",
                "pos": "phrase",
                "vi": "chất lượng khá tốt"
              },
              {
                "text": "不错",
                "pinyin": "búcuò",
                "tone": "búcuò",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhìliàng búcuò",
            "tone": "zhìliàng búcuò"
          },
          {
            "stage": "phrase",
            "vi": "so sánh thử",
            "hanzi": "比较一下",
            "words": [
              {
                "text": "比较",
                "pinyin": "bǐjiào",
                "tone": "bǐjiào",
                "pos": "phrase",
                "vi": "so sánh thử"
              },
              {
                "text": "一下",
                "pinyin": "yíxià",
                "tone": "yíxià",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǐjiào yíxià",
            "tone": "bǐjiào yíxià"
          },
          {
            "stage": "sentence",
            "vi": "Mua đồ không thể chỉ nhìn vào giá.",
            "hanzi": "买东西不能只看价格",
            "words": [
              {
                "text": "买东西",
                "pinyin": "mǎidōngxī",
                "tone": "mǎidōngxī",
                "pos": "sentence",
                "vi": "Mua đồ không thể chỉ nhìn vào giá."
              },
              {
                "text": "不能",
                "pinyin": "bùnéng",
                "tone": "bùnéng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "只看",
                "pinyin": "zhīkàn",
                "tone": "zhīkàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "价格",
                "pinyin": "jiàgé",
                "tone": "jiàgé",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mǎidōngxī bùnéng zhīkàn jiàgé",
            "tone": "mǎidōngxī bùnéng zhīkàn jiàgé"
          },
          {
            "stage": "sentence",
            "vi": "Đắt chưa chắc là phù hợp nhất.",
            "hanzi": "贵的不一定最合适",
            "words": [
              {
                "text": "贵的",
                "pinyin": "guìde",
                "tone": "guìde",
                "pos": "sentence",
                "vi": "Đắt chưa chắc là phù hợp nhất."
              },
              {
                "text": "不一定",
                "pinyin": "bùyídìng",
                "tone": "bùyídìng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "最",
                "pinyin": "zuì",
                "tone": "zuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "合适",
                "pinyin": "héshì",
                "tone": "héshì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guìde bùyídìng zuì héshì",
            "tone": "guìde bùyídìng zuì héshì"
          },
          {
            "stage": "sentence",
            "vi": "Tôi muốn so sánh chất lượng trước.",
            "hanzi": "我想先比较一下质量",
            "words": [
              {
                "text": "我想",
                "pinyin": "wǒxiǎng",
                "tone": "wǒxiǎng",
                "pos": "sentence",
                "vi": "Tôi muốn so sánh chất lượng trước."
              },
              {
                "text": "先",
                "pinyin": "xiān",
                "tone": "xiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "比较",
                "pinyin": "bǐjiào",
                "tone": "bǐjiào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一下",
                "pinyin": "yíxià",
                "tone": "yíxià",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "质量",
                "pinyin": "zhìliàng",
                "tone": "zhìliàng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒxiǎng xiān bǐjiào yíxià zhìliàng",
            "tone": "wǒxiǎng xiān bǐjiào yíxià zhìliàng"
          },
          {
            "stage": "sentence",
            "vi": "Chỉ mua thứ phù hợp thì mới không lãng phí tiền.",
            "hanzi": "只买对的才不会浪费钱",
            "words": [
              {
                "text": "只买",
                "pinyin": "zhīmǎi",
                "tone": "zhīmǎi",
                "pos": "sentence",
                "vi": "Chỉ mua thứ phù hợp thì mới không lãng phí tiền."
              },
              {
                "text": "对",
                "pinyin": "duì",
                "tone": "duì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "才不会",
                "pinyin": "cáibúhuì",
                "tone": "cáibúhuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "浪费",
                "pinyin": "làngfèi",
                "tone": "làngfèi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "钱",
                "pinyin": "qián",
                "tone": "qián",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhīmǎi duì de cáibúhuì làngfèi qián",
            "tone": "zhīmǎi duì de cáibúhuì làngfèi qián"
          },
          {
            "stage": "mixed",
            "vi": "Chỉ mua thứ phù hợp thì mới không lãng phí tiền.",
            "hanzi": "只买对的才不会浪费钱",
            "words": [
              {
                "text": "只买",
                "pinyin": "zhīmǎi",
                "tone": "zhīmǎi",
                "pos": "mixed",
                "vi": "Chỉ mua thứ phù hợp thì mới không lãng phí tiền."
              },
              {
                "text": "对",
                "pinyin": "duì",
                "tone": "duì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "才不会",
                "pinyin": "cáibúhuì",
                "tone": "cáibúhuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "浪费",
                "pinyin": "làngfèi",
                "tone": "làngfèi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "钱",
                "pinyin": "qián",
                "tone": "qián",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhīmǎi duì de cáibúhuì làngfèi qián",
            "tone": "zhīmǎi duì de cáibúhuì làngfèi qián"
          }
        ]
      }
    ],
    "HSK5": [
      {
        "id": "hsk5-l1",
        "no": 1,
        "titleZh": "爱的细节",
        "titleVi": "Những chi tiết của tình yêu",
        "items": [
          {
            "stage": "word",
            "vi": "tình yêu",
            "hanzi": "爱情",
            "words": [
              {
                "text": "爱情",
                "pinyin": "àiqíng",
                "tone": "àiqíng",
                "pos": "word",
                "vi": "tình yêu"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "àiqíng",
            "tone": "àiqíng"
          },
          {
            "stage": "word",
            "vi": "chi tiết",
            "hanzi": "细节",
            "words": [
              {
                "text": "细节",
                "pinyin": "xìjié",
                "tone": "xìjié",
                "pos": "word",
                "vi": "chi tiết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xìjié",
            "tone": "xìjié"
          },
          {
            "stage": "word",
            "vi": "cuộc sống",
            "hanzi": "生活",
            "words": [
              {
                "text": "生活",
                "pinyin": "shēnghuó",
                "tone": "shēnghuó",
                "pos": "word",
                "vi": "cuộc sống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shēnghuó",
            "tone": "shēnghuó"
          },
          {
            "stage": "word",
            "vi": "quan tâm",
            "hanzi": "关心",
            "words": [
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "word",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guānxīn",
            "tone": "guānxīn"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "word",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhàogù",
            "tone": "zhàogù"
          },
          {
            "stage": "word",
            "vi": "bày tỏ",
            "hanzi": "表达",
            "words": [
              {
                "text": "表达",
                "pinyin": "biǎodá",
                "tone": "biǎodá",
                "pos": "word",
                "vi": "bày tỏ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biǎodá",
            "tone": "biǎodá"
          },
          {
            "stage": "word",
            "vi": "trân trọng",
            "hanzi": "珍惜",
            "words": [
              {
                "text": "珍惜",
                "pinyin": "zhēnxī",
                "tone": "zhēnxī",
                "pos": "word",
                "vi": "trân trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnxī",
            "tone": "zhēnxī"
          },
          {
            "stage": "word",
            "vi": "ở bên, đi cùng",
            "hanzi": "陪",
            "words": [
              {
                "text": "陪",
                "pinyin": "péi",
                "tone": "péi",
                "pos": "word",
                "vi": "ở bên, đi cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "péi",
            "tone": "péi"
          },
          {
            "stage": "word",
            "vi": "trách nhiệm",
            "hanzi": "责任",
            "words": [
              {
                "text": "责任",
                "pinyin": "zérèn",
                "tone": "zérèn",
                "pos": "word",
                "vi": "trách nhiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zérèn",
            "tone": "zérèn"
          },
          {
            "stage": "word",
            "vi": "hạnh phúc",
            "hanzi": "幸福",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xìngfú",
                "tone": "xìngfú",
                "pos": "word",
                "vi": "hạnh phúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xìngfú",
            "tone": "xìngfú"
          },
          {
            "stage": "word",
            "vi": "thật sự",
            "hanzi": "真正",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "word",
                "vi": "thật sự"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng",
            "tone": "zhēnzhèng"
          },
          {
            "stage": "word",
            "vi": "bình thường",
            "hanzi": "普通",
            "words": [
              {
                "text": "普通",
                "pinyin": "pǔtōng",
                "tone": "pǔtōng",
                "pos": "word",
                "vi": "bình thường"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pǔtōng",
            "tone": "pǔtōng"
          },
          {
            "stage": "phrase",
            "vi": "chi tiết của tình yêu",
            "hanzi": "爱的细节",
            "words": [
              {
                "text": "爱的",
                "pinyin": "àide",
                "tone": "àide",
                "pos": "phrase",
                "vi": "chi tiết của tình yêu"
              },
              {
                "text": "细节",
                "pinyin": "xìjié",
                "tone": "xìjié",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "àide xìjié",
            "tone": "àide xìjié"
          },
          {
            "stage": "phrase",
            "vi": "quan tâm người nhà",
            "hanzi": "关心家人",
            "words": [
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "phrase",
                "vi": "quan tâm người nhà"
              },
              {
                "text": "家人",
                "pinyin": "jiārén",
                "tone": "jiārén",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guānxīn jiārén",
            "tone": "guānxīn jiārén"
          },
          {
            "stage": "phrase",
            "vi": "bày tỏ lời cảm ơn",
            "hanzi": "表达感谢",
            "words": [
              {
                "text": "表达",
                "pinyin": "biǎodá",
                "tone": "biǎodá",
                "pos": "phrase",
                "vi": "bày tỏ lời cảm ơn"
              },
              {
                "text": "感谢",
                "pinyin": "gǎnxiè",
                "tone": "gǎnxiè",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biǎodá gǎnxiè",
            "tone": "biǎodá gǎnxiè"
          },
          {
            "stage": "phrase",
            "vi": "trân trọng cuộc sống",
            "hanzi": "珍惜生活",
            "words": [
              {
                "text": "珍惜",
                "pinyin": "zhēnxī",
                "tone": "zhēnxī",
                "pos": "phrase",
                "vi": "trân trọng cuộc sống"
              },
              {
                "text": "生活",
                "pinyin": "shēnghuó",
                "tone": "shēnghuó",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnxī shēnghuó",
            "tone": "zhēnxī shēnghuó"
          },
          {
            "stage": "phrase",
            "vi": "hạnh phúc thật sự",
            "hanzi": "真正的幸福",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "phrase",
                "vi": "hạnh phúc thật sự"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "幸福",
                "pinyin": "xìngfú",
                "tone": "xìngfú",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng de xìngfú",
            "tone": "zhēnzhèng de xìngfú"
          },
          {
            "stage": "sentence",
            "vi": "Tình yêu thường ẩn trong những chi tiết rất nhỏ.",
            "hanzi": "爱常常藏在很小的细节里",
            "words": [
              {
                "text": "爱",
                "pinyin": "ài",
                "tone": "ài",
                "pos": "sentence",
                "vi": "Tình yêu thường ẩn trong những chi tiết rất nhỏ."
              },
              {
                "text": "常常",
                "pinyin": "chángcháng",
                "tone": "chángcháng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "藏",
                "pinyin": "cáng",
                "tone": "cáng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "在",
                "pinyin": "zài",
                "tone": "zài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很小",
                "pinyin": "hěnxiǎo",
                "tone": "hěnxiǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "细节",
                "pinyin": "xìjié",
                "tone": "xìjié",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "里",
                "pinyin": "lǐ",
                "tone": "lǐ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ài chángcháng cáng zài hěnxiǎo de xìjié lǐ",
            "tone": "ài chángcháng cáng zài hěnxiǎo de xìjié lǐ"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy chăm sóc cha mẹ mỗi ngày và không hề thấy phiền.",
            "hanzi": "他每天照顾父母从不觉得麻烦",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Anh ấy chăm sóc cha mẹ mỗi ngày và không hề thấy phiền."
              },
              {
                "text": "每天",
                "pinyin": "měitiān",
                "tone": "měitiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "从不",
                "pinyin": "cóngbù",
                "tone": "cóngbù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "觉得",
                "pinyin": "juéde",
                "tone": "juéde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "麻烦",
                "pinyin": "máfán",
                "tone": "máfán",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā měitiān zhàogù fùmǔ cóngbù juéde máfán",
            "tone": "tā měitiān zhàogù fùmǔ cóngbù juéde máfán"
          },
          {
            "stage": "sentence",
            "vi": "Một câu nói bình thường cũng có thể thể hiện sự quan tâm thật lòng.",
            "hanzi": "一句普通的话也可以表达真正的关心",
            "words": [
              {
                "text": "一句",
                "pinyin": "yíjù",
                "tone": "yíjù",
                "pos": "sentence",
                "vi": "Một câu nói bình thường cũng có thể thể hiện sự quan tâm thật lòng."
              },
              {
                "text": "普通",
                "pinyin": "pǔtōng",
                "tone": "pǔtōng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的话",
                "pinyin": "dehuà",
                "tone": "dehuà",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "也可以",
                "pinyin": "yěkěyǐ",
                "tone": "yěkěyǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "表达",
                "pinyin": "biǎodá",
                "tone": "biǎodá",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yíjù pǔtōng dehuà yěkěyǐ biǎodá zhēnzhèng de guānxīn",
            "tone": "yíjù pǔtōng dehuà yěkěyǐ biǎodá zhēnzhèng de guānxīn"
          },
          {
            "stage": "sentence",
            "vi": "Người biết trân trọng thì dễ cảm thấy hạnh phúc hơn.",
            "hanzi": "懂得珍惜的人更容易感到幸福",
            "words": [
              {
                "text": "懂得",
                "pinyin": "dǒngde",
                "tone": "dǒngde",
                "pos": "sentence",
                "vi": "Người biết trân trọng thì dễ cảm thấy hạnh phúc hơn."
              },
              {
                "text": "珍惜",
                "pinyin": "zhēnxī",
                "tone": "zhēnxī",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "人",
                "pinyin": "rén",
                "tone": "rén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "更",
                "pinyin": "gèng",
                "tone": "gèng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "容易",
                "pinyin": "róngyì",
                "tone": "róngyì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "感到",
                "pinyin": "gǎndào",
                "tone": "gǎndào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "幸福",
                "pinyin": "xìngfú",
                "tone": "xìngfú",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dǒngde zhēnxī de rén gèng róngyì gǎndào xìngfú",
            "tone": "dǒngde zhēnxī de rén gèng róngyì gǎndào xìngfú"
          },
          {
            "stage": "mixed",
            "vi": "Chi tiết, chăm sóc, trân trọng và hạnh phúc.",
            "hanzi": "细节照顾珍惜幸福",
            "words": [
              {
                "text": "细节",
                "pinyin": "xìjié",
                "tone": "xìjié",
                "pos": "mixed",
                "vi": "Chi tiết, chăm sóc, trân trọng và hạnh phúc."
              },
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "珍惜",
                "pinyin": "zhēnxī",
                "tone": "zhēnxī",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "幸福",
                "pinyin": "xìngfú",
                "tone": "xìngfú",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xìjié zhàogù zhēnxī xìngfú",
            "tone": "xìjié zhàogù zhēnxī xìngfú"
          }
        ]
      },
      {
        "id": "hsk5-l2",
        "no": 2,
        "titleZh": "留串钥匙给父母",
        "titleVi": "Để lại một chùm chìa khóa cho cha mẹ",
        "items": [
          {
            "stage": "word",
            "vi": "chìa khóa",
            "hanzi": "钥匙",
            "words": [
              {
                "text": "钥匙",
                "pinyin": "yàoshi",
                "tone": "yàoshi",
                "pos": "word",
                "vi": "chìa khóa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yàoshi",
            "tone": "yàoshi"
          },
          {
            "stage": "word",
            "vi": "cha mẹ",
            "hanzi": "父母",
            "words": [
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "word",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fùmǔ",
            "tone": "fùmǔ"
          },
          {
            "stage": "word",
            "vi": "người già",
            "hanzi": "老人",
            "words": [
              {
                "text": "老人",
                "pinyin": "lǎorén",
                "tone": "lǎorén",
                "pos": "word",
                "vi": "người già"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lǎorén",
            "tone": "lǎorén"
          },
          {
            "stage": "word",
            "vi": "hàng xóm",
            "hanzi": "邻居",
            "words": [
              {
                "text": "邻居",
                "pinyin": "línjū",
                "tone": "línjū",
                "pos": "word",
                "vi": "hàng xóm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "línjū",
            "tone": "línjū"
          },
          {
            "stage": "word",
            "vi": "cửa nhà",
            "hanzi": "家门",
            "words": [
              {
                "text": "家门",
                "pinyin": "jiāmén",
                "tone": "jiāmén",
                "pos": "word",
                "vi": "cửa nhà"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiāmén",
            "tone": "jiāmén"
          },
          {
            "stage": "word",
            "vi": "an toàn",
            "hanzi": "安全",
            "words": [
              {
                "text": "安全",
                "pinyin": "ānquán",
                "tone": "ānquán",
                "pos": "word",
                "vi": "an toàn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ānquán",
            "tone": "ānquán"
          },
          {
            "stage": "word",
            "vi": "thuận tiện",
            "hanzi": "方便",
            "words": [
              {
                "text": "方便",
                "pinyin": "fāngbiàn",
                "tone": "fāngbiàn",
                "pos": "word",
                "vi": "thuận tiện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fāngbiàn",
            "tone": "fāngbiàn"
          },
          {
            "stage": "word",
            "vi": "lo lắng",
            "hanzi": "担心",
            "words": [
              {
                "text": "担心",
                "pinyin": "dānxīn",
                "tone": "dānxīn",
                "pos": "word",
                "vi": "lo lắng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dānxīn",
            "tone": "dānxīn"
          },
          {
            "stage": "word",
            "vi": "liên lạc",
            "hanzi": "联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "word",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liánxì",
            "tone": "liánxì"
          },
          {
            "stage": "word",
            "vi": "để lại",
            "hanzi": "留下",
            "words": [
              {
                "text": "留下",
                "pinyin": "liúxià",
                "tone": "liúxià",
                "pos": "word",
                "vi": "để lại"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liúxià",
            "tone": "liúxià"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "word",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhàogù",
            "tone": "zhàogù"
          },
          {
            "stage": "word",
            "vi": "thói quen",
            "hanzi": "习惯",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xíguàn",
                "tone": "xíguàn",
                "pos": "word",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xíguàn",
            "tone": "xíguàn"
          },
          {
            "stage": "phrase",
            "vi": "để lại một chùm chìa khóa",
            "hanzi": "留一串钥匙",
            "words": [
              {
                "text": "留",
                "pinyin": "liú",
                "tone": "liú",
                "pos": "phrase",
                "vi": "để lại một chùm chìa khóa"
              },
              {
                "text": "一串",
                "pinyin": "yíchuàn",
                "tone": "yíchuàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "钥匙",
                "pinyin": "yàoshi",
                "tone": "yàoshi",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liú yíchuàn yàoshi",
            "tone": "liú yíchuàn yàoshi"
          },
          {
            "stage": "phrase",
            "vi": "tiện cho cha mẹ",
            "hanzi": "方便父母",
            "words": [
              {
                "text": "方便",
                "pinyin": "fāngbiàn",
                "tone": "fāngbiàn",
                "pos": "phrase",
                "vi": "tiện cho cha mẹ"
              },
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fāngbiàn fùmǔ",
            "tone": "fāngbiàn fùmǔ"
          },
          {
            "stage": "phrase",
            "vi": "liên lạc với hàng xóm",
            "hanzi": "联系邻居",
            "words": [
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "phrase",
                "vi": "liên lạc với hàng xóm"
              },
              {
                "text": "邻居",
                "pinyin": "línjū",
                "tone": "línjū",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liánxì línjū",
            "tone": "liánxì línjū"
          },
          {
            "stage": "phrase",
            "vi": "lo về an toàn",
            "hanzi": "担心安全",
            "words": [
              {
                "text": "担心",
                "pinyin": "dānxīn",
                "tone": "dānxīn",
                "pos": "phrase",
                "vi": "lo về an toàn"
              },
              {
                "text": "安全",
                "pinyin": "ānquán",
                "tone": "ānquán",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dānxīn ānquán",
            "tone": "dānxīn ānquán"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc người già",
            "hanzi": "照顾老人",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "phrase",
                "vi": "chăm sóc người già"
              },
              {
                "text": "老人",
                "pinyin": "lǎorén",
                "tone": "lǎorén",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhàogù lǎorén",
            "tone": "zhàogù lǎorén"
          },
          {
            "stage": "sentence",
            "vi": "Tôi để lại cho cha mẹ một chùm chìa khóa.",
            "hanzi": "我给父母留了一串钥匙",
            "words": [
              {
                "text": "我",
                "pinyin": "wǒ",
                "tone": "wǒ",
                "pos": "sentence",
                "vi": "Tôi để lại cho cha mẹ một chùm chìa khóa."
              },
              {
                "text": "给",
                "pinyin": "gěi",
                "tone": "gěi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "留了",
                "pinyin": "liúle",
                "tone": "liúle",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一串",
                "pinyin": "yíchuàn",
                "tone": "yíchuàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "钥匙",
                "pinyin": "yàoshi",
                "tone": "yàoshi",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wǒ gěi fùmǔ liúle yíchuàn yàoshi",
            "tone": "wǒ gěi fùmǔ liúle yíchuàn yàoshi"
          },
          {
            "stage": "sentence",
            "vi": "Làm vậy là để họ vào nhà thuận tiện hơn.",
            "hanzi": "这样做是为了方便他们进门",
            "words": [
              {
                "text": "这样",
                "pinyin": "zhèyàng",
                "tone": "zhèyàng",
                "pos": "sentence",
                "vi": "Làm vậy là để họ vào nhà thuận tiện hơn."
              },
              {
                "text": "做",
                "pinyin": "zuò",
                "tone": "zuò",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "是",
                "pinyin": "shì",
                "tone": "shì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "为了",
                "pinyin": "wèile",
                "tone": "wèile",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "方便",
                "pinyin": "fāngbiàn",
                "tone": "fāngbiàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "他们",
                "pinyin": "tāmen",
                "tone": "tāmen",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "进",
                "pinyin": "jìn",
                "tone": "jìn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "门",
                "pinyin": "mén",
                "tone": "mén",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhèyàng zuò shì wèile fāngbiàn tāmen jìn mén",
            "tone": "zhèyàng zuò shì wèile fāngbiàn tāmen jìn mén"
          },
          {
            "stage": "sentence",
            "vi": "Nếu người già thấy không khỏe, có thể liên lạc ngay với hàng xóm.",
            "hanzi": "如果老人身体不舒服可以马上联系邻居",
            "words": [
              {
                "text": "如果",
                "pinyin": "rúguǒ",
                "tone": "rúguǒ",
                "pos": "sentence",
                "vi": "Nếu người già thấy không khỏe, có thể liên lạc ngay với hàng xóm."
              },
              {
                "text": "老人",
                "pinyin": "lǎorén",
                "tone": "lǎorén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "身体",
                "pinyin": "shēntǐ",
                "tone": "shēntǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不",
                "pinyin": "bù",
                "tone": "bù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "舒服",
                "pinyin": "shūfú",
                "tone": "shūfú",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "可以",
                "pinyin": "kěyǐ",
                "tone": "kěyǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "马上",
                "pinyin": "mǎshàng",
                "tone": "mǎshàng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "邻居",
                "pinyin": "línjū",
                "tone": "línjū",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rúguǒ lǎorén shēntǐ bù shūfú kěyǐ mǎshàng liánxì línjū",
            "tone": "rúguǒ lǎorén shēntǐ bù shūfú kěyǐ mǎshàng liánxì línjū"
          },
          {
            "stage": "sentence",
            "vi": "Nhiều sự quan tâm cuối cùng sẽ trở thành thói quen trong đời sống.",
            "hanzi": "很多关心最后都会变成生活里的习惯",
            "words": [
              {
                "text": "很多",
                "pinyin": "hěnduō",
                "tone": "hěnduō",
                "pos": "sentence",
                "vi": "Nhiều sự quan tâm cuối cùng sẽ trở thành thói quen trong đời sống."
              },
              {
                "text": "关心",
                "pinyin": "guānxīn",
                "tone": "guānxīn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "最后",
                "pinyin": "zuìhòu",
                "tone": "zuìhòu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "都会",
                "pinyin": "dōuhuì",
                "tone": "dōuhuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "变成",
                "pinyin": "biànchéng",
                "tone": "biànchéng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "生活",
                "pinyin": "shēnghuó",
                "tone": "shēnghuó",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "里",
                "pinyin": "lǐ",
                "tone": "lǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "习惯",
                "pinyin": "xíguàn",
                "tone": "xíguàn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hěnduō guānxīn zuìhòu dōuhuì biànchéng shēnghuó lǐ de xíguàn",
            "tone": "hěnduō guānxīn zuìhòu dōuhuì biànchéng shēnghuó lǐ de xíguàn"
          },
          {
            "stage": "mixed",
            "vi": "Thuận tiện, an toàn, lo lắng và liên lạc.",
            "hanzi": "方便安全担心联系",
            "words": [
              {
                "text": "方便",
                "pinyin": "fāngbiàn",
                "tone": "fāngbiàn",
                "pos": "mixed",
                "vi": "Thuận tiện, an toàn, lo lắng và liên lạc."
              },
              {
                "text": "安全",
                "pinyin": "ānquán",
                "tone": "ānquán",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "担心",
                "pinyin": "dānxīn",
                "tone": "dānxīn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "联系",
                "pinyin": "liánxì",
                "tone": "liánxì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fāngbiàn ānquán dānxīn liánxì",
            "tone": "fāngbiàn ānquán dānxīn liánxì"
          }
        ]
      },
      {
        "id": "hsk5-l3",
        "no": 3,
        "titleZh": "人生有选择，一切可改变",
        "titleVi": "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi",
        "items": [
          {
            "stage": "word",
            "vi": "cuộc đời",
            "hanzi": "人生",
            "words": [
              {
                "text": "人生",
                "pinyin": "rénshēng",
                "tone": "rénshēng",
                "pos": "word",
                "vi": "cuộc đời"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rénshēng",
            "tone": "rénshēng"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuǎnzé",
                "tone": "xuǎnzé",
                "pos": "word",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xuǎnzé",
            "tone": "xuǎnzé"
          },
          {
            "stage": "word",
            "vi": "thay đổi",
            "hanzi": "改变",
            "words": [
              {
                "text": "改变",
                "pinyin": "gǎibiàn",
                "tone": "gǎibiàn",
                "pos": "word",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gǎibiàn",
            "tone": "gǎibiàn"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "jīhuì",
                "tone": "jīhuì",
                "pos": "word",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīhuì",
            "tone": "jīhuì"
          },
          {
            "stage": "word",
            "vi": "quyết định",
            "hanzi": "决定",
            "words": [
              {
                "text": "决定",
                "pinyin": "juédìng",
                "tone": "juédìng",
                "pos": "word",
                "vi": "quyết định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "juédìng",
            "tone": "juédìng"
          },
          {
            "stage": "word",
            "vi": "thái độ",
            "hanzi": "态度",
            "words": [
              {
                "text": "态度",
                "pinyin": "tàidù",
                "tone": "tàidù",
                "pos": "word",
                "vi": "thái độ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tàidù",
            "tone": "tàidù"
          },
          {
            "stage": "word",
            "vi": "nỗ lực",
            "hanzi": "努力",
            "words": [
              {
                "text": "努力",
                "pinyin": "nǔlì",
                "tone": "nǔlì",
                "pos": "word",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nǔlì",
            "tone": "nǔlì"
          },
          {
            "stage": "word",
            "vi": "kiên trì",
            "hanzi": "坚持",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jiānchí",
                "tone": "jiānchí",
                "pos": "word",
                "vi": "kiên trì"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiānchí",
            "tone": "jiānchí"
          },
          {
            "stage": "word",
            "vi": "thất bại",
            "hanzi": "失败",
            "words": [
              {
                "text": "失败",
                "pinyin": "shībài",
                "tone": "shībài",
                "pos": "word",
                "vi": "thất bại"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shībài",
            "tone": "shībài"
          },
          {
            "stage": "word",
            "vi": "thành công",
            "hanzi": "成功",
            "words": [
              {
                "text": "成功",
                "pinyin": "chénggōng",
                "tone": "chénggōng",
                "pos": "word",
                "vi": "thành công"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chénggōng",
            "tone": "chénggōng"
          },
          {
            "stage": "word",
            "vi": "dũng cảm",
            "hanzi": "勇敢",
            "words": [
              {
                "text": "勇敢",
                "pinyin": "yǒnggǎn",
                "tone": "yǒnggǎn",
                "pos": "word",
                "vi": "dũng cảm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yǒnggǎn",
            "tone": "yǒnggǎn"
          },
          {
            "stage": "word",
            "vi": "phù hợp",
            "hanzi": "适合",
            "words": [
              {
                "text": "适合",
                "pinyin": "shìhé",
                "tone": "shìhé",
                "pos": "word",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shìhé",
            "tone": "shìhé"
          },
          {
            "stage": "phrase",
            "vi": "lựa chọn trong cuộc đời",
            "hanzi": "人生的选择",
            "words": [
              {
                "text": "人生",
                "pinyin": "rénshēng",
                "tone": "rénshēng",
                "pos": "phrase",
                "vi": "lựa chọn trong cuộc đời"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "选择",
                "pinyin": "xuǎnzé",
                "tone": "xuǎnzé",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rénshēng de xuǎnzé",
            "tone": "rénshēng de xuǎnzé"
          },
          {
            "stage": "phrase",
            "vi": "thay đổi số phận",
            "hanzi": "改变命运",
            "words": [
              {
                "text": "改变",
                "pinyin": "gǎibiàn",
                "tone": "gǎibiàn",
                "pos": "phrase",
                "vi": "thay đổi số phận"
              },
              {
                "text": "命运",
                "pinyin": "mìngyùn",
                "tone": "mìngyùn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gǎibiàn mìngyùn",
            "tone": "gǎibiàn mìngyùn"
          },
          {
            "stage": "phrase",
            "vi": "nắm bắt cơ hội",
            "hanzi": "抓住机会",
            "words": [
              {
                "text": "抓住",
                "pinyin": "zhuāzhù",
                "tone": "zhuāzhù",
                "pos": "phrase",
                "vi": "nắm bắt cơ hội"
              },
              {
                "text": "机会",
                "pinyin": "jīhuì",
                "tone": "jīhuì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuāzhù jīhuì",
            "tone": "zhuāzhù jīhuì"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì nỗ lực",
            "hanzi": "坚持努力",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jiānchí",
                "tone": "jiānchí",
                "pos": "phrase",
                "vi": "kiên trì nỗ lực"
              },
              {
                "text": "努力",
                "pinyin": "nǔlì",
                "tone": "nǔlì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jiānchí nǔlì",
            "tone": "jiānchí nǔlì"
          },
          {
            "stage": "phrase",
            "vi": "quyết định dũng cảm",
            "hanzi": "勇敢决定",
            "words": [
              {
                "text": "勇敢",
                "pinyin": "yǒnggǎn",
                "tone": "yǒnggǎn",
                "pos": "phrase",
                "vi": "quyết định dũng cảm"
              },
              {
                "text": "决定",
                "pinyin": "juédìng",
                "tone": "juédìng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yǒnggǎn juédìng",
            "tone": "yǒnggǎn juédìng"
          },
          {
            "stage": "sentence",
            "vi": "Cuộc đời có rất nhiều lựa chọn.",
            "hanzi": "人生有很多选择",
            "words": [
              {
                "text": "人生",
                "pinyin": "rénshēng",
                "tone": "rénshēng",
                "pos": "sentence",
                "vi": "Cuộc đời có rất nhiều lựa chọn."
              },
              {
                "text": "有",
                "pinyin": "yǒu",
                "tone": "yǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很多",
                "pinyin": "hěnduō",
                "tone": "hěnduō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "选择",
                "pinyin": "xuǎnzé",
                "tone": "xuǎnzé",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rénshēng yǒu hěnduō xuǎnzé",
            "tone": "rénshēng yǒu hěnduō xuǎnzé"
          },
          {
            "stage": "sentence",
            "vi": "Một quyết định có thể thay đổi hướng đi của một người.",
            "hanzi": "一次决定可能会改变一个人的方向",
            "words": [
              {
                "text": "一次",
                "pinyin": "yícì",
                "tone": "yícì",
                "pos": "sentence",
                "vi": "Một quyết định có thể thay đổi hướng đi của một người."
              },
              {
                "text": "决定",
                "pinyin": "juédìng",
                "tone": "juédìng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "可能",
                "pinyin": "kěnéng",
                "tone": "kěnéng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "会",
                "pinyin": "huì",
                "tone": "huì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "改变",
                "pinyin": "gǎibiàn",
                "tone": "gǎibiàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一个",
                "pinyin": "yígè",
                "tone": "yígè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "人的",
                "pinyin": "rénde",
                "tone": "rénde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "方向",
                "pinyin": "fāngxiàng",
                "tone": "fāngxiàng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yícì juédìng kěnéng huì gǎibiàn yígè rénde fāngxiàng",
            "tone": "yícì juédìng kěnéng huì gǎibiàn yígè rénde fāngxiàng"
          },
          {
            "stage": "sentence",
            "vi": "Thất bại không đáng sợ, điều đáng sợ là không còn cố gắng.",
            "hanzi": "失败并不可怕可怕的是不再努力",
            "words": [
              {
                "text": "失败",
                "pinyin": "shībài",
                "tone": "shībài",
                "pos": "sentence",
                "vi": "Thất bại không đáng sợ, điều đáng sợ là không còn cố gắng."
              },
              {
                "text": "并不",
                "pinyin": "bìngbù",
                "tone": "bìngbù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "可怕",
                "pinyin": "kěpà",
                "tone": "kěpà",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "可怕",
                "pinyin": "kěpà",
                "tone": "kěpà",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的是",
                "pinyin": "deshì",
                "tone": "deshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不再",
                "pinyin": "búzài",
                "tone": "búzài",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "努力",
                "pinyin": "nǔlì",
                "tone": "nǔlì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shībài bìngbù kěpà kěpà deshì búzài nǔlì",
            "tone": "shībài bìngbù kěpà kěpà deshì búzài nǔlì"
          },
          {
            "stage": "sentence",
            "vi": "Chỉ cần kiên trì, ta có thể tìm được con đường phù hợp với mình.",
            "hanzi": "只要坚持就可能找到适合自己的路",
            "words": [
              {
                "text": "只要",
                "pinyin": "zhǐyào",
                "tone": "zhǐyào",
                "pos": "sentence",
                "vi": "Chỉ cần kiên trì, ta có thể tìm được con đường phù hợp với mình."
              },
              {
                "text": "坚持",
                "pinyin": "jiānchí",
                "tone": "jiānchí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "就",
                "pinyin": "jiù",
                "tone": "jiù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "可能",
                "pinyin": "kěnéng",
                "tone": "kěnéng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "找到",
                "pinyin": "zhǎodào",
                "tone": "zhǎodào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "适合",
                "pinyin": "shìhé",
                "tone": "shìhé",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "自己",
                "pinyin": "zìjǐ",
                "tone": "zìjǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "路",
                "pinyin": "lù",
                "tone": "lù",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhǐyào jiānchí jiù kěnéng zhǎodào shìhé zìjǐ de lù",
            "tone": "zhǐyào jiānchí jiù kěnéng zhǎodào shìhé zìjǐ de lù"
          },
          {
            "stage": "mixed",
            "vi": "Lựa chọn, thay đổi, cơ hội và kiên trì.",
            "hanzi": "选择改变机会坚持",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuǎnzé",
                "tone": "xuǎnzé",
                "pos": "mixed",
                "vi": "Lựa chọn, thay đổi, cơ hội và kiên trì."
              },
              {
                "text": "改变",
                "pinyin": "gǎibiàn",
                "tone": "gǎibiàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "机会",
                "pinyin": "jīhuì",
                "tone": "jīhuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "坚持",
                "pinyin": "jiānchí",
                "tone": "jiānchí",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xuǎnzé gǎibiàn jīhuì jiānchí",
            "tone": "xuǎnzé gǎibiàn jīhuì jiānchí"
          }
        ]
      },
      {
        "id": "hsk5-l4",
        "no": 4,
        "titleZh": "子路背米",
        "titleVi": "Tử Lộ cõng gạo",
        "items": [
          {
            "stage": "word",
            "vi": "Tử Lộ",
            "hanzi": "子路",
            "words": [
              {
                "text": "子",
                "pinyin": "zǐ",
                "tone": "zǐ",
                "pos": "word",
                "vi": "Tử Lộ"
              },
              {
                "text": "路",
                "pinyin": "lù",
                "tone": "lù",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zǐ lù",
            "tone": "zǐ lù"
          },
          {
            "stage": "word",
            "vi": "Khổng Tử",
            "hanzi": "孔子",
            "words": [
              {
                "text": "孔子",
                "pinyin": "kǒngzǐ",
                "tone": "kǒngzǐ",
                "pos": "word",
                "vi": "Khổng Tử"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kǒngzǐ",
            "tone": "kǒngzǐ"
          },
          {
            "stage": "word",
            "vi": "cha mẹ",
            "hanzi": "父母",
            "words": [
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "word",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fùmǔ",
            "tone": "fùmǔ"
          },
          {
            "stage": "word",
            "vi": "gạo",
            "hanzi": "米",
            "words": [
              {
                "text": "米",
                "pinyin": "mǐ",
                "tone": "mǐ",
                "pos": "word",
                "vi": "gạo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mǐ",
            "tone": "mǐ"
          },
          {
            "stage": "word",
            "vi": "truyền thống",
            "hanzi": "传统",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuántǒng",
                "tone": "chuántǒng",
                "pos": "word",
                "vi": "truyền thống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuántǒng",
            "tone": "chuántǒng"
          },
          {
            "stage": "word",
            "vi": "cõng, vác",
            "hanzi": "背",
            "words": [
              {
                "text": "背",
                "pinyin": "bèi",
                "tone": "bèi",
                "pos": "word",
                "vi": "cõng, vác"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bèi",
            "tone": "bèi"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "word",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhàogù",
            "tone": "zhàogù"
          },
          {
            "stage": "word",
            "vi": "kính trọng",
            "hanzi": "尊敬",
            "words": [
              {
                "text": "尊敬",
                "pinyin": "zūnjìng",
                "tone": "zūnjìng",
                "pos": "word",
                "vi": "kính trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zūnjìng",
            "tone": "zūnjìng"
          },
          {
            "stage": "word",
            "vi": "biết ơn",
            "hanzi": "感恩",
            "words": [
              {
                "text": "感恩",
                "pinyin": "gǎnēn",
                "tone": "gǎnēn",
                "pos": "word",
                "vi": "biết ơn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gǎnēn",
            "tone": "gǎnēn"
          },
          {
            "stage": "word",
            "vi": "hiếu thảo",
            "hanzi": "孝顺",
            "words": [
              {
                "text": "孝顺",
                "pinyin": "xiàoshùn",
                "tone": "xiàoshùn",
                "pos": "word",
                "vi": "hiếu thảo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xiàoshùn",
            "tone": "xiàoshùn"
          },
          {
            "stage": "word",
            "vi": "nghèo khó",
            "hanzi": "贫穷",
            "words": [
              {
                "text": "贫穷",
                "pinyin": "pínqióng",
                "tone": "pínqióng",
                "pos": "word",
                "vi": "nghèo khó"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pínqióng",
            "tone": "pínqióng"
          },
          {
            "stage": "word",
            "vi": "vất vả",
            "hanzi": "辛苦",
            "words": [
              {
                "text": "辛苦",
                "pinyin": "xīnkǔ",
                "tone": "xīnkǔ",
                "pos": "word",
                "vi": "vất vả"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xīnkǔ",
            "tone": "xīnkǔ"
          },
          {
            "stage": "phrase",
            "vi": "cõng gạo về nhà",
            "hanzi": "背米回家",
            "words": [
              {
                "text": "背",
                "pinyin": "bèi",
                "tone": "bèi",
                "pos": "phrase",
                "vi": "cõng gạo về nhà"
              },
              {
                "text": "米",
                "pinyin": "mǐ",
                "tone": "mǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "回家",
                "pinyin": "huíjiā",
                "tone": "huíjiā",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bèi mǐ huíjiā",
            "tone": "bèi mǐ huíjiā"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc cha mẹ",
            "hanzi": "照顾父母",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "phrase",
                "vi": "chăm sóc cha mẹ"
              },
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhàogù fùmǔ",
            "tone": "zhàogù fùmǔ"
          },
          {
            "stage": "phrase",
            "vi": "kính trọng người già",
            "hanzi": "尊敬老人",
            "words": [
              {
                "text": "尊敬",
                "pinyin": "zūnjìng",
                "tone": "zūnjìng",
                "pos": "phrase",
                "vi": "kính trọng người già"
              },
              {
                "text": "老人",
                "pinyin": "lǎorén",
                "tone": "lǎorén",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zūnjìng lǎorén",
            "tone": "zūnjìng lǎorén"
          },
          {
            "stage": "phrase",
            "vi": "câu chuyện truyền thống",
            "hanzi": "传统故事",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuántǒng",
                "tone": "chuántǒng",
                "pos": "phrase",
                "vi": "câu chuyện truyền thống"
              },
              {
                "text": "故事",
                "pinyin": "gùshì",
                "tone": "gùshì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuántǒng gùshì",
            "tone": "chuántǒng gùshì"
          },
          {
            "stage": "phrase",
            "vi": "biết ơn",
            "hanzi": "懂得感恩",
            "words": [
              {
                "text": "懂得",
                "pinyin": "dǒngde",
                "tone": "dǒngde",
                "pos": "phrase",
                "vi": "biết ơn"
              },
              {
                "text": "感恩",
                "pinyin": "gǎnēn",
                "tone": "gǎnēn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dǒngde gǎnēn",
            "tone": "dǒngde gǎnēn"
          },
          {
            "stage": "sentence",
            "vi": "Khi còn trẻ, nhà Tử Lộ rất nghèo.",
            "hanzi": "子路年轻时家里很贫穷",
            "words": [
              {
                "text": "子",
                "pinyin": "zǐ",
                "tone": "zǐ",
                "pos": "sentence",
                "vi": "Khi còn trẻ, nhà Tử Lộ rất nghèo."
              },
              {
                "text": "路",
                "pinyin": "lù",
                "tone": "lù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "年轻",
                "pinyin": "niánqīng",
                "tone": "niánqīng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "时",
                "pinyin": "shí",
                "tone": "shí",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "家里",
                "pinyin": "jiālǐ",
                "tone": "jiālǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很",
                "pinyin": "hěn",
                "tone": "hěn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "贫穷",
                "pinyin": "pínqióng",
                "tone": "pínqióng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zǐ lù niánqīng shí jiālǐ hěn pínqióng",
            "tone": "zǐ lù niánqīng shí jiālǐ hěn pínqióng"
          },
          {
            "stage": "sentence",
            "vi": "Ông thường cõng gạo về nhà chăm sóc cha mẹ.",
            "hanzi": "他常常背米回家照顾父母",
            "words": [
              {
                "text": "他",
                "pinyin": "tā",
                "tone": "tā",
                "pos": "sentence",
                "vi": "Ông thường cõng gạo về nhà chăm sóc cha mẹ."
              },
              {
                "text": "常常",
                "pinyin": "chángcháng",
                "tone": "chángcháng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "背",
                "pinyin": "bèi",
                "tone": "bèi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "米",
                "pinyin": "mǐ",
                "tone": "mǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "回家",
                "pinyin": "huíjiā",
                "tone": "huíjiā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tā chángcháng bèi mǐ huíjiā zhàogù fùmǔ",
            "tone": "tā chángcháng bèi mǐ huíjiā zhàogù fùmǔ"
          },
          {
            "stage": "sentence",
            "vi": "Câu chuyện này thể hiện lòng hiếu thảo trong truyền thống Trung Quốc.",
            "hanzi": "这个故事表现了中国传统中的孝顺",
            "words": [
              {
                "text": "这个",
                "pinyin": "zhège",
                "tone": "zhège",
                "pos": "sentence",
                "vi": "Câu chuyện này thể hiện lòng hiếu thảo trong truyền thống Trung Quốc."
              },
              {
                "text": "故事",
                "pinyin": "gùshì",
                "tone": "gùshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "表现",
                "pinyin": "biǎoxiàn",
                "tone": "biǎoxiàn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "中国",
                "pinyin": "zhōngguó",
                "tone": "zhōngguó",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "传统",
                "pinyin": "chuántǒng",
                "tone": "chuántǒng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "中的",
                "pinyin": "zhōngde",
                "tone": "zhōngde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "孝顺",
                "pinyin": "xiàoshùn",
                "tone": "xiàoshùn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhège gùshì biǎoxiàn liǎo zhōngguó chuántǒng zhōngde xiàoshùn",
            "tone": "zhège gùshì biǎoxiàn liǎo zhōngguó chuántǒng zhōngde xiàoshùn"
          },
          {
            "stage": "sentence",
            "vi": "Người thật sự biết ơn sẽ không quên sự vất vả của cha mẹ.",
            "hanzi": "真正懂得感恩的人不会忘记父母的辛苦",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhēnzhèng",
                "tone": "zhēnzhèng",
                "pos": "sentence",
                "vi": "Người thật sự biết ơn sẽ không quên sự vất vả của cha mẹ."
              },
              {
                "text": "懂得",
                "pinyin": "dǒngde",
                "tone": "dǒngde",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "感恩",
                "pinyin": "gǎnēn",
                "tone": "gǎnēn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "人",
                "pinyin": "rén",
                "tone": "rén",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "不会",
                "pinyin": "búhuì",
                "tone": "búhuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "忘记",
                "pinyin": "wàngjì",
                "tone": "wàngjì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "父母",
                "pinyin": "fùmǔ",
                "tone": "fùmǔ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "辛苦",
                "pinyin": "xīnkǔ",
                "tone": "xīnkǔ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhēnzhèng dǒngde gǎnēn de rén búhuì wàngjì fùmǔ de xīnkǔ",
            "tone": "zhēnzhèng dǒngde gǎnēn de rén búhuì wàngjì fùmǔ de xīnkǔ"
          },
          {
            "stage": "mixed",
            "vi": "Truyền thống, hiếu thảo, chăm sóc và biết ơn.",
            "hanzi": "传统孝顺照顾感恩",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuántǒng",
                "tone": "chuántǒng",
                "pos": "mixed",
                "vi": "Truyền thống, hiếu thảo, chăm sóc và biết ơn."
              },
              {
                "text": "孝顺",
                "pinyin": "xiàoshùn",
                "tone": "xiàoshùn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "照顾",
                "pinyin": "zhàogù",
                "tone": "zhàogù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "感恩",
                "pinyin": "gǎnēn",
                "tone": "gǎnēn",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuántǒng xiàoshùn zhàogù gǎnēn",
            "tone": "chuántǒng xiàoshùn zhàogù gǎnēn"
          }
        ]
      },
      {
        "id": "hsk5-l5",
        "no": 5,
        "titleZh": "济南的泉水",
        "titleVi": "Nước suối ở Tế Nam",
        "items": [
          {
            "stage": "word",
            "vi": "Tế Nam",
            "hanzi": "济南",
            "words": [
              {
                "text": "济南",
                "pinyin": "jǐnán",
                "tone": "jǐnán",
                "pos": "word",
                "vi": "Tế Nam"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jǐnán",
            "tone": "jǐnán"
          },
          {
            "stage": "word",
            "vi": "nước suối",
            "hanzi": "泉水",
            "words": [
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "word",
                "vi": "nước suối"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quánshuǐ",
            "tone": "quánshuǐ"
          },
          {
            "stage": "word",
            "vi": "thành phố",
            "hanzi": "城市",
            "words": [
              {
                "text": "城市",
                "pinyin": "chéngshì",
                "tone": "chéngshì",
                "pos": "word",
                "vi": "thành phố"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chéngshì",
            "tone": "chéngshì"
          },
          {
            "stage": "word",
            "vi": "phong cảnh",
            "hanzi": "风景",
            "words": [
              {
                "text": "风景",
                "pinyin": "fēngjǐng",
                "tone": "fēngjǐng",
                "pos": "word",
                "vi": "phong cảnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fēngjǐng",
            "tone": "fēngjǐng"
          },
          {
            "stage": "word",
            "vi": "du khách",
            "hanzi": "游客",
            "words": [
              {
                "text": "游客",
                "pinyin": "yóukè",
                "tone": "yóukè",
                "pos": "word",
                "vi": "du khách"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yóukè",
            "tone": "yóukè"
          },
          {
            "stage": "word",
            "vi": "thiên nhiên",
            "hanzi": "自然",
            "words": [
              {
                "text": "自然",
                "pinyin": "zìrán",
                "tone": "zìrán",
                "pos": "word",
                "vi": "thiên nhiên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zìrán",
            "tone": "zìrán"
          },
          {
            "stage": "word",
            "vi": "môi trường",
            "hanzi": "环境",
            "words": [
              {
                "text": "环境",
                "pinyin": "huánjìng",
                "tone": "huánjìng",
                "pos": "word",
                "vi": "môi trường"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "huánjìng",
            "tone": "huánjìng"
          },
          {
            "stage": "word",
            "vi": "văn hóa",
            "hanzi": "文化",
            "words": [
              {
                "text": "文化",
                "pinyin": "wénhuà",
                "tone": "wénhuà",
                "pos": "word",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wénhuà",
            "tone": "wénhuà"
          },
          {
            "stage": "word",
            "vi": "hình thành",
            "hanzi": "形成",
            "words": [
              {
                "text": "形成",
                "pinyin": "xíngchéng",
                "tone": "xíngchéng",
                "pos": "word",
                "vi": "hình thành"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xíngchéng",
            "tone": "xíngchéng"
          },
          {
            "stage": "word",
            "vi": "bảo vệ",
            "hanzi": "保护",
            "words": [
              {
                "text": "保护",
                "pinyin": "bǎohù",
                "tone": "bǎohù",
                "pos": "word",
                "vi": "bảo vệ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǎohù",
            "tone": "bǎohù"
          },
          {
            "stage": "word",
            "vi": "nổi tiếng",
            "hanzi": "著名",
            "words": [
              {
                "text": "著名",
                "pinyin": "zhùmíng",
                "tone": "zhùmíng",
                "pos": "word",
                "vi": "nổi tiếng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhùmíng",
            "tone": "zhùmíng"
          },
          {
            "stage": "word",
            "vi": "trong vắt",
            "hanzi": "清澈",
            "words": [
              {
                "text": "清澈",
                "pinyin": "qīngchè",
                "tone": "qīngchè",
                "pos": "word",
                "vi": "trong vắt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qīngchè",
            "tone": "qīngchè"
          },
          {
            "stage": "phrase",
            "vi": "suối nước ở Tế Nam",
            "hanzi": "济南的泉水",
            "words": [
              {
                "text": "济南",
                "pinyin": "jǐnán",
                "tone": "jǐnán",
                "pos": "phrase",
                "vi": "suối nước ở Tế Nam"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jǐnán de quánshuǐ",
            "tone": "jǐnán de quánshuǐ"
          },
          {
            "stage": "phrase",
            "vi": "nước suối trong vắt",
            "hanzi": "清澈的泉水",
            "words": [
              {
                "text": "清澈",
                "pinyin": "qīngchè",
                "tone": "qīngchè",
                "pos": "phrase",
                "vi": "nước suối trong vắt"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qīngchè de quánshuǐ",
            "tone": "qīngchè de quánshuǐ"
          },
          {
            "stage": "phrase",
            "vi": "thành phố nổi tiếng",
            "hanzi": "著名城市",
            "words": [
              {
                "text": "著名",
                "pinyin": "zhùmíng",
                "tone": "zhùmíng",
                "pos": "phrase",
                "vi": "thành phố nổi tiếng"
              },
              {
                "text": "城市",
                "pinyin": "chéngshì",
                "tone": "chéngshì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhùmíng chéngshì",
            "tone": "zhùmíng chéngshì"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ môi trường",
            "hanzi": "保护环境",
            "words": [
              {
                "text": "保护",
                "pinyin": "bǎohù",
                "tone": "bǎohù",
                "pos": "phrase",
                "vi": "bảo vệ môi trường"
              },
              {
                "text": "环境",
                "pinyin": "huánjìng",
                "tone": "huánjìng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǎohù huánjìng",
            "tone": "bǎohù huánjìng"
          },
          {
            "stage": "phrase",
            "vi": "phong cảnh thiên nhiên",
            "hanzi": "自然风景",
            "words": [
              {
                "text": "自然",
                "pinyin": "zìrán",
                "tone": "zìrán",
                "pos": "phrase",
                "vi": "phong cảnh thiên nhiên"
              },
              {
                "text": "风景",
                "pinyin": "fēngjǐng",
                "tone": "fēngjǐng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zìrán fēngjǐng",
            "tone": "zìrán fēngjǐng"
          },
          {
            "stage": "sentence",
            "vi": "Tế Nam nổi tiếng nhờ các dòng suối.",
            "hanzi": "济南因为泉水而著名",
            "words": [
              {
                "text": "济南",
                "pinyin": "jǐnán",
                "tone": "jǐnán",
                "pos": "sentence",
                "vi": "Tế Nam nổi tiếng nhờ các dòng suối."
              },
              {
                "text": "因为",
                "pinyin": "yīnwèi",
                "tone": "yīnwèi",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "而",
                "pinyin": "ér",
                "tone": "ér",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "著名",
                "pinyin": "zhùmíng",
                "tone": "zhùmíng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jǐnán yīnwèi quánshuǐ ér zhùmíng",
            "tone": "jǐnán yīnwèi quánshuǐ ér zhùmíng"
          },
          {
            "stage": "sentence",
            "vi": "Nước suối trong vắt thu hút rất nhiều du khách.",
            "hanzi": "清澈的泉水吸引了很多游客",
            "words": [
              {
                "text": "清澈",
                "pinyin": "qīngchè",
                "tone": "qīngchè",
                "pos": "sentence",
                "vi": "Nước suối trong vắt thu hút rất nhiều du khách."
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "吸引",
                "pinyin": "xīyǐn",
                "tone": "xīyǐn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "了",
                "pinyin": "liǎo",
                "tone": "liǎo",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "很多",
                "pinyin": "hěnduō",
                "tone": "hěnduō",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "游客",
                "pinyin": "yóukè",
                "tone": "yóukè",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qīngchè de quánshuǐ xīyǐn liǎo hěnduō yóukè",
            "tone": "qīngchè de quánshuǐ xīyǐn liǎo hěnduō yóukè"
          },
          {
            "stage": "sentence",
            "vi": "Suối nước không chỉ là cảnh thiên nhiên mà còn là một phần văn hóa đô thị.",
            "hanzi": "泉水不仅是自然风景也是城市文化的一部分",
            "words": [
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "sentence",
                "vi": "Suối nước không chỉ là cảnh thiên nhiên mà còn là một phần văn hóa đô thị."
              },
              {
                "text": "不仅是",
                "pinyin": "bùjǐnshì",
                "tone": "bùjǐnshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "自然",
                "pinyin": "zìrán",
                "tone": "zìrán",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "风景",
                "pinyin": "fēngjǐng",
                "tone": "fēngjǐng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "也是",
                "pinyin": "yěshì",
                "tone": "yěshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "城市",
                "pinyin": "chéngshì",
                "tone": "chéngshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "文化",
                "pinyin": "wénhuà",
                "tone": "wénhuà",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一部分",
                "pinyin": "yíbùfen",
                "tone": "yíbùfen",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quánshuǐ bùjǐnshì zìrán fēngjǐng yěshì chéngshì wénhuà de yíbùfen",
            "tone": "quánshuǐ bùjǐnshì zìrán fēngjǐng yěshì chéngshì wénhuà de yíbùfen"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ suối nước chính là bảo vệ môi trường của thành phố này.",
            "hanzi": "保护泉水就是保护这座城市的环境",
            "words": [
              {
                "text": "保护",
                "pinyin": "bǎohù",
                "tone": "bǎohù",
                "pos": "sentence",
                "vi": "Bảo vệ suối nước chính là bảo vệ môi trường của thành phố này."
              },
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "就是",
                "pinyin": "jiùshì",
                "tone": "jiùshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "保护",
                "pinyin": "bǎohù",
                "tone": "bǎohù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "这",
                "pinyin": "zhè",
                "tone": "zhè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "座",
                "pinyin": "zuò",
                "tone": "zuò",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "城市",
                "pinyin": "chéngshì",
                "tone": "chéngshì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "环境",
                "pinyin": "huánjìng",
                "tone": "huánjìng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bǎohù quánshuǐ jiùshì bǎohù zhè zuò chéngshì de huánjìng",
            "tone": "bǎohù quánshuǐ jiùshì bǎohù zhè zuò chéngshì de huánjìng"
          },
          {
            "stage": "mixed",
            "vi": "Suối nước, nổi tiếng, du khách và bảo vệ.",
            "hanzi": "泉水著名游客保护",
            "words": [
              {
                "text": "泉水",
                "pinyin": "quánshuǐ",
                "tone": "quánshuǐ",
                "pos": "mixed",
                "vi": "Suối nước, nổi tiếng, du khách và bảo vệ."
              },
              {
                "text": "著名",
                "pinyin": "zhùmíng",
                "tone": "zhùmíng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "游客",
                "pinyin": "yóukè",
                "tone": "yóukè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "保护",
                "pinyin": "bǎohù",
                "tone": "bǎohù",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quánshuǐ zhùmíng yóukè bǎohù",
            "tone": "quánshuǐ zhùmíng yóukè bǎohù"
          }
        ]
      },
      {
        "id": "hsk5-l6",
        "no": 6,
        "titleZh": "除夕的由来",
        "titleVi": "Nguồn gốc của đêm giao thừa",
        "items": [
          {
            "stage": "word",
            "vi": "đêm giao thừa",
            "hanzi": "除夕",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chúxī",
                "tone": "chúxī",
                "pos": "word",
                "vi": "đêm giao thừa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chúxī",
            "tone": "chúxī"
          },
          {
            "stage": "word",
            "vi": "Tết Nguyên đán",
            "hanzi": "春节",
            "words": [
              {
                "text": "春节",
                "pinyin": "chūnjié",
                "tone": "chūnjié",
                "pos": "word",
                "vi": "Tết Nguyên đán"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chūnjié",
            "tone": "chūnjié"
          },
          {
            "stage": "word",
            "vi": "nguồn gốc",
            "hanzi": "由来",
            "words": [
              {
                "text": "由来",
                "pinyin": "yóulái",
                "tone": "yóulái",
                "pos": "word",
                "vi": "nguồn gốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yóulái",
            "tone": "yóulái"
          },
          {
            "stage": "word",
            "vi": "truyền thuyết",
            "hanzi": "传说",
            "words": [
              {
                "text": "传说",
                "pinyin": "chuánshuō",
                "tone": "chuánshuō",
                "pos": "word",
                "vi": "truyền thuyết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuánshuō",
            "tone": "chuánshuō"
          },
          {
            "stage": "word",
            "vi": "quái vật Niên",
            "hanzi": "年兽",
            "words": [
              {
                "text": "年",
                "pinyin": "nián",
                "tone": "nián",
                "pos": "word",
                "vi": "quái vật Niên"
              },
              {
                "text": "兽",
                "pinyin": "shòu",
                "tone": "shòu",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nián shòu",
            "tone": "nián shòu"
          },
          {
            "stage": "word",
            "vi": "pháo",
            "hanzi": "鞭炮",
            "words": [
              {
                "text": "鞭炮",
                "pinyin": "biānpào",
                "tone": "biānpào",
                "pos": "word",
                "vi": "pháo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biānpào",
            "tone": "biānpào"
          },
          {
            "stage": "word",
            "vi": "phong tục",
            "hanzi": "习俗",
            "words": [
              {
                "text": "习俗",
                "pinyin": "xísú",
                "tone": "xísú",
                "pos": "word",
                "vi": "phong tục"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xísú",
            "tone": "xísú"
          },
          {
            "stage": "word",
            "vi": "truyền thống",
            "hanzi": "传统",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuántǒng",
                "tone": "chuántǒng",
                "pos": "word",
                "vi": "truyền thống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuántǒng",
            "tone": "chuántǒng"
          },
          {
            "stage": "word",
            "vi": "sợ",
            "hanzi": "害怕",
            "words": [
              {
                "text": "害怕",
                "pinyin": "hàipà",
                "tone": "hàipà",
                "pos": "word",
                "vi": "sợ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hàipà",
            "tone": "hàipà"
          },
          {
            "stage": "word",
            "vi": "chúc mừng, ăn mừng",
            "hanzi": "庆祝",
            "words": [
              {
                "text": "庆祝",
                "pinyin": "qìngzhù",
                "tone": "qìngzhù",
                "pos": "word",
                "vi": "chúc mừng, ăn mừng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qìngzhù",
            "tone": "qìngzhù"
          },
          {
            "stage": "word",
            "vi": "náo nhiệt",
            "hanzi": "热闹",
            "words": [
              {
                "text": "热闹",
                "pinyin": "rènào",
                "tone": "rènào",
                "pos": "word",
                "vi": "náo nhiệt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rènào",
            "tone": "rènào"
          },
          {
            "stage": "word",
            "vi": "sum họp",
            "hanzi": "团圆",
            "words": [
              {
                "text": "团圆",
                "pinyin": "tuányuán",
                "tone": "tuányuán",
                "pos": "word",
                "vi": "sum họp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tuányuán",
            "tone": "tuányuán"
          },
          {
            "stage": "phrase",
            "vi": "nguồn gốc đêm giao thừa",
            "hanzi": "除夕的由来",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chúxī",
                "tone": "chúxī",
                "pos": "phrase",
                "vi": "nguồn gốc đêm giao thừa"
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "由来",
                "pinyin": "yóulái",
                "tone": "yóulái",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chúxī de yóulái",
            "tone": "chúxī de yóulái"
          },
          {
            "stage": "phrase",
            "vi": "phong tục Tết Nguyên đán",
            "hanzi": "春节习俗",
            "words": [
              {
                "text": "春节",
                "pinyin": "chūnjié",
                "tone": "chūnjié",
                "pos": "phrase",
                "vi": "phong tục Tết Nguyên đán"
              },
              {
                "text": "习俗",
                "pinyin": "xísú",
                "tone": "xísú",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chūnjié xísú",
            "tone": "chūnjié xísú"
          },
          {
            "stage": "phrase",
            "vi": "đốt pháo",
            "hanzi": "放鞭炮",
            "words": [
              {
                "text": "放",
                "pinyin": "fàng",
                "tone": "fàng",
                "pos": "phrase",
                "vi": "đốt pháo"
              },
              {
                "text": "鞭炮",
                "pinyin": "biānpào",
                "tone": "biānpào",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fàng biānpào",
            "tone": "fàng biānpào"
          },
          {
            "stage": "phrase",
            "vi": "sợ màu đỏ",
            "hanzi": "害怕红色",
            "words": [
              {
                "text": "害怕",
                "pinyin": "hàipà",
                "tone": "hàipà",
                "pos": "phrase",
                "vi": "sợ màu đỏ"
              },
              {
                "text": "红色",
                "pinyin": "hóngsè",
                "tone": "hóngsè",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hàipà hóngsè",
            "tone": "hàipà hóngsè"
          },
          {
            "stage": "phrase",
            "vi": "cả nhà sum họp",
            "hanzi": "全家团圆",
            "words": [
              {
                "text": "全家",
                "pinyin": "quánjiā",
                "tone": "quánjiā",
                "pos": "phrase",
                "vi": "cả nhà sum họp"
              },
              {
                "text": "团圆",
                "pinyin": "tuányuán",
                "tone": "tuányuán",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quánjiā tuányuán",
            "tone": "quánjiā tuányuán"
          },
          {
            "stage": "sentence",
            "vi": "Đêm giao thừa là buổi tối quan trọng nhất trước Tết Nguyên đán.",
            "hanzi": "除夕是春节前最重要的晚上",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chúxī",
                "tone": "chúxī",
                "pos": "sentence",
                "vi": "Đêm giao thừa là buổi tối quan trọng nhất trước Tết Nguyên đán."
              },
              {
                "text": "是",
                "pinyin": "shì",
                "tone": "shì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "春节",
                "pinyin": "chūnjié",
                "tone": "chūnjié",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "前",
                "pinyin": "qián",
                "tone": "qián",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "最",
                "pinyin": "zuì",
                "tone": "zuì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "重要",
                "pinyin": "zhòngyào",
                "tone": "zhòngyào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "晚上",
                "pinyin": "wǎnshàng",
                "tone": "wǎnshàng",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chúxī shì chūnjié qián zuì zhòngyào de wǎnshàng",
            "tone": "chúxī shì chūnjié qián zuì zhòngyào de wǎnshàng"
          },
          {
            "stage": "sentence",
            "vi": "Về nguồn gốc đêm giao thừa có một truyền thuyết thú vị.",
            "hanzi": "关于除夕的由来有一个有趣的传说",
            "words": [
              {
                "text": "关于",
                "pinyin": "guānyú",
                "tone": "guānyú",
                "pos": "sentence",
                "vi": "Về nguồn gốc đêm giao thừa có một truyền thuyết thú vị."
              },
              {
                "text": "除夕",
                "pinyin": "chúxī",
                "tone": "chúxī",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "由来",
                "pinyin": "yóulái",
                "tone": "yóulái",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "有",
                "pinyin": "yǒu",
                "tone": "yǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "一个",
                "pinyin": "yígè",
                "tone": "yígè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "有趣",
                "pinyin": "yǒuqù",
                "tone": "yǒuqù",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "传说",
                "pinyin": "chuánshuō",
                "tone": "chuánshuō",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guānyú chúxī de yóulái yǒu yígè yǒuqù de chuánshuō",
            "tone": "guānyú chúxī de yóulái yǒu yígè yǒuqù de chuánshuō"
          },
          {
            "stage": "sentence",
            "vi": "Người ta dùng màu đỏ và pháo để xua đuổi quái vật Niên.",
            "hanzi": "人们用红色和鞭炮赶走年兽",
            "words": [
              {
                "text": "人们",
                "pinyin": "rénmen",
                "tone": "rénmen",
                "pos": "sentence",
                "vi": "Người ta dùng màu đỏ và pháo để xua đuổi quái vật Niên."
              },
              {
                "text": "用",
                "pinyin": "yòng",
                "tone": "yòng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "红色",
                "pinyin": "hóngsè",
                "tone": "hóngsè",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "和",
                "pinyin": "hé",
                "tone": "hé",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "鞭炮",
                "pinyin": "biānpào",
                "tone": "biānpào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "赶",
                "pinyin": "gǎn",
                "tone": "gǎn",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "走",
                "pinyin": "zǒu",
                "tone": "zǒu",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "年",
                "pinyin": "nián",
                "tone": "nián",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "兽",
                "pinyin": "shòu",
                "tone": "shòu",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "rénmen yòng hóngsè hé biānpào gǎn zǒu nián shòu",
            "tone": "rénmen yòng hóngsè hé biānpào gǎn zǒu nián shòu"
          },
          {
            "stage": "sentence",
            "vi": "Ngày nay, ý nghĩa quan trọng hơn của đêm giao thừa là cả nhà sum họp.",
            "hanzi": "今天除夕更重要的意义是全家团圆",
            "words": [
              {
                "text": "今天",
                "pinyin": "jīntiān",
                "tone": "jīntiān",
                "pos": "sentence",
                "vi": "Ngày nay, ý nghĩa quan trọng hơn của đêm giao thừa là cả nhà sum họp."
              },
              {
                "text": "除夕",
                "pinyin": "chúxī",
                "tone": "chúxī",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "更",
                "pinyin": "gèng",
                "tone": "gèng",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "重要",
                "pinyin": "zhòngyào",
                "tone": "zhòngyào",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "意义",
                "pinyin": "yìyì",
                "tone": "yìyì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "是",
                "pinyin": "shì",
                "tone": "shì",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "全家",
                "pinyin": "quánjiā",
                "tone": "quánjiā",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "团圆",
                "pinyin": "tuányuán",
                "tone": "tuányuán",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jīntiān chúxī gèng zhòngyào de yìyì shì quánjiā tuányuán",
            "tone": "jīntiān chúxī gèng zhòngyào de yìyì shì quánjiā tuányuán"
          },
          {
            "stage": "mixed",
            "vi": "Truyền thuyết, phong tục và ý nghĩa ngày nay.",
            "hanzi": "传说习俗今天的意义",
            "words": [
              {
                "text": "传说",
                "pinyin": "chuánshuō",
                "tone": "chuánshuō",
                "pos": "mixed",
                "vi": "Truyền thuyết, phong tục và ý nghĩa ngày nay."
              },
              {
                "text": "习俗",
                "pinyin": "xísú",
                "tone": "xísú",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "今天",
                "pinyin": "jīntiān",
                "tone": "jīntiān",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "的",
                "pinyin": "de",
                "tone": "de",
                "pos": "part",
                "vi": ""
              },
              {
                "text": "意义",
                "pinyin": "yìyì",
                "tone": "yìyì",
                "pos": "part",
                "vi": ""
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuánshuō xísú jīntiān de yìyì",
            "tone": "chuánshuō xísú jīntiān de yìyì"
          }
        ]
      }
    ]
  }
};
});
