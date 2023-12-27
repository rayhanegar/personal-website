<script>
    import HorizontalCard from "./HorizontalCard.svelte";
</script>

<div class="container px-10 py-4 flex items-center space-x-10">
    <h2>Latest Works</h2>
</div>

<div class="mx-auto px-10 my-4">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        <a href="/"><HorizontalCard /></a>
        <a href="/"><HorizontalCard img='src/images/sample-2.jpg'/></a>
        <a href="/"><HorizontalCard img='src/images/sample-3.jpg'/></a>
        <a href="/"><HorizontalCard img='src/images/sample-4.jpg'/></a>
    </div>
</div>

<div class="container px-10 flex justify-around items-center my-10">
    <button class="rounded-full bg-[#fa5000] text-white px-4 py-2">
        <p>View all works</p>
    </button>
</div>