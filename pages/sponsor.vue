<template>
    <div class="container">
        <main class="row justify-content-center">
            <section class="col-lg-8">
                <section class="SupportSection">
                    <a href="/" class="home-link">
                        <img src="../assets/img/icons/go-back.svg" alt="Go Back" />
                        <span>Home</span>
                    </a>
                    <h1>
                        <strong class="SupportTitle"> help support </strong> Bitcamp 2025!
                    </h1>
                    <br>
                    <p>Hello Potential Sponsor!</p>
                    <p>
                        Bitcamp, hosted annually at the University of Maryland, is one of the largest
                        collegiate hackathons on the East Coast, bringing together thousands of students
                        each year. This year kicks off a new era and marks our <b>11th anniversary</b>! Over the past
                        decade, Bitcamp has become a thriving hub of creativity and technical exploration, uniting over
                        <b>10,000</b> passionate hackers who have developed more than <b>1,350</b> innovative
                        projects. As we look back on a decade of breakthroughs, we're excited to continue pushing
                        boundaries and fostering the next generation of tech leaders. We can't wait to host over
                        <b>1,000</b> attendees at Bitcamp 2025 <b> in person </b> at the University of Maryland
                        from <b>April 11th to 13th</b>.
                    </p>
                    <p>
                        Bitcamp is a melting pot of creativity; a great place to connect with a diverse group
                        of the nation's brightest innovators. Our hackers are passionate about using their skills to
                        collaboratively solve multi-disciplinary problems. Last year, we introduced an <b>App
                            Development</b> track to introduce
                        hackers to the software development life cycle and a new <b>Cybersecurity</b> track to
                        facilitate discussions of web vulnerabilities. Our popular <b> Machine Learning </b> and <b>
                            Quantum </b> tracks will be returning this year as well.
                        All
                        hackers are also challenged to learn new skills including project management and user-friendly
                        design. </p>
                    <p>
                        During Bitcamp 2024, we made some unforgettable memories with over 2,000
                        hackers who registered to attend the event and saw some incredible talent in the
                        158 projects that were submitted. Check out the amazing array of hacks at:
                        <b><a
                                href="https://bitcamp2024.devpost.com/project-gallery">https://bitcamp2024.devpost.com/project-gallery</a></b>!
                    </p>
                    <p>
                        Bitcamp offers a prime opportunity for recruitment and tech mentorship. By sponsoring Bitcamp,
                        you’ll boost brand visibility, connect with emerging top talent, and cultivate innovation within
                        the tech community. Additionally, Bitcamp is a 501(c)(3) non-profit organization. All
                        donations made to Bitcamp will be fully tax-deductible.
                    </p>
                    <p>
                        We invite you to review the various tiers of sponsorship below. More detailed
                        information regarding each individual perk can be accessed on our website by
                        visiting <a href="https://bit.camp/sponsor">bit.camp/sponsor</a>. If you're interested in
                        becoming an official sponsor for Bitcamp 2025, our biggest event yet, we'd love to chat! You can
                        reach us at <b><a href="mailto:sponsorship@bit.camp">sponsorship@bit.camp</a></b>.
                    </p>
                    <p>
                        We hope to see you by the campfire! 🏕️
                    </p>
                    <p>Best,<br>The Bitcamp Team</p>
                    <hr class="divider" />
                    <h1>Sponsorship Tiers</h1>
                    <br>
                </section>
                <section class="Rtable js-RtableTabs">
                    <!-- <ProspectusHeader
                :tierNames="[
                  'Byte',
                  'Kilo',
                  'Mega',
                  'Giga',
                  'Tera',
                  'Peta',
                  'Virtual',
                ]"
                :prices="[
                  '$1,000',
                  '$4,000',
                  '$7,000',
                  '$10,000',
                  '$15,000',
                  '$25,000',
                  '$6,000',
                ]"
              /> -->
                    <div class="Rtable-grid">
                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell--head Rtable-cell-Byte">
                            Byte
                        </div>
                        <div class="Rtable-cell Rtable-cell--head Rtable-cell-Kilo">
                            Kilo
                        </div>
                        <div class="Rtable-cell Rtable-cell--head Rtable-cell-Mega">
                            Mega
                        </div>
                        <div class="Rtable-cell Rtable-cell--head Rtable-cell-Giga">
                            Giga
                        </div>
                        <div class="Rtable-cell Rtable-cell--head Rtable-cell-Tera">
                            Tera
                        </div>
                        <div class="Rtable-cell Rtable-cell--head Rtable-cell-Peta">
                            Peta
                        </div>

                        <ProspectusRow :categoryName="'Contribution'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '$2,000',
                            '$3,000',
                            '$5,000',
                            '$7,000',
                            '$10,000',
                            '$16,000',
                        ]" :header="'first-row Rtable-category-cell-full'" />
                        <ProspectusEmptyRow :categoryName="'General'" />
                        <ProspectusRow :categoryName="'Mentors at Event'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            'check-b',
                            'check-b',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'Mentors are a great way to represent your company or organization at Bitcamp and help our hackers with any questions they might have about their projects.'" />
                        <ProspectusRow :categoryName="'Opening Session Talk'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '',
                            '1 min',
                            '2 min',
                            '3 min',
                            '5 min',
                            '10 min',
                        ]"
                            :description="'Sponsors with this perk will get speaking time at the opening ceremony to discuss their company, their prize category, and anything else that they would like! Please keep in mind the designated time allotment for your tier when planning your presentation.'" />
                        <ProspectusRow :categoryName="'Provide a Prize'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', 'check-w', 'check-w', 'check-w', 'check-w']"
                            :description="'This prize category can be something general, such as “Best Security Hack” or “Best Use of Machine Learning”, or something branded, such as “Best Use of [insert company]’s API”. Our hackers will have the option of submitting their hacks/projects to your prize category, and you will be able to judge projects, select winners, and distribute your own prizes accordingly during the closing ceremony. We encourage our sponsors to choose prizes that appeal to the hackers over service credits/something niche.'" />
                        <ProspectusRow :categoryName="'Panel Discussion'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', 'check-w', 'check-w', 'check-w']"
                            :description="'A panel discussion is another great way for sponsors to interact with our hackers. This includes a moderated discussion on a topic and questions curated by our team (which will be provided to company representatives beforehand), as well as an open Q&A session at the end for hackers to ask our panelists. We recommend ideally 1 person to be on the panel from each eligible company but will allow max 2 people.'" />
                        <ProspectusRow :categoryName="'Closing Ceremony Talk'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '5 min', '8 min', '12 min']"
                            :description="'This is a great opportunity for a company to give an inspiring and motivating talk to our hackers. This could be about an experience, something related to our hackathon’s theme, or anything realistically.'" />
                        <ProspectusRow :categoryName="'Sponsored Side Event'" :subText="'(Limited Slots)'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '', '30 min', '60 min']"
                            :description="'A tech talk/workshop is an excellent way for sponsors to interact with our hackers and can be on any topic of your choice. Past workshops have covered a range of topics from cybersecurity to web development to machine learning. These will be done in person with the option to make it as interactive as desired. If companies need help choosing a topic for their workshop or event, they can connect with our Workshops team once they have committed to a tier.'" />
                        <ProspectusRow :categoryName="'Branded Mini Game'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '', '', 'check-w']"
                            :description="'This is a great way to engage with our hackers in a fun, informal way over activity of choice (example: mini capture the flag, cup stacking, etc). A mini-challenge usually involves an activity like a game or a short event with prizes. We will work with you to arrange the logistics, and will also be sure to advertise and announce this mini-challenge during the event itself.'" />
                        <ProspectusBottomRow :categoryName="'Provide Additional Prize'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '', '', 'check-w']"
                            :description="'Providing prizes is a powerful perk that can help companies reach out to their target hacker population, be it those interested in a specific field or those that have a specific skillset. This year, our Tera-level sponsor can provide 2 prizes to ensure they get as much outreach as possible and are successful in identifying talent at the hackathon.'" />
                        <ProspectusEmptyRow :categoryName="'Recruiting'" />
                        <ProspectusRow :categoryName="'Reserved Table'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            'check-b',
                            'check-b',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'Sponsors have their own in-person booth in our event location. The booth is your “home base” for the event, from which you can post or distribute marketing materials, interact with hackers, and make your presence felt at Bitcamp! '" />
                        <ProspectusRow :categoryName="'Access to Hacker Contact Info'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '',
                            'check-b',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'With this perk, sponsors will be provided with contact information that hackers provide to directly message with/reach out to after Bitcamp has occurred. This is information that we will provide to sponsors after the event.'" />
                        <ProspectusRow :categoryName="'Recruiters Present'" :subText="'(active recruitment)'"
                            :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '',
                            '',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'You are welcome to have recruiters and recruiting materials at your booth at Bitcamp, where you will be able to interact with all of our hackers. You may bring as many representatives as you’d like (we recommend 3-4). There will be a “Sponsorship Fair” during which hackers will be encouraged to visit your open booths.'" />
                        <ProspectusRow :categoryName="'Access to Resumes'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '',
                            '',
                            '',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'With this perk, we provide a database of all of our registrants’ resumes to our sponsors following the event (before if we are able to do so logistically). This will [ideally be in a Google Drive format but can be changed due to certain company restrictions.'" />
                        <ProspectusRow :categoryName="'Bootcamp Sponsorship Fair'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '', 'check-w', 'check-w']"
                            :description="'We’ve started a new tradition of a hype event before Bitcamp takes place, where hackers can come together, meet each other, and get a glimpse of what Bitcamp is and for the first time ever, we will be including a sponsorship fair as part of the event! This is a unique opportunity for you to be one of the first sponsors to interact with prospective hackers even before the hackathon takes place and gives you a chance to have a personalized interaction with hackers and begin recruiting early!'" />
                        <ProspectusRow :categoryName="'Recruitment Event Shoutout'" :subText="'(on social media)'"
                            :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '',
                            '',
                            '',
                            '',
                            '1 event',
                            '2 events',
                        ]"
                            :description="'Any recruitment event or information session you hope to advertise from the moment you choose to sponsor Bitcamp to when the event takes place, we will advertise on our Bitcamp social media account. Based on the tier at which you sponsor, we will advertise up to 2 recruitment events (Tera) through LinkedIn and Email to all registered hackers!'" />

                        <ProspectusBottomRow :categoryName="'Pre-Event Email to All Hackers'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '', '', 'check-w']"
                            :description="'Around 2-3 days before the event itself, we will allow sponsors with this perk to email all of our registrants up to that point to encourage participants to keep an eye out for your company’s booth and activities during the event. The message would be sent by the Bitcamp Team on behalf of your organization/company, but we will leave the content of the email up to you! '" />
                        <ProspectusEmptyRow :categoryName="'Marketing'" />
                        <ProspectusRow :categoryName="'Logo on Shirt & Website'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            'check-b',
                            'check-b',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'Sponsors will have their logos (ordered and scaled by sponsorship tier) on our website and T-shirt.'" />
                        <ProspectusRow :categoryName="'Distribute Marketing Materials & Merch'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            'check-b',
                            'check-b',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'Sponsors are able to distribute marketing materials to our hackers in their virtual and in-person booths. This can include any type of virtual swag (ex: promo codes), informational materials (ex: pamphlets, flyers, or videos), or physical swag (ex: T-shirts, masks).'" />
                        <ProspectusRow :categoryName="'Social Media Shoutout'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="[
                            '',
                            'check-b',
                            'check-w',
                            'check-w',
                            'check-w',
                            'check-w',
                        ]"
                            :description="'Bitcamp social media accounts will promote your company through a customized message of choice at some point leading up to the day of the event. We will post about your company on all forms of social media you select (Twitter, LinkedIn, Instagram, etc).'" />

                        <ProspectusBottomRow :categoryName="'&quot;Cohosted By&quot;'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '', '', 'check-w']"
                            :description="'Tera-level sponsors will be given special recognition in our marketing materials as a co-host. '" />

                        <ProspectusEmptyRow :categoryName="'Restricted Add-Ons'" />
                        <ProspectusBottomRow :categoryName="'Custom Sponsor Marketing Video'" :tierNames="[
                            'Byte',
                            'Kilo',
                            'Mega',
                            'Giga',
                            'Tera',
                            'Peta',
                        ]" :args="['', '', '', '2 min ($350)', '2 min check-w', '4 min check-w']"
                            :description="'This add-on is open to Giga and Tera sponsors, who will be given special recognition in our marketing materials as a co-host. '" />


                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Byte"></div>
                        <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Kilo"></div>
                        <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Mega"></div>
                        <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Giga"></div>
                        <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Tera"></div>
                        <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Peta"></div>

                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell-blank"></div>
                        <div class="Rtable-cell Rtable-cell-blank"></div>

                        <ProspectusMisc :perk="'Additional Add-Ons'" :type="'head'" :bolded="true"
                            :description="'If you’re already sponsoring a tier that allows you to provide a prize, then you have the opportunity to sponsor an additional prize through this perk. Sponsoring prizes is an excellent chance to interact with hackers and attract talent with the specific skillset or interests that you’re looking for and sponsoring an additional prize is a great way to expand your search.'" />
                        <ProspectusMisc :perk="'Sponsoring Additional Prizes'" :price="'$1,000'" :type="'bottom'"
                            :bolded="false"
                            :description="'This add-on is open to all sponsors and is the perfect chance for your company to get exposure among past and prospective hackers. Hop on the Bitcamp Podcast, share what you love about your company, and get students interested!'" />
                    </div>
                    <hr class="divider" />
                    <section class="ConnectSection">
                        <h2>Connect</h2>
                        <div>
                            <img src="../assets/img/icons/globe.svg" alt="Bitcamp Homepage" />
                            <a href="https://bit.camp">https://bit.camp</a>
                        </div>
                        <div>
                            <img src="../assets/img/icons/email.svg" alt="Email" />
                            <a class="SponsorEmail" href="mailto:sponsorship@bit.camp">sponsorship@bit.camp</a>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Bitcamp | Sponsor Prospectus',
    meta: [
        {
            name: 'description',
            content: '',
        },
        {
            property: 'og:title',
            content: 'Bitcamp | Sponsor Prospectus',
        },
        {
            property: 'og:site_name',
            content: 'Bitcamp',
        },
        {
            property: 'og:url',
            content: 'https://bit.camp/sponsor',
        },
        {
            property: 'og:description',
            content: '',
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
            content: 'https://bit.camp/sponsor',
        },
        {
            property: 'twitter:title',
            content: 'Bitcamp | Sponsor Prospectus',
        },
        {
            property: 'twitter:description',
            content: '',
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
});
</script>

