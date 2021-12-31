<template>
  <span
    :class="`bg-${classColor}`"
    class="p-2 text-xs font-black text-white uppercase rounded-full"
  >
    {{ label }}
  </span>

</template>

<script>
import { computed } from 'vue'

const BADGES = {
  ISSUE: {
    label: 'problema',
    classColor: 'brand-danger'
  },
  IDEA: {
    label: 'ideia',
    classColor: 'brand-warning'
  },
  default: {
    label: 'outros',
    classColor: 'brand-graydark'
  }
}
export default {
  props: {
    type: { type: String, required: true }
  },
  setup (props) {
    const label = computed(() => BADGES[props.type]
      ? BADGES[props.type].label
      : BADGES.default.label
    )
    const classColor = computed(() => BADGES[props.type]
      ? BADGES[props.type].classColor
      : BADGES.default.classColor
    )
    return { label, classColor }
  }
}
</script>
