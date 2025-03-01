<script setup lang="ts">
defineProps<{ url: string; lang: string[] }>()
</script>

<template>
  <a :href="url" target="_blank" rel="noopener">
    <div class="item">
      <p class="data"><slot name="data"></slot></p>
      <div class="details">
        <h3><slot name="heading"></slot></h3>
        <p class="text"><slot></slot></p>
        <div v-for="language in lang" class="lang" :key="language">{{ language }}</div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.item {
  width: 145%;
  position: relative;
  left: -130px;
}

.lang {
  position: relative;
  top: 5px;
  color: var(--main_color);
  float: left;
  margin-right: 10px;
  padding: 5px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: var(--bg_2);
}

.data {
  color: var(--color-text);
  position: relative;
  top: 8px;
}

.text {
  color: var(--color-text);
  font-size: 1rem;
}

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  background-color: var(--bg_1);
  border-radius: 10px;
  transition: all .4s;
  border: solid 2px #ffffff00;
}

.item:hover {
  border: solid 2px var(--main_color);
  opacity: 0.8;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
