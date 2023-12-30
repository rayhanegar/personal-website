<script>
    export let img = 'src/images/sample-1.jpg';
    export let tag = 'tag/category';
    export let heading = 'Title of the work';
    export let paragraph = 'Description of the work';
    export let href ='/works';
</script>

<a {href} class="group transition-all ease-in-out duration-300 bg-white hover:bg-black hover:text-white">
    <div class="container mx-auto border-black border h-96 w-full">
        <div class="grid grid-cols-1 grid-rows-2 h-full overflow-clip">
            <div class="transition-all ease-in-out duration-300 flex bg-cover bg-center group-hover:scale-110 " style="background-image: url({img});"></div>
            <div class="flex flex-col justify-between px-4 py-4 ">
                <div class="transition-all ease-in-out duration-300 flex justify-end text-white group-hover:text-[#fa5000]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
                <div>
                    <p class="text-inherit/50 " style="font-family: 'Space Grotesk'">{tag}</p>
                    <h3>{heading}</h3>
                    <p>{paragraph}</p>
                </div>                
            </div>
        </div>
    </div>
</a>

<style>
    
</style>