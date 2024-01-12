<script>
    export let position = "Position";
    export let institution = "Institution";
    export let description = "Here goes the description";
    export let years = "Here goes the years";
    export let href = "/experiences";
</script>

<div class="flex flex-col py-4 border-b border-[#00205b]">
    <div class="transition-all ease-in-out duration-300 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="flex flex-col">
            <p class="font-bold">{position}</p>
            <p>{institution}</p>
        </div>
        <div class="flex flex-col md:items-center">
            <p class="text-inherit/50">{years}</p>
        </div>
        <div class="flex flex-col">
            <p>{description}</p>
        </div>
        <div class="flex flex-col">
            <a {href} target="_blank">
                <button class="group w-full md:w-1/2 container mx-auto flex flex-row items-center justify-center gap-4 transition-all ease-in-out duration-300 border border-black py-2 hover:bg-black hover:text-white hover:font-bold">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 group-hover:text-[#fa5000]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </button>
            </a>
        </div>
    </div>
</div>