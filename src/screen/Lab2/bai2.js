const inputData = [
    { code: 'ab', name: 'son moi' },
    { code: 'ac', name: 'Sua rua mat' },
    { code: 'null', name: 'null' },
    { code: null, name: '' },
];

// Hàm chuyển đổi từ mảng thành đối tượng
const arrayToObject = (arr) => {
    return Object.fromEntries(
        arr.map(item => [item.code, item])
    );
};

// Hàm loại bỏ các dữ liệu không đạt yêu cầu
const filterValidData = (obj) => {
    Object.keys(obj).forEach(key => {
        const item = obj[key];
        if (!item.code || !item.name || item.code === 'null' || item.name === 'null' || item.code === null) {
            delete obj[key]; // Xóa phần tử không hợp lệ khỏi object
        }
    });
    return obj;
};

// Chuyển đổi inputData từ mảng sang đối tượng
const productsObject = arrayToObject(inputData);

// Loại bỏ các dữ liệu không đạt yêu cầu từ đối tượng
const newData = filterValidData(productsObject);

console.log(newData); 
