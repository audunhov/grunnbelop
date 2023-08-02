<template>
  <div>
    <label
      for="price"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        id="price"
        type="text"
        min="0"
        name="price"
        :disabled="disabled"
        inputmode="numeric"
        :value="modelValue"
        class="block w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 transition placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-select sm:text-sm sm:leading-6"
        placeholder="0.00"
        aria-describedby="price-currency"
        @input="onInput($event as InputEvent)"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <span id="price-currency" class="text-gray-500 sm:text-sm">{{
          unit
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  unit: string
  step?: number
  modelValue?: number
  disabled?: boolean
}>()

interface InputEvent extends Event {
  target: HTMLInputElement
}

const onInput = (event: InputEvent) => {
  emit('update:modelValue', parseFloat(event.target.value || '0'))
}

const emit = defineEmits<{
  (e: 'update:modelValue', v: number): void
}>()
</script>
