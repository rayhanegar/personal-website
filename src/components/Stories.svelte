<script>
    import VerticalCard from "./VerticalCard.svelte";
</script>

<div class="scrollbar-thin bg-black text-white grid grid-cols-1 md:flex gap-4 px-10 py-4 my-10">
    <div class="md:w-2/5 md:flex md:flex-col md:justify-center gap-4 pr-10">
        <h1>Chronicles<span class="text-[#e1e000]">.</span></h1>
        <a href="/stories" class="hidden md:block">
            <button class="transition-all ease-in-out duration-300 bg-white text-black border border-black rounded-full px-10 py-4 hover:bg-black hover:text-white">
                Read more stories
            </button>
        </a>
    </div>
    <div class="md:w-3/5">
        <div class="container grid grid-cols-1 md:flex md:overflow-x-scroll md:py-4 gap-4 ">
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
    <a href="/stories" class="md:hidden">
        <button class="transition-all ease-in-out duration-300 bg-white text-black rounded-full px-10 py-4 hover:bg-black hover:text-white">
            Read more stories
        </button>
    </a>
</div>
