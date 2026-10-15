# Handoff: лендинг «Личная CRM»

## Overview
Одностраничный статичный лендинг продукта «Личная CRM». Единственное целевое действие — перейти в приложение (кнопка «Добавить первый контакт» в hero и в финале, ссылка «Открыть» в шапке).

**Стек:** Astro + Tailwind CSS 4, статическая сборка (`output: 'static'`), без клиентского JS.

## About the Design Files
Файлы в `design/` — **дизайн-референсы в HTML**, а не продакшн-код. Их нужно воссоздать в Astro + Tailwind 4. Открыть: `design/Landing Mobile.dc.html` и `design/Landing Desktop.dc.html` в браузере (рядом должен лежать `support.js`). Все стили — inline, значения можно брать прямо из разметки.
Тексты — `copy/landing.md` (источник истины; на странице использованы дословно).

## Fidelity
**High-fidelity.** Цвета, шрифты, размеры, отступы — финальные. Серые полосатые блоки — плейсхолдеры скриншотов приложения, их заменят реальные изображения.

## Responsive
- `< 1024px` (`< lg`) — мобильная версия (макет 390px, контент в одну колонку, горизонтальные поля 20px).
- `≥ 1024px` (`lg:`) — десктоп: контейнер `max-width: 1200px`, поля 40px.
Mobile-first: базовые классы = мобильный макет, `lg:` = десктоп.

## Design Tokens (Tailwind 4 `@theme`)
```css
@import "tailwindcss";
@theme {
  --color-bg: #0e0f0d;          /* фон страницы */
  --color-surface: #171815;     /* карточки */
  --color-line: #232521;        /* бордеры карточек, разделители */
  --color-line-strong: #262823; /* бордер плейсхолдеров, плашка «Андрей Конф» */
  --color-line-ui: #2f312c;     /* разделители фич (desktop), бордер кнопки в шапке */
  --color-ink: #f3f4ef;         /* основной текст */
  --color-ink-2: #d9dbd3;       /* текст карточек проблем */
  --color-muted: #a8aaa2;       /* вторичный текст */
  --color-faint: #7d7f77;       /* подписи, eyebrow, футер */
  --color-accent: oklch(0.88 0.17 125); /* лаймовый ≈ #c5e84a */
  --font-display: "Unbounded", sans-serif;
  --font-sans: "Golos Text", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```
Шрифты (Google Fonts, кириллица): Unbounded 500/600/700, Golos Text 400/500/600/700, JetBrains Mono 400. Рекомендуется self-host через `@fontsource/*` или `astro:assets` fonts, `font-display: swap`.

Радиусы: 999px (кнопки), 18/20/22/24/28px (карточки — см. ниже), 6px (inline-плашка).
Ссылки: `color: inherit`, hover — `opacity: .88`.

## Компоненты
**CtaButton** (используется дважды: hero + финал)
- Pill, фон accent, текст `#0e0f0d`, Golos 600.
- Mobile: высота 58px, на всю ширину, `justify-between`, padding `0 8px 0 22px`, 17px.
- Desktop: высота 62px, ширина по контенту, gap 28px, padding `0 9px 0 28px`, 18px.
- Справа круг 42px (desktop 44px) фона `#0e0f0d` с треугольником «play» цвета accent (CSS-треугольник: `border-width: 7px 0 7px 11px`, `margin-left: 3px`). Можно SVG.
- Текст: «Добавить первый контакт». `href` = URL приложения (вынести в env, напр. `PUBLIC_APP_URL`).

**Eyebrow** — JetBrains Mono 12px (desktop 13px), uppercase, `letter-spacing: .08em`, цвет faint. Формат «01 — Проблема».

**SectionTitle (h2)** — Unbounded 600, 28px (desktop 44px), line-height 1.15 (desktop 1.1), `letter-spacing: -0.02em`, `text-wrap: balance`.

**ScreenshotPlaceholder** — бордер line-strong, радиус 24px (desktop 28px). Заменить на `<Image>` из `astro:assets`.

## Секции (по порядку)

### 0. Header
Flex, space-between. Логотип-текст «Личная CRM» — Unbounded 600, 15px (desktop 18px). Справа ссылка в приложение цвета accent: mobile «Открыть →» 14px; desktop «Открыть приложение →» 15px/500 в pill с бордером line-ui, padding 10px 18px. Padding 18px 20px (desktop 24px 0).

