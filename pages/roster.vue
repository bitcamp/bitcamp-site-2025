<template>
    <div class="wrapper" ref="el">
        <div class="app-container">
            <div class="image image-day">
                <div class="roster-container">
                    <div class="team-name">Co-Executive</div>
                    <div class="section">
                        <RosterCard name="Anjali Samavedam" position="Co-Executive Director" pronouns="she/her"
                            :imageSrc="anjali" linkedinUrl="https://www.linkedin.com/in/anjali-samavedam/" />
                        <RosterCard name="Sharvari Tirodkar" position="Co-Executive Director" pronouns="she/her"
                            :imageSrc="sharvari" linkedinUrl="http://linkedin.com/in/stirodka/" />
                    </div>
                    <div class="team-name">Directors</div>
                    <div class="section">
                        <RosterCard name="Amber Chen" position="Marketing Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/amber--chen/" :imageSrc="amber" />
                        <RosterCard name="Ananya Nagireddy" position="Experience Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/ananya-nagireddy-70233a1a0/" :imageSrc="ananya" />
                        <RosterCard name="Beatrice Chung" position="Sponsorship Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/beatricechung/" :imageSrc="beatrice" />
                        <RosterCard name="Daniel Chung" position="Finance Director" pronouns="he/him"
                            linkedinUrl="https://www.linkedin.com/in/daniel03chung/" :imageSrc="daniel" />
                        <RosterCard name="Julia Chen" position="Logistics Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/julia-z-chen/" :imageSrc="julia" />
                        <RosterCard name="Neha Veeragandham" position="Logistics Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/nehaveeragandham/" :imageSrc="neha" />
                        <RosterCard name="Nitya Venkatiahgari" position="Events Director" pronouns="she/her"
                            linkedinUrl="https://linkedin.com/in/nitya-venkatiahgari" :imageSrc="nitya" />
                        <RosterCard name="Sai Pranav Theerthala" position="Tech Director" pronouns="he/him"
                            linkedinUrl="https://www.linkedin.com/in/sai-pranav-theerthala" />
                        <RosterCard name="Saloni Shah" position="Tech Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/saloni-k-shah/" :imageSrc="saloni" />
                        <RosterCard name="Soumika (Mika) Pendem" position="Design Director" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/soumika-pendem/" :imageSrc="mika" />
                    </div>

                    <div class="team-name">Design</div>
                    <div class="section">
                        <RosterCard name="Adrien Rozario" position="Design Organizer" pronouns="they/them"
                            linkedinUrl="https://www.linkedin.com/in/adrien-rozario-847b68249/" :imageSrc="adrien" />
                        <RosterCard name="Angela Zhang" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="www.linkedin.com/in/angela-zhang915" :imageSrc="angela" />
                        <RosterCard name="Dahn Kim" position="Design Organizer" pronouns="they/them"
                            linkedinUrl="https://www.linkedin.com/in/dahn-kim-a92934254/" :imageSrc="dahn" />
                        <RosterCard name="Kyra Yip" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/kyra-skye-yip/" :imageSrc="kyra" />
                        <RosterCard name="Olivia Zhang" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/oliviaszhang" :imageSrc="olivia" />
                        <RosterCard name="Tracy Anne Tan" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/tracy-anne-tan-69a37a27b" :imageSrc="tracy" />
                        <RosterCard name="Trisha Anand" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/anandtrisha/" :imageSrc="trish" />
                        <RosterCard name="Vivian Howe" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/vivianhowe/" :imageSrc="vivian" />
                        <RosterCard name="Wendy Tu" position="Design Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/wendy-tu-umd/" :imageSrc="wendy" />
                    </div>

                    <div class="team-name">Events</div>
                    <div class="section">
                        <RosterCard name="Adrian Alphons" position="Events Organizer" pronouns="he/him"
                            :imageSrc="adrian" />
                        <RosterCard name="Anunithaa (Anu) Rajakumaresan" position="Events Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/anunithaa-rajakumaresan-180261238/"
                            :imageSrc="anu" />
                        <RosterCard name="Hannah Chen" position="Events Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/hannah-chen-30099b27b" :imageSrc="hannah" />
                        <RosterCard name="Harleen Green" position="Events Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/harleengreen" :imageSrc="harleen" />
                        <RosterCard name="Ishaan Bhardvaj" position="Events Organizer" pronouns="he/him"
                            linkedinUrl="https://www.linkedin.com/in/ishaan-b-bhardvaj" :imageSrc="ishaan" />
                        <RosterCard name="Meilin Yuan" position="Events Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/meilinyuan" :imageSrc="meilin" />
                        <RosterCard name="Saanvi Kataria" position="Events Organizer" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/-saanvikataria" :imageSrc="saanvi" />
                        <RosterCard name="Sofia (Sofie) Douglass" position="Events Organizer" pronouns="she/her"
                            :imageSrc="sofie" />
                    </div>

                    <div class="team-name">Sponsorship</div>
                    <div class="section">
                        <RosterCard name="Rishi Agarwal" position="Sponsorship" pronouns="he/him" :imageSrc="rishi"
                            linkedinUrl="http://www.linkedin.com/in/rishi-agarwal13" />
                        <RosterCard name="Nikita (Niki) Arya" position="Sponsorship (Contact Finders/Writers)"
                            pronouns="she/her" :imageSrc="nikita"
                            linkedinUrl="http://www.linkedin.com/in/nikitaaryaa" />
                        <RosterCard name="Melanie Chen" position="Finance (Invoicing)" pronouns="she/her"
                            :imageSrc="melanie" linkedinUrl="https://www.linkedin.com/in/melaniechenn" />
                        <RosterCard name="Aditri Gadigi" position="Finance (Reimbursements)" pronouns="she/her"
                            :imageSrc="aditri" linkedinUrl="http://www.linkedin.com/in/aditrig" />
                        <RosterCard name="Jennifer Li" position="Sponsorship (General, Mass Mailing)" pronouns="she/her"
                            :imageSrc="jennifer" linkedinUrl="https://www.linkedin.com/in/li-jennifer-j/" />
                        <RosterCard name="Saharsh Maloo" position="Sponsorship (General, Mass Mailing)"
                            pronouns="he/him" :imageSrc="saharsh"
                            linkedinUrl="https://www.linkedin.com/in/saharsh-maloo" />
                        <RosterCard name="Bhavini Pandey" position="Sponsorship (Contact Finders/Writers)"
                            pronouns="she/her" :imageSrc="bhavini"
                            linkedinUrl="https://www.linkedin.com/in/bhavini-pandey-05/" />
                    </div>
                    <div class="team-name">Tech</div>
                    <div class="section">
                        <RosterCard name="Mohe Edeen Abu Maizer" position="Tech Member" pronouns="he/him"
                            :imageSrc="mohe" linkedinUrl="https://www.linkedin.com/in/moheedeen/" />
                        <RosterCard name="Eileen Chen" position="Tech Member" pronouns="she/her" :imageSrc="eileen"
                            linkedinUrl="https://www.linkedin.com/in/eileendc/" />
                        <RosterCard name="Tyson Cheung" position="Tech Member" pronouns="he/him" :imageSrc="tyson"
                            linkedinUrl="https://www.linkedin.com/in/tyson-cheung" />
                        <RosterCard name="Arya Gijare" position="Tech Member" pronouns="she/her" :imageSrc="arya"
                            linkedinUrl="https://www.linkedin.com/in/arya-gijare/" />
                        <RosterCard name="Sanya Gupta" position="Tech Member" pronouns="she/her" :imageSrc="sanya"
                            linkedinUrl="https://www.linkedin.com/in/sanya-gupta7" />
                        <RosterCard name="Joanne Lee" position="Tech Member" pronouns="she/her" :imageSrc="joanne"
                            linkedinUrl="https://www.linkedin.com/in/joanneynlee" />
                        <RosterCard name="Devon Lai" position="Tech Member" pronouns="he/him" :imageSrc="devon"
                            linkedinUrl="http://www.linkedin.com/in/devon-lai" />
                        <RosterCard name="Harrison Padgett" position="Tech Member" pronouns="he/him"
                            :imageSrc="harrison" linkedinUrl="https://www.linkedin.com/in/harrison-padgett" />
                        <RosterCard name="Swathi Pulipati" position="Tech Member" pronouns="she/her" :imageSrc="swathi"
                            linkedinUrl="https://linkedin.com/in/swathi-pulipati-1b450b232" />
                        <RosterCard name="Thirunavukkarasu (Thiru) Sethuraman" position="Tech Member" pronouns="he/him"
                            :imageSrc="thiru" linkedinUrl="https://www.linkedin.com/in/thirus27" />
                        <RosterCard name="Srujana Theerthala" position="Tech Member" pronouns="she/her"
                            :imageSrc="srujana"
                            linkedinUrl="https://www.linkedin.com/in/srujana-theerthala-165671262" />
                        <RosterCard name="Harini Thirukonda" position="Tech Member" pronouns="she/her"
                            :imageSrc="harini" linkedinUrl="https://www.linkedin.com/in/harini-thirukonda-190036238/" />
                    </div>
                    <div class="team-name">Senior Advisors</div>
                    <div class="section">
                        <RosterCard name="Eric Chen" position="Senior Advisor" pronouns="he/him" :imageSrc="eric" />
                        <RosterCard name="Anthony Huynh" position="Senior Advisor" pronouns="he/him"
                            :imageSrc="anthony" />
                        <RosterCard name="Amrit Magesh" position="Senior Advisor" pronouns="he/him" :imageSrc="amrit"
                            linkedinUrl="http://www.linkedin.com/in/amrit-magesh" />
                        <RosterCard name="Eunice Oh" position="Senior Advisor" pronouns="she/they" :imageSrc="eunice"
                            linkedinUrl="https://www.linkedin.com/in/oh-eunice/" />
                    </div>
                </div>
            </div>
            <!-- <div class="image image-late-day"></div> -->
            <!-- <div class="image image-sunset"></div> -->
            <!-- <div class="image image-night"></div> -->
            <!-- <div class="image image-sunrise"></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import anjali from '../assets/img/images/headshots/anjali.jpg'
