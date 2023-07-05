<script>
  export let chara
</script>

{#if chara}
<card>
  <img src={chara.src}/>
  <h1>{chara.name}</h1>
</card>
{/if}
