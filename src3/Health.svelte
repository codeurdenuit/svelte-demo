<script>
  export let hp
  export let hpmax
  $: process = Math.max((hp / hpmax) * 100, 0)
</script>

<div class="health">
  <div style="width:{process}%" />
  <p>{hp}/{hpmax}</p>
</div>
