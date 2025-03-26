<template>
  <div id="faq" class="section">
    <div class="top-cliffs-div">
      <img src="../assets/img/faq/faq_top_cliffs.png" class="top-cliffs" />
    </div>
    <!-- <img src="../assets/img/faq/lava_better (2).png" class="faq-background " alt="faq image" /> -->
    <div class="content-wrapper">
      <div class="faq-header">
        <div class="faq-rock-div">
          <img src="../assets/img/faq/faq_rock.svg" class="faq-rock-main" />
          <div class="faq-rock-shadow-div">
            <img src="../assets/img/faq/faq_rock_shadow.svg" class="faq-rock-shadow" />
          </div>
          <div class="faq-text-div">
            <img src="../assets/img/faq/faq_text.svg" class="faq-text" />
          </div>
        </div>
      </div>
      <div class="faq-contents">
        <div class="Question_Wrapper">
          <div v-for="(questions, i) in [questions_left, questions_right]" :key="i" class="Question_Column">
            <div v-for="(faq, i) in questions" :key="i" class="Question" :faq="faq">
              <button class="Question_Button" :class="{ opened: faq.question === currentOpenedQuestion }"
                @click="toggleButton(faq.question)">
                {{ faq.question }}
              </button>
              <div :class="faq.question === currentOpenedQuestion
                ? 'Answer_Opened'
                : 'Answer'
                " v-html="faq.answer"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="sponsors" class="sponsor-header">
        <div class="sponsor-rock-div">
          <img src="../assets/img/faq/sponsor_rock.svg" class="sponsor-rock-main" />
          <div class="sponsor-rock-shadow-div">
            <img src="../assets/img/faq/sponsor_rock_shadow.svg" class="sponsor-rock-shadow" />
          </div>
          <div class="sponsor-text-div">
            <img src="../assets/img/faq/sponsor_text.svg" class="sponsor-text" />
          </div>
        </div>
      </div>
      <div class="sponsor-logo-container">
        <div class="sponsor-square">
          <template v-for="sponsor in sponsors" :key="sponsor.name">
            <SponsorCard :name="sponsor.name" :url="sponsor.url" />
          </template>
        </div>
      </div>
    </div>
    <div class="bottom-cliffs-div">
      <img src="../assets/img/faq/faq_bottom_rocks.png" class="bottom-cliffs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface FAQ {
  question: string;
  answer: string;
}
const questions = ref<FAQ[]>([
  {
    question: 'What is Bitcamp?',
    answer:
      "Bitcamp is a hackathon that values participant experience and mentorship over competitiveness and points. Come to have fun with your friends, learn something new, eat s'mores, and have a generally awesome time. We have all sorts of crazy activities planned for you...come find out the rest!",
  },
  {
    question: "What's a hackathon?",
    answer:
      "A hackathon is a creative marathon all about building something cool. Students are encouraged to come up with an idea, form teams, and then build out that idea (typically through programming!) into a product in 36 hours. We want you to take something you love (sports, art, camping, anything!) and combine it with technology to make something awesome. It's a great time to push the envelope and learn some new skills.",
  },
  {
    question: 'Do I have to be experienced to attend?',
    answer:
      'No prior experience is required to attend Bitcamp. Exciting workshops and helpful mentors will give you the resources to help you build your dream project. Just come with your head and a willingness to learn!',
  },
  {
    question: "Is it okay if I don't have an idea or team?",
    answer:
      'No idea? No team? No problem! There will be dedicated events during Bitcamp for idea creation and team formations.',
  },
  {
    question: "Can I attend if I'm a minor (under 18)?",
    answer:
      'Yes! Minors can attend with a chaperone, and can apply <a class="link" href="https://register.bit.camp" target="_blank">here</a>!',
  },
  {
    question: "Can I attend if I don't want to participate in hacking?",
    answer:
      "Although Bitcamp is a hackathon, there is no requirement to hack if you don't want to. If hacking isn't your thing, you can still participate in our exciting workshops and fun mini-events.",
  },
  {
    question: 'How else can I get involved?',
    answer:
      "We'd love to get you on our volunteering or mentoring teams! If you'd like to help, please register as a <a class='link' href='https://register.bit.camp/mentor' target='_blank'>mentor</a> or <a class='link' href='https://register.bit.camp/volunteer' target='_blank'>volunteer</a>. Also, be sure to follow us on Facebook and Twitter for updates!",
  },
  {
    question: 'How do I join a team?',
    answer:
      "Projects are submitted by teams to DevPost. You don't need to finalize your team until project submissions are due during the event. You may work individually or in a team of up to four campers. Don't have a team in mind? No problem! Bitcamp will kick off with an optional team formation event.",
  },
  {
    question: 'How competitive is the application process?',
    answer:
      'It’s not competitive at all! The application process primarily serves as a way for us to verify application details as they come in. Unless you receive any contact from us (other than the confirmation email), we’ll see you by the campfire!',
  },
  {
    question: 'Who can apply to Bitcamp?',
    answer:
      'Any college student, high school student, or middle school student is more than welcome to apply to Bitcamp!',
  },
  {
    question: 'Is Bitcamp free to attend?',
    answer: 'Yes! There is no cost to attend Bitcamp.',
  },
  {
    question: 'Can people not registered for Bitcamp attend?',
    answer:
      'People not registered for Bitcamp will not be allowed entrance to the hackathon.',
  },
  {
    question: 'What have people made in the past at Bitcamp?',
    answer:
      'From Augmented Reality Human-Scale Pong to a research paper detailing vulnerabilities in Google\'s reCaptcha system, the projects at Bitcamp span across all categories and interests. You can check out all of the amazing submissions at the <a class="link" href="https://bitcamp2024.devpost.com/project-gallery"> Bitcamp 2024 Devpost!</a>', //ADD LINK
  },
  {
    question: 'What hardware is provided at Bitcamp?',
    answer:
      'Arduinos, sensors (ultrasonic, photoresistors, thermistors), inputs (buttons, switches), outputs (LEDs, piezo speakers, 7-segment displays, micro servo motors), passive components (resistors, capacitors, diodes), and wiring.',
  },
  {
    question: "Does Bitcamp provide travel accomodations or reimbursement?",
    answer: "Due to an unforeseen amount of applications and a limited budget, we unfortunately have closed our reimbursement application process from further interest. However, we will be evaluating reimbursement requests on a case-by-case basis during the weekend of Bitcamp.",
  },
  {
    question: 'Do I need to wear a mask?',
    answer:
      'No, attendees are not required to wear a mask. However, feel free to wear a mask if you would like!',
  },
]);
const questions_left = questions.value.slice(0, questions.value.length / 2);
const questions_right = questions.value.slice(
  questions.value.length / 2,
  questions.value.length
);
const currentOpenedQuestion = ref<string | null>(null);
function toggleButton(question: string) {
  if (currentOpenedQuestion.value === question) {
    currentOpenedQuestion.value = null;
  } else {
    currentOpenedQuestion.value = question;
  }
}

