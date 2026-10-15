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

## Выкатка

Push в `main` → GitHub Actions (`.github/workflows/deploy.yml`) собирает `dist/` → `rsync --delete` в папку сайта на хостинге reg.ru → проверка, что https://myfirstcrm.site отвечает 200 и отдаёт новую сборку.

Настройки лежат в секретах репозитория (Settings → Secrets and variables → Actions):

- `SSH_PRIVATE_KEY` — ключ деплоя; его открытая часть добавлена на хостинг
- `SSH_KNOWN_HOSTS` — отпечаток сервера хостинга
- `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH` — сервер, логин хостинга и папка сайта
