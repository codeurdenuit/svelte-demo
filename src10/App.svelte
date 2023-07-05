<script>
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'
  
  let charas = []
  let count1 = 0
  let count2 = 0
  let count3 = 0

  $:count1 = charas.length
  $:count2 = count1 * 2
  $:if(count1) count3++

  function mgs(e) {
    charas = [...charas, e.detail]
  }
</script>

<Panel on:create={mgs} name="Auron"/>
<info>{count1} / {count2} / {count3}</info>
{#each charas as chara}
  <Card {chara}/>
{/each}