### 1. Hero
- h1: «Не теряйте людей, которых знаете **лично**» — слово «лично» цвета accent. Unbounded 600, 33px/1.12 (desktop 56px/1.08), `letter-spacing: -0.02em` (desktop -0.03em).
- Подзаголовок: полный текст из landing.md, 17px/1.5 (desktop 19px/1.55, max-width 520px), muted.
- CtaButton.
- Примечание: «Хранится на вашем компьютере. Без рекламы и рассылок.» 13px (desktop 14px, max-width 220px, справа от кнопки), faint.
- Скриншот приложения: mobile — под текстом, высота 340px, margin-top 36px; desktop — правая колонка, высота 520px.
- Mobile: колонка, gap 20px, padding-top 40px. Desktop: 2 колонки 1fr/1fr, gap 56px, `items-center`, padding-top 72px.

### 2. Проблема
- Eyebrow «01 — Проблема», h2 «Знакомо?».
- 4 карточки-ситуации: фон surface, бордер line, текст ink-2, 16px/1.5 (desktop 17px/1.55). Mobile: радиус 18px, padding 18px, gap 10px, в столбик. Desktop: радиус 22px, padding 28px, сетка 2×2, gap 14px.
- В первой карточке «Андрей Конф» выделен плашкой: фон line-strong, цвет ink, padding 1px 6px, радиус 6px.
- Абзац-вывод: «Телефонная книга хранит номер, но не хранит историю.» — ink; продолжение — muted. 18px (desktop 19px).
- Mobile порядок: eyebrow → h2 → карточки → абзац. Desktop: левая колонка (~1/3: eyebrow, h2, абзац), правая (~2/3: сетка карточек), gap 56px. **Без sticky** (давало наложение при скролле).
- Отступ секции сверху: 88px (desktop 160px) — одинаково для секций 2–4.

### 3. Решение
- Eyebrow «02 — Решение», h2 «Личная CRM — одно место для всех, кого вы **знаете**» («знаете» — accent).
- Лид: «Открыли — сразу видите список своих людей. Ничего лишнего.» muted, 17px (desktop 19px; справа от заголовка, выровнен по низу).
- Скриншот: высота 280px (desktop 560px, на всю ширину).
- 4 фичи: номер (Mono 13px, accent) + заголовок (Golos 600, 18px / desktop 19px) + описание (16px/1.5, muted).
  - Mobile: список, сетка `36px 1fr`, padding 20px 0, разделители line сверху (+ снизу у последней).
  - Desktop: 4 колонки, gap 32px, бордер-топ line-ui, padding-top 24px.

### 4. Выгода
- Eyebrow «03 — Выгода», h2 «Что вы получаете».
- 5 карточек: заголовок Unbounded 600 19px (desktop 21px), текст 16px/1.5 muted.
  - Первая («Вы помните контекст») — акцентная: фон accent, текст `#0e0f0d`; desktop — шире (span 2), заголовок 28px, текст 18px, min-height 220px, padding 36px.
  - Последняя («Ваши данные — только ваши») — бордер accent с 50% прозрачностью.
  - Остальные — surface + бордер line.
  - Mobile: столбик, gap 10px, padding 22px 20px, радиус 20px. Desktop: сетка 3 колонки (1-я карточка span 2 → ряды 2+1 и 3), gap 14px, padding 32px, радиус 24px, контент прижат к низу.

### 5. Призыв к действию
- h2 «Начните с **одного** человека» («одного» — accent), размер как h1 hero.
- Текст из landing.md, muted, 17px (desktop 19px, max-width 600px).
- CtaButton.
- Mobile: выравнивание влево, padding-top 96px. Desktop: по центру, padding-top 180px.

### 6. Footer
Бордер-топ line, padding-top 20px (desktop 28px), flex space-between: «Личная CRM» (Unbounded, muted) / «Данные хранятся у вас» (faint), 13px (desktop 14px). Отступ сверху 56px (desktop 140px).

## Interactions & Behavior
- Статика, без JS. Все CTA — обычные `<a>` на URL приложения.
- Hover на ссылках/кнопках: `opacity: .88`. Добавить видимый `focus-visible` outline accent.
- Анимаций нет.

## State Management
Не требуется.

## Assets
Нужны от заказчика: 3 скриншота приложения в тёмной теме — (1) общий вид приложения (hero), (2) список контактов + карточка с заметками (решение). Иконок и изображений больше нет. Favicon — не задан.

## Предлагаемая структура Astro
```
src/
  layouts/Base.astro          — <html lang="ru">, мета, шрифты, global.css
  styles/global.css           — @import "tailwindcss"; @theme {...}
  components/CtaButton.astro
  components/Header.astro
  components/sections/{Hero,Problem,Solution,Benefits,FinalCta,Footer}.astro
  pages/index.astro
```

## Files
- `design/Landing Mobile.dc.html` — мобильная версия (390px)
- `design/Landing Desktop.dc.html` — десктопная версия
- `design/support.js` — рантайм для открытия референсов в браузере
- `copy/landing.md` — тексты
