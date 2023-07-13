<script>
  import { newcard } from './store'
  import Card from './Card.svelte'

  let characters = [] 

	newcard.subscribe((card) => {
    characters = [...characters, card]
	})

</script>


{#each characters as character}
  <Card {character}/>
{/each}