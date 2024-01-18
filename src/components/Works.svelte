<script>
    import HorizontalCard from "./HorizontalCard.svelte";
</script>

<div class="bg-black text-white my-10">
    <div class="container px-10 py-4 flex">
        <h1 class="underline decoration-[#e1e000]">Latest Works</h1>
    </div>
    
    <div class="mx-auto px-10">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 ">

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

    <a href="/works" class="container flex flex-col items-start px-10 my-8">
        <button class="transition-all duration-300 ease-in-out px-10 py-4 flex gap-4 bg-white text-black rounded-full hover:bg-black hover:text-white">
            See all works
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>               
    </a>
</div>
