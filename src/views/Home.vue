<template>
  <ToContainer>
    <ToHeader />
    <div class="home">
      <div class="comment">“双击新增计划”</div>
      <div class="comment">“拖动计划，可重新分组”</div>
      <div class="title">#Date 10/29</div>
    </div>
  </ToContainer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToContainer from '@/components/ToContainer.vue';
import ToHeader from '@/components/ToHeader.vue';

@Options({
  components: { ToHeader, ToContainer },
})
export default class Home extends Vue {
  name = 123;
}
</script>
<style scoped>
.home {
  padding: 1vw;
}
.comment {
  padding-left: 20px;
  font-size: 14px;
}
.title {
  position: relative;
  background-color: #ddd;
  padding: 10px;
  padding-left: 20px;
  margin-top: 10px;
  border-radius: 3px;
  color: #333;
}
.title:before {
  position: absolute;
  content: ' ';
  border-left: 2px dashed #fff;
  height: 25px;
  width: 10px;
  left: 10px;
  top: 9px;
}
</style>
