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

                    <div class="team-name">Experience</div>
                    <div class="section">
                        <RosterCard name="Avanti Athavale" position="Position" pronouns="she/her" :imageSrc="avanti"
                            linkedinUrl="https://www.linkedin.com/in/avantiathavale/" />
                        <RosterCard name="Aditi Chalasani" position="Position" pronouns="she/her" :imageSrc="aditi"
                            linkedinUrl="https://www.linkedin.com/in/aditichalasani/" />
                        <RosterCard name="Debarshi Dey" position="Position" pronouns="he/him" :imageSrc="debarshi"
                            linkedinUrl="https://www.linkedin.com/in/debarshi-dey/" />
                        <RosterCard name="Sifene (Sif) Fufa" position="Position" pronouns="she/them"
                            linkedinUrl="https://www.linkedin.com/in/sifene-fufa-a8975b33b//" />
                        <RosterCard name="Samuel (Sam) Galita" position="Position" pronouns="he/him" :imageSrc="sam"
                            linkedinUrl="https://www.linkedin.com/in/samuel-galita-7498a5225/" />
                        <RosterCard name="Jaskaran (Jas) Gill" position="Position" pronouns="he/him" :imageSrc="jas"
                            linkedinUrl="https://www.linkedin.com/in/jaskaran-gill123/" />
                        <RosterCard name="Alex Luo" position="Position" pronouns="he/him" :imageSrc="alex"
                            linkedinUrl="https://www.linkedin.com/in/alexbluo/" />
                        <RosterCard name="Nithika Ramanathan" position="Position" pronouns="she/her" :imageSrc="nithika"
                            linkedinUrl="https://www.linkedin.com/in/nithika-ramanathan/" />
                        <RosterCard name="Michelle Rhee" position="Position" pronouns="she/her" :imageSrc="michelle"
                            linkedinUrl="https://www.linkedin.com/in/michelle-rhee-900903292/" />
                        <RosterCard name="Anannya Trehan" position="Position" pronouns="she/her" :imageSrc="anannya"
                            linkedinUrl="https://www.linkedin.com/in/anannya-trehan/" />
                        <RosterCard name="Michelle Yu" position="Position" pronouns="she/her" :imageSrc="michelleY"
                            linkedinUrl="https://www.linkedin.com/in/michelle-yu-57122b246/" />
                    </div>

                    <div class="team-name">Logistics</div>
                    <div class="section">
                        <RosterCard name="Anoushka Arora" position="Position" pronouns="she/her" :imageSrc="anoushka"
                            linkedinUrl="https://www.linkedin.com/in/anoushka-arora-b77929153/" />
                        <RosterCard name="Sneha Balur" position="Position" pronouns="she/her" :imageSrc="sneha"
                            linkedinUrl="https://www.linkedin.com/in/sneha-balur/" />
                        <RosterCard name="James (Jim) Joseph Barry" position="Position" pronouns="he/him"
                            :imageSrc="jim"
                            linkedinUrl="https://www.linkedin.com/in/james-barry-good-choice/?profileId=ACoAAFB_MukBscIhyXIavb9ybwfFmzfPhNf033k" />
                        <RosterCard name="Anshu Chandrasekhar" position="Position" pronouns="she/her" :imageSrc="anshu"
                            linkedinUrl="https://www.linkedin.com/in/anshu-chandrasekhar/" />
                        <RosterCard name="Shreya Gavarapattu" position="Position" pronouns="she/her" :imageSrc="shreya"
                            linkedinUrl="https://www.linkedin.com/in/shreyagav/" />
                        <RosterCard name="Naomi Kaul" position="Position" pronouns="she/her"
                            linkedinUrl="https://www.linkedin.com/in/naomi-kaul-a1b1341ba/" />
                        <RosterCard name="Tiffany Liu" position="Position" pronouns="she/her" :imageSrc="tiffany"
                            linkedinUrl="https://www.linkedin.com/in/tiffany-liu-776628244/" />
                        <RosterCard name="Benjamin (Ben) Losey" position="Position" pronouns="he/him" :imageSrc="ben"
                            linkedinUrl="https://www.linkedin.com/in/benjamin-losey/" />
                        <RosterCard name="Charis Wang" position="Position" pronouns="she/her" :imageSrc="charis"
                            linkedinUrl="https://www.linkedin.com/in/charswng/" />
                        <RosterCard name="Ryan Zhao" position="Position" pronouns="he/him" :imageSrc="ryan"
                            linkedinUrl="https://www.linkedin.com/in/ryanzhao27/" />
                        <RosterCard name="Jessica Zhou" position="Position" pronouns="she/her" :imageSrc="jessica"
                            linkedinUrl="https://www.linkedin.com/in/jessica-zhou-2a53021b3/" />
                    </div>

                    <div class="team-name">Marketing</div>
                    <div class="section">
                        <RosterCard name="Sameer Chawla" position="Position" pronouns="he/him" :imageSrc="sameer"
                            linkedinUrl="https://www.linkedin.com/in/sameer-chawla01/" />
                        <RosterCard name="Kai Chen" position="Position" pronouns="he/him" :imageSrc="kai"
                            linkedinUrl="https://www.linkedin.com/in/kaiichen/" />
                        <RosterCard name="Ben DiMarco" position="Position" pronouns="he/him" imageSrc=""
                            linkedinUrl="https://www.linkedin.com/in/bendimarco/" />
                        <RosterCard name="Srinidhi (Sri) Guruvayurappan" position="Position" pronouns="she/her"
                            :imageSrc="sri"
                            linkedinUrl="https://www.linkedin.com/in/srinidhi-guruvayurappan-1a40a829a/" />
                        <RosterCard name="Purva Jani" position="Position" pronouns="she/her" :imageSrc="purva"
                            linkedinUrl="https://www.linkedin.com/in/purva-jani/" />
                        <RosterCard name="Kaylee Kim" position="Position" pronouns="she/her" :imageSrc="kaylee"
                            linkedinUrl="https://www.linkedin.com/in/kaylee-k/" />
                        <RosterCard name="Richard Mukam Jr" position="Position" pronouns="he/him" :imageSrc="richard"
                            linkedinUrl="https://www.linkedin.com/in/richardmukamjr/" />
                        <RosterCard name="Grace Yang" position="Position" pronouns="she/her" :imageSrc="grace"
                            linkedinUrl="https://www.linkedin.com/in/graceyang2027/" />
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

