<!-- An events calendar that pulls events from DynamoDB -->

<template>
    <div class="whole-component">
        <div id="schedule-header">
            <img
                src="../assets/img/images/Schedule.svg"
                alt=""
                class="schedule-icon"
            />
            <img class="schedule_mv" src="../assets/img/images/Schedule_mv.svg" alt="" />
        </div>
        <div id="schedule" class="section" :style="styles">
        <!-- FULL SCHEDULE -->
        <div class="schedule-container">
            <div class="dates">
            <button
                v-for="date in Object.keys(schedule)"
                :key="date"
                :class="date === selectedDay.day ? 'active' : 'fff'"
                @click="setDaySelection(date)"
            >
                {{
                new Date(parseInt(date)).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'long',
                    day: 'numeric',
                })
                }}
            </button>
            </div>
            <!-- this event list is implemented with a css grid
            each row is a 15 minute increment. the start and end times are parsed
            to determine a proper starting rows and row spans for the event elements-->
            <!-- because of how the times are centered, they don't cover everything on scroll 
            and hence need an additional element to act as the background cover over the event elements -->
            <span class="left-cover"></span>
            <div class="event-list-container">
            <div class="event-list" :style="{}">
                <span
                v-for="(_, idx) in selectedDay.times"
                :key="idx"
                class="bar"
                :style="{
                    // add top padding (1rem) and 2.1rem for each 15 minute interval
                    // subtract 1px to align bar in middle of grid row
                    top: `calc(1rem + ${idx * (60 / INTERVAL_M) * 2.1}rem - 1px)`,
                }"
                ></span>
                <div
                v-for="(time, idx) in selectedDay.times"
                :key="time"
                class="time-container"
                :style="{
                    gridRow: `${idx * (60 / INTERVAL_M) + 1} / span ${
                    60 / INTERVAL_M
                    }`,
                }"
                >
                <p>{{ time }}</p>
                </div>
                <div
                v-for="event in selectedDay.events"
                :key="event.id"
                :style="{
                    gridRow: `${event.startRow} / span ${event.rowSpan}`,
                }"
                class="event-container"
                :class="event.category"
                @click="
                    () => {
                    selectedEvent = event;
                    showEventModal = true;
                    }
                "
                >
                <div>
                    <p class="name">{{ event.event_name }}</p>
                    <!-- <p>
                    {{ formatAMPM(new Date(event.start_time)) }} -
                    {{ formatAMPM(new Date(event.end_time)) }}
                    </p> -->
                    <p>{{ event.location }}</p>
                </div>
                <!-- <span>{{ event.displayCategory }}</span> -->
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <ModalsContainer />
    <EventModal
      v-model="showEventModal"
      :event="selectedEvent"
      @close="() => closeEventModal()"
    />
  </template>
  
  <script setup lang="ts">
  import { ModalsContainer } from 'vue-final-modal';
  import type { Event } from '../types/event';
  
  // omit to replace string with number
  interface ParsedEvent extends Omit<Event, 'start_time' | 'end_time'> {
    start_time: number;
    end_time: number;
    roundedStart: number;
    roundedEnd: number;
    displayCategory: string;
  }
  
  type AllSchedules = {
    [key: string]: DaySchedule;
  };
  
  interface CalculatedEvent extends ParsedEvent {
    startRow: number;
    rowSpan: number;
    colSpan: number;
  }
  
  type DaySchedule = {
    events: CalculatedEvent[];
    concurrence: number;
  };
  
  interface SelectionData extends DaySchedule {
    times: string[];
    day: string;
  }
  
  // conversion values
  const MINUTES_TO_MS = 60000;
  const INTERVAL_M = 15;
  const INTERVAL_MS = INTERVAL_M * MINUTES_TO_MS;
  
  const dataLoaded = ref(false);
  const schedule = ref<AllSchedules>({});
  const selectedDay = ref<SelectionData>({} as SelectionData);
  const selectedEvent = ref<ParsedEvent>();
  const showEventModal = ref(false);
  
  onMounted(async () => {
    const rawEvents = await fetchRawEvents();
    const formattedEvents = mapEvents(rawEvents);
    schedule.value = formattedEvents;
    setDaySelection(Object.keys(formattedEvents)[0]);
    dataLoaded.value = true;
    console.log(
      schedule.value[Object.keys(schedule.value)[1]].events.map(
        (event) => event.event_name
      )
    );
  });
  
  /**
   *
   * @param day milliseconds since epoch as string
   */
  function setDaySelection(day: string) {
    const daySchedule = schedule.value[day];
  
    // get starting time of first event and ending time of last event
    const start = daySchedule.events[0].start_time;
    const end = daySchedule.events[daySchedule.events.length - 1].end_time;
    // find out how many 15 minute sections there are
    const elapsed = end - start;
    const sections = elapsed / (60 * MINUTES_TO_MS);
  
    // create array of times for those 15 minute sections
    const times = Array.from({ length: sections + 1 }, (_, i) => {
      const ms = start + i * (60 * MINUTES_TO_MS);
  
      const time = new Date(ms).toLocaleTimeString([], {
        hour: 'numeric',
        hour12: true,
      });
  
      return time;
    });
  
    console.log(day);
  
    selectedDay.value = { ...daySchedule, times, day };
  }
  
  /**
   * Fetch events from DynamoDB
   *
   * calculates a rounded start and end time for each event
   * formats category for display
   *
   * @returns list of events in sorted order by start time
   */
  async function fetchRawEvents(): Promise<ParsedEvent[]> {
    const eventsRes = await fetch('https://api.bit.camp/schedule');
    const events = (await eventsRes.json()) as Event[];
  
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  
    const parsedTimes = events.map((event) => {
      const parsedEvent = {
        ...event,
        start_time: new Date(event.start_time).getTime(),
        end_time: new Date(event.end_time).getTime(),
      } as ParsedEvent;
  
      const roundedStart =
        parsedEvent.start_time - (parsedEvent.start_time % INTERVAL_MS);
      const roundedEnd =
        parsedEvent.end_time - (parsedEvent.end_time % INTERVAL_MS);
  
      return {
        ...parsedEvent,
        roundedStart: roundedStart,
        roundedEnd: roundedEnd,
        displayCategory: event.category.split('-').map(capitalize).join(' '),
      };
    });
  
    return parsedTimes.sort((a, b) => {
      return a.start_time - b.start_time;
    });
  }
  
  /** Split raw events into days and calculate concurrence
   * as well as startRow and span for each event for grid layout
   *
   * @param events list of events in sorted order
   * @returns object with events split by day
   */
  function mapEvents(events: ParsedEvent[]): AllSchedules {
    interface BareDaySchedule
      extends Omit<DaySchedule, 'concurrence' | 'events'> {
      concurrence?: number;
      events: ParsedEvent[];
    }
    type BareAllSchedule = {
      [key: number]: BareDaySchedule;
    };
  
    console.log(events);
  
    // holds the number of events in each time window
    // map uses numbers instead of dates because of how JS handles Map keys (no hashing)
    const allTimeWindows = new Map<number, Map<number, number>>();
  
    const schedule = events.reduce((acc, event) => {
      // get day of event
      const date = new Date(event.start_time);
      date.setHours(0, 0, 0, 0);
      const dayTime = date.getTime();
  
      // get time windows for the day
      let timeWindows = allTimeWindows.get(dayTime);
      if (!timeWindows) {
        timeWindows = new Map();
        allTimeWindows.set(dayTime, timeWindows);
      }
  
      // iterate through entire event time window with 15 minute increments
      // and increment those times to show that an event will take up the space
      for (
        let timeWindow = event.roundedStart;
        timeWindow < event.roundedEnd;
        timeWindow += INTERVAL_MS
      ) {
        if (timeWindows.has(timeWindow)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          timeWindows.set(timeWindow, timeWindows.get(timeWindow)! + 1);
        } else {
          timeWindows.set(timeWindow, 1);
        }
      }
  
      const existingDate = acc[dayTime];
      if (existingDate) {
        const existingDayEvents = existingDate.events;
        existingDayEvents.push(event);
      } else {
        acc[dayTime] = { events: [event] };
      }
      return acc;
    }, {} as BareAllSchedule);
  
    // get max concurrence for each day
    for (const [dateTime, data] of Object.entries(schedule) as unknown as [
      number,
      BareDaySchedule
    ][]) {
      const timeWindows = allTimeWindows.get(dateTime);
      if (timeWindows) {
        data.concurrence = Math.max(...Array.from(timeWindows.values()));
      }
    }
  
    // get max concurrence for each day
    for (const [dateTime, data] of Object.entries(schedule) as unknown as [
      string,
      BareDaySchedule
    ][]) {
      const timeWindows = allTimeWindows.get(parseInt(dateTime));
  
      const concurrence = (data.concurrence = Math.max(
        ...Array.from(timeWindows?.values() ?? [])
      ));
  
      const firstEntry = timeWindows?.entries().next().value ?? 0;
  
      let dayStart = new Date(parseInt(firstEntry)).getTime();
      // round day start to nearest one hour interval
      dayStart = dayStart - (dayStart % (60 * MINUTES_TO_MS));
  
      (data.events as CalculatedEvent[]) = data.events.map(
        (event): CalculatedEvent => {
          let rowSpan = (event.end_time - event.start_time) / INTERVAL_MS;
          // if an event has the same start and end time, give it a rowSpan of 2 (30 min)
          if (rowSpan === 0) {
            rowSpan = 2;
          }
          // this one is optional, but if an event is only 15 minutes, give it a rowSpan of 2 (30 min)
          if (rowSpan < 2) {
            rowSpan = 2;
          }
  
          // timeWindows.
          return {
            ...event,
            colSpan: 1,
            startRow: (event.start_time - dayStart) / INTERVAL_MS + 1,
            rowSpan: rowSpan,
          };
        }
      );
    }
  
    return schedule as AllSchedules;
  }
  
  function formatAMPM(date: Date) {
    // Convert to AM/PM local time
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
  
  function closeEventModal() {
    showEventModal.value = false;
  }
  </script>
  
  <script lang="ts">
  export default {
    name: 'SchedulePage',
    props: {
      styles: {
        type: String,
        required: false,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import 'bootstrap/dist/css/bootstrap.css';
  @import '../assets/css/schedule.scss';

  .whole-component {
    background: linear-gradient(
        to bottom,
        #31055A 0%,
        #2B0542 8%,
        #570101 100%
    );
  }

  #schedule-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .schedule-icon {
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }
  .schedule_mv {
    display: none;
}


@media screen and (min-width: 850px) {

    .schedule-icon {
        display: none;
    }

    .schedule_mv {
        margin: auto;
        display: block;
        width: 90rem;
        height: auto;
    }
}

@media screen and (min-width: 656px) and (max-width: 849px) {

    .schedule-icon {
        display: none;
    }

    .schedule_mv {
        margin: auto;
        display: block;
        width: 70rem;
        height: auto;
    }
}

@media screen and (max-width: 655px) {
    .schedule-icon {
        display: none;
    }

    .schedule_mv {
        margin: auto;
        display: block;
        width: 45rem;
        height: auto;
    }
}

  #schedule {
    
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      opacity: 0.8;
    }
  
    /* Track */
    ::-webkit-scrollbar-track {
      background: rgba(241, 241, 241, 0.557);
    }
  
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ffffffb3;
      border-radius: 999px;
    }
  
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #ffff;
    }
  
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 150rem;
    margin: 0 auto;
  
    // remove default padding and margin
    * {
      padding: 0;
      margin: 0;
    }
  
    padding: 2.5rem;
  
    .schedule-container {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      height: 100%;
      display: flex;
      flex-direction: column;
  
      &::after {
        content: '';
        position: absolute;
        top: 4.8rem;
        right: 0;
        left: 0;
        width: 100%;
        height: 15px;
        z-index: 2;
      }
    }
  
    .schedule-icon {
      width: 30rem;
      margin: 0 auto -2rem auto;
      display: block;
      position: relative;
      z-index: 4;
  
      @media screen and (max-width: 767.8px) {
        width: 18rem;
        margin-bottom: 1rem;
      }
    }
  
    .event-list-container {
      background: #A5502E;
      position: relative;
      overflow-x: auto;
      overflow-y: auto;
      height: 100%;
      padding-bottom: 3rem;
      @media screen and (max-width: 1024px) {
        height: 80%;
        border-radius: 10px;
        padding-bottom: 1rem;
      }
    }
  
    .left-cover {
      position: absolute;
      background: #A5502E;
      border-right: 2px solid white;
      width: 9rem;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      z-index: 2;
  
      box-shadow: 0 0 1rem 0.5rem rgba(66, 56, 16, 0.1);
  
      @media screen and (max-width: 1024px) {
        width: 9rem;
        height: 85%;
      }
    }
    .event-list {
      padding-top: 1rem;
      display: grid;
      grid-template-columns: [time] 10rem repeat(auto-fit, minmax(15rem, 1fr));
      column-gap: 0.2rem;
      position: relative;
      // change grid-row height with the white hour-line bar layout
      grid-auto-rows: 2.1rem;
      min-width: 100%;
      width: fit-content;
  
      padding-right: 1rem;
  
      @media screen and (max-width: 767.8px) {
        grid-template-columns: [time] 10rem repeat(auto-fit, minmax(8rem, 1fr));
      }
  
      .bar {
        position: absolute;
        background: white;
        height: 2px;
        width: 100%;
        z-index: 0;
      }
      .time-container {
        position: sticky;
        left: 0.5rem;
        grid-column: time;
        font-family: 'Aleo';
        z-index: 2;
  
        p {
          max-width: 8rem;
          width: 100%;
          padding: 0 1rem 0 1rem;
          position: absolute;
          top: 0;
          transform: translateY(-50%);
          text-align: center;
        }
      }
      .event-container {
        font-size: 1.8rem;
        min-width: 15rem;
        border-radius: 10px;
        padding: 0.75rem;
        margin: 0.15rem;
        overflow: hidden;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
  
        cursor: pointer;
  
        @media screen and (max-width: 767.8px) {
          padding: 0.5rem;
          min-width: 8rem;
        }
  
        p {
          margin-bottom: 0.2rem;
        }
  
        span {
          background: hsla(0, 0%, 0%, 0.25);
          padding: 0.4rem 0.8rem;
          border-radius: 10px;
          flex-grow: 0;
        }
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
  
          font-family: 'Aleo';
          font-weight: bold;
        }
      }
  
      .main-event {
        background-color: $COLOR_MAIN_EVENT;
      }
  
      .workshop-event {
        background-color: $COLOR_WORKSHOP;
        border-color: $COLOR_WORKSHOP_BORDER;
      }
  
      .mini-event {
        background-color: $COLOR_MINI_EVENT;
        border-color: $COLOR_MINI_EVENT_BORDER;
      }
  
      .sponsor-event {
        background-color: $COLOR_SPONSOR;
        border-color: $COLOR_SPONSOR_BORDER;
      }
  
      .food-event {
        background-color: $COLOR_FOOD;
        border-color: $COLOR_FOOD_BORDER;
      }
    }
  
    .dates {
      background: #EBDEBE;
      font-family: 'Aleo';
      display: flex;
      justify-content: stretch;
      position: sticky;
      z-index: 3;
      left: 0;
      top: 0;
  
      @media screen and (max-width: 767.8px) {
        background: none;
      }
  
      button {
        background: none;
        border: none;
        cursor: pointer;
        color: #B94923;
        font-weight: bold;
        padding: 2rem;
        height: 100%;
        width: 100%;
        transition: background 0.1s;
        &.active {
          text-decoration: underline;
          text-decoration-thickness: 0.2rem;
          text-underline-offset: 0.2rem;
  
          @media screen and (max-width: 767.8px) {
            background: #B94923;
            color: #EBDEBE;
          }
        }
  
        &:hover {
          background: #B94923;
          color: #EBDEBE;
        }
  
        @media screen and (max-width: 767.8px) {
          background: #EBDEBE;
          color: #B94923;
          border-radius: 10px 10px 0 0;
          padding: 1rem;
          padding-top: 1.5rem;
        }
      }
    }
  }
  </style>