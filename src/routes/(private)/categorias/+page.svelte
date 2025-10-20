<script lang=ts>
    import ButtonLink from "$lib/components/input/ButtonLink.svelte";
</script>

<div class="bg-secondary rounded h-100 p-4">
    <div class="title">
        <h6 class="mb-4">Lista de Categorias</h6>
        <ButtonLink link="/categorias/novo" color="btn-success" name="Adicionar" />
    </div>
    
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Teste</td>
                <td>Descrição teste</td>
                <td>
                    <ButtonLink link="/categorias/editar/1" color="btn-info" name="Editar" size="100px" />
                    <ButtonLink link="/categorias/excluir/1" color="btn-danger" name="Excluir" size="100px" />
                </td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>