<script>
import "../../src/app.css";
import Customerdetails from "../components/customerdetails.svelte";
import Fourthprocess from "../components/fourthprocess.svelte";
import Secprocess from "../components/secprocess.svelte";
import Thirdprocess from "../components/thirdprocess.svelte";
import SveltePng from "../svelte_icon.png";

  //initial_state
  let process = {
      process_bar:1,
      first_process:true,
      sec_process:false,
      third_process:false,
      fourth_process:false
  };

  //next btn method
  const next_process_fn = () => {
      if(process.process_bar >= 1 && process.process_bar < 4){
          process.process_bar++
          switch (process.process_bar) {
          case 1:
           
              process.first_process = true;
              break;
              case 2:
            
              process.sec_process = true;
              break;
              case 3:
            
              process.third_process = true;
              break;
              case 4:
             
              process.fourth_process = true;
              break;
          default:
              break;
      }
      }  
  };

  //previous btn method
  const pre_process_fn = () => {
      if(process.process_bar > 1 ) {
          process.process_bar--;

          switch (process.process_bar) {
          case 1:
              
              process.sec_process = false;
              break;
              case 2:
              
              process.third_process = false;
              break;
              case 3:
              
              process.fourth_process = false;
              
              break;
              
              default:
              break;
      }
      }  
  };

</script>

<!-- svelte_logo -->
<section class="flex justify-center items-center mt-20 mb-10 gap-x-3">
  <img class="w-[30px] " src={SveltePng} alt="svelte-icon">
  <h1 class="text-xl">Svelte Steps</h1>
</section>

<!-- steps -->
<ul class="flex w-full justify-center ">

  <!-- step-1 -->
  <li class="animi { process.first_process == true ? "bg-svelte-orange ": ""} px-2 rounded-full text-white">1</li>
  
  <li class="px-1 sm:px-5 line-clamp-1 w-[10%] flex justify-center items-center relative animi"> 
      <span class=" w-full h-[2px] block text-white bg-gray-200"></span>
      <span class=" block transform animi { process.sec_process == true ?"w-full left-1/2": "w-0 left-0"}  h-[1px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black "></span>
  </li><!-- line -->

  <!-- step-2 -->
  <li class="animi { process.sec_process == true ? "bg-svelte-orange ": "bg-gray-500"}  text-white  px-2 rounded-full ">2</li>
  
  <li class="px-1 sm:px-5 line-clamp-1 w-[10%] flex justify-center items-center relative transition-all ease-in"> 
      <span class=" w-full h-[2px] block bg-gray-200"></span>
      <span class=" block transform animi { process.third_process == true ?"w-full left-1/2": "w-0 left-0"}  h-[1px] absolute top-1/2  -translate-x-1/2 -translate-y-1/2 bg-black "></span>
  </li><!-- line -->
  
  <!-- step-3 -->
  <li class="animi { process.third_process == true ? "bg-svelte-orange ": "bg-gray-500"} text-white  px-2 rounded-full ">3</li>
  
  <li class="px-1 sm:px-5 line-clamp-1 w-[10%] flex justify-center items-center relative transition-all ease-in"> 
      <span class=" w-full h-[2px] block bg-gray-200"></span>
      <span class=" block transform animi { process.fourth_process == true ? "w-full left-1/2": "w-0 left-0"}  h-[1px] absolute top-1/2  -translate-x-1/2 -translate-y-1/2 bg-black "></span>
  </li> <!-- line -->
  
  <!-- step-4 -->
  <li class="animi {process.fourth_process == true ? "bg-svelte-orange ": "bg-gray-500"} text-white  px-2 rounded-full ">4</li>
  </ul>
  
  <!-- forms -->
  {#if process.process_bar == 1}
  <Customerdetails next={next_process_fn}/>
  {:else if process.process_bar == 2}
  <Secprocess next={next_process_fn} back={pre_process_fn}/>
  {:else if process.process_bar == 3}
  <Thirdprocess next={next_process_fn} back={pre_process_fn}/>
  {:else if process.process_bar == 4}
  <Fourthprocess next={next_process_fn} back={pre_process_fn}/>
  {/if}
