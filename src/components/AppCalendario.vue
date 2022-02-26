<template>
    <div class="container mx-auto mt-10">
    <div class="wrapper bg-white rounded shadow w-full ">
      <div class="header flex justify-between border-b p-2">
      </div>
      <table class="w-full">
        
            
        <thead>
          <tr>
            <th colspan="4" class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">{{ dia.format('dddd') }} ({{ dia.format('DD/MM/yyyy') }})</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">{{ dia }}</span>
            </th>
          </tr>
        </thead>
         <tbody>
          <tr class="text-center h-20">
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
              <div class="flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">04:40 as 13:00</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span id="1" class="event-name">
                    
              
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Maria da Silva
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Pafúncio da Silva
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">12:40 as 21:00</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Jão da Silva
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Maria da Silva
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Pafúncio da Silva
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">15:40 as 00:00</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span id="3" class="event-name">
                      Jão da Silva
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Maria da Silva
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Pafúncio da Silva
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">20:40 as 05:00</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                     
                    </span>
                  </div>
                  <div
                    class="event bg-green-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Maria da Silva (FOLGA)
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      
                    </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        
        
      </table>
    </div>
  </div>
  
</template>

<script>

import moment from "moment";
import 'moment/locale/pt-br';
moment.locale("pt-br");

export default {
  
    props:['dia'],
    mounted(){
      console.log(this.funcionario)
    }
}
</script>

<style>

</style>