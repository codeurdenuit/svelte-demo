<script>
  import Panel from './Panel.svelte'

  function mgs(e) {
    const char = e.detail
    console.log(char)
  }
</script>

<Panel on:create={mgs} name="Auron"/>
