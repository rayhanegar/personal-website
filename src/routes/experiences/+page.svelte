<script>
    import ExperienceCard from "../../components/ExperienceCard.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="min-h-screen w-full flex flex-col px-10 py-4 bg-white text-black">
    <div class="container mx-auto py-4 flex items-center border-b border-black">
        <h2>Experiences</h2>
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
    <div class="my-8">
        <ExperienceCard 
        href="https://icn.id"
        position="Core Team"
        years="2024-present"
        institution="Indonesia Research and Education Network (IDREN)"
        description="Batch 2024 core team members for Information-Centric Network Laboratory, Faculty of Computer Science."
        />
        <ExperienceCard 
        href="https://idren.ub.ac.id"
        position="Routing Technical Writer"
        years="2023"
        institution="Indonesia Research and Education Network (IDREN)"
        description="Develop technical documentation for router, switch as well as routing configuration for 100Gbps closed research network."
        />
        <ExperienceCard 
        href="https://hology.ub.ac.id"
        position="Event Staff Member"
        years="2023"
        institution="House of Technology (HOLOGY) 6.0"
        description="Responsible in the creation of conceptual and technical rundowns of HOLOGY 6.0 as a national seminar and competition event."
        />
        <ExperienceCard 
        href="https://eba.soi.asia/"
        position="EBA Minamata Fieldwork"
        years="2023"
        institution="SOI ASIA, Keio University"
        description="Implementing evidence-based approach to formulate solutions to revitalize the city of Minamata, preventing environmental contaminations."
        />
    </div>
    <h3 class="mt-8">
        Educational Background
    </h3>
    <div class="my-8">
        <ExperienceCard 
        href="https://filkom.ub.ac.id/"
        position="Undergraduate Computer Science Student"
        years="2022-2026 (Expected)"
        institution="University of Brawijaya"
        description="Informatics Engineering major, currently on the second year of study."
        />
        <ExperienceCard
        href="https://man2kotamalang.sch.id/"
        position="High School Diploma"
        years="2019-2022"
        institution="MAN 2 Kota Malang"
        description="Main focus of Mathematics and Natural Science with interests in English, Editorial and Design"
        />
    </div>
</div>

<Footer />