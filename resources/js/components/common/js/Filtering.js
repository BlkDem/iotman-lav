export default {
    doFilter($items, $column, $filter) {
        //console.log(this)
        const column = $column;
        if ($filter === "") return $items;

        const res = $items.filter((item) => {
                return (
                    item[$column]
                    .toLowerCase()
                    .indexOf($filter.toLowerCase()) > -1
                );
        });
        if ($items.length > res.length) {

            console.log(res)
            return res;

        }

    }
}
