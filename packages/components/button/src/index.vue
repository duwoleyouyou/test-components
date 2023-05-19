<template>
  <button :disabled="disabled" class="test" @click="test">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
    name: "TestButton",
};
</script>

<script lang="ts" setup>
  import './index.scss'

  const props = defineProps<{ testString?: string; disabled?: boolean;}>();
  const emit = defineEmits(['save']);

  const test = () => {
    emit('save', props.testString)
  }
</script>