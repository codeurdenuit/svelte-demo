<script>
  import { onMount } from 'svelte'
  import Panel from './Panel.svelte'
  import Card from './Card.svelte'
  let characters = []

  function mgs(e) {
    characters.push(e.detail)
    characters = characters.splice(-9)
  }

  onMount(async ()=>{
    const res = await fetch(`/list.json`)
    characters = await res.json()
  })

</script>

<Panel on:create={mgs} name="Auron"/>
{#each characters as character}
  <Card {character}/>
{/each}
