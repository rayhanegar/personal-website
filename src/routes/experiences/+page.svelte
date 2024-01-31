<script>
    import ExperienceCard from "../../components/ExperienceCard.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="min-h-screen w-full flex flex-col px-10 py-4 bg-black text-white">
    <div class="container mx-auto py-4 flex items-center border-b border-black">
        <h1>Experiences<span class="font-bold text-[#e1e000]">.</span></h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-4 mt-4 mb-8 md:mt-8 md:mb-16">
        <div class="container mx-auto flex flex-col">
            <h3>
                "<span class="italic">Carpe diem</span>.
                <span class="underline decoration-[#fa5000] ">Seize the day,</span> boys!"
            </h3>
        </div>
        <div class="container mx-auto flex flex-col gap-4 text-justify">
            <p>
                As the only journey is the one within, true understanding and discovery often come from 
                stepping outside and immersing ourselves. For what I believe is true, I emphasize myself on the 
                importance of engaging in pursuits that spark my interest and finding personal growth within them.
            </p>
        </div>
    </div>
    <div class="my-8">
        <ExperienceCard 
        href="https://www.instagram.com/labicnfilkom"
        position="Core Team"
        years="2024-present"
        institution="Information-Centric Network (ICN) Laboratory"
        description="Batch 2024 core team members for Information-Centric Network Laboratory, Faculty of Computer Science."
        />
        <ExperienceCard 
        href="https://idren.id"
        position="Technical Writer"
        years="2023"
        institution="Indonesia Research and Education Network (IDREN)"
        description="Develop technical documentation for router, switch as well as routing configuration for 100Gbps closed research network."
        />
        <ExperienceCard 
        href="https://eba.soi.asia/"
        position="EBA Minamata Fieldwork"
        years="2023"
        institution="SOI ASIA, Keio University"
        description="Implementing evidence-based approach to formulate solutions to revitalize the city of Minamata, preventing environmental contaminations."
        />
        <ExperienceCard 
        href="https://hology.ub.ac.id"
        position="Event Division Member"
        years="2023"
        institution="House of Technology (HOLOGY) 6.0"
        description="Responsible in the creation of conceptual and technical rundowns of HOLOGY 6.0 as a national seminar and competition event."
        />
        <ExperienceCard 
        href="https://filkom.ub.ac.id"
        position="Application Developer Intern"
        years="2023"
        institution="Raion Community FILKOM UB"
        description="Develop android application using Kotlin, XML and Firebase that suits the business need/criteria."
        />
        <ExperienceCard 
        href="https://gdsc.community.dev/university-of-brawijaya/"
        position="Product Designer/Hipster"
        years="2023"
        institution="Google Solution Challenge 2023"
        description="Responsible in conducting UX researches and to design cohesive final product in accordance with Google Design Sprint."
        />
        <ExperienceCard 
        href="https://www.instagram.com/inaugurasi_filkom"
        position="Creative Division Member"
        years="2022"
        institution="Periscope - Inaugurasi FILKOM UB"
        description="Design event communication and decoration media as well as event documentation."
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
        description="Informatics Engineering major, currently on the second year of study with a GPA of 3.95"
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