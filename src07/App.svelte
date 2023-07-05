<script>
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'

  let chara

  function mgs(e) {
    chara = e.detail
  }
</script>

<Panel on:create={mgs} name="Auron"/>
{#if chara}
  <Card {chara}/>
{/if}
