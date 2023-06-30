<script>
  import Character from './Character.svelte'

  let damage1
  let damage2

  function attack1(e) {
    damage1 = e.detail
    damage2 = null
  }

  function attack2(e) {
    damage2 = e.detail
    damage1 = null
  }
</script>

<Character name="Arthur" id={0} damage={damage2} on:attack={attack1} />
<Character name="Mosart" id={1} damage={damage1} on:attack={attack2} />