import sharvari from '../assets/img/images/headshots/sharvari.jpg'

import rishi from '../assets/img/images/headshots/rishiagarwal.jpg';
import saharsh from '../assets/img/images/headshots/saharashmaloo2.jpg';
import nikita from '../assets/img/images/headshots/nikitaarya.jpg';
import melanie from '../assets/img/images/headshots/melaniechen.jpg';
import aditri from '../assets/img/images/headshots/aditrigadigi.jpg';
import jennifer from '../assets/img/images/headshots/jenniferli.jpg';
import bhavini from '../assets/img/images/headshots/bhavinipandey.jpg';

import mohe from '../assets/img/images/headshots/mohe.jpg';
import eileen from '../assets/img/images/headshots/eileenchen.jpg';
import tyson from '../assets/img/images/headshots/tysoncheung.jpg';
import arya from '../assets/img/images/headshots/aryagijare.jpg';
import sanya from '../assets/img/images/headshots/sanyagupta.jpg';
import joanne from '../assets/img/images/headshots/joannelee.jpg';
import devon from '../assets/img/images/headshots/devonlai.jpg';
import harrison from '../assets/img/images/headshots/harrisonpadgett.jpg';
import swathi from '../assets/img/images/headshots/swathipulipati.jpg';
import thiru from '../assets/img/images/headshots/thirusethuraman.jpg';
import srujana from '../assets/img/images/headshots/srujanatheerthala.jpg';
import harini from '../assets/img/images/headshots/harinithirukonda.jpg';

