<template>
  <div class="space-y-5">
    <Disclosure
      v-for="entry in gStore.GHistory"
      v-slot="{ open }"
      :key="entry.dato"
      as="div"
    >
      <DisclosureButton class="hover:underline">
        <span>{{ getYear(new Date(entry.dato)) }}</span>
        <ChevronRightIcon
          class="h-4 inline mb-1"
          :class="open && 'rotate-90'"
        />
      </DisclosureButton>
      <transition v-bind="transition">
        <DisclosurePanel class="bg-nav rounded p-3 mt-3 text-white">
          <div>
            <span>Grunnbeløp: {{ entry.grunnbeløp }} (+</span>
            <abbr title="Siden året før">
              {{ getPercentage(entry.omregningsfaktor || 0) }}
            </abbr>
            )
          </div>
          <div>Hver måned: {{ entry.grunnbeløpPerMåned }}</div>
          <button
            :disabled="entry === gStore.G"
            class="w-32 bg-white rounded p-1 mt-5 text-xs text-gray-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            @click="apply(entry)"
          >
            {{ entry === gStore.G ? 'I bruk' : 'Bruk denne' }}
          </button>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid/index.js'
import { useGStore } from '../stores/g.js'
import { getYear } from 'date-fns'
import { Grunnbelop } from '../types.js'
const gStore = useGStore()

const transition = {
  enterFromClass: 'opacity-0 translate-x-3',
  enterActiveClass: 'transition',
  leaveToClass: 'opacity-0 translate-x-3',
  leaveActiveClass: 'transition',
}

function apply(grunnbelop: Grunnbelop) {
  gStore.G = grunnbelop
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function getPercentage(factor: number) {
  const formatter = new Intl.NumberFormat('nb', {
    style: 'percent',
    maximumFractionDigits: 2,
  })
  return formatter.format(factor - 1)
}
</script>
