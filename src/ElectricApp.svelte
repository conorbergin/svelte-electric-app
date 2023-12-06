<script lang="ts">
  import { genUUID, hasIntersection } from "electric-sql/util";
  import { type Electric } from "./generated/client";
  import { derived, writable } from "svelte/store";
  import { generateRandomName, generateRandomValue } from "./utils";

  import { createLiveQuery } from "./lib/svelteLiveQuery";

  export let electric: Electric;

  let { db, notifier } = electric;

  db.person.sync();

  const add = () => {
    db.person.create({
      data: {
        id: genUUID(),
        name: generateRandomName(),
        age: generateRandomValue(),
      },
    });
  };

  let search = writable("");
  const query = electric.db.person.liveMany();
  const results = createLiveQuery(notifier, query);
  const der = derived([results, search], ([$results, $search]) =>
    $results?.filter((x) => x.name.includes($search)),
  );
</script>

Search:
<input bind:value={$search} type="text" />
<button on:click={add}>add</button>
{#if search}
  <div><small><italic>{$der ? $der.length : 0} results</italic></small></div>
{/if}
{#if $der}
  <div>
    {#each $der as r}
      <div>{r.name}</div>
    {/each}
  </div>
{/if}

<style>
</style>
