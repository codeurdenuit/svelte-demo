<script>
  import { newcard } from './store'
  export let name
  export let id

  function create() {
    $newcard  = {name, id}
  }
</script>

<panel>
  <h1>{name} {id}</h1>
  <img src="i{id}.jpg"/>
  <input bind:value={name}/>
  <input bind:value={id} type="number"/>
  <button on:click={create}>Create</button>
</panel>
