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
            heading="Minamata and Resiliency"
            paragraph="How sense of community, collectiveness and nature-first approach turned the tide."
            date="Jan. 11, 24" />
            <VerticalCard 
            href="/stories"
            img="tokyo-blog-thumbnail.jpg"
            date="Jan. 11, 24"
            heading="Through the Alleys of Tokyo"
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
    
    <div class="container px-10 flex justify-around items-center my-10">
        <a href="/stories">
            <button class="rounded-full bg-[#fa5000] text-white px-4 py-2">
                <p>Read all stories</p>
            </button>
        </a>
    </div>
</div>
