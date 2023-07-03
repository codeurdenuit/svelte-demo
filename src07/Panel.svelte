<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let name
  export let id

  function create() {
    dispatch('create', {name, id})
  }
</script>

<panel>
  <h1>{name} {id}</h1>
  <img src="i{id}.jpg"/>
  <input bind:value={name}/>
  <input bind:value={id} type="number"/>
  <button on:click={create}>Create</button>
</panel>
