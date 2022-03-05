<template>
  <div class="bg-slate-800 py-20">
    <div class="container">
      <div id="login-icon" class="bg-slate-700 absolute"> 
           <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="5em"
            height="5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 26 26"
            class="iconify iconify--wpf text-white relative"
          >
            <path
              d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z"
              fill="currentColor"
            ></path>
          </svg>
      </div>
      <form
        id="login-form"
        class="
          flex flex-col
          gap-5
          justify-center
          items-center
          py-20
          bg-white
          w-1/2
          m-auto
          rounded-lg
        "
      >
      
        <label class="flex items-center bg-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="3em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 26 26"
            class="iconify iconify--wpf text-white"
          >
            <path
              d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            class="p-2 bg-slate-700 text-white placeholder:text-white"
            type="text"
            placeholder="Usuário"
          />
        </label>
        <label class="flex items-center bg-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            fill="white"
            role="img"
            width="3em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            class="iconify iconify--carbon text-white"
          >
            <path
              d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z"
              fill="currentColor"
            ></path>
            <circle cx="22" cy="10" r="2" fill="currentColor"></circle></svg
          ><input
            class="p-2 bg-slate-700 text-white placeholder:text-white"
            type="password"
            placeholder="Senha"
        /></label>
      </form>
      <button
        id="btn-login"
        class="block m-auto py-2 px-24 bg-white rounded-b-lg"
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

#btn-login {
  box-shadow: inset 0 3px 8px black;
}
#login-icon{
  border-radius: 50%;
  padding: 20px;
  max-width: 120px;
  top: 100px;
  left: 0;
  right: 0;
  display: block;
  margin:auto;
}
</style>