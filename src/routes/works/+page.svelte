<script>
    import WorksCard from "../../components/WorksCard.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="min-h-screen w-full flex flex-col px-10 py-4 bg-white text-black">
    <div class="container mx-auto py-4 flex items-center border-b border-black">
        <h2>Works</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap- mt-4">
        <div class="container mx-auto flex">
            <h3>
                "To work is to tend, to nurture and <span class="underline decoration-[#fa5000]">to grow</span>"
            </h3>
        </div>
        <div class="container mx-auto flex">
            <p>
                Having involved on multiple works over a wide array of fields is among the best way an individual can learn.
                By getting both of my hands wet, to feel and to venture, I can expand my tastebud while fostering mutual collaboration <span class="font-bold">for a better cause</span>.
            <p>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 py-4 gap-8 mt-10">
        <WorksCard 
            href='/works' 
            img="sleeveup-thumbnail.png"
            tag='Website'
            heading='SleeveUp!'
            paragraph='Internship, job placement and event registration portals for fresh graduates.'
        />
        <WorksCard 
            href='/works' 
            img="jagawana-thumbnail.png"
            tag='WSN'
            heading='Jagawana'
            paragraph='IoT-based Wireless Sensor Network for forest fire early warning system.'
        />
        <WorksCard 
            href='/works' 
            img="pocket-hg-thumbnail.png"
            tag='UX design'
            heading='POCKET-Hg'
            paragraph='Integrated, portable mercury compound detection kit.'
        />
        <WorksCard 
            href='/works' 
            img="drawer-thumbnail.png"
            tag='UX design'
            heading='Drawer Website'
            paragraph='Social and commercial platform for local digital artists.'
        />
        <WorksCard 
            href='/works' 
            img="insanmagz-25-thumbnail.png"
            tag='Editorial Design'
            heading='InsanMagz issue no. 25'
            paragraph='"Earth-II: After Hours", concerning climate and environmental issues.'
        />
        <WorksCard 
            href='/works' 
            img="insanmagz-24-thumbnail.png"
            tag='Editorial Design'
            heading='InsanMagz issue no. 24'
            paragraph='"Mask is The New Black", with primary focus on the COVID-19 pandemic.'
        />
        <WorksCard 
            href='/works' 
            img="artsantara-story-thumbnail.png"
            tag='Social Media Design'
            heading='Artsantara Socials'
            paragraph='Social media design for Artsantara 2021 by Osmada'
        />
        <WorksCard 
            href='/works' 
            img="artsantara-poster-thumbnail.png"
            tag='Poster Design'
            heading='R!SE for Artsantara'
            paragraph='Poster design for Artsantara 2021 campaign, done in collaboration.'
        />
    </div>
</div>
<test />
<Footer />