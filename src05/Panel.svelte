<script>
  export let name
  export let id
</script>

<panel>
  <h1>{name} {id}</h1>
  <img src="i{id}.jpg"/>
  <input bind:value={name}/>
  <input bind:value={id} type="number"/>
</panel>
