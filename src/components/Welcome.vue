<script setup lang="ts">
import WelcomeItem from './Item.vue'
</script>

<template>
  <WelcomeItem url="https://vuejs.org/" :lang="['JS', 'CSS', 'HTML']">
    <template #data>10 JAN - 1293 FAB</template>
    <template #heading>Security hub</template>

    An antivirus program is a software application designed to detect, prevent, and remove malicious software such as viruses, worms, Trojans, ransomware, and spyware from a computer or network. It uses various methods like signature-based detection, heuris.
  </WelcomeItem>
</template>
