# Лендинг «Личная CRM»

Одна страница с одним действием: перейти в приложение https://app.myfirstcrm.site.

## Запуск у себя

```sh
pnpm install
pnpm dev      # страница с автообновлением: http://localhost:4321
pnpm build    # готовый сайт в папке dist/
pnpm preview  # посмотреть собранный dist/
```

## Где что лежит

- `src/styles/tokens.css` — цвета, шрифты, размеры текста, отступы, скругления
- `src/config.ts` — адрес приложения, куда ведут все кнопки
- `src/components/sections/` — блоки страницы по порядку: Hero, Problem, Solution, Benefits, FinalCta, Footer
- `astro.config.mjs` — шрифты (Unbounded, Golos Text, JetBrains Mono): при сборке скачиваются с Google Fonts и отдаются с нашего сервера
- `design/` — макет и тексты
