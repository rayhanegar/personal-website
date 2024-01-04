<script>
    export let href = "/stories";
    export let img = "/src/images/sample-2.jpg";
    export let heading = "Hear Goes The Title of Your Story";
    export let paragraph = "Hear goes a sentence or two about the story.";
    export let date = "DD/MM/YY";
</script>

<a {href} class="group transition-all ease-in-out duration-300">
    <div class="container mx-auto px-4 py-4 h-72 w-full relative overflow-hidden">
        <div class="bg-cover bg-center hover:bg-scale-150 absolute bottom-0 left-0 w-3/4 h-full z-0" style="background-image: url({img});"></div>
        <div class="transition-all ease-in-out duration-300 absolute bottom-0 right-0 w-1/2 z-[1] flex flex-col item bg-white text-black group-hover:bg-[#e9e8e4] border-black border px-4 py-4 rounded-sm">
            <h3>{heading}</h3>
            <p><span class="text-inherit/50">{date}</span></p>
            <br>
            <p>{paragraph}</p>
        </div>
    </div>
</a>