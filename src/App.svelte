<script lang="ts">
  import { initElectric } from "./init";
  import ElectricApp from "./ElectricApp.svelte";
</script>

<main>
  {#await initElectric()}
    <p>loading</p>
  {:then electric}
    <ElectricApp {electric} />
  {:catch}
    <p>error!</p>
  {/await}
</main>