const sponsors: Sponsor[] = [
    {
      name: "SGA",
      amount: 55_000,
      url: "https://www.umdsga.com/"
    },
    {
      name: "UMD CS",
      amount: 40_000,
      url: "https://www.cs.umd.edu/"
    },
    {
      name: "Peraton",
      amount: 7000,
      url: "https://www.peraton.com/"
    },
    {
      name: "Bloomberg",
      amount: 7000,
      url: "https://www.bloomberg.com/"
    },
    {
      name: "Cipher Tech",
      amount: 6450,
      url: "https://www.ciphertechsolutions.com/"
    },
    {
      name: "Capital One",
      amount: 6000,
      url: "https://www.capitalone.com/"
    },
    {
      name: "UMD Clark School",
      amount: 5000,
      url: "https://www.eng.umd.edu/"
    },
    {
      name: "Intuit",
      amount: 5000,
      url: "https://www.intuit.com/"
    },
    {
      name: "Cloudforce",
      amount: 5000,
      url: "https://gocloudforce.com/about-us/"
    },
    {
      name: "Microsoft",
      amount: 5000,
      url: "https://www.microsoft.com/en-us/"
    },
    {
      name: "FM Global",
      amount: 3000,
      url: "https://www.fm.com/"
    },
    {
      name: "JHU APL",
      amount: 3000,
      url: "https://www.jhuapl.edu/"
    },
    {
      name: "355 Code",
      amount: 3000,
      url: "https://www.355code.com/"
    },
    {
      name: "Dingman Center",
      amount: 2000,
      url: "https://www.rhsmith.umd.edu/centers-initiatives/dingman-lamone-center"
    },
    {
      name: "IonQ",
      amount: 2000,
      url: "https://www.ionq.com/"
    },
    {
      name: "Sustainability",
      amount: 1505,
      url: "https://sustainability.umd.edu/sustainability-grants/umd-sustainability-fund-grant"
    },
    {
      name: "ACES",
      amount: 1000,
      url: "https://www.aces.umd.edu/"
    },
    {
      name: "UMD Smith School",
      amount: 1000,
      url: "https://www.rhsmith.umd.edu.com/"
    },
    {
      name: "Pepsi",
      amount: 500,
      url: "https://stamp.umd.edu/pepsi_enhancement_fund"
    },
    {
      name: "Do Good",
      amount: 500,
      url: "https://www.dogood.umd.edu"
    },
  ]
