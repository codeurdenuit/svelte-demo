<script>
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'

  let charas = []

  function mgs(e) {
    charas.push(e.detail)
    charas = charas.splice(-4)
  }
  
</script>

<Panel on:create={mgs} name="Auron" />
{#each charas as chara}
  <Card {chara}/>
{/each}
