<script>
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'

  let character

  function mgs(e) {
    character = e.detail
  }
</script>

<Panel on:create={mgs} name="Auron"/>
{#if character}
  <Card {character}/>
{/if}
