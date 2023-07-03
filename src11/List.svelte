<script>
  import { newcard } from './store'
  import Card from './Card.svelte'

  let charas = [] 

	newcard.subscribe((card) => {
    charas = [...charas, card]
	})

</script>


{#each charas as chara}
  <Card {chara}/>
{/each}