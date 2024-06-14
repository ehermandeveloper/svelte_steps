<script>
    export let next;
    export let back;
</script>

<form action="" class="w-[90%] sm:w-1/2 mx-auto flex flex-col justify-center items-center gap-y-4">
    <h2 class="w-full text-left mt-10 text-lg font-medium">2ed Details</h2>
    <input type="text" name="fullname" placeholder="Age" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:right-0"/>
    <input type="email" name="email" placeholder="Pin code" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:right-0"/>
    <input type="text" name="date" placeholder="Flate No" class="w-full border text-gray-400 rounded-md py-2 px-3 focus:outline-none focus:right-0"/>
    <button on:click={next} class="w-full bg-svelte-orange py-2 px-3 text-white rounded-md">send</button>
    <button on:click={back} class="w-full bg-gray-600 py-2 px-3 text-white rounded-md">Back</button>
</form>