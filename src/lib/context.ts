import { getContext, setContext } from "svelte";

export let electric

const key = 'electric-default-context'

export function makeContext(e) {
    electric = e
    setContext(key,electric)
    return  () => getContext(key)
}