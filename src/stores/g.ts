import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Grunnbelop } from '../types.js'

export const useGStore = defineStore('G', () => {
  const GHistory = ref<Grunnbelop[]>()
  const G = ref<Grunnbelop>()

  return {
    GHistory,
    G,
  }
})
