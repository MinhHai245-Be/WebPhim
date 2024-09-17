// Xu ly phan trang


const paginate = (array, page, pageSize) => {
    const offset = (page - 1) * pageSize;
    const paginatedItems = array.slice(offset, offset + pageSize);
    const totalPages = Math.ceil(array.length / pageSize);

    return {
        page: page,
        totalPages: totalPages,
        data: paginatedItems
    };
};

module.exports = paginate;