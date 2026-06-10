# Merkaloy aka shalopp — 3D portfolio

Статический сайт-портфолио (HTML/CSS/JS, без сборки), с переключателем RU/EN.

## Структура

```
index.html
assets/
  style.css
  main.js
  data.js     ← список работ и категории (названия на RU и EN)
  i18n.js     ← тексты интерфейса на RU и EN
  img/        ← фото работ (jpg)
  video/      ← анимации-турнтейблы (mp4 + постеры)
```

## Как опубликовать на GitHub Pages (важно!)

Чтобы сайт открывался по адресу `https://<логин>.github.io/<репозиторий>/`,
файлы `index.html` и папка `assets/` должны лежать **прямо в корне репозитория**,
а не во вложенной папке.

1. Создай репозиторий (или открой существующий).
2. Удали из него всё лишнее (старые файлы, пустые папки) — через "..." → Delete file у каждого файла.
3. Через "Add file → Upload files" перетащи **содержимое** этой папки
   (`index.html`, `README.md`, папку `assets`) — именно файлы, а не саму папку с сайтом.
4. Settings → Pages → Source: branch `main`, папка `/ (root)` — Save.
5. Подожди 1-2 минуты, обнови страницу (Ctrl+F5).

Проверка: в корне репозитория на вкладке "Code" должен сразу быть виден файл `index.html`.

## Как добавить новую работу

Открой `assets/data.js`, добавь объект в массив `PROJECTS`:

```js
{
  id: "unique-id",
  titleRu: "Название на русском",
  titleEn: "Title in English",
  cats: ["weapons"],          // категории из CATEGORIES
  cover: "имя_файла.jpg",
  images: ["имя_файла.jpg", "доп_фото.jpg"],
}
```

Для видео:

```js
{
  id: "tt-name",
  titleRu: "Название",
  titleEn: "Title",
  cats: ["turntables"],
  type: "video",
  poster: "video/poster.jpg",
  video: "video/file.mp4",
}
```

Картинки клади в `assets/img/`, видео и постеры — в `assets/video/`.
Имена файлов — без пробелов и кириллицы.

## Контакты

Указаны в подвале сайта (`index.html`, секция `<footer>`):
Telegram — t.me/the_bridger, Discord — shalopp.
