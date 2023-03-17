export default {
    doSort($items, $column, $direction) {
        const column = $column;
        const direction = $direction;

        $items.sort(function (a, b) {
            if (column === "id") {
                var valueA = +a[column].value;
                var valueB = +b[column].value;
            } else {
                var valueA = a[column].value + "".toUpperCase();
                var valueB = b[column].value + "".toUpperCase();
            }

            if (direction && valueA > valueB) return -1;

            if (direction && valueA < valueB) return 1;

            if (!direction && valueA < valueB) return -1;

            if (!direction && valueA > valueB) return 1;

            return 0;
        });
    },
}

