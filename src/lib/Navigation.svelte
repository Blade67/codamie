<script lang="ts">
    import { page } from '$app/stores';
    import Logo from '$lib/Logo.svelte';
    import { onMount } from 'svelte';
    import Divider from './Divider.svelte';

    let mobileNavVisible: boolean = false;

    const routes = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' }
    ];

    let activeItem: HTMLElement;
    let hoveredElement: HTMLElement;

    const elHovered = (e: MouseEvent) => {
        let target = e.target as HTMLElement;

        if (target.tagName === 'A') target = target.parentElement as HTMLElement;
        if (target) hoveredElement = target;
    };

    const resetTarget = () => {
        hoveredElement = document.querySelector('li[style*="font-weight: 500"]') as HTMLElement;
    };

    onMount(() => {
        resize();
    });

    const resize = () => {
        activeItem = document.querySelector('li[style*="font-weight: 500"]') as HTMLElement;
        hoveredElement = activeItem;
    };

    $: if (activeItem && activeItem?.offsetWidth == 0) {
        resize();
    }
</script>

<style>
</style>

<svelte:window on:resize={resize} />
<nav
    class="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-black px-10 py-4 sm:relative sm:px-8"
>
    <Logo class="h-10 w-10 fill-current" />
    <ul class="relative hidden flex-row text-xl sm:flex">
        {#each routes as route}
            {#if route.path === $page.url.pathname}
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <li
                    class="relative h-full px-8 opacity-100"
                    style="font-weight: 500;"
                    on:mouseover={elHovered}
                    bind:this={activeItem}
                >
                    <span
                        class="absolute left-4 top-1/2 z-50 h-2 w-2 -translate-y-1/2 rotate-45 border-2 bg-black"
                    ></span>
                    <a href={route.path}>{route.name}</a>
                </li>
            {:else}
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <li
                    class="relative h-full px-8 opacity-75 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    on:mouseover={elHovered}
                    on:mouseleave={resetTarget}
                    data-sveltekit-preload-code
                    data-sveltekit-preload-data
                >
                    <a href={route.path}>{route.name}</a>
                </li>
            {/if}
        {/each}
        <span
            class="absolute -bottom-[1.85rem] left-0 z-[60] h-2 w-full border-x-2 border-b-2 bg-black transition-all duration-300 ease-in-out"
            style={`transform: translateX(${activeItem?.offsetLeft !== hoveredElement?.offsetLeft ? hoveredElement?.offsetLeft : activeItem?.offsetLeft}px); width: ${hoveredElement?.offsetWidth ?? activeItem?.offsetWidth ?? 0}px;`}
        ></span>
    </ul>
    <button class="inline-block sm:hidden" on:click={() => (mobileNavVisible = !mobileNavVisible)}>
        {#if !mobileNavVisible}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        {/if}
    </button>
    <div
        class="absolute left-0 top-full -z-10 w-full bg-transparent px-5 transition-all duration-500 ease-in-out sm:hidden"
        class:hidden={!mobileNavVisible}
    >
        <button
            on:click={() => (mobileNavVisible = !mobileNavVisible)}
            class="absolute left-0 top-0 h-screen w-screen bg-black/50 backdrop-blur-sm"
        ></button>
        <ul
            class="relative mx-auto flex w-full flex-col space-y-2 overflow-hidden border-x-2 border-b-2 bg-black py-4 text-2xl"
        >
            {#each routes as route}
                {#if route.path === $page.url.pathname}
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <li
                        class="relative h-full px-8 opacity-100"
                        style="font-weight: 500;"
                        on:mouseover={elHovered}
                        bind:this={activeItem}
                    >
                        <a href={route.path} on:click={() => (mobileNavVisible = !mobileNavVisible)}
                            >{route.name}</a
                        >
                    </li>
                {:else}
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <li
                        class="relative h-full px-8 opacity-75 transition-opacity duration-300 ease-in-out hover:opacity-100"
                        on:mouseover={elHovered}
                        data-sveltekit-preload-code
                        data-sveltekit-preload-data
                    >
                        <a href={route.path} on:click={() => (mobileNavVisible = !mobileNavVisible)}
                            >{route.name}</a
                        >
                    </li>
                {/if}
            {/each}
            <span
                class="absolute left-0 top-full h-3 w-3 -translate-x-1/2 -translate-y-full rotate-45 border-2 bg-black"
            ></span>
            <span
                class="absolute right-0 top-full h-3 w-3 -translate-y-full translate-x-1/2 rotate-45 border-2 bg-black"
            ></span>
        </ul>
    </div>
    <div class="absolute left-0 top-full mx-4 mb-8 block w-[calc(100%-2rem)] border-y sm:hidden">
        <span class="absolute left-0 h-3 w-3 -translate-y-1/2 rotate-45 border-2 bg-black"></span>
        <span class="absolute right-0 h-3 w-3 -translate-y-1/2 rotate-45 border-2 bg-black"></span>
    </div>
</nav>
<Divider class="mx-4 mb-8 hidden sm:mx-0.5 sm:block" />
