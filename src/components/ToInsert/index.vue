<template>
  <div class="to-insert">
    <div class="content">
      <div class="shadow"></div>
      <div class="name df ac">
        <input v-model="name" class="f1" type="text" placeholder="name" />
      </div>
      <div class="text df ac">
        <input v-model="text" class="f1" type="text" placeholder="text" />
      </div>
      <div class="date df ac">
        <div class="df ac">
          <span>Mon/Day:</span>
          <input v-model="date" type="number" />
        </div>
        <div class="df ac">
          <span>Hours:</span>
          <input v-model="hours" type="number" />
        </div>
      </div>
      <div class="type">
        <span :class="type === 'date' ? 'select' : ''" @click="type = 'date'">
          日期
        </span>
        <span :class="type === 'normal' ? 'select' : ''" @click="type = 'normal'">
          一般
        </span>
        <span :class="type === 'important' ? 'select' : ''" @click="type = 'important'">
          紧急
        </span>
      </div>
      <div class="submit" @click="submit"><span>新建任务</span></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  emits: ['insert'],
})
export default class Insert extends Vue {
  name = ''
  text = ''
  date = ''
  hours = ''
  type = 'date'
  submit() {
    this.$emit('insert', {
      name: this.name,
      text: this.text,
      date: this.date,
      hours: this.hours,
      type: this.type,
    })
  }
}
</script>
<style scoped>
.to-insert .shadow,
.to-insert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.to-insert .shadow {
  background-color: #000;
  opacity: 0.5;
}
input {
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
  outline: none;
  border: 0;
  font-size: 16px;
  background-color: #ddd;
}
.name,
.text,
.date,
.type,
.submit {
  width: 82vw;
  position: absolute;
  background: linear-gradient(to right, #7c0403, #333);
  box-shadow: 2px 2px 4px #888;
  padding: 6px;
  border-radius: 5px;
}
.name > input,
.text > input {
  color: #333;
  background-color: #ddd;
  box-shadow: 2px 2px 4px #ccc inset;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 0;
}
.date > div {
  color: #ddd;
  padding: 5px;
}
.date input {
  width: 50px;
}
.name {
  left: 25px;
  top: 19vh;
}
.text {
  left: 25px;
  top: 27vh;
}
.date {
  left: 25px;
  top: 35vh;
}
.type {
  left: 25px;
  top: 48vh;
  background: #ddd;
}
.type span {
  display: inline-block;
  padding: 5px 11px;
  margin-right: 10px;
  border-radius: 5px;
}
.type span.select {
  background-color: #333;
  color: #fff;
  box-shadow: 2px 2px 2px #888;
}
.submit {
  left: 25px;
  top: 56vh;
  padding: 11px 6px;
  color: #ddd;
  text-align: center;
}
</style>
