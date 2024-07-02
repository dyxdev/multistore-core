<script lang="ts" setup>
import type { Button } from '#ui/types'

interface Props {
  defaultProps?: Partial<Button>
  title: string
  icon?:string
}

defineProps<Props>()
</script>

<template>
     <UButton
     :ui="{ rounded: 'rounded-full' }"
    icon="i-material-symbols-2d-outline-rounded"
    :label="title"
    size="sm"
    color="pink"
    variant="outline"
    :trailing="true"
  />
</template>

<style scoped>
    
</style>
