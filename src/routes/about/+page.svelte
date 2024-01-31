<script>
    import Footer from "../../components/Footer.svelte";
</script>

<div class="min-h-screen w-full flex flex-col px-10 py-4 gap-10 bg-black text-white">
    <div class="container mx-auto py-4 flex items-center border-b border-black">
        <h1>Curious Case of Egar<span class="font-bold text-[#e1e000]">.</span></h1>
    </div>
    <div class="flex flex-col md:grid md:grid-cols-4 gap-10">
        <p class="hidden md:block">
            Preface
        </p>
        <h3 class="col-start-2 col-span-3">"Hi there, I'm Egar, a second-year computer science student and your future expert in the making."</h3>
        <p class="hidden md:block">
            Yes that's me
        </p>
        <img class="col-start-2 col-span-2" src="profile-picture.jpg" alt="This is me.">
        <p class="row-start-3 hidden md:block">
            A thing or two
        </p>
        <p class="row-start-3 col-start-2">
            Initially, pursuing computer science wasn't in my playbook; I've always been more captivated by the intricate workings of the natural world. Yet, as I witness the seamless integration of technology into our daily lives and the profound impact it has on shaping our future, I find myself navigating towards the intersection of the physical and digital with an increasing curiosity.
        </p>
        <p class="row-start-3 col-start-3">
            While the technical aspects of my academic journey demand precision and logic, diving into the world of design becomes a sanctuary where I can let my imagination run wild. Roaming through the intricate layers of forms, colors, and sounds allows me to unleash my creativity and find solace in the expressive nature of design.  
        </p>
        <p class="row-start-3 col-start-4">
            Beside that, environmental issues and studies spark curiosity within me. I find myself continually drawn to understanding the delicate balance of ecosystems, the impact of human activities on the environment, and the intricate web of connections that sustain life on our planet. This fascination goes beyond a mere academic interest; it instills in me a profound sense of responsibility.  
        </p>
        <p class="row-start-4 hidden md:block">
            Takeaway
        </p>
        <h3 class="row-start-4 col-start-2 col-span-2">
            "This fusion of the analytical and the creative shapes my broader understanding of how diverse disciplines can coalesce to create a well-rounded and fulfilling academic experience."
        </h3>
        <img class="row-start-4 col-start-4" src="profile-picture-2.jpg" alt="Me in an art installation">
    </div>
</div>

<Footer />