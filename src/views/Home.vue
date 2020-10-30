<template>
  <ToContainer class="container">
    <ToHeader />
    <div class="home">
      <div class="comment">“双击新增计划”</div>
      <div class="comment">“拖动计划，可重新分组”</div>
      <div class="title df ac">
        <span class="name">紧急危机任务</span>
        <div class="date df">
          <div class="item month">
            <div class="value">34</div>
            <div class="key">MONTH</div>
          </div>
          <div class="item day">
            <div class="value">34</div>
            <div class="key">DAYS</div>
          </div>
        </div>
      </div>
      <ul class="items">
        <li class="item df ac">
          <span>1.</span>
          <div class="f1 text">asd</div>
        </li>
        <li class="item df ac">
          <span>2.</span>
          <div class="f1 text">asd</div>
        </li>
        <li class="item df ac">
          <span>3.</span>
          <div class="f1 text">asd</div>
        </li>
      </ul>
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
.container {
  background: linear-gradient(#ccc, #fff);
}
.home {
  padding: 1vw;
}
.comment {
  padding-left: 20px;
  font-size: 14px;
}
.title {
  position: relative;
  background-color: #333;
  box-shadow: 1px 1px 3px #888;
  height: 40px;
  padding-left: 20px;
  margin-top: 10px;
  border-radius: 3px;
  color: #fff;
}
.name {
  position: absolute;
  height: 40px;
  background-color: #7c0403;
  display: flex;
  align-items: center;
  width: 150px;
  left: 0;
  border-radius: 3px;
  padding-left: 20px;
}
.title .date {
  position: absolute;
  right: 10px;
  top: -25px;
}
.title .date .value {
  position: absolute;
  font-size: 25px;
  background-color: #7c0403;
  padding: 5px 0;
  width: 69px;
  border-radius: 3px;
  text-align: center;
  box-shadow: 2px 2px 2px #000;
}
.title .date .key {
  background-color: #444;
  font-size: 12px;
  border-radius: 2px;
  box-shadow: 0 2px 8px #000;
  padding: 0 12px;
  padding-top: 3px;
  width: 45px;
  text-align: center;
  margin-top: 42px;
}
.title .date .month {
  margin-right: 5px;
}
.title .date .day .value {
  background-color: #fff;
  color: #000;
}
.items {
  padding: 0;
}
.items .item {
  padding: 0;
  list-style: none;
  margin-bottom: 12px;
  margin-right: 30px;
  padding-left: 20px;
}
.item > span {
  margin-right: 10px;
}
.item > .text {
  background-color: #ddd;
  padding: 10px;
  border-radius: 5px;
  color: #333;
}
</style>
