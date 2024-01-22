const class1 = [
    {
        mssv: "pd19545",
        name: "Nguyen van a",
        avgPoin: 5.9,
        avgTraningPoin: 7,
        status: "pass",
    },
    {
        mssv: "pd09079",
        name: "Ha Van an",
        avgPoin: 8,
        avgTraningPoin: 9.4,
        status: "pass",
    },
    {
        mssv: "pd14345",
        name: "Nguyen van b",
        avgPoin: 5,
        avgTraningPoin: 6,
        status: "pass",
    },
    {
        mssv: "pf04342",
        name: "Le quang khanh",
        avgPoin: 6.9,
        avgTraningPoin: 8,
        status: "pass",
    },
    {
        mssv: "pd60545",
        name: "Nguyen van nam",
        avgPoin: 7.9,
        avgTraningPoin: 8.5,
        status: "pass",
    },];
const class1Copy = [...class1];

const sortebByavgPoin = class1Copy.sort((a, b) => b.avgPoin - a.avgPoin);
console.log("Danh sach sv avgPoin tu cao den thap ");
console.log(sortebByavgPoin);

const sortebByavgTraningPoin = class1Copy.sort((a, b) => b.avgTraningPoin - a.avgTraningPoin);
console.log("Danh sach sv avgTraningPoin tu cao den thap ");
console.log(sortebByavgTraningPoin);
const maxavgPoin = class1Copy.reduce((studen, maxavgPoin) => studen.avgPoin > maxavgPoin.avgPoin ? studen : maxavgPoin);
if (class1.filter = maxavgPoin) {
    console.log("Sinh vien co diem avgPoin cao nhat");
    console.log(maxavgPoin.name, maxavgPoin.avgPoin);
}
const maxavgTraningPoin = class1Copy.reduce((studen, maxavgTraningPoin) => studen.avgTraningPoin > maxavgTraningPoin.avgTraningPoin ? studen : maxavgTraningPoin);
if (class1.filter = maxavgTraningPoin) {
    console.log("Sinh vien co diem avgTraningPoin cao nhat");
    console.log(maxavgTraningPoin.name, maxavgTraningPoin.avgTraningPoin);
}
