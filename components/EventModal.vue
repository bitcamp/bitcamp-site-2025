<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import dayjs from 'dayjs';
import type { CalculatedEvent } from '../types/event';

defineProps<{
  modelValue: boolean;
  selectedEvent?: CalculatedEvent;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'close'): void;
}>();

function formatCategory(category: string | undefined) {
  if (!category) return '';
  return category
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function formatTime(startTimeMs?: number, endTimeMs?: number) {
  if (!startTimeMs || !endTimeMs) return '';
  return `${dayjs(startTimeMs).format('dddd')}, ${dayjs(startTimeMs).format(
    'h:mm A'
  )} - ${dayjs(endTimeMs).format('h:mm A')}`;
}

function closeModal() {
  emit('update:modelValue', false);
  emit('close');
}
</script>

<template>
  <VueFinalModal
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    class="modal"
    :content-class="'modal-content ' + selectedEvent?.type"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal-header">
      <h1 class="event-title">{{ selectedEvent?.title }}</h1>
      <button class="close-modal-button" @click="closeModal">×</button>
    </div>
    <div class="modal-body">
      <p class="event-category">{{ formatCategory(selectedEvent?.type) }}</p>
      <div>
        <p class="event-time">
          {{ formatTime(selectedEvent?.startTimeMs, selectedEvent?.endTimeMs) }}
        </p>
        <p class="event-location">{{ selectedEvent?.location }}</p>
      </div>
      <p class="event-description">{{ selectedEvent?.description }}</p>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
@import '../assets/css/schedule.scss';

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-style: solid;
  border-radius: 0.5rem;
  border-width: 0.25rem;
  box-shadow: 0.3rem 0.3rem 0.7rem rgba(black, 0.5);
  width: 50rem;
  max-width: 90vw;
  margin: 0;
  position: relative;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.8);

  &.main-event {
    background-color: $COLOR_MAIN_EVENT;
    border-color: $COLOR_MAIN_EVENT_BORDER;
  }
  &.workshop-event {
    background-color: $COLOR_WORKSHOP;
    border-color: $COLOR_WORKSHOP_BORDER;
  }
  &.mini-event {
    background-color: $COLOR_MINI_EVENT;
    border-color: $COLOR_MINI_EVENT_BORDER;
  }
  &.sponsor-event {
    background-color: $COLOR_SPONSOR;
    border-color: $COLOR_SPONSOR_BORDER;
  }
  &.food-event {
    background-color: $COLOR_FOOD;
    border-color: $COLOR_FOOD_BORDER;
  }
}
.modal-content > * + * {
  margin: 0.5rem 0;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.close-modal-button {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
}
.event-title {
  flex: 1;
  margin: 0;
}
.event-category {
  font-size: 1.9rem;
  color: rgba(white, 0.9);
  margin-top: -0.25rem;
  margin-bottom: 1rem;
}
.event-time {
  font-size: 1.5rem;
  color: rgba(white, 0.75);
  margin-bottom: 0.25rem;
}
.event-location {
  font-size: 1.5rem;
  color: rgba(white, 0.75);
}
.event-description {
  margin-top: 1rem;
  font-size: 1.8rem;
  white-space: pre-wrap;
}
</style>
