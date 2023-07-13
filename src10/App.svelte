<script>
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'
  
  let characters = []
  let count1 = 0
  let count2 = 0
  let count3 = 0

  $:count1 = characters.length
  $:count2 = count1 * 2
  $:if(count1) count3++

  function mgs(e) {
    characters = [...characters, e.detail]
  }
</script>

<Panel on:create={mgs} name="Auron"/>
<info>{count1} / {count2} / {count3}</info>
{#each characters as character}
  <Card {character}/>
{/each}
