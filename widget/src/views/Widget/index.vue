<template>
  <teleport to="body">
    <component
      @open-box="handleOpenBox"
      @close-box="handleCloseBox"
      :is="state.component"></component>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import Box from './Box.vue'
import StandBy from './StandBy.vue'
import useIframeControl from '../../hooks/iframe'
import useStore from '../../hooks/store'

type State = {
  component: string;
}

interface SetupReturn {
  state: State;
  handleOpenBox(): void;
  handleCloseBox(): void;
}

export default defineComponent({
  components: {
    StandBy,
    Box
  },
  setup (): SetupReturn {
    const store = useStore()
    const iframe = useIframeControl()
    const state = reactive<State>({
      component: 'StandBy'
    })

    watch(() => store.currentComponent, () => {
      iframe.updateCoreValueOnStore()
    })

    function handleOpenBox (): void {
      iframe.notifyOpen()
      state.component = 'Box'
    }

    function handleCloseBox (): void {
      iframe.notifyClose()
      state.component = 'StandBy'
    }

    return {
      state,
      handleOpenBox,
      handleCloseBox
    }
  }
})
</script>
