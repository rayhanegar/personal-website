<script>
    export let img = 'src/images/sample-1.jpg';
    export let heading = 'Projects I Worked On';
    export let paragraph = 'Here goes the description of the project';
</script>

<div class="container mx-auto border-black border h-96 w-full">
    <div class="grid grid-cols-1 grid-rows-2 h-full">
        <div class="flex bg-cover bg-center" style="background-image: url({img});"></div>
        <div class="flex flex-col justify-end px-4 py-4 bg-white">
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    </div>
</div>