# Components naming

**Base** - это приставка, которую можно использовать для компонентов, которые предоставляют основные функции и которые можно использовать повсеместно в приложении.

**Common** - это приставка, которую можно использовать для компонентов, которые являются общими для разных разделов приложения.

**Global** - это приставка, которую можно использовать для компонентов, которые предоставляют глобальные функции и которые можно использовать на всех страницах приложения.

**UI** - это приставка, которую можно использовать для компонентов, которые предоставляют элементы пользовательского интерфейса и которые используются в разных частях приложения.

**Shared** - это приставка, которую можно использовать для компонентов, которые разделяются между различными компонентами и страницами в приложении.

# PostCss

## use mixins

```js
  // old 
  @include tablets {}
  // new
  @add-mixin tablets {}
```

