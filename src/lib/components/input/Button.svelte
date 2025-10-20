<script lang=ts>
    export let name: string = "button";
    export let color: string = "btn-primary";
    export let textColor: string = "white";
    export let size: string = "150px";
</script>

<button type="button" class="btn {color} m-2" style="width: {size}; color: {textColor};">{name}</button>