<script lang="ts">
export default {
    name: 'SponsorPage',
};
</script>

<style>
:root {
    --border-radius: 15px;
    --color-primary: var(--color-bitcamp);
    --color-Byte: #e7d8cc;
    --color-Kilo: #ffaf00;
    --color-Mega: #ff6312;
    --color-Giga: #ff062b;
    --color-Tera: #7f6c5f;
    --color-Peta: #538da4;
    --color-Virtual: #009151;
    --color-category: var(--color-sky);
    --color-light-text: white;
    --color-dark-text: var(--color-midnight);
    --color-border: white;
    --color-focus: cornflowerblue;
    --color-highlight: #ffaf3f;
    --color-misc-category: #ededed;
    --icon-height: 18px;
}
</style>

<style scoped lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';

.container {
    font-family: Avenir;
    color: black;
}

a {
    text-decoration: none !important;
    color: var(--color-primary) !important;
}

/* Overall Layout
  ================================== */
main {
    padding: 2rem 0;
    display: flex !important;
}

hr.divider {
    height: 7px;
    opacity: 1;
    color: var(--color-highlight);
    margin: 3rem 0 0.5rem;
}

.SupportTitle {
    color: var(--color-dark-text);
}

.SupportSection p {
    font-size: 1.5rem;
    color: black;
}

