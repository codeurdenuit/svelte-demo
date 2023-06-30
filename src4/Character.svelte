<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import Input from './Input.svelte'
  import Panel from './Panel.svelte'
  import Health from './Health.svelte'
  import Image from './Image.svelte'
  import Button from './Button.svelte'

  export let damage
  export let name
  export let id

  let hpmax = 100
  let hp = 100
  let agility = 50
  let force = 30
  let state = 1

  $: hp = hpmax
  $: if (damage) getHit(damage)
  $: state = !damage ? 2 : state
  $: state = hp <= 0 ? 0 : 1

  function attack() {
    const value = Math.floor(force * (1 - (Math.random() * (100 - agility)) / 100))
    dispatch('attack', { value })
  }

  function getHit(damage) {
    hp -= damage.value
  }

</script>

<div class="character">
  <Image state={state} id={id} />
  <Health hp={hp} hpmax={hpmax} />
  <Panel title={name}>
    <Input bind:value={force} legend="Force" />
    <Input bind:value={agility} legend="Agility" />
    <Input bind:value={hpmax} legend="HP" />
  </Panel>
  {#if state === 1}
    <Button on:click={attack} />
  {/if}
</div>
