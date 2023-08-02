<template>
  <div class="space-y-5">
    <FormInput
      v-bind="gInput"
      :model-value="gValue"
      @update:model-value="updateG($event)"
    />
    <FormInput
      v-bind="nokInput"
      :model-value="nokValue"
      @update:model-value="updateNok($event)"
    />
    <FormInput
      v-bind="mndInput"
      :model-value="mndValue"
      @update:model-value="updateMnd($event)"
    />
  </div>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue'
import { ref, watch } from 'vue'
import { useGStore } from '../stores/g.js'

const gInput = {
  label: 'Grunnbeløp',
  unit: 'G',
}

const nokInput = {
  label: 'Årlig sum',
  unit: 'NOK',
}

const mndInput = {
  label: 'Månedlig sum',
  unit: 'NOK',
}

const gValue = ref(0)
const nokValue = ref(0)
const mndValue = ref(0)

const gStore = useGStore()

const last = ref<Function>(() => updateG(gValue.value))

function updateG(value: number) {
  gValue.value = !isNaN(value) ? value : 0
  nokValue.value = parseFloat(
    (gValue.value * (gStore.G?.grunnbeløp || 1)).toFixed(2)
  )
  mndValue.value = parseInt((nokValue.value / 12).toFixed(0))
  last.value = () => updateG(gValue.value)
}
function updateNok(value: number) {
  nokValue.value = !isNaN(value) ? value : 0
  gValue.value = parseFloat(
    (nokValue.value / (gStore.G?.grunnbeløp || 1)).toFixed(2)
  )
  mndValue.value = Math.round(nokValue.value / 12)
  last.value = () => updateNok(nokValue.value)
}
function updateMnd(value: number) {
  mndValue.value = !isNaN(value) ? value : 0
  nokValue.value = mndValue.value * 12
  gValue.value = parseFloat(
    (nokValue.value / (gStore.G?.grunnbeløp || 1)).toFixed(2)
  )
  last.value = () => updateMnd(mndValue.value)
}

watch(gStore, () => last.value())
</script>
