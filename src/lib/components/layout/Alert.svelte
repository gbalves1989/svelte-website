<script lang="ts">
    export let message: string = "Ocorreu um erro!";
    export let color: string = "alert-success";
</script>

<div class="alert {color} alert-dismissible fade show" role="alert">
    <i class="fa fa-exclamation-circle me-2"></i>{message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>