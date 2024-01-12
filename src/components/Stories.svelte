<script>
    import VerticalCard from "./VerticalCard.svelte";
</script>

<div class="bg-white">
    <div class="container px-10 py-4 flex items-center space-x-10 ">
        <h2 class="underline decoration-[#00205b]">Featured Stories</h2>
    </div>
    
    <div class="container mx-auto px-10 my-4">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <VerticalCard 
            href="/stories"
            img="minamata-blog-thumbnail.jpg"
            heading="Fostering Community Resiliency"
            paragraph="How sense of community, collectiveness and nature-first approach turned the tide."
            date="Jan. 11, 24" />
            <VerticalCard 
            href="/stories"
            img="tokyo-blog-thumbnail.jpg"
            date="Jan. 11, 24"
            heading="Through the Maze of Tokyo"
            paragraph="Not so random summer night (and day) strolls in Tokyo."
            />
            <VerticalCard 
            href="/stories"
            img="pantai-blog-thumbnail.jpg"
            date="Jan. 11, 2024"
            heading="South-coast Fever"
            paragraph="Experimenting with film looks on Lightroom, and other."/>
        </div>
    </div>
    
    <div class="container px-10 flex justify-around items-center mt-8 mb-20">
        <a href="/stories">
            <button class="transition-all ease-in-out duration-300 rounded-md bg-black shadow-md text-white px-4 py-2 flex gap-4 hover:scale-105">
                <p>View all stories</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </a>
    </div>
</div>
