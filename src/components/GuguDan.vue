<script setup>
import { ref, computed } from "vue";

defineProps({});

const createDanArray = () => {
  return Array.from({ length: 19 }, (_, index) => index + 1);
};
const createFactorArray = () => {
  return Array.from({ length: 19 }, (_, index) => index + 1);
};

const danArray = ref(createDanArray());
const selectedDan = ref(1);
const chosenNumber = ref();
const findOptionState = ref(false);

const createResultObjects = () => {
  const objects = Array();
  const factorArray = createFactorArray();

  factorArray.forEach((factor) => {
    objects.push({
      key: selectedDan.value + "*" + factor,
      dan: selectedDan.value,
      factor: factor,
      result: selectedDan.value * factor,
    });
  });

  if (chosenNumber.value) {
    switch (findOptionState.value) {
      case true:
        return objects.filter((obj) => obj["result"] === chosenNumber.value);

      case false:
        return objects.filter((obj) =>
          obj["result"].toString().includes(chosenNumber.value.toString())
        );
    }
  }

  return objects;
};

const findOptionStateMsg = computed(() => (findOptionState.value ? '정확히 일치하는 숫자 찾기' : '포함되어있는 숫자 찾기'))
const resultObject = computed(createResultObjects);
</script>

<template>
  <div class="divWidth100">
    <select v-model="selectedDan">
      <option v-for="dan in danArray" :key="dan" :value="dan">
        {{ dan }} 단
      </option>
    </select>
  </div>
  <div>
    <label for="findingValue">숫자</label>
    <input type="number" id="findingValue" v-model="chosenNumber" placeholder="를 입력 해주세요"/>
  </div>
  <div>
    <input
      type="checkbox"
      id="findOptionState"
      v-model="findOptionState"
    />
    <label for="findOptionState">{{ findOptionStateMsg }}</label>
  </div>
  <div>
    <ul>
      <li v-for="obj in resultObject" :key="obj.key">
        {{ obj.dan }} * {{ obj.factor }} = {{ obj.result }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
