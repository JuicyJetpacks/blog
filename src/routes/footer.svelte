<script lang="ts">
	import { base } from '$app/paths'
	import * as config from '$lib/config'
	import { theme } from '$lib/theme'

	$: githubIcon = $theme === 'dark' ? 'github-mark-white.svg' : 'github-mark.svg'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>

	<a href={config.github} class="me-2">
		<img src={`${base}/${githubIcon}`} alt="github" width="32" height="32" />
	</a>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		display: flex;
		justify-content: space-between;
	}

	p {
		color: var(--text-2);
	}
</style>
