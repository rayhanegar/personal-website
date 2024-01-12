<nav class="sticky z-10 top-0 bg-black text-white px-10 py-4">
    <div class="flex justify-between items-center max-container">
        <div class="flex items-center">
            <a href="/" class="mr-5">
                <svg width="85" height="48" viewBox="0 0 85 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.84 77V32.63H9.93V37.85H11.37C12.09 35.99 13.23 34.64 14.79 33.8C16.41 32.9 18.39 32.45 20.73 32.45H26.04V40.82H20.37C17.37 40.82 14.91 41.66 12.99 43.34C11.07 44.96 10.11 47.48 10.11 50.9V77H0.84ZM7.22469 99L39.5647 -5.24521e-06H50.8947L18.5547 99H7.22469ZM24.9944 94L49.9844 17.5H55.1694L30.1794 94H24.9944ZM62.9933 78.26C58.4933 78.26 54.5633 77.33 51.2033 75.47C47.8433 73.55 45.2033 70.88 43.2833 67.46C41.4233 63.98 40.4933 59.96 40.4933 55.4V54.32C40.4933 49.7 41.4233 45.68 43.2833 42.26C45.1433 38.78 47.7233 36.11 51.0233 34.25C54.3833 32.33 58.2533 31.37 62.6333 31.37C66.8933 31.37 70.6133 32.33 73.7933 34.25C77.0333 36.11 79.5533 38.72 81.3533 42.08C83.1533 45.44 84.0533 49.37 84.0533 53.87V57.38H49.9433C50.0633 61.28 51.3533 64.4 53.8133 66.74C56.3333 69.02 59.4533 70.16 63.1733 70.16C66.6533 70.16 69.2633 69.38 71.0033 67.82C72.8033 66.26 74.1833 64.46 75.1433 62.42L82.7933 66.38C81.9533 68.06 80.7233 69.83 79.1033 71.69C77.5433 73.55 75.4733 75.11 72.8933 76.37C70.3133 77.63 67.0133 78.26 62.9933 78.26ZM50.0333 50.27H74.6033C74.3633 46.91 73.1633 44.3 71.0033 42.44C68.8433 40.52 66.0233 39.56 62.5433 39.56C59.0633 39.56 56.2133 40.52 53.9933 42.44C51.8333 44.3 50.5133 46.91 50.0333 50.27Z" fill="white"/>
                </svg>
            </a>
            
            <div>
                <ul class="hidden md:flex list-none space-x-10">
                   <li>
                        <div>
                            <p class="font-bold text-sm">Rayhan Egar</p>
                            <p class="text-sm">C.S. Student</p>
                        </div>
                   </li>
                   <li>
                    <div>
                        <p class="font-bold text-sm">Malang, Indonesia</p>
                        <p class="text-sm">{localTime} (UTC+7)</p>
                    </div>
               </li> 
                </ul>
            </div>    
        </div>
        <div>
            <ul class="right-nav hidden md:flex list-none space-x-10 group-hover:underline">
                <li><a href='/works'>Works</a></li>
                <li><a href='/stories'>Stories</a></li>
                <li><a href='/experiences'>Experiences</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </div>

        <button on:click={() => showMenu = !showMenu} class="md:hidden flex items-center mobile-menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>  
        </button>
    </div>

    {#if showMenu}
        <div class="md:hidden flex flex-col gap-4 py-4">
            <a href='/works'>Works</a>
            <a href='/stories'>Stories</a>
            <a href='/experiences'>Experiences</a>
            <a href='/about'>About</a>
        </div>
    {/if}
</nav>

<script>
    import { onMount } from 'svelte';

    let localTime = getLocalTime();

    let showMenu = false;

    // Update localTime every minute
    onMount(() => {
    const updateTime = () => {
        localTime = getLocalTime();
    };

    const intervalId = setInterval(updateTime, 60000);

    // Clear the interval when the component is destroyed
    return () => clearInterval(intervalId);
    });

    function getLocalTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
    }

</script>

<style>
    .right-nav li::after {
        content: '';
        width: 0%;
        height: 3px;
        background: #fff;
        display: block;
        margin: auto;
        transition: .3s;
    }
    .right-nav li:hover::after {
        content: '';
        width: 100%;
        height: 3px;
        background: #fff;
        display: block;
        margin: auto;
    }
</style>