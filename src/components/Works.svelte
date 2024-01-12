<script>
    import HorizontalCard from "./HorizontalCard.svelte";
</script>

<div class="bg-white">
    <div class="container px-10 py-4 flex items-center space-x-10">
        <h2 class="underline decoration-[#00205b]">Latest Works</h2>
    </div>
    
    <div class="mx-auto px-10 my-2">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">

            <HorizontalCard
            href='/works' 
            img="sleeveup-thumbnail.png"
            tag='website'
            heading='SleeveUp!'
            paragraph='Internship, job placement and event registration portals for fresh graduate.'/>
            
            <HorizontalCard
            href='/works' 
            img="jagawana-thumbnail.png"
            tag='WSN'
            heading='Jagawana'
            paragraph='IoT-based Wireless Sensor Network for forest fire early warning system.'/>
            
            <HorizontalCard
            href='/works' 
            img="pocket-hg-thumbnail.png"
            tag='UX design'
            heading='POCKET-Hg'
            paragraph='Integrated, portable mercury compound detection kit.'/>
            
            <HorizontalCard
            href='/works' 
            img="drawer-thumbnail.png"
            tag='UX design'
            heading='Drawer Website'
            paragraph='Social and commercial platform for local digital artists.'/>

        </div>
    </div>
    
    <div class="container px-10 flex justify-around items-center my-8">
        <a href="/works">
            <button class="transition-all ease-in-out duration-300 rounded-md bg-black shadow-md text-white px-4 py-2 flex gap-4 hover:scale-105">
                <p>View all works</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </a>
    </div>
</div>
