<script>
  import { ui } from "$content/contact";

  let form = {};

  function clearForm() {
    form = {
      name: "",
      email: "",
      message: "",
    };
  }

  function sendForm() {
    const subject = `${form.name}<${form.email}> - Contacto web`;
    const email_URL = `mailto:${ui.contact_email}?subject=${subject}&body=${form.message}"`;
    const link = document.createElement("a");
    link.href = email_URL;
    link.target = "_blank";

    link.click();
    clearForm();
  }
</script>

<div class="content col acenter xfill">
  <h2>{ui.title}</h2>

  <form class="col xfill" on:submit|preventDefault={sendForm}>
    <div class="dbl-input row jbetween xfill">
      <div class="input-wrapper col">
        <label for="input_name">{ui.input_name}</label>
        <input id="input_name" class="xfill" type="text" bind:value={form.name} placeholder={ui.input_name} required />
      </div>

      <div class="input-wrapper col">
        <label for="input_email">{ui.input_email}</label>
        <input
          id="input_email"
          class="xfill"
          type="email"
          bind:value={form.email}
          placeholder={ui.input_email}
          required
        />
      </div>
    </div>

    <div class="input-wrapper xfill">
      <label for="input_message">{ui.input_message}</label>
      <textarea id="input_message" class="xfill" bind:value={form.message} placeholder={ui.input_message} required />
    </div>

    <div class="row xfill jcenter">
      <button class="pri">{ui.button_send}</button>
    </div>
  </form>
</div>

<style lang="scss">
  .content {
    padding: 60px;

    @media (max-width: $mobile) {
      padding: 20px;
    }
  }

  h2 {
    color: $sec;
    margin-bottom: 40px;
  }

  form {
    max-width: 900px;
  }

  .input-wrapper {
    margin-bottom: 20px;
  }

  .dbl-input {
    .input-wrapper {
      width: calc(50% - 10px);
    }
  }

  label {
    color: $sec;
    font-size: 12px;
    padding-left: 15px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    background: rgba($white, 5%);
    color: $sec;
    font-weight: bold;
    border-radius: 16px;
    box-shadow: inset 0px 4px 4px rgba($black, 0.25);
  }

  textarea {
    height: 200px;
    resize: none;
  }

  button {
    color: $white;
    border-radius: 16px;

    @media (max-width: $mobile) {
      width: 70%;
    }
  }
</style>
