<script>
  import Panel from './Panel.svelte'

  function mgs(e) {
    const char = e.detail
  }
</script>

<Panel on:create={mgs} name="Auron" id="1" />
