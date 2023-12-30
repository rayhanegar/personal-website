<script>
    import HorizontalCard from "./HorizontalCard.svelte";
</script>

<div class="bg-white">
    <div class="container px-10 py-4 flex items-center space-x-10">
        <h2 class="underline decoration-[#00205b]">Latest Works</h2>
    </div>
    
    <div class="mx-auto px-10 my-4">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
            <HorizontalCard />
            <HorizontalCard img='src/images/sample-2.jpg'/>
            <HorizontalCard img='src/images/sample-3.jpg'/>
            <HorizontalCard img='src/images/sample-4.jpg'/>
        </div>
    </div>
    
    <div class="container px-10 flex justify-around items-center my-10">
        <a href="/works">
            <button class="rounded-full bg-[#fa5000] text-white px-4 py-2">
                <p>View all works</p>
            </button>
        </a>
    </div>
</div>
