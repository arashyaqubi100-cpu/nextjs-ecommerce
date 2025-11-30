import messages from "@/i18n/locales";
import { IiranCity, menuHeaderTypes } from "./types";

export const iranCities: IiranCity[] = [
  { id: 1, title: messages.fa.messages["tehran"] },
  { id: 2, title: messages.fa.messages["mashhad"] },
  { id: 3, title: messages.fa.messages["isfahan"] },
  { id: 4, title: messages.fa.messages["shiraz"] },
  { id: 5, title: messages.fa.messages["tabriz"] },
  { id: 6, title: messages.fa.messages["karaj"] },
  { id: 7, title: messages.fa.messages["qom"] },
  { id: 8, title: messages.fa.messages["ahvaz"] },
  { id: 9, title: messages.fa.messages["kermanshah"] },
  { id: 10, title: messages.fa.messages["rasht"] },
  { id: 11, title: messages.fa.messages["babol"] },
  { id: 12, title: messages.fa.messages["arak"] },
  { id: 13, title: messages.fa.messages["zahedan"] },
  { id: 14, title: messages.fa.messages["sanandaj"] },
  { id: 15, title: messages.fa.messages["urmia"] },
  { id: 16, title: messages.fa.messages["qazvin"] },
  { id: 17, title: messages.fa.messages["zanjan"] },
  { id: 18, title: messages.fa.messages["yazd"] },
  { id: 19, title: messages.fa.messages["gorgan"] },
  { id: 20, title: messages.fa.messages["sari"] },
  { id: 21, title: messages.fa.messages["hamedan"] },
  { id: 22, title: messages.fa.messages["bandar_abbas"] },
  { id: 23, title: messages.fa.messages["kerman"] },
  { id: 25, title: messages.fa.messages["birjand"] },
  { id: 26, title: messages.fa.messages["shahrekord"] },
  { id: 27, title: messages.fa.messages["semnan"] },
  { id: 28, title: messages.fa.messages["bushehr"] },
  { id: 29, title: messages.fa.messages["yassuj"] },
  { id: 30, title: messages.fa.messages["khorramabad"] },
  { id: 31, title: messages.fa.messages["ilam"] },
  { id: 32, title: messages.fa.messages["dezful"] },
  { id: 33, title: messages.fa.messages["kashan"] },
  { id: 34, title: messages.fa.messages["gonbad_kavus"] },
  { id: 35, title: messages.fa.messages["mahshahr"] },
  { id: 36, title: messages.fa.messages["abadan"] },
  { id: 37, title: messages.fa.messages["andimeshk"] },
  { id: 38, title: messages.fa.messages["najafabad"] },
  { id: 39, title: messages.fa.messages["saveh"] },
  { id: 40, title: messages.fa.messages["maragheh"] },
  { id: 41, title: messages.fa.messages["sabzevar"] },
  { id: 42, title: messages.fa.messages["neyshabur"] },
  { id: 43, title: messages.fa.messages["qaen"] },
  { id: 44, title: messages.fa.messages["sirjan"] },
  { id: 45, title: messages.fa.messages["bam"] },
  { id: 46, title: messages.fa.messages["torbat_heydarieh"] },
  { id: 47, title: messages.fa.messages["borujerd"] },
  { id: 48, title: messages.fa.messages["miandoab"] },
  { id: 49, title: messages.fa.messages["marivan"] },
  { id: 50, title: messages.fa.messages["bukan"] },
  { id: 51, title: messages.fa.messages["lahijan"] },
  { id: 52, title: messages.fa.messages["amol"] },
  { id: 53, title: messages.fa.messages["behbahan"] },
  { id: 54, title: messages.fa.messages["malayer"] },
  { id: 55, title: messages.fa.messages["tabas"] },
  { id: 56, title: messages.fa.messages["torbat_jam"] },
  { id: 57, title: messages.fa.messages["ardebil"] },
  { id: 58, title: messages.fa.messages["pars_abad"] },
  { id: 59, title: messages.fa.messages["asaluyeh"] },
  { id: 60, title: messages.fa.messages["kish"] },
  { id: 61, title: messages.fa.messages["qeshm"] },
  { id: 62, title: messages.fa.messages["chabahar"] },
  { id: 63, title: messages.fa.messages["saravan"] },
  { id: 64, title: messages.fa.messages["iranshahr"] },
  { id: 65, title: messages.fa.messages["bandar_torkaman"] },
  { id: 66, title: messages.fa.messages["raf_sanjan"] },
  { id: 67, title: messages.fa.messages["damghan"] },
  { id: 68, title: messages.fa.messages["shahroud"] },
  { id: 69, title: messages.fa.messages["garmsar"] },
  { id: 70, title: messages.fa.messages["takestan"] },
  { id: 71, title: messages.fa.messages["talesh"] },
  { id: 72, title: messages.fa.messages["sardasht"] },
  { id: 73, title: messages.fa.messages["piranshahr"] },
  { id: 74, title: messages.fa.messages["mahabad"] },
  { id: 75, title: messages.fa.messages["bafgh"] },
  { id: 76, title: messages.fa.messages["meybod"] },
  { id: 77, title: messages.fa.messages["nain"] },
  { id: 78, title: messages.fa.messages["ferdows"] },
  { id: 79, title: messages.fa.messages["gonabad"] },
  { id: 80, title: messages.fa.messages["khoy"] },
  { id: 81, title: messages.fa.messages["salmas"] },
  { id: 82, title: messages.fa.messages["miandoab"] },
  { id: 83, title: messages.fa.messages["bojnord"] },
  { id: 84, title: messages.fa.messages["eslamshahr"] },
  { id: 85, title: messages.fa.messages["pakdasht"] },
  { id: 86, title: messages.fa.messages["varamin"] },
  { id: 87, title: messages.fa.messages["reykavaran"] },
  { id: 88, title: messages.fa.messages["golpayegan"] },
  { id: 89, title: messages.fa.messages["fasa"] },
  { id: 90, title: messages.fa.messages["jahrom"] },
  { id: 91, title: messages.fa.messages["marvdasht"] },
  { id: 92, title: messages.fa.messages["lar"] },
  { id: 93, title: messages.fa.messages["kazerun"] },
  { id: 94, title: messages.fa.messages["darab"] },
  { id: 95, title: messages.fa.messages["borazjan"] },
  { id: 96, title: messages.fa.messages["kangan"] },
  { id: 97, title: messages.fa.messages["dehdasht"] },
  { id: 98, title: messages.fa.messages["ramhormoz"] },
  { id: 99, title: messages.fa.messages["shadegan"] },
  { id: 100, title: messages.fa.messages["masjed_soleyman"] },
];

