export default {
    doSort($items, $column, $direction) {
        console.log($items, $column, $direction)
        const column = $column;
        const order = $direction;

        $items.sort(function (a, b) {
            if (column.name === "id") {
                var nameA = a[column].value;
                var nameB = b[column].value;
            } else {
                var nameA = a[column].value + "".toUpperCase();
                var nameB = b[column].value + "".toUpperCase();
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

