<script>
  export let chara
</script>

{#if chara}
  <card>
    <img src="i{chara.id}.jpg"/>
    <h1>{chara.name}</h1>
  </card>
{/if}
