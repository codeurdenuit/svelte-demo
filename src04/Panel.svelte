<script>
  export let name
  export let src = 'i1.jpg'
</script>

<panel>
  <h1>{name}</h1>
  <img src={src}/>
  <input bind:value={name}/>
  <input bind:value={src}/>
</panel>
