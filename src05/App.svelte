<script>
  import Panel from './Panel.svelte'
  let name = 'Auron'
</script>

<h1>{name}</h1>
<Panel bind:name={name} id=1 />