h1,
h2 {
    font-family: Aleo;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    color: var(--color-primary);
}

h2 {
    text-transform: lowercase;
}

/* Home link
  ================================== */
.home-link {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.home-link img {
    height: var(--icon-height);
    margin-right: 0.5em;
}

@media screen and (max-width: 992px) {
    .home-link {
        position: static;
        margin-bottom: 1em;
    }
}

:deep(*) {

    /* Tables
  ================================== */
    .Rtable {
        margin-left: -1rem;
        padding: 0 1rem;
    }

    .Rtable-grid {
        display: grid;
        grid-template-columns: 2fr repeat(6, 1fr);
    }

    .Rtable-cell {
        padding: 0.5em 0.5em;
        border: solid 1px var(--color-border);
        font-family: Avenir;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    /* Cell styles
  ================================== */
    .Rtable-cell {
        color: var(--color-light-text);
        border-color: var(--color-light-text);
    }

    .Rtable-cell img {
        height: var(--icon-height);
    }

    .Rtable-cell p {
        margin: 0;
    }

    .Rtable-cell--head {
        font-family: Avenir;
        font-weight: 800;
        text-align: center;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }

    .Rtable-cell-Byte {
        background-color: var(--color-Byte);
        color: var(--color-dark-text);
    }

    .Rtable-cell-Kilo {
        background-color: var(--color-Kilo);
        color: var(--color-dark-text);
    }

    .Rtable-cell-Mega {
        color: var(--color-light-text);
        background-color: var(--color-Mega);
    }

    .Rtable-cell-Giga {
        color: var(--color-light-text);
        background-color: var(--color-Giga);
    }

    .Rtable-cell-Tera {
        color: var(--color-light-text);
        background-color: var(--color-Tera);
    }

    .Rtable-cell-Peta {
        color: var(--color-light-text);
        background-color: var(--color-Peta);
    }

    .Rtable-cell-Virtual {
        color: var(--color-light-text);
        background-color: var(--color-Virtual);
    }

    .Rtable-cell-misc {
        background-color: var(--color-misc-category);
    }

    .Rtable-cell--foot {
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        min-height: 30px;
        border-bottom: 0;
    }

    .Rtable-cell--head {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        min-height: 30px;
        border-bottom: 0;
    }

    .Rtable-cell-blank {
        background-color: transparent;
    }

    .Rtable-category-cell {
        background-color: var(--color-category);
        font-weight: normal;
        text-align: left;
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
        width: 26rem;
    }

    .Rtable-category-cell-full {
        border-radius: var(--border-radius) 0 0 var(--border-radius);
        text-align: center;
        font-weight: bolder;
    }

    .Rtable-category-cell.title-row {
        font-weight: 800;
        margin-top: 30px;
        border-top-left-radius: var(--border-radius);
    }

    .Rtable-category-cell-bottom {
        border-bottom-left-radius: var(--border-radius);
    }

    .Rtable-misc-category-cell-head {
        border-top-left-radius: var(--border-radius);
    }

    .Rtable-misc-category-cell-bottom {
        border-bottom-left-radius: var(--border-radius);
    }

    .Rtable-misc-cell-head {
        border-top-right-radius: var(--border-radius);
    }

    .Rtable-misc-cell-bottom {
        border-bottom-right-radius: var(--border-radius);
    }

    /* Question Popover
  ==================================== */
    .popover {
        margin-right: 2em !important;
        border: 2px solid var(--color-highlight);
        border-radius: var(--border-radius);
        font-family: Avenir;
        font-size: 14px;
        line-height: 19px;
    }

    .popover-header {
        padding-top: 1rem;
        background-color: transparent;
        border: 0;
        font-family: Avenir;
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 0.5em;
    }

    .popover-body {
        padding-top: 0;
    }

    .popover .popover-arrow {
        display: none;
    }

    .question-btn {
        line-height: 0;
        font-size: 16px;
        border: none;
        cursor: pointer;
        padding: 0.25em;
        margin-right: 0.25em;
    }

    .question-btn img {
        height: var(--icon-height);
        /* Turn the yellow question mark black when the popover is inactive */
        -webkit-filter: brightness(0);
        filter: brightness(0);
    }

    .question-btn[aria-describedby^='popover'] {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .question-btn[aria-describedby^='popover'] img {
        /* Turn the yellow question mark black when the popover is inactive */
        -webkit-filter: none;
        filter: none;
    }

    @media all and (max-width: 768px) {

        .Mega-active .question-btn img,
        .Giga-active .question-btn img,
        .Tera-active .question-btn img {
            -webkit-filter: brightness(0) invert(1);
            filter: brightness(0) invert(1);
        }

        .question-btn[aria-describedby^='popover'] img {
            /* Magic filters to match the focus color from https://codepen.io/sosuke/pen/Pjoqqp */
            -webkit-filter: brightness(0) invert(73%) sepia(44%) saturate(5841%) hue-rotate(194deg) brightness(96%) contrast(93%);
            filter: brightness(0) invert(73%) sepia(44%) saturate(5841%) hue-rotate(194deg) brightness(96%) contrast(93%);
        }

        .popover {
            border-color: var(--color-focus);
        }
    }

    /* Responsive
  ==================================== */
    @media all and (max-width: 768px) {

        /* Cell Colors
    ==================================== */
        .Rtable.Byte-active .Rtable-grid {
            background-color: var(--color-Byte);
        }

        .Rtable.Kilo-active .Rtable-grid {
            background-color: var(--color-Kilo);
        }

        .Rtable.Mega-active .Rtable-grid {
            background-color: var(--color-Mega);
        }

        .Rtable.Giga-active .Rtable-grid {
            background-color: var(--color-Giga);
        }

        .Rtable.Tera-active .Rtable-grid {
            background-color: var(--color-Tera);
        }

        .Rtable.Mega-active .Rtable-cell,
        .Rtable.Giga-active .Rtable-cell,
        .Rtable.Tera-active .Rtable-cell {
            color: var(--color-light-text);
        }

        .Rtable-cell.first-row {
            border-top: 0;
        }

        .Rtable-cell.last-row {
            border-bottom: 0;
        }

        .Rtable-category-cell {
            /* border-radius: 0; */
            border-right: 2px solid var(--color-border);
            width: 20rem;
        }
    }

    /* Connect Section
  =================================== */
    .ConnectSection a {
        text-decoration: none;
        color: var(--color-light-text);
    }

    .ConnectSection a:hover {
        text-decoration: underline;
    }

    .ConnectSection img {
        margin-right: 0.75em;
        width: 1em;
        line-height: 0;
    }

    .tooltips {
        padding: 10px;
        position: relative;
        text-align: center;
        cursor: pointer;
    }

    .tooltips::after {
        background-color: #ffffff;
        color: black;
        border-radius: var(--border-radius);
        border: solid 2px var(--color-highlight);
        display: none;
        padding: 1em;
        width: 180px;
        min-width: 18vw;
        position: absolute;
        text-align: left;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        z-index: 999;
        font-size: small;
    }

    .tooltips:hover::after {
        display: block !important;
    }

    .tooltips:hover::before {
        display: block !important;
    }

    .tooltips.direction::after {
        // LEFT
        content: attr(description);
        top: 0;
        left: 0;
        transform: translateX(calc(-100% - 30px)) translateY(-50%);
    }

    @media screen and (max-width: 1000px) {
        .Rtable-grid {
            overflow-x: auto;
        }
    }

    @media screen and (max-width: 1350px) {
        .tooltips.direction::after {
            //RIGHT
            content: attr(description);
            top: 0;
            right: 0;
            transform: translateY(-50%) translateX(35px);
        }
    }
}
</style>