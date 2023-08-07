<template>
  <q-page padding>
    <div
      class="flex justify-center item-center q-mx-auto shadow-2 q-px-sm"
      style="border: 3px solid #755fd3de; max-width: 600px; height: 400px"
    >
      <div class="text-center">
        <h3>User Profile Demo</h3>
        <p>{{ user.greeting }}</p>
        <p>Uppercase Name: {{ user.uppercaseName }}</p>
        <p>Name: {{ user.user.name }}</p>
        <div class="input-wrapper">
          <q-input
            bottom-slots
            v-model="newName"
            label="Label"
            counter
            maxlength="35"
            filled
            dense
          >
            <template v-slot:before>
              <q-avatar size="35px">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>

            <template v-slot:append>
              <q-icon
                v-if="text !== ''"
                name="close"
                @click="text = ''"
                class="cursor-pointer"
              />
              <q-icon name="schedule" />
            </template>

            <template v-slot:hint> Change name </template>

            <template v-slot:after>
              <q-btn
                size="20px"
                @click="changeName"
                round
                dense
                flat
                icon="send"
              />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useUserStore } from "src/stores/user";
import { ref } from "vue";

const user = useUserStore();
const newName = ref("");
const text = ref("");
const changeName = () => {
  user.changeName(newName.value);
  newName.value = "";
};

</script>
