<script>
    export let position = "Position";
    export let institution = "Institution";
    export let description = "Here goes the description";
    export let years = "Here goes the years";
    export let href = "/experiences";
</script>

<div class="flex flex-col px-10 py-4 border-b border-[#00205b]">
    <div class="grid grid-cols-1 md:grid-cols-4 space">
        <div class="flex flex-col">
            <h3>{position}</h3>
            <p class="text-inherit/50">{institution}</p>
        </div>
        <div class="flex flex-col justify-center">
            <p>{description}</p>
        </div>
        <div class="flex flex-col justify-center">
            <p>{years}</p>
        </div>
        <div class="flex flex-col justify-center">
            <a {href}>
                <button class="border border-black px-4 py-2 rounded-full ">
                    Learn more
                </button>
            </a>
        </div>
    </div>
</div>