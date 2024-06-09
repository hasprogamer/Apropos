<script>
document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});
</script>