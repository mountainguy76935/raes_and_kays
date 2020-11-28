export const handleEdit = (index, array, cb) => {
    const newArray = [...array];
    const newItem = newArray[index];
    newItem.edit = true;
    newArray.splice(index, 1, newItem);
    cb(newArray)
}

export const handleAdd = (array, cb, options={}) => {
    if (array.length > 20) {
        return
    }
    let newArray = [...array];
    newArray.push(options)
    cb(newArray)
}

export const handleDelete = (i, array, cb) => {
    let newArray = [...array];
    newArray.splice(i, 1);
    cb(newArray)
}