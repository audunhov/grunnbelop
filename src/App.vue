<template>
  <DefaultLayout>
    <template #default>
      <Calculator></Calculator>
    </template>
    <template #description>
      <blockquote cite="https://www.nav.no/grunnbelopet">
        "Grunnbeløpet" er et tall som blir bruk til å beregne mange av NAVs
        utbetalinger. Beløpet blir oppdatert 1. mai hvert år og blir bestemt av
        Stortinget etter trygdeoppgjøret."
      </blockquote>
      <div class="text-right">
        <a
          href="https://www.nav.no/grunnbelopet"
          class="text-sm text-gray-800 text-right hover:underline"
          >- NAV.no</a
        >
      </div>
    </template>
    <template #sidebar>
      <History></History>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue'
import History from './components/History.vue'
import Calculator from './components/Calculator.vue'
import { onMounted } from 'vue'
import { useGStore } from './stores/g.js'
import { Grunnbelop } from './types.js'

const gs = useGStore()

onMounted(async () => {
  const res = await fetch('https://g.nav.no/api/v1/historikk')
  if (!res.ok) throw res.statusText
  const data = await res.json()
  gs.GHistory = data as Grunnbelop[]
  gs.G = data[0]
})
</script>
