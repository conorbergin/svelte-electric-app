<script lang="ts">
  import { genUUID, hasIntersection } from "electric-sql/util";
  import { type Electric } from "./generated/client";
  import { derived, writable } from "svelte/store";
  import { generateRandomName, generateRandomValue } from "./utils";

  import { createLiveQuery, createDerivedQuery } from "./lib/svelteLiveQuery";

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

  const clear = () => db.person.deleteMany()
  const change = () => db.person.findFirst().then(p => p && db.person.update({where:{id:p.id},data:{age:5}}) )

  let search = writable("");
  const query = electric.db.person.liveMany({orderBy:{name:'desc'}});
  const results = createDerivedQuery(notifier, writable(query));
  const der = derived([results, search], ([$results, $search]) =>
    $results?.filter((x) => x.name.includes($search)),
  );
</script>

<button on:click={add}>add</button>
<button on:click={clear}>clear</button>
<button on:click={change}>change</button>

<input bind:value={$search} type="text" placeholder="search"/>
{#if search}
  <div><small><italic>{$der ? $der.length : 0} results</italic></small></div>
{/if}
{#if $der}
  <div>
    {#each $der as r}
      <div>{r.name} {r.age}</div>
    {/each}
  </div>
{/if}

<style>
</style>
