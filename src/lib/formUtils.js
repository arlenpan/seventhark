export const generateTableColumns = (extraColumns, data) => {
    return extraColumns.map(({ key, type }) => {
        // create filters if string
        let filters;
        let onFilter;

        if (type === 'string') {
            filters = Object.keys(
                Object.values(data).reduce((agg, cur) => {
                    if (cur[key]) return { ...agg, [cur[key]]: true };
                    return agg;
                }, {})
            )
                .sort()
                .map((filterType) => ({ text: filterType, value: filterType }));

            onFilter = (value, record) => record[key] === value;
        }

        return {
            title: key.split('_').join(' '),
            dataIndex: key,
            key,
            filters,
            onFilter,
            sorter: (a, b) => {
                if (type === 'number') return a[key] - b[key];
                if (type === 'string') return a[key]?.localeCompare(b[key]);
                return 0;
            },
        };
    });
};

export const blank = true;
