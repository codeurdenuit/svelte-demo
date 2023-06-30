<script>
  import Input from './Input.svelte'
  import Panel from './Panel.svelte'
  import Health from './Health.svelte'
  import Image from './Image.svelte'

  export let name
  export let id

  let hpmax = 100
  let hp = 20
  let agility = 50
  let force = 30

  $: hp = hpmax

</script>

<div class="character">
  <Image id={id} />
  <Health hp={hp} hpmax={hpmax} />
  <Panel title={name}>
    <Input bind:value={force} legend="Force" />
    <Input bind:value={agility} legend="Agility" />
    <Input bind:value={hpmax} legend="HP" />
  </Panel>
</div>
