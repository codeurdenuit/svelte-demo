import { writable } from "svelte/store"

export const newcard = writable({
  name: 'Bahamut',
  src: 'i9.jpg',
})
