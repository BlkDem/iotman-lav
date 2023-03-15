export default {
    doFilter($items, $column, $filter) {
        // console.log($items, $column, $filter)
        if ($filter === "") return $items;

        const res = $items.filter((item) => {
            console.log(item[$column].value.indexOf($filter)>-1)
                return (
                    item[$column].value
                    .toLowerCase()
                    .indexOf($filter.toLowerCase()) > -1
                );
        });

        return res;
        // if ($items.length > res.length) {

        //     console.log(res)
        //     return res;

        // }

    }
}

