export default {
    doSort($items, $column, $direction) {
        // console.log($items, $column, $direction)
        const column = $column;
        const order = $direction;

        $items.sort(function (a, b) {
            if (column.name === "id") {
                var nameA = a[column].name;
                var nameB = b[column].name;
            } else {
                var nameA = a[column].name + "".toUpperCase();
                var nameB = b[column].name + "".toUpperCase();
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

