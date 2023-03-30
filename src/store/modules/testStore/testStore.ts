
import { defineStore } from 'pinia';
import type { Count } from './types';
import type { StateField } from '@/types/global';
export interface TestStoreState {
  count: StateField<number>;
}

export const useTestStore = defineStore('testStore', {
  state: (): TestStoreState => ({
    count: {
      isLoading: false,
      data: 123,
      error: null,
    },
  }),
  actions: {
    increment() {
      this.count.data++;
    },
    increase(value: Count): void {
      this.count.data += value;
    }
  }
});