</script>

<style scoped lang="scss">
.section {
  flex-shrink: 0;
  position: relative;
}

.top-cliffs {
  width: 100%;
  height: 100%;
  margin-bottom: -10px;
  ;
}

.bottom-cliffs {
  width: 100%;
  height: 100%;
  margin-bottom: -10px;
  margin-top: -1px;
}

.content-wrapper {
  background-image: url("assets/img/faq/faq_lava.png");
  background-size: 100% 100%;
  border-top: 1px solid #000;
  // idk why corder-top fixes the gradient continuity but it does
  // width: 100%;
  // height: 100%;
  // margin-top: -142.75623%;
}

.faq-rock-div {
  position: relative;
  // width: 528px;
  // height: 176px;
  width: 36.5%;
  flex-shrink: 0;
  margin-top: -30%;
  margin-left: 28.53185%;

}

.faq-rock-main {
  fill: #560001;
}

.faq-rock-shadow-div {
  position: absolute;
  // width: 399px;
  width: 75.56818%;
  // height: 60.5px;
  height: 34.375%;
  flex-shrink: 0;
  margin-top: -18%;
  margin-left: 13.2574%;
}

.faq-rock-shadow {
  fill: #8B2000;
}

.faq-text-div {
  width: 42.8030303%;
  margin-top: -28%;
  margin-left: 40.90909%;
  z-index: 2;
  position: relative;
}

.sponsor-rock-div {
  position: relative;
  // width: 528px;
  // height: 176px;
  width: 57.409972299%;
  flex-shrink: 0;
  margin-top: -1%;
  margin-left: 20.637119113%;

}

.faq-background {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 0;
  object-fit: cover;
}


.sponsor-rock-main {
  // opacity: .5;
  fill: #8B2000;
}

.sponsor-rock-shadow-div {
  position: absolute;
  // width: 399px;
  width: 99.5%;
  // height: 60.5px;
  height: 73.076923%;
  flex-shrink: 0;


  @media (max-width: 767.8px) {
    margin-top: -29.5%;
    margin-left: 0.2309638%;
  }

  @media (min-width: 768px) and (max-width: 959.8px) {
    margin-top: -29%;
    margin-left: 0.2309638%;
  }

  @media (min-width: 960px) and (max-width: 1199.98px) {
    margin-top: -28.5%;
    margin-left: 0.2309638%;
  }

  @media (min-width: 1200px) {
    margin-top: -28%;
    margin-left: 0.2309638%;
  }
}

.sponsor-logo-container {
  display: grid;
  margin: auto;
}

.sponsor-square {
  background-color: #FFDB8E;
  border-color: #FE4600;
  border-style: solid;
  border-width: 17px;
  border-radius: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
  gap: 20px; /* Adjust the space between grid items */
  padding: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  // align-content: center;
}

.sponsor-rock-shadow {
  fill: #560001;
}

.sponsor-rock-main {
  fill: #8B2000;
}



