<script>
	import Button from "$lib/components/input/Button.svelte";
    import ErrorField from "$lib/components/input/ErrorField.svelte";
</script>

<div class="bg-secondary rounded h-100 p-4">
    <h6 class="mb-4">Edição de Categoria</h6>

    <form class="form">
        <div class="mb-3">
            <label for="inputName" class="form-label">Nome da Categoria</label>
            <input type="email" class="form-control" id="inputName" aria-describedby="nameHelp">
            <ErrorField message="Nome da categoria deve ser informada!" id="nameHelp" />
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

    .btn {
        width: 150px;
    }
</style>