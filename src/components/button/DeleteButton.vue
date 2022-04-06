<template>
  <el-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    :icon="InfoFilled"
    icon-color="red"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <el-button size="small" type="danger">Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script  lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
import { defineComponent } from '@vue/runtime-dom'
export default defineComponent({
  name: "deleteButton",
  components: {},
  setup(props, { emit }) {
    const confirmEvent = () => {
      emit('confirmEvent')
      console.log('confirm!')
    }
    const cancelEvent = () => {
      console.log('cancel!')
    }
    return {
      InfoFilled, cancelEvent, confirmEvent
    }
  }
})
</script>