import avanti from '../assets/img/images/headshots/Avanti Athavale.jpg';
import aditi from '../assets/img/images/headshots/Aditi Chalasani.jpg';
import debarshi from '../assets/img/images/headshots/Debarshi Dey - Headshot.jpeg';
// import sif from '../assets/img/images/headshots/Sifene Fufa.jpg';
import sam from '../assets/img/images/headshots/Sam Galita.jpg';
import jas from '../assets/img/images/headshots/Jaskaran Gill.jpg';
import alex from '../assets/img/images/headshots/Alex Luo.jpg';
import nithika from '../assets/img/images/headshots/Nithika Ramanathan.jpeg';
import michelle from '../assets/img/images/headshots/Michelle Rhee.jpg';
import anannya from '../assets/img/images/headshots/Anannya Trehan.jpg';
import michelleY from '../assets/img/images/headshots/Michelle Yu.jpeg';
import anoushka from '../assets/img/images/headshots/Anoushka Arora.jpg';
import sneha from '../assets/img/images/headshots/Sneha Balur.jpeg';
import jim from '../assets/img/images/headshots/James Barry.jpeg';
import anshu from '../assets/img/images/headshots/Anshu_C.jpg';
import shreya from '../assets/img/images/headshots/Shreya Gavarapattu.jpg';
// import naomi from '../assets/img/images/headshots/Naomi Kaul.jpg';
import tiffany from '../assets/img/images/headshots/Tiffany Liu.jpg';
import ben from '../assets/img/images/headshots/Ben Losey.jpeg';
import charis from '../assets/img/images/headshots/Charis Wang.jpg';
import ryan from '../assets/img/images/headshots/Ryan Zhao.jpg';
import jessica from '../assets/img/images/headshots/Jessica Zhou.jpg';
import sameer from '../assets/img/images/headshots/SameerChawla.jpg';
import kai from '../assets/img/images/headshots/Kai Chen.jpg';
// import benD from '../assets/img/images/headshots/Ben DiMarco.jpg';
import sri from '../assets/img/images/headshots/Srinidhi Guruvayurappan.jpeg';
import purva from '../assets/img/images/headshots/Purva Jani.jpg';
import kaylee from '../assets/img/images/headshots/Kaylee Kim.jpg';
import richard from '../assets/img/images/headshots/Richard Mukham.jpg';
import grace from '../assets/img/images/headshots/Grace Yang.jpg';

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
            sofie,
            avanti,
            aditi,
            debarshi,
            sam,
            jas,
            alex,
            nithika,
            michelle,
            anannya,
            michelleY,
            anoushka,
            sneha,
            jim,
            anshu,
            shreya,
            tiffany,
            ben,
            charis,
            ryan,
            jessica,
            sameer,
            kai,
            sri,
            purva,
            kaylee,
            richard,
            grace
        }
    }
};

</script>

<style scoped>
.wrapper {
    overflow-x: hidden;
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
    max-width: 840px;
    height: 100%;
    background-color: rgba(20, 53, 66, 0.69);
    position: absolute;
    top: 0;
    overflow-y: auto;
}

.section {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
}
</style>