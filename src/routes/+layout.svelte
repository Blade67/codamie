<script>
    import Navigation from '$lib/Navigation.svelte';
    import Footer from '$lib/Footer.svelte';
    import '../app.pcss';
</script>

<div class="container relative mx-auto flex flex-col justify-center overflow-hidden">
    <Navigation />
    <slot />
    <Footer />
</div>
