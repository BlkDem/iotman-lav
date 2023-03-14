export default {
    doSort($items, $column, $direction) {
        console.log($items, $column, $direction)
        const column = $column;
        const order = $direction;

        $items.sort(function (a, b) {
            if (column === "id") {
                var nameA = a[column];
                var nameB = b[column];
            } else {
                var nameA = a[column] + "".toUpperCase();
                var nameB = b[column] + "".toUpperCase();
            }

            if (order && nameA > nameB) {
                return -1;
            }

            if (order && nameA < nameB) {
                return 1;
            }

            if (!order && nameA < nameB) {
                return -1;
            }

            if (!order && nameA > nameB) {
                return 1;
            }

            return 0;
        });
    },
}

