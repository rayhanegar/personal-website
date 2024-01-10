<script>
    export let img = './images/sample-1.jpg';
    export let heading = 'Projects I Worked On';
    export let paragraph = 'Here goes the description of the project';
    export let href='/';
</script>

<a {href} class="group transition-all ease-in-out duration-300 bg-white hover:bg-black hover:text-white">
    <div class="container mx-auto border-black border h-96 w-full overflow-clip">
        <div class="grid grid-cols-1 grid-rows-2 h-full">
            <div class="transition-all ease-in-out duration-300 flex bg-cover bg-center group-hover:scale-110" style="background-image: url({img});"></div>
            <div class="flex flex-col justify-end px-4 py-4 ">
                <h3>{heading}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    </div>
</a>
