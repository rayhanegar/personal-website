<script>
    export let img = "sample-3.jpg";
    export let tag = 'tag/category';
    export let heading = 'Projects I Worked On';
    export let paragraph = 'Here goes the description of the project';
    export let href = '/';
</script>

<a {href} class="group transition-all ease-in-out duration-300">
    <div class="transition-all ease-in-out duration-300 rounded-md shadow-md overflow-hidden border border-black container mx-auto h-48 w-full hover:bg-black hover:text-white">
        <div class="grid grid-cols-2 h-full overflow-hidden">
            <div class="transition-all ease-in-out duration-300 flex bg-cover bg-center group-hover:scale-105  min-w-0" style="background-image: url({img});"></div>
            <div class="flex flex-col justify-between ml-4 px-4 py-4 ">
                <div class="flex flex-col items-end transition-all ease-in-out duration-300 text-white group-hover:text-[#fa5000]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
                <div>
                    <p class="text-inherit/50 " style="font-family: 'Space Grotesk'">{tag}</p>
                    <h3>{heading}</h3>
                    <p class="hidden md:block">{paragraph}</p>
                </div>                  
            </div>
        </div>
    </div>
</a>
