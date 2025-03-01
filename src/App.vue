<!-- src\App.vue -->

<script setup lang="ts">
import Welcome from './components/Welcome.vue'
import ItemMain from './components/ItemMain.vue'

</script>

<template>
  <header>
    <img class="logo" src="./assets/img/logo.jpg" width="125" height="125" />
    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Kvazar-213452</h1>
        <h3>Hi, I'm a fullstack developer!</h3>
      </div>
      <ItemMain>
        <template #heading>Description</template>
        A Full-Stack Developer is a versatile software engineer skilled in both front-end and back-end development. They work with various technologies, including databases, servers, APIs, and user interfaces, to build complete web or mobile applications. Proficient in languages like JavaScript, Python, or Java, they handle everything from designing user experiences to managing server logic, ensuring seamless functionality across the entire stack.
      </ItemMain>
    </div>
  </header>

  <!-- unix -->

  <main>
    <Welcome />
  </main>

  <footer>
    <a class="link" href="">My Github</a>
  </footer>
</template>

<style scoped>
.link {
  color: var(--main_color);
  font-size: 1rem;
  font-weight: bold;
  transition: all .4s;
}

.link:hover {opacity: 0.5;}

footer {
  position: fixed;
  left: 20px;
  bottom: 20px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--bg_2);
  border-radius: 5px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: var(--main_color);
}

h3 {
  font-size: 1.4rem;
  color: white;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
      text-align: left;
  }
}

header {line-height: 1.5;}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
      display: flex;
      position: relative;
      top: 80px;
      padding-right: calc(var(--section-gap) / 2);
  }

  .logo {margin: 0 2rem 0 0;}

  header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
  }
}
</style>
