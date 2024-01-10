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
        <OverlappingCard
            href="/stories"
            img="minamata-blog-thumbnail.jpg"
            heading="Minamata and Resiliency"
            paragraph="How sense of community, collectiveness and nature-first approach turned the tide."
            date="Jan. 11, 24"
        />
        <OverlappingCard
            href="/stories"
            img="tokyo-blog-thumbnail.jpg"
            date="Jan. 11, 24"
            heading="Through the Alleys of Tokyo"
            paragraph="Not so random summer night (and day) strolls in Tokyo."
        />
        <OverlappingCard
            href="/stories"
            img="pantai-blog-thumbnail.jpg"
            date="Jan. 11, 2024"
            heading="South-coast Fever"
            paragraph="Experimenting with film looks on Lightroom, and other."
        />
    </div>
</div>

<Footer />