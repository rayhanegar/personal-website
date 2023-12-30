<script>
    export let img = 'src/images/sample-1.jpg';
    export let tag = 'tag/category';
    export let heading = 'Projects I Worked On';
    export let paragraph = 'Here goes the description of the project';
    export let href = '/';
</script>

<a {href} class="group transition-all ease-in-out duration-300 bg-white hover:bg-black hover:text-white">
    <div class="container mx-auto border-black border h-48 w-full">
        <div class="grid grid-cols-2 h-full overflow-hidden">
            <div class="transition-all ease-in-out duration-300 flex bg-cover bg-center group-hover:scale-105  min-w-0" style="background-image: url({img});"></div>
            <div class="flex flex-col justify-end ml-4 px-4 py-4 ">
                <p class="text-inherit/50 " style="font-family: 'Space Grotesk'">{tag}</p>
                <h3>{heading}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    </div>
</a>
