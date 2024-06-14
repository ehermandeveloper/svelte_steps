<script>
    export let next;
</script>

<form action="" class="w-[90%] sm:w-1/2 mx-auto flex flex-col justify-center items-center gap-y-4 ">
    <h2 class="w-full text-left mt-10 text-lg font-medium">Personal Details</h2>
    <input type="text" name="fullname" placeholder="Full Name" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:right-0"/>
    <input type="email" name="email" placeholder="Email" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:right-0"/>
    <input type="date" name="date" placeholder="Date" class="w-full border text-gray-400 rounded-md py-2 px-3 focus:outline-none focus:right-0"/>
    <button on:click={next} class="bg-svelte-orange w-full py-2 px-3 text-white rounded-md">send</button>
</form>