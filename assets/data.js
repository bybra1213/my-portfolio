// Portfolio data — Merkaloy aka shalopp
const CATEGORIES = [
  { id: "all", ru: "Все", en: "All" },
  { id: "weapons", ru: "Оружие и пропсы", en: "Weapons & props" },
  { id: "characters", ru: "Персонажи", en: "Characters" },
  { id: "stylized", ru: "Стилизация", en: "Stylized" },
  { id: "graphics", ru: "Графика и лого", en: "Graphics & logos" },
  { id: "turntables", ru: "Анимации", en: "Turntables" },
];

// ============================================================
// HOW TO ADD A NEW WORK — copy one of the blocks below into
// the PROJECTS array, fill in the fields, save the file.
//
// IMAGE PROJECT:
// {
//   id: "unique-id",                 // unique, lowercase, no spaces
//   titleRu: "Название",
//   titleEn: "Title",
//   cats: ["weapons"],                // pick from CATEGORIES ids above
//   cover: "filename.jpg",            // shown on the card
//   images: ["filename.jpg", "filename2.jpg"], // all images, lightbox order
// },
//
// VIDEO PROJECT:
// {
//   id: "unique-id",
//   titleRu: "Название",
//   titleEn: "Title",
//   cats: ["turntables"],
//   type: "video",
//   poster: "video/filename_poster.jpg",
//   video: "video/filename.mp4",
// },
//
// Put image files in assets/img/, video+poster in assets/video/.
// File names: latin letters/numbers/underscores only, no spaces.
// ============================================================

const PROJECTS = [
  // ===== WEAPONS & PROPS =====
  {
    id: "sword",
    titleRu: "Меч",
    titleEn: "Sword",
    cats: ["weapons"],
    cover: "sword.jpg",
    images: ["sword.jpg"],
  },
  {
    id: "sand-knife",
    titleRu: "Нож в песке",
    titleEn: "Knife in the sand",
    cats: ["weapons"],
    cover: "sand_knife.jpg",
    images: ["sand_knife.jpg"],
  },
  {
    id: "ugc-sword",
    titleRu: "Меч — UGC для Roblox",
    titleEn: "Sword — Roblox UGC",
    cats: ["weapons", "characters"],
    cover: "swordugc3.jpg",
    images: ["swordugc.jpg", "swordugc2.jpg", "swordugc3.jpg", "swordugc4.jpg"],
  },
  {
    id: "knuckles",
    titleRu: "Кастет",
    titleEn: "Knuckle duster",
    cats: ["weapons"],
    cover: "knuckles.jpg",
    images: ["knuckles.jpg"],
  },
  {
    id: "knuckles-video",
    titleRu: "Кастет — анимация",
    titleEn: "Knuckle duster — turntable",
    cats: ["weapons", "turntables"],
    type: "video",
    poster: "video/knuckles_video_poster.jpg",
    video: "video/knuckles_video.mp4",
  },
  {
    id: "bomb",
    titleRu: "Бомба",
    titleEn: "Bomb",
    cats: ["weapons", "stylized"],
    cover: "bomb.jpg",
    images: ["bomb.jpg"],
  },
  {
    id: "blue-bomb",
    titleRu: "Синяя бомба",
    titleEn: "Blue bomb",
    cats: ["weapons", "stylized"],
    cover: "blue_bomb.jpg",
    images: ["blue_bomb.jpg"],
  },
  {
    id: "bag-mask",
    titleRu: "Маска-мешок",
    titleEn: "Bag mask",
    cats: ["weapons", "characters"],
    cover: "Bag_mask.jpg",
    images: ["Bag_mask.jpg"],
  },
  {
    id: "balls-in-bag",
    titleRu: "Шары в мешке",
    titleEn: "Balls in a bag",
    cats: ["weapons", "stylized"],
    cover: "Balls_in_bag1.jpg",
    images: ["Balls_in_bag1.jpg", "Balls_in_bag2.jpg"],
  },
  {
    id: "7up-gun",
    titleRu: "7Up — оружие, анимация",
    titleEn: "7Up gun — turntable",
    cats: ["weapons", "turntables"],
    type: "video",
    poster: "video/7Up_Gun_poster.jpg",
    video: "video/7Up_Gun.mp4",
  },
  {
    id: "cyber-gun",
    titleRu: "Кибер-оружие — анимация",
    titleEn: "Cyber gun — turntable",
    cats: ["weapons", "turntables"],
    type: "video",
    poster: "video/Cyber_gun_poster.jpg",
    video: "video/Cyber_gun.mp4",
  },

  // ===== CHARACTERS =====
  {
    id: "belka-mask",
    titleRu: "Маска Белки",
    titleEn: "Belka mask",
    cats: ["characters"],
    cover: "BelkaMask3.jpg",
    images: ["BelkaMask3.jpg"],
  },
  {
    id: "ghost",
    titleRu: "Призрак",
    titleEn: "Ghost",
    cats: ["characters", "stylized"],
    cover: "ghost2.jpg",
    images: ["ghost2.jpg", "ghost3.jpg"],
  },
  {
    id: "ghost-video",
    titleRu: "Призрак — анимация",
    titleEn: "Ghost — turntable",
    cats: ["characters", "turntables", "stylized"],
    type: "video",
    poster: "video/ghost_poster.jpg",
    video: "video/ghost.mp4",
  },
  {
    id: "bunny",
    titleRu: "Зайка — анимация",
    titleEn: "Bunny — turntable",
    cats: ["characters", "turntables", "stylized"],
    type: "video",
    poster: "video/bunny_poster.jpg",
    video: "video/bunny.mp4",
  },
  {
    id: "mech",
    titleRu: "Мех-робот",
    titleEn: "Mech",
    cats: ["characters"],
    cover: "mech.jpg",
    images: ["mech.jpg"],
  },
  {
    id: "rib-cage",
    titleRu: "Грудная клетка — анимация",
    titleEn: "Rib cage — turntable",
    cats: ["characters", "turntables"],
    type: "video",
    poster: "video/Rib_cage_poster.jpg",
    video: "video/Rib_cage.mp4",
  },

  // ===== STYLIZED =====
  {
    id: "cherry",
    titleRu: "Вишенка",
    titleEn: "Cherry",
    cats: ["stylized"],
    cover: "cherry.jpg",
    images: ["cherry.jpg"],
  },
  {
    id: "cherry1",
    titleRu: "Вишенки",
    titleEn: "Cherries",
    cats: ["stylized"],
    cover: "Cherry1.jpg",
    images: ["Cherry1.jpg"],
  },

  // ===== GRAPHICS / LOGOS =====
  {
    id: "logo-izmaylovo",
    titleRu: "Лого «Измайлово»",
    titleEn: "Izmaylovo — logo",
    cats: ["graphics"],
    cover: "LogoIzmaylovo.jpg",
    images: ["LogoIzmaylovo.jpg"],
  },
  {
    id: "eye",
    titleRu: "Глаз — серия рендеров",
    titleEn: "Eye — render series",
    cats: ["graphics", "stylized"],
    cover: "eye2.jpg",
    images: ["eye2.jpg", "eye3.jpg", "eye4.jpg"],
  },
  {
    id: "eye-video",
    titleRu: "Глаз — анимация",
    titleEn: "Eye — turntable",
    cats: ["graphics", "turntables", "stylized"],
    type: "video",
    poster: "video/eye_poster.jpg",
    video: "video/eye.mp4",
  },
];