@media only screen and (min-width: 992px) {
  .sponsor-container {
    & > * {
      /* Dealing with 2 items in last row */
      &:last-child:nth-child(3n - 1) {
        grid-column-end: 6;
      }

      &:nth-last-child(2):nth-child(3n - 2) {
        grid-column-end: 4;
      }

      /* Dealing with 1 item in last row */
      &:last-child:nth-child(3n - 2) {
        grid-column-end: 5;
      }
    }
  }

  .sponsor-image {
    width: 35vw;
    max-width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 850px) and (max-width: 992px) {
  .sponsor-image {
    width: 50vw;
    left: 20%;
    max-width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 850px) {
  .sponsor-image {
    width: 48vw;
    left: 15%;
    max-width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 992px) {
  .sponsor-container {
    grid-template-columns: repeat(4, 1fr);

    /* Dealing with 1 item in last row */
    & > *:last-child:nth-child(2n - 1) {
      grid-column-end: 4;
    }
  }
}

@media only screen and (max-width: 576px) {
  .sponsor-container {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .sponsor-image {
    width: 70vw;
    max-width: 100%;
    left: 8%;
    margin-bottom: 20px;
  }
}

.call-to-action {
  display: block;
  text-align: center;
  font-size: 1.125rem;
  padding-top: 2rem;

  & a {
    color: var(--color-bitcamp);
    text-decoration: none;
  }
}

.sponsor-rock-shadow-div {
  position: absolute;
  width: 99.5%;
  height: 73.076923%;
  flex-shrink: 0;
}

.sponsor-text-div {
  position: absolute;
  width: 67.395657418%;
  margin-top: -21%;
  margin-left: 21.95416164%;
  z-index: 2;
}

.sponsor-header img {
  width: 100%;
  height: auto;
}

.faq-contents {
  position: relative;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  border-radius: 15px;
  padding: 3vw;
  overflow-y: visible;
  aspect-ratio: 10;
  background-size: cover !important;
  // margin: 20px;
  box-shadow: 0, 0, 20px, 0 rgba(24, 22, 81, 0.2);
  z-index: 10;
  text-align: center;
  // background-color: #5eb8ba;
  // background-color: #ABD2D3;
  // background-color: #354C4D;
  // background-color: #3D6982;
  // background-color: #256871;
  background-color: #E23E00;
  backdrop-filter: blur(35px);
  // margin: 8vw;
  margin-left: 11vw;
  margin-right: 11vw;
  margin-bottom: 0;
}

.faq-header img {
  width: 100%;
  height: auto;
}

.Question_Wrapper {
  display: flex;
  flex-wrap: wrap;
}

.Question_Column {
  flex: 1;
}

.Question {
  display: block;
  padding-bottom: 2px;
  padding-left: 10px;
  // padding-right: -30px;
  border-radius: 12px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  color: white;
  width: 96%;
  background-color: transparent;
  border-bottom-style: solid rgba(151, 29, 29, 0.2);

  overflow: hidden;
}

.Question_Button {
  &::after {
    content: url(../assets/img/icons/plus.svg);
    min-width: 3rem;
    min-height: 3rem;
    max-width: 10rem;
    max-height: 10rem;
    //   width: 4rem;
    //   height: 4rem;
    margin-top: 1rem;
    margin-right: 1rem;
    align-items: end;
    transform-origin: center;
    transform: rotateZ(0deg);
    transition: all 0.4s ease-out;
  }

  &.opened {
    &::after {
      transform-origin: center;
      transform: rotateZ(90deg);
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 1rem;
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  border-bottom: 2px solid white;
  background: transparent;
  padding: 8px 12px;
  border-radius: 0px;
  text-emphasis: bold;
  text-align: left;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6vw;
  line-height: 1.3;
  font-weight: bold;
  color: white;
  overflow: hidden;
  height: 6vw;
  width: 100%;
  padding: 3rem 12px 2.8rem;
  cursor: pointer;
}

.Answer {
  padding: 0px 12px;
  text-align: left;
  font-size: 1.4vw;
  justify-content: top;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.6s ease-in-out;
}

.Answer_Opened {
  padding: 0px 12px;
  padding-top: 1rem;
  text-align: left;
  font-size: 1.4vw;
  justify-content: top;
  overflow-y: auto;
  transition: max-height 0.6s ease-in-out;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .Question_Column {
    min-width: 100%;
  }

  .Question,
  .Question_Button {
    font-size: 3vw;
  }

  .Question_Button {
    height: 10vw;
    padding: 2rem 12px 1.75rem;

    &::after {
      min-width: 4rem;
      min-height: 4rem;
    }
  }

  .Answer,
  .Answer_Opened {
    height: 100%;
    font-size: 2.5vw;
  }

  .sponsor-logo {
    max-height: 12vh;
    padding: 4%;
  }

  // .top-cliffs {
  //   width: 200%;
  // }

  // .bottom-cliffs {
  //   width: 200%;
  // }

  // .content-wrapper {
  //   background-size: 200% 100%;
  // }
}

@media (min-width: 1200px) {
  .Question_Button {
    &::after {
      min-width: 4rem;
      min-height: 4rem;
    }
  }
}
</style>

<style lang="scss">
a.link {
  // color: var(--color-bitcamp);
  color: #8B2000;
  ;
}

ul {
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  padding-inline-start: 1rem;
}
</style>