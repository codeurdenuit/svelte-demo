<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let name
  export let src = 'i1.jpg'

  function create() {
    dispatch('create', {name, src})
  }
</script>

<panel>
  <h1>{name}</h1>
  <img src={src}/>
  <input bind:value={name}/>
  <input bind:value={src}/>
  <button on:click={create}>Create</button>
</panel>