import eric from '../assets/img/images/headshots/eric.jpg'
import anthony from '../assets/img/images/headshots/anthony.jpg'
import amrit from '../assets/img/images/headshots/amrit.jpg'
import eunice from '../assets/img/images/headshots/eunice.jpg'
import amber from '../assets/img/images/headshots/Amber Chen.jpg';
import ananya from '../assets/img/images/headshots/Ananya Nagireddy.jpg';
import beatrice from '../assets/img/images/headshots/Beatrice Chung.jpg';
import daniel from '../assets/img/images/headshots/Daniel Chung.jpg';
import julia from '../assets/img/images/headshots/Julia Chen.jpg';
import mika from '../assets/img/images/headshots/Mika Pendem.jpg';
import neha from '../assets/img/images/headshots/Neha Veeragandham.jpg';
import nitya from '../assets/img/images/headshots/Nitya Venkatiahgari.jpeg';
import saloni from '../assets/img/images/headshots/Saloni Shah.jpg';

import adrien from '../assets/img/images/headshots/Adrien Rozario.jpg';
import angela from '../assets/img/images/headshots/Angela Zhang.jpg';
import dahn from '../assets/img/images/headshots/Dahn Kim.png';
import kyra from '../assets/img/images/headshots/Kyra Yip.png';
import olivia from '../assets/img/images/headshots/Olivia Zhang.jpg';
import tracy from '../assets/img/images/headshots/Tracy Anne Tan.jpg';
import trish from '../assets/img/images/headshots/Trisha Anand.jpg';
import vivian from '../assets/img/images/headshots/Vivian Howe.jpg';
import wendy from '../assets/img/images/headshots/Wendy Tu.jpg';

