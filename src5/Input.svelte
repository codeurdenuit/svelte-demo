<script>
  export let value
  export let legend
</script>

<div class="state">
  <legend>{legend}</legend>
  <input bind:value type="number" max="100" />
</div>
