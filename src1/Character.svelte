<script>

  import Input from "./Input.svelte"

  export let name

  let hp = 100
  let agility = 50
  let force = 30

</script>

<div class="character">
  <img src="chara0.png" alt="" />
  <div class="panel">
    <h1>{name}</h1>
    <Input bind:value={force} legend="Force" />
    <Input bind:value={agility} legend="Agility" />
    <Input bind:value={hp} legend="HP" />
  </div>
</div>
