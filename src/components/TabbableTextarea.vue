<script setup>
    import { inject } from "vue";
    import { state } from "../stores/greetingStore"
    defineProps({
        modelValue: String
    })
    setTimeout(() => {
      greeting.value = 'Hi!!!!!'
    }, 4000)
    let {greeting, changeName} = inject('greeting')
    let emit = defineEmits(['update:modelValue'])
  function onTabPress (e) {
    let textarea = e.target          
    let val = textarea.value
    let start = textarea.selectionStart
    let end = textarea.selectionEnd

    textarea.value = val.substring(0, start) + '\t' + val.substring(end)
    textarea.selectionStart = textarea.selectionEnd = start + 1
  } 
</script>

<template>
  <main>
    <button @click.prevent="changeName">{{ greeting }}</button>
    <p>{{ state }}</p>
    <button @click.prevent="state='Good morning'">Change greeting</button>
    <form action="">
      <textarea 
        @keyup="emit('update:modelValue', $event.target.value)"
        @keydown.tab.prevent="onTabPress"
        v-text="modelValue" />
    </form>
  </main>
</template>