<script>
    import WorksCard from "../../components/WorksCard.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="min-h-screen w-full flex flex-col px-10 py-4 bg-white text-black">
    <div class="container mx-auto py-4 flex items-center border-b border-black">
        <h2>Works</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-4 mt-4">
        <div class="container mx-auto flex">
            <h3>
                "To work is to tend, to nurture and <span class="underline decoration-[#fa5000]">to grow</span>"
            </h3>
        </div>
        <div class="container mx-auto flex">
            <p>
                Having involved on multiple works over a wide array of fields is among the best way an individual can learn.
                By getting both of my hands wet, to feel and to venture, I can expand my tastebud while fostering mutual collaboration <span class="font-bold">for a better cause</span>.
            <p>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 py-4 gap-8 mt-10">
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
    </div>
</div>
<Footer />