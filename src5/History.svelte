<script>
  import { mgs } from './store.js'
  let messages = []

  mgs.subscribe((value) => {
    if(!value) return
    //messages = [...messages, value]
    messages.push(value)
    messages = messages.slice(0)
  })
</script>

<div class="story">
  {#each messages as ms}
    <p>{ms}</p>
  {/each}
</div>
