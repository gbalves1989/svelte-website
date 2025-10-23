<script lang=ts>
    export let link: string = "/";
    export let name: string = "buttonlink";
    export let color: string = "btn-primary";
    export let textColor: string = "white";
    export let size: string = "150px";
    export let type: string = "button";
</script>

<a href={link} type={type} class="btn {color} m-2" style="width: {size}; color: {textColor};">{name}</a>