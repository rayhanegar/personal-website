<script>
    import VerticalCard from "./VerticalCard.svelte";
</script>

<div class="bg-white">
    <div class="container px-10 py-4 flex items-center space-x-10 ">
        <h2 class="underline decoration-[#00205b]">Featured Stories</h2>
    </div>
    
    <div class="container mx-auto px-10 my-4">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <VerticalCard />
            <VerticalCard img="sample-1.jpg"/>
            <VerticalCard img="sample-4.jpg"/>
        </div>
    </div>
    
    <div class="container px-10 flex justify-around items-center my-10">
        <a href="/stories">
            <button class="rounded-full bg-[#fa5000] text-white px-4 py-2">
                <p>Read all stories</p>
            </button>
        </a>
    </div>
</div>
