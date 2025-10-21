<script lang="ts">
	import Button from "$lib/components/input/Button.svelte";
    import ErrorField from "$lib/components/input/ErrorField.svelte";
	import Alert from "$lib/components/layout/Alert.svelte";
    import type { ActionData } from './$types'; 
    
    export let form: ActionData;
</script>

<div class="bg-secondary rounded h-100 p-4">
    {#if form?.success}
        <Alert color="alert-success" message={form.message} />
    {:else if form && form.error}
        <Alert color="alert-danger" message={form.message} />
    {/if}

    <h6 class="mb-4">Cadastro de Categoria</h6>

    <form class="form" method="POST">
        <div class="mb-3">
            <label for="inputName" class="form-label">Nome da Categoria</label>
            <input type="text" class="form-control" name="categoryName" aria-describedby="nameHelp" value={form?.categoryName ?? ''} required>
            {#if form?.error}
                <ErrorField message={form.error} id="nameHelp" />
            {/if}
        </div>

        <div class="button">
            <Button name="Salvar" />
        </div>
    </form>
</div>

<style>
    .form {
        display: flex;
        flex-direction: column;
    }

    .button {
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
</style>