<script>
    export let img = 'src/images/sample-1.jpg';
    export let tag = 'tag/category';
    export let heading = 'Projects I Worked On';
    export let paragraph = 'Here goes the description of the project';
</script>

<div class="container mx-auto border-black border h-48 w-full">
    <div class="grid grid-cols-2 h-full">
        <div class=" bg-cover bg-center" style="background-image: url({img});"></div>
        <div class="flex flex-col justify-end px-4 py-4 bg-white">
            <p class="text-gray-600" style="font-family: 'Space Grotesk'">{tag}</p>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    </div>
</div>