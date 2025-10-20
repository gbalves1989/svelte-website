<script>
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
</script>

<div class="container-fluid position-relative d-flex p-0">
	<Sidebar />

	<div class="content">
		<Navbar />

		<div class="container-fluid pt-4 px-4">
			<div class="row g-4">
				<div class="col-sm-12 col-xl-6">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>