<script>
  import { newcard } from './store'
  export let name
  export let src = 'i1.jpg'

  function create() {
    $newcard  = {name, src}
  }
</script>

<panel>
  <h1>{name}</h1>
  <img src={src}/>
  <input bind:value={name}/>
  <input bind:value={src}/>
  <button on:click={create}>Create</button>
</panel>
