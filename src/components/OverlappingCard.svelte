<script>
    export let href = "/stories";
    export let img = "sample-2.jpg";
    export let heading = "Here Goes The Title of Your Story";
    export let paragraph = "Here goes a sentence or two about the story.";
    export let date = "DD/MM/YY";
</script>

<div class="transition-all ease-in-out duration-300">
    <div class="container mx-auto px-4 py-4 h-72 w-full relative overflow-hidden">
        <div class="bg-cover bg-center hover:bg-scale-150 absolute bottom-0 left-0 w-3/4 h-full z-0" style="background-image: url({img});"></div>
        <a {href}>
            <div class="transition-all ease-in-out duration-300 absolute bottom-0 right-0 w-3/4 md:w-1/2 z-[1] flex flex-col item bg-white text-black hover:bg-black hover:text-white border-black border hover:border-b-[#e1e000] hover:border-b-8 px-4 py-4">
                <h4>{heading}</h4>
                <p><span class="text-inherit/70">{date}</span></p>
                <br>
                <p>{paragraph}</p>
            </div>
        </a>
    </div>
</div>