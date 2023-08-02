<template>
  <div class="min-h-full">
    <header class="bg-nav py-24">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="py-5">
          <h1 class="text-2xl text-white">Grunnbeløp ({{ year }})</h1>
        </div>
      </div>
    </header>
    <main class="-mt-24 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
              <h2 id="section-1-title" class="sr-only">Kalkulator</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <slot></slot>
                </div>
              </div>
            </section>
            <section aria-labelledby="section-1-description">
              <h2 id="section-1-description" class="sr-only">Beskrivelse</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <slot name="description"></slot>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 id="section-2-title" class="sr-only">Historikk</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <slot name="sidebar"></slot>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"
        >
          <span class="block sm:inline"
            >Laget av
            <a
              class="text-blue-500 hover:underline"
              href="https://github.com/audunhov"
              >Audun Hammer Hovda</a
            >.</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { useGStore } from '../stores/g.js'
import { computed } from 'vue'
import { getYear } from 'date-fns'

const gs = useGStore()
const year = computed(() => {
  if (!gs.G) return getYear(new Date())
  return getYear(new Date(gs.G.dato))
})
</script>
