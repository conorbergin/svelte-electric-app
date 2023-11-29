import { readable } from "svelte/store";
import { hasIntersection } from "electric-sql/util";

import { electric } from "./context";

export const createLiveQuery = (query) => {
  return readable(undefined, (set) => {
    let tablenames;
    let key;
    query().then((r) => {
      console.log('start)')
      set(r.result);
      tablenames = r.tablenames;
      key = electric.notifier.subscribeToDataChanges((notification) => {
        const changedTablenames = electric.notifier.alias(notification);
        if (hasIntersection(tablenames, changedTablenames)) {
          query().then((r) => set(r.result));
        }
      });
    });
    return function stop() {
      console.log("stop");
      if (key) {
        electric.notifier.unsubscribeFromDataChanges(key);
        console.log("unsubscribe");
      }
    };
  });
}