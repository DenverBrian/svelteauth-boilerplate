<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from './icons/CloseIcon.svelte';
	import ErrorIcon from './icons/ErrorIcon.svelte';
	import InfoIcon from './icons/InfoIcon.svelte';
	import SuccessIcon from './icons/SuccessIcon.svelte';

	const dispatch = createEventDispatcher();
	export let type = 'error';
	export let dismissible = true;
</script>

<article class={type}>
	{#if type === 'success'}
		<SuccessIcon />
	{:else if type === 'error'}
		<ErrorIcon />
	{:else if type === 'warning'}
		<InfoIcon />
	{:else}
		<InfoIcon />
	{/if}

	<div class="text">
		<slot />
	</div>

	{#if dismissible}
		<button class="close" on:click={() => dispatch('dismiss')}>
			<CloseIcon width="0.8em" />
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0.2rem;
		display: flex;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		width: 20rem;
	}
	.warning {
		background: rgb(153, 153, 10);
	}
	.error {
		background: indianred;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: SkyBlue;
	}
	.text {
		margin-left: 1rem;
	}
	button {
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
	}
</style>
