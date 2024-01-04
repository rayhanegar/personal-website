<script>
    import OverlappingCard from "../../components/OverlappingCard.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="min-h-screen w-full flex flex-col px-10 py-4 bg-white text-black">
    <div class="container mx-auto py-4 flex items-center border-b border-black">
        <h2>Stories</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-4 mt-4">
        <div class="container mx-auto flex flex-col">
            <h3 class="underline decoration-[#fa5000]">
                "Who are you?"
            </h3>
        </div>
        <div class="container mx-auto flex flex-col gap-4">
            <p>
                To know someone is to hear their stories. For each chapter unfolded, a parameter is being redefined. 
                Being a living-being means embarking on an endeavor, in a pursuit of a new story. Or at least, that's how I believe it.
                <br>
                <br>
                <br>
                <span class="font-bold">"We're all writing our own story now."</span> <br>
                - Sylvie, that one Loki variant
            </p>
        </div>
        
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-8 mt-10">
        <OverlappingCard />
        <OverlappingCard />
        <OverlappingCard />
    </div>
</div>

<Footer />