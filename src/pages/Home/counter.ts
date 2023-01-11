import { createSignal, createMemo, createRoot } from "solid-js";

const createCounter = () => {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const clear = () => setCount(0);
  const doubleCount = createMemo(() => count() * 2);

  return { count, doubleCount, increment, clear };
}

export default createRoot(createCounter);
