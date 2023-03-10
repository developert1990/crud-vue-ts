import { ref } from 'vue';
import type { Ref } from 'vue'

export const useCounter = (): {count: Ref<number>, increase: () => void, decrease: () => void} => {
    const count = ref<number>(0);

    const increase = () => {
        count.value++;
    }

    const decrease = () => {
        count.value--
    }
    return { count, increase, decrease }
}