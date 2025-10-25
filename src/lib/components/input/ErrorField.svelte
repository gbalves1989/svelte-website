<script lang=ts>
    export let message: string = "Campo deve ser informado!";
    export let id: string = "bg-danger"
</script>

<div id={id} class="form-text">{message}</div>

<style>
    .form-text {
        color: red;
    }
</style>