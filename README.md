# SPA для списка продуктов

## О проекте

Этот проект представляет собой Single Page Application (SPA) на основе React, TypeScript, RTK, RTK Query и React Router DOM, реализованный по методологии Feature-Sliced Design (FSD).

Приложение использует публичное API [FakeStoreAPI](https://fakestoreapi.com/products/) для получения списка продуктов.

### Функционал

1. **Список продуктов (/products)**
   - Отображение списка товаров с сервера.
   - Каждая карточка товара содержит изображение, название и описание (сокращенное до фиксированной высоты).
   - Возможность лайкать товары (сохранение в избранное).
   - Удаление карточек товаров.
   - Фильтрация товаров (все товары / только избранные).
   - Переход на детальную страницу товара при клике на карточку.
   - Пагинация списка.
   - Поиск товаров в реальном времени.
   - Созданы собственные Ui компоненты(Loader,MyButton,Like,Pagination)
2. **Страница продукта (/products/:id)**

   - Отображение детальной информации о продукте.
   - Кнопка для возврата на страницу списка товаров.

3. **Создание продукта (/create-product)**
   - Форма для добавления нового товара.
   - Валидация данных.
   - Сохранение созданного товара в store.

## Технологии

- **React** (Создание компонентов пользовательского интерфейса)
- **TypeScript** (Строгая типизация)
- **Redux Toolkit (RTK) & RTK Query** (Глобальное состояние и работа с API)
- **React Router DOM** (Маршрутизация)
- **Feature-Sliced Design (FSD)** (Структурирование проекта)
- **CSS Modules** (Стилизация)

## Установка и запуск проекта

### Клонирование репозитория:

```sh
 git clone https://github.com/Mamurik/ShopFSD
 cd your-project-folder
```

### Установка зависимостей:

```sh
npm install
```

### Запуск проекта в режиме разработки:

```sh
npm run dev
```

### Сборка проекта:

```sh
npm run build
```


## Структура проекта (FSD)

```
/src
 ├── app        # Конфигурация приложения
 ├── entities   # Бизнес-сущности
 ├── features   # Фичи (лайк, удаление)
 ├── pages      # Страницы приложения
 ├── shared     # Общие компоненты и утилиты
 ├── widgets     # Самостоятельные блоки
```