export const frequentCities = [
  { id: 1, title: messages.fa.messages["tehran"] },
  { id: 10, title: messages.fa.messages["rasht"] },
  { id: 4, title: messages.fa.messages["shiraz"] },
  { id: 3, title: messages.fa.messages["isfahan"] },

]

export function findCity(value: string) {
  if (!value || value === "") return iranCities;

  const searchValue = value.toLowerCase();

  return iranCities.filter(city =>
    city.title.toLowerCase().includes(searchValue)
  );
}

export const categories = [
  {
    id: 1,
    title: "کالای دیجیتال",
    data: [
      {
        id: 1,
        label: "موبایل",
        items: [
          { id: 1, label: "آیفون" },
          { id: 2, label: "سامسونگ" },
          { id: 3, label: "شیائومی" },
          { id: 4, label: "هوآوی" },
          { id: 5, label: "نوکیا" },
        ],
      },
      {
        id: 2,
        label: "لپ‌تاپ و کامپیوتر",
        items: [
          { id: 1, label: "لپ‌تاپ ایسوس" },
          { id: 2, label: "لپ‌تاپ لنوو" },
          { id: 3, label: "مک‌بوک" },
          { id: 4, label: "قطعات کامپیوتر" },
          { id: 5, label: "مانیتور" },
        ],
      },
      {
        id: 3,
        label: "صوتی و تصویری",
        items: [
          { id: 1, label: "تلویزیون" },
          { id: 2, label: "سینمای خانگی" },
          { id: 3, label: "اسپیکر بلوتوثی" },
          { id: 4, label: "هدفون و هندزفری" },
        ],
      },
      {
        id: 4,
        label: "دوربین و تجهیزات عکاسی",
        items: [
          { id: 1, label: "دوربین DSLR" },
          { id: 2, label: "لنز دوربین" },
          { id: 3, label: "گیمبال و استابلایزر" },
        ],
      },
      {
        id: 5,
        label: "ساعت و مچ‌بند هوشمند",
        items: [
          { id: 1, label: "اپل واچ" },
          { id: 2, label: "شیائومی بند" },
          { id: 3, label: "گلکسی واچ" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "مد و پوشاک",
    data: [
      {
        id: 1,
        label: "پوشاک مردانه",
        items: [
          { id: 1, label: "پیراهن" },
          { id: 2, label: "شلوار جین" },
          { id: 3, label: "کفش اسپرت" },
          { id: 4, label: "کت و شلوار" },
        ],
      },
      {
        id: 2,
        label: "پوشاک زنانه",
        items: [
          { id: 1, label: "مانتو" },
          { id: 2, label: "شال و روسری" },
          { id: 3, label: "کفش پاشنه‌دار" },
          { id: 4, label: "کیف دستی" },
        ],
      },
      {
        id: 3,
        label: "اکسسوری‌ها",
        items: [
          { id: 1, label: "ساعت مچی" },
          { id: 2, label: "عینک آفتابی" },
          { id: 3, label: "کمربند چرمی" },
          { id: 4, label: "جواهرات" },
        ],
      },
      {
        id: 4,
        label: "پوشاک کودکانه",
        items: [
          { id: 1, label: "بلوز و شلوار" },
          { id: 2, label: "کفش بچه‌گانه" },
          { id: 3, label: "لباس نوزاد" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "خانه و آشپزخانه",
    data: [
      {
        id: 1,
        label: "لوازم برقی",
        items: [
          { id: 1, label: "یخچال" },
          { id: 2, label: "لباسشویی" },
          { id: 3, label: "جاروبرقی" },
          { id: 4, label: "مایکروویو" },
          { id: 5, label: "اتو بخار" },
        ],
      },
      {
        id: 2,
        label: "لوازم آشپزخانه",
        items: [
          { id: 1, label: "قابلمه و ماهیتابه" },
          { id: 2, label: "چاقو و کارد" },
          { id: 3, label: "سرویس غذاخوری" },
          { id: 4, label: "کتری و قوری" },
        ],
      },
      {
        id: 3,
        label: "دکوراسیون",
        items: [
          { id: 1, label: "تابلو" },
          { id: 2, label: "ساعت دیواری" },
          { id: 3, label: "گلدان تزئینی" },
          { id: 4, label: "فرش و موکت" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "ورزش و سفر",
    data: [
      {
        id: 1,
        label: "ورزشی مردانه",
        items: [
          { id: 1, label: "کفش ورزشی" },
          { id: 2, label: "لباس ورزشی" },
          { id: 3, label: "ساک ورزشی" },
        ],
      },
      {
        id: 2,
        label: "وسایل سفر",
        items: [
          { id: 1, label: "چمدان" },
          { id: 2, label: "کوله پشتی" },
          { id: 3, label: "بالش مسافرتی" },
          { id: 4, label: "کیسه خواب" },
        ],
      },
      {
        id: 3,
        label: "وسایل ورزشی",
        items: [
          { id: 1, label: "دمبل" },
          { id: 2, label: "تشک یوگا" },
          { id: 3, label: "طناب ورزشی" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "زیبایی و سلامت",
    data: [
      {
        id: 1,
        label: "محصولات بهداشتی",
        items: [
          { id: 1, label: "شامپو" },
          { id: 2, label: "صابون" },
          { id: 3, label: "مسواک و خمیر دندان" },
        ],
      },
      {
        id: 2,
        label: "آرایشی",
        items: [
          { id: 1, label: "رژ لب" },
          { id: 2, label: "کرم پودر" },
          { id: 3, label: "ریمل" },
        ],
      },
      {
        id: 3,
        label: "سلامت و مراقبت شخصی",
        items: [
          { id: 1, label: "ترازو" },
          { id: 2, label: "ماشین اصلاح" },
          { id: 3, label: "سشوار" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "خودرو و وسایل نقلیه",
    data: [
      {
        id: 1,
        label: "قطعات خودرو",
        items: [
          { id: 1, label: "باطری" },
          { id: 2, label: "روغن موتور" },
          { id: 3, label: "تیغه برف‌پاک‌کن" },
        ],
      },
      {
        id: 2,
        label: "لوازم جانبی خودرو",
        items: [
          { id: 1, label: "پخش‌کننده خودرو" },
          { id: 2, label: "روکش صندلی" },
          { id: 3, label: "قالپاق" },
        ],
      },
      {
        id: 3,
        label: "موتورسیکلت",
        items: [
          { id: 1, label: "کلاه ایمنی" },
          { id: 2, label: "زنجیر موتور" },
          { id: 3, label: "روغن دوچرخه" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "کتاب، هنر و موسیقی",
    data: [
      {
        id: 1,
        label: "کتاب‌ها",
        items: [
          { id: 1, label: "رمان" },
          { id: 2, label: "تاریخ و فلسفه" },
          { id: 3, label: "علمی و آموزشی" },
        ],
      },
      {
        id: 2,
        label: "موسیقی",
        items: [
          { id: 1, label: "گیتار" },
          { id: 2, label: "پیانو" },
          { id: 3, label: "ویولن" },
        ],
      },
      {
        id: 3,
        label: "هنرهای دستی",
        items: [
          { id: 1, label: "نقاشی" },
          { id: 2, label: "سفالگری" },
          { id: 3, label: "خیاطی" },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "ابزار و تجهیزات صنعتی",
    data: [
      {
        id: 1,
        label: "ابزار برقی",
        items: [
          { id: 1, label: "دریل" },
          { id: 2, label: "اره برقی" },
          { id: 3, label: "فرز" },
        ],
      },
      {
        id: 2,
        label: "ابزار دستی",
        items: [
          { id: 1, label: "چکش" },
          { id: 2, label: "آچار" },
          { id: 3, label: "پیچ‌گوشتی" },
        ],
      },
      {
        id: 3,
        label: "تجهیزات ایمنی",
        items: [
          { id: 1, label: "کلاه ایمنی" },
          { id: 2, label: "دستکش کار" },
          { id: 3, label: "عینک محافظ" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "خوراکی و نوشیدنی",
    data: [
      {
        id: 1,
        label: "نوشیدنی‌ها",
        items: [
          { id: 1, label: "چای" },
          { id: 2, label: "قهوه" },
          { id: 3, label: "آبمیوه طبیعی" },
        ],
      },
      {
        id: 2,
        label: "تنقلات",
        items: [
          { id: 1, label: "چیپس" },
          { id: 2, label: "شکلات" },
          { id: 3, label: "بیسکویت" },
        ],
      },
      {
        id: 3,
        label: "مواد غذایی",
        items: [
          { id: 1, label: "برنج" },
          { id: 2, label: "روغن" },
          { id: 3, label: "حبوبات" },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "نوزاد و کودک",
    data: [
      {
        id: 1,
        label: "لباس و پوشاک",
        items: [
          { id: 1, label: "سرهمی نوزاد" },
          { id: 2, label: "کفش کودکانه" },
          { id: 3, label: "کلاه نوزاد" },
        ],
      },
      {
        id: 2,
        label: "بهداشت و مراقبت",
        items: [
          { id: 1, label: "پوشک" },
          { id: 2, label: "دستمال مرطوب" },
          { id: 3, label: "شامپو کودک" },
        ],
      },
      {
        id: 3,
        label: "اسباب‌بازی",
        items: [
          { id: 1, label: "ماشین کنترلی" },
          { id: 2, label: "عروسک" },
          { id: 3, label: "لگو" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "زیبایی و سلامت",
    data: [
      {
        id: 1,
        label: "محصولات آرایشی",
        items: [
          { id: 1, label: "رژ لب" },
          { id: 2, label: "کرم پودر" },
          { id: 3, label: "ریمل" },
          { id: 4, label: "خط چشم" },
        ],
      },
      {
        id: 2,
        label: "محصولات بهداشتی",
        items: [
          { id: 1, label: "شامپو" },
          { id: 2, label: "صابون" },
          { id: 3, label: "خمیر دندان" },
          { id: 4, label: "ماسک صورت" },
        ],
      },
      {
        id: 3,
        label: "تجهیزات پزشکی و سلامتی",
        items: [
          { id: 1, label: "فشارسنج" },
          { id: 2, label: "دماسنج دیجیتال" },
          { id: 3, label: "ترازو دیجیتال" },
          { id: 4, label: "دستگاه تست قند خون" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "سوپرمارکت",
    data: [
      {
        id: 1,
        label: "خوراکی و تنقلات",
        items: [
          { id: 1, label: "چیپس و پفک" },
          { id: 2, label: "بیسکویت" },
          { id: 3, label: "شکلات" },
          { id: 4, label: "آجیل و خشکبار" },
        ],
      },
      {
        id: 2,
        label: "نوشیدنی‌ها",
        items: [
          { id: 1, label: "نوشابه" },
          { id: 2, label: "آب معدنی" },
          { id: 3, label: "آبمیوه طبیعی" },
          { id: 4, label: "چای و قهوه" },
        ],
      },
      {
        id: 3,
        label: "محصولات لبنی",
        items: [
          { id: 1, label: "شیر" },
          { id: 2, label: "ماست" },
          { id: 3, label: "کره" },
          { id: 4, label: "پنیر" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "کتاب، لوازم تحریر و هنر",
    data: [
      {
        id: 1,
        label: "کتاب‌ها",
        items: [
          { id: 1, label: "رمان و داستان" },
          { id: 2, label: "کتاب آموزشی" },
          { id: 3, label: "کتاب کودک" },
          { id: 4, label: "کتاب دانشگاهی" },
        ],
      },
      {
        id: 2,
        label: "نوشت‌افزار",
        items: [
          { id: 1, label: "خودکار" },
          { id: 2, label: "دفتر" },
          { id: 3, label: "مداد رنگی" },
          { id: 4, label: "پاک‌کن و تراش" },
        ],
      },
      {
        id: 3,
        label: "هنر و صنایع دستی",
        items: [
          { id: 1, label: "قلم‌مو" },
          { id: 2, label: "رنگ روغن" },
          { id: 3, label: "بوم نقاشی" },
          { id: 4, label: "سفالگری" },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "حیوانات خانگی",
    data: [
      {
        id: 1,
        label: "خوراک حیوانات",
        items: [
          { id: 1, label: "غذای سگ" },
          { id: 2, label: "غذای گربه" },
          { id: 3, label: "غذای پرنده" },
        ],
      },
      {
        id: 2,
        label: "لوازم جانبی حیوانات",
        items: [
          { id: 1, label: "قلاده" },
          { id: 2, label: "اسباب‌بازی حیوانات" },
          { id: 3, label: "ظرف غذا" },
        ],
      },
      {
        id: 3,
        label: "بهداشت و مراقبت",
        items: [
          { id: 1, label: "شامپو حیوانات" },
          { id: 2, label: "برس مو" },
          { id: 3, label: "اسپری ضد انگل" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "خودرو و موتور سیکلت",
    data: [
      {
        id: 1,
        label: "قطعات خودرو",
        items: [
          { id: 1, label: "لنت ترمز" },
          { id: 2, label: "فیلتر هوا" },
          { id: 3, label: "باتری" },
        ],
      },
      {
        id: 2,
        label: "لوازم جانبی خودرو",
        items: [
          { id: 1, label: "روکش صندلی" },
          { id: 2, label: "خوشبوکننده" },
          { id: 3, label: "پاوربانک خودرو" },
        ],
      },
      {
        id: 3,
        label: "موتور سیکلت",
        items: [
          { id: 1, label: "کلاه ایمنی" },
          { id: 2, label: "روغن موتور" },
          { id: 3, label: "کاور موتور" },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "ابزارآلات و تجهیزات صنعتی",
    data: [
      {
        id: 1,
        label: "ابزار دستی",
        items: [
          { id: 1, label: "چکش" },
          { id: 2, label: "آچار" },
          { id: 3, label: "پیچ‌گوشتی" },
          { id: 4, label: "انبردست" },
        ],
      },
      {
        id: 2,
        label: "ابزار برقی",
        items: [
          { id: 1, label: "دریل" },
          { id: 2, label: "فرز" },
          { id: 3, label: "اره برقی" },
        ],
      },
      {
        id: 3,
        label: "ایمنی و کار",
        items: [
          { id: 1, label: "دستکش ایمنی" },
          { id: 2, label: "کلاه ایمنی" },
          { id: 3, label: "کفش کار" },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "بازی و سرگرمی",
    data: [
      {
        id: 1,
        label: "بازی‌های ویدئویی",
        items: [
          { id: 1, label: "بازی PS5" },
          { id: 2, label: "بازی PC" },
          { id: 3, label: "کنسول بازی" },
        ],
      },
      {
        id: 2,
        label: "اسباب‌بازی کودک",
        items: [
          { id: 1, label: "لگو" },
          { id: 2, label: "عروسک" },
          { id: 3, label: "ماشین اسباب‌بازی" },
        ],
      },
      {
        id: 3,
        label: "وسایل تفریحی خانگی",
        items: [
          { id: 1, label: "بازی فکری" },
          { id: 2, label: "پازل" },
          { id: 3, label: "تخته شطرنج" },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "خدمات و نرم‌افزار",
    data: [
      {
        id: 1,
        label: "نرم‌افزارها",
        items: [
          { id: 1, label: "آنتی‌ویروس" },
          { id: 2, label: "نرم‌افزار حسابداری" },
          { id: 3, label: "برنامه طراحی" },
        ],
      },
      {
        id: 2,
        label: "خدمات دیجیتال",
        items: [
          { id: 1, label: "شارژ موبایل" },
          { id: 2, label: "بسته اینترنت" },
          { id: 3, label: "کارت هدیه دیجیتال" },
        ],
      },
    ],
  },
  {
    id: 13,
    title: "کودک و نوزاد",
    data: [
      {
        id: 1,
        label: "پوشاک نوزاد",
        items: [
          { id: 1, label: "سرهمی" },
          { id: 2, label: "کلاه نوزاد" },
          { id: 3, label: "جوراب نوزاد" },
        ],
      },
      {
        id: 2,
        label: "بهداشت کودک",
        items: [
          { id: 1, label: "پوشک" },
          { id: 2, label: "دستمال مرطوب" },
          { id: 3, label: "شامپو کودک" },
        ],
      },
      {
        id: 3,
        label: "لوازم بازی کودک",
        items: [
          { id: 1, label: "تاب نوزاد" },
          { id: 2, label: "اسباب‌بازی آموزشی" },
          { id: 3, label: "پازل ساده" },
        ],
      },
    ],
  },
  {
    id: 14,
    title: "کشاورزی و باغبانی",
    data: [
      {
        id: 1,
        label: "ابزار باغبانی",
        items: [
          { id: 1, label: "بیل و کلنگ" },
          { id: 2, label: "قیچی باغبانی" },
          { id: 3, label: "شلنگ آب" },
        ],
      },
      {
        id: 2,
        label: "کود و بذر",
        items: [
          { id: 1, label: "کود آلی" },
          { id: 2, label: "بذر سبزیجات" },
          { id: 3, label: "بذر گل" },
        ],
      },
      {
        id: 3,
        label: "گلدان و خاک",
        items: [
          { id: 1, label: "گلدان سفالی" },
          { id: 2, label: "گلدان پلاستیکی" },
          { id: 3, label: "خاک مخصوص گیاهان" },
        ],
      },
    ],
  },
];

export const menuHeader: menuHeaderTypes[] = [
  {
    label: "خانه",
    href: "/marketing",
    id: 1
  },
  {
    label: "رزومه من",
    href: "/aboutMe",
    id: 2
  },
  {
    label: "تماس",
    href: "/callWithMe",
    id: 3
  }
]