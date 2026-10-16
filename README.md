# Лендинг «Личная CRM»

Одна страница с одним действием: перейти в приложение https://app.myfirstcrm.site.

## Запуск у себя

```sh
pnpm install
pnpm dev      # страница с автообновлением: http://localhost:4321
pnpm build    # готовый сайт в папке dist/
pnpm preview  # посмотреть собранный dist/
```

Если в `pnpm dev` заголовки показываются не тем шрифтом (тонкие буквы, «CRM» выглядит иначе, чем «Личная») — шрифт не скачался с Google Fonts из-за сбоя сети.
Сам `pnpm dev` второй раз скачать не пробует: остановите его (`pnpm exec astro dev stop`) и запустите снова.

## Где что лежит

- `src/styles/tokens.css` — цвета, шрифты, размеры текста, отступы, скругления
- `src/config.ts` — адрес приложения, куда ведут все кнопки
- `src/components/sections/` — блоки страницы по порядку: Hero, Problem, Solution, Benefits, FinalCta, Footer
- `astro.config.mjs` — шрифты (Unbounded, Golos Text, JetBrains Mono): при сборке скачиваются с Google Fonts и отдаются с нашего сервера
- `design/` — макет и тексты

## Выкатка

Push в `main` → GitHub Actions (`.github/workflows/deploy.yml`) собирает `dist/` → `rsync --delete` в папку `/var/www/myfirstcrm.site` на нашем сервере (FirstVDS, общий с приложением) → nginx отдаёт эту папку → проверка, что https://myfirstcrm.site отвечает 200 и отдаёт новую сборку.

Настройки лежат в секретах репозитория (Settings → Secrets and variables → Actions):

- `SSH_PRIVATE_KEY` — ключ деплоя. Его открытая часть добавлена на сервер с ограничением: этим ключом можно только залить файлы в папку лендинга, войти на сервер с ним нельзя
- `SSH_KNOWN_HOSTS` — отпечаток сервера
- `DEPLOY_HOST`, `DEPLOY_USER` — адрес сервера и пользователь, под которым идёт заливка
