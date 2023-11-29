<script lang="ts">
  import { genUUID, hasIntersection } from "electric-sql/util";
  import { type Electric } from "./generated/client";
  import { readable } from "svelte/store";
  import {
    generateRandomName,
    generateRandomValue,
  } from "./utils";

  import { createLiveQuery } from "./lib/createLiveQuery";
  import { makeContext } from "./lib/context";
  export let electric: Electric;

  export const useElectric = makeContext(electric);

  electric.db.person.sync();

  const add = () => {
    electric.db.person.create({
      data: {
        id: genUUID(),
        name: generateRandomName(),
        age: generateRandomValue(),
      },
    });
  };


  let results = undefined;
  let search = "";
  $: query = electric.db.person.liveMany({
    where: { name: { contains: search } },
  });
  $: results = createLiveQuery(query);
</script>

Search: 
<input bind:value={search} type="text" />
<button on:click={add}>add</button>
{#if search}
  <div><small><italic>{$results ? $results.length : 0} results</italic></small></div>
{/if}
{#if $results}
  <div>
    {#each $results as r}
      <div>{r.name}</div>
    {/each}
  </div>
{/if}

<style>
</style>
