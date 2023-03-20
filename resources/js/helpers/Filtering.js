export default {
    doFilter($items, $fieldName, $filter) {
        console.log($items, $fieldName, $filter)
        if ($filter === "") return $items;

        const res = $items.filter((item) => {
            // console.log(item[$fieldName].value.indexOf($filter)>-1)
            console.log(item[$fieldName.toLowerCase()], item[$fieldName.toLowerCase()].value, $fieldName.toLowerCase())
                return (
                    item[$fieldName.toLowerCase()].value
                    .toString()
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

