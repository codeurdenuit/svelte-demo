<script>
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'

  let characters = []

  function mgs(e) {
    characters.push(e.detail)
    characters = characters.splice(-4)
  }
  
</script>

<Panel on:create={mgs} name="Auron" />
{#each characters as character}
  <Card {character}/>
{/each}