import adrian from '../assets/img/images/headshots/Adrian Alphons.jpg';
import anu from '../assets/img/images/headshots/Anunithaa Rajakumaresan.jpg';
import hannah from '../assets/img/images/headshots/Hannah Chen.jpg';
import harleen from '../assets/img/images/headshots/Harleen Green.jpg';
import ishaan from '../assets/img/images/headshots/Ishaan Bhardvaj.jpg';
import meilin from '../assets/img/images/headshots/Meilin Yuan Professional.jpg';
import saanvi from '../assets/img/images/headshots/Saanvi_Kataria.jpg';
import sofie from '../assets/img/images/headshots/Sofie_Douglass.jpg';


export default {
    name: 'HomePage',
    // components: { Navbar, FooterContent, LandingPage, Break, TracksPage, CampGamesPage, TeamPage, FAQSponsorPage },
    components: {},

    head() {
        return {
            title: 'Bitcamp',
            meta: [
                {
                    name: 'description',
                    content:
                        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
                },
                {
                    property: 'og:title',
                    content: 'Bitcamp 2024',
                },
                {
                    property: 'og:site_name',
                    content: 'Bitcamp 2024',
                },
                {
                    property: 'og:url',
                    content: 'https://bit.camp/',
                },
                {
                    property: 'og:description',
                    content:
                        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'twitter:card',
                    content: 'summary',
                },
                {
                    property: 'twitter:url',
                    content: 'https://bit.camp/',
                },
                {
                    property: 'twitter:title',
                    content: 'Bitcamp 2024',
                },
                {
                    property: 'twitter:description',
                    content:
                        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#ff6f3f',
                },
                {
                    name: 'msapplication-config',
                    content: '/bitcamp-brand/favicons/browserconfig.xml',
                },
                {
                    name: 'theme-color',
                    content: '#ffffff',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/bitcamp-brand/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/bitcamp-brand/favicons/favicon-16x16.png',
                },
                {
                    rel: 'manifest',
                    href: '/bitcamp-brand/favicons/site.webmanifest',
                },
                {
                    rel: 'mask-icon',
                    href: '/bitcamp-brand/favicons/safari-pinned-tab.svg',
                    color: '#ff6f3f',
                },
                {
                    rel: 'shortcut icon',
                    href: '/bitcamp-brand/favicons/favicon.ico',
                },
            ],
        };
    }, data() {
        return {
            anjali,
            sharvari,
            rishi,
            saharsh,
            nikita,
            melanie,
            aditri,
            jennifer,
            bhavini,
            mohe,
            eileen,
            tyson,
            arya,
            sanya,
            joanne,
            devon,
            harrison,
            swathi,
            thiru,
            srujana,
            harini,
            eric,
            anthony,
            amrit,
            eunice,
            amber,
            ananya,
            beatrice,
            daniel,
            julia,
            mika,
            neha,
            nitya,
            saloni,
            adrien,
            angela,
            dahn,
            kyra,
            olivia,
            tracy,
            trish,
            vivian,
            wendy,
            adrian,
            anu,
            hannah,
            harleen,
            ishaan,
            meilin,
            saanvi,
            sofie
        }
    }
};

</script>

<style scoped>
.organizers-container>h1 {
    flex-basis: 100%;
    text-align: center;
    color: white;
}

.wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
}

.app-container {
    display: flex;
    flex-direction: column;
    font-family: 'Aleo', sans-serif;
}

.team-name {
    font-family: Aleo;
    font-weight: 700;
    font-size: 4vh;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    padding-top: 5vh;
    padding-bottom: 2vh;
}

.image {
    position: relative;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
}

.image-day {
    background-image: url("../assets/img/images/Daybeachmockup.svg");
}

.image-late-day {
    background-image: url("../assets/img/images/LateDaybeachmockup.svg");
}

.image-sunset {
    background-image: url("../assets/img/images/Sunsetbeachmockup.svg");
}

.image-night {
    background-image: url("../assets/img/images/Nightbeachmockup.svg");
}

.image-sunrise {
    background-image: url("../assets/img/images/Sunrisebeachmockup.svg");
}

.roster-container {
    display: flex;
    flex-wrap: wrap;
    width: 61vw;
    width: 90%;
    max-width: 840px;
    /* 4 cards * (200px each + small gaps) */
    height: 100vh;
    background-color: rgba(20, 53, 66, 0.69);
    position: absolute;
    top: 0;
    overflow-y: auto;
    padding: 10px;
    /* Optional: adjust horizontal padding if needed */
}


.organizers-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: auto;
    position: absolute;
}

.section {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
}
</style>