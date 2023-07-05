<script>
  import { onMount } from 'svelte'
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'
  let charas = []

  function mgs(e) {
    charas.push(e.detail)
    charas = charas.splice(-9)
  }

  onMount(async ()=>{
    const res = await fetch(`/list.json`)
    charas = await res.json()
  })

</script>

<Panel on:create={mgs} name="Auron"/>
{#each charas as chara}
  <Card {chara}/>
{/each}
