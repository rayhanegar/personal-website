<script>
    export let img = "sample-3.jpg";
    export let heading = 'Projects I Worked On';
    export let paragraph = 'Here goes the description of the project';
    export let date = "DD/MM/YY";
    export let href='/';
</script>

<a {href} class="group transition-all ease-in-out duration-300">
    <div class="bg-[#222222] text-white transition-all ease-in-out duration-300 container mx-auto h-96 w-full md:w-96 overflow-hidden hover:bg-black hover:text-white">
        <div class="grid grid-cols-1 grid-rows-2 h-full">
            <div class="transition-all ease-in-out duration-300 flex bg-cover bg-center group-hover:scale-110" style="background-image: url({img});"></div>
            <div class="flex flex-col justify-end px-4 py-4 ">
                <p><span class="font-thin">{date}</span></p>
                <h4>{heading}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    </div>
</a>
