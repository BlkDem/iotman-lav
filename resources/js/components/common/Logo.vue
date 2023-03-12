<template>
    <svg xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality;
        fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 600.9 600.9" xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">

        <linearGradient id="linear-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="var(--bs-secondary)" />
            <stop offset="50%" stop-color="var(--bs-primary)" />
            <stop offset="100%" stop-color="var(--bs-secondary)" />
        </linearGradient>

        <radialGradient id="radial-gradient">
            <stop offset="60%" stop-color="var(--bs-primary)" />
            <stop offset="100%" stop-color="var(--bs-secondary)" />
        </radialGradient>

            <g id="layer1">
            <metadata id="umolab_icon" />
            <circle class="fil0 str0" cx="300.45" cy="300.45" r="285.17" />
            <path class="fil1 str1"
                d="M168.64 155.24l65.46 0 0 290.42 -32.95 0 -32.51 -32.51 0 -257.91zm263.62 0l0 257.91 -32.51 32.51 -118.63 0 0 -65.47 85.67 0 0 -224.95 65.47 0z" />
        </g>
    </svg>
</template>

<style>
.str0 {
    stroke: var(--bs-white);
    stroke-opacity: 0.5;
    stroke-width: 30.55;
    stroke-miterlimit: 22.9256
}

.str1 {
    stroke: var(--bs-white);
    stroke-opacity: 0.5;
    stroke-width: 15.28;
    stroke-linejoin: bevel;
    stroke-miterlimit: 22.9256
}

/* .fil0 {fill:none} */
/* .fil0 {fill:var(--bs-dark);fill-rule:nonzero} */
.fil1 {
    /* fill: var(--bs-dark); */
    fill:url(#linear-gradient);
    /* fill-opacity: 0.1; */
    fill-rule: nonzero
}

.fil0 {
    /* fill: var(--bs-dark); */
    fill:url(#radial-gradient);
    /* fill-opacity: 0.1; */
    fill-rule: nonzero
}

/* .fil1 {fill:var(--bs-dark);fill-rule:nonzero} */
</style>
