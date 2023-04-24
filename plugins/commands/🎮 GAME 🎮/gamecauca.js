export const config = {
    name: "gamecauca",
    description: `Point và coin không tính cho rank và XC`,
    aliases: [ "fish", "cauca", "cc" ],
    cooldown: 5,
    versions: "4.2.8",
    credits: "Phatt"
// Code gà + no api
// Hơi gà nên không biết code coin và point vào XC của Xavia nên làm point và coin để chưng
}

const data = [
    { name: "Cá chà bặc🐧", rate: 0.25, point: 10, coin: 10000 },
    { name: "Megalondon🤯", rate: 0.25, point: 99, coin: 100000 },
    { name: "Cá rỉa hết mồi", rate: 0.25, point: 0, coin: 0 },
    { name: "Cá Hồi", rate: 2.5, point: 10, coin: 200 },
    { name: "Cá Trê Nhỏ", rate: 5, point: 5, coin: 20 },
    { name: "Cá sấu", rate: 0.25, point: 50, coin: 1000 },
    { name: "Cá cảnh", rate: 2.5, point: 5, coin: 5 },
    { name: "Cá nóc", rate: 2.75, point: 10, coin: 100 },
    { name: "Cá Chim", rate: 3, point: 20, coin: 120 },
    { name: "Cá Trích", rate: 1.25, point: 35, coin: 120 },
    { name: "Cá vàng special", rate: 0.5, point: 99, coin: 900 },
    { name: "𝐂𝚛𝚞𝚜𝚑", rate: 1.5, point: 1505, coin: 9999999 },
  { name: "Người yêu", rate: 1.5, point: 40, coin: 100 },
  { name: "Cá đuối", rate: 2, point: 101, coin: 150 },
  { name: "Cá Linh", rate: 2, point: 10, coin: 120 },
  { name: "Hộp đồ ăn nhanh", rate: 1.5, point: 0, coin: 0.5 },
  { name: "Rác thải", rate: 1, point: 1, coin: 0.5 },
  { name: "Ba ba", rate: 2, point: 50, coin: 170 },
  { name: "Cá heo hồng", rate: 0.5, point: 90, coin: 300 },
  { name: "Rùa biển", rate: 1, point: 80, coin: 280 },
  { name: "Táo thối", rate: 0.5, point: 0, coin: 0 },
  { name: "Cá bạc má", rate: 2, point: 20, coin: 100 },
  { name: "Cá sa ba", rate: 3, point: 15, coin: 190 },
  { name: "Cá mặt Trăng", rate: 2, point: 0, coin: 0 },
  { name: "Sứa biển", rate: 2, point: 5, coin: 50 },
  { name: "Cá chiên dòn", rate: 2, point: 10, coin: 20 },
  { name: "Sao biển", rate: 0.75, point: 20, coin: 50 },
  { name: "Cá Lã Vọng", rate: 1.25, point: 40, coin: 199 },
  { name: "Cá Mập con", rate: 1, point: 120, coin: 400 },
  { name: "Cá thu", rate: 2.75, point: 30, coin: 170 },
  { name: "Cá thác lác", rate: 3, point: 15, coin: 150 },
  { name: "Cá ngừ", rate: 2.25, point: 25, coin: 130 },
  { name: "Cá hố", rate: 2, point: 15,  coin: 100 },
  { name: "Cá da bò", rate: 1.75, point: 10, coin: 80 },
  { name: "Cá da trơn", rate: 1.75, point: 12, coin: 80 },
  { name: "Cá phượng hoàng🐧", rate: 0.5, point: 8, coin: 30 },
  { name: "Cá cơm", rate: 2.75, point: 20, coin: 120 },
  { name: "Cá ngựa", rate: 1, point: 35, coin: 270 },
  { name: "Cá mú", rate: 2, point: 18, coin: 100 },
  { name: "Cá sọc dưa", rate: 2.25, point: 22, coin: 175 },
  { name: "Cá ngựa con", rate: 1.25, point: 8, coin: 50 },
{ name: "Gãy cần câu", rate: 1.25, point: 0, coin: 0 },
{ name: "Mực ống", rate: 2, point: 15, coin: 290 },
{ name: "Mực lá", rate: 2, point: 15, coin: 150 },
{ name: "Mực mai", rate: 2, point: 15, coin: 150 },
  { name: "Mực sim", rate: 2, point: 15, coin: 159 },
  { name: "Cá sẩy mất", rate: 1.75, point: 1, coin: 0 },
  { name: "Rái cá", rate: 1.25, point: 5, coin: 10 },
  { name: "Cá ngừ đại dương", rate: 1.5, point: 40, coin: 400 },
  { name: "Cá hồi xốp", rate: 1.5 , point: 35, coin: 350 },
  { name: "Ngao biển", rate: 1.5, point: 5, coin: 80 },
  { name: "Cua biển", rate: 1.5, point: 5, coin: 80 },
  { name: "Ghẹ biển", rate: 1.5, point: 5, coin: 80 },
  { name: "Chìm thuyền", rate: 1, point: 0, coin: 0 },
  { name: "Cá voi", rate: 1, point: 200, coin: 100000 },
  { name: "Phân cá voi", rate: 0.5, point: 1000, coin: 17000000 },
  { name: "Cá heo", rate: 2, point: 115, coin: 550 },
  { name: "Bạch tuột", rate: 3, point: 10, coin: 200 },
  { name: "Bạch tuột con", rate: 2.5, point: 7, coin: 120 },
  { name: "Kho báo", rate: 1, point: 1000, coin: 1000000 }

];

const vị_trí = [
    "ở trên cây",
    "ở dưới đất",
    "ở bờ suối",
    "ở trong hang động",
    "ở rừng rậm",
    "ở sông",
    "ở đồng ruộng",
    "ở núi",
    "ở trong vườn hoa",
    "ở đáy xã hội",
    "ở hồ bơi",
    "ở trên nóc nhà",
    "ở ao nhà 𝐂𝚛𝚞𝚜𝚑",
    "ở hồ cá ắ",
    "ở Tây Nguyên sound"

];

const cung_voi = [
    "với 𝐂𝚛𝚞𝚜𝚑",
    "với người yêu",
    "cùng Ronaldo",
    "cùng với Messi",
    "cùng với Halland",
    "cùng anh Bảnh",
    "cùng gia đình",
    "cùng cô hàng xóm",
    "cùng cô giáo Thảo",
    "cùng anh sửa ống nước",
    "cô chủ nhà",
    "cùng vong ma",
    "cùng nyc"

];

const checkin = [
  "sáng sớm",
  "sáng nắng đẹp",
  "sáng mưa rào",
  "sáng mưa to",
  "sáng trời bão",
  "sáng trời giông",
  "trưa nắng nhẹ",
  "trưa nắng đẹp",
  "trưa nắng gắt",
  "trưa mưa rào",
  "chiều nắng chill",
  "chiều nắng ấm",
  "chiều mưa rào",
  "chiều mưa to",
  "hoàng hôn",
  "bình minh",
  "sẫm tối",
  "đêm"
];


let score = 0;
let coinsEarned = 0;

export function onCall({ message }) {
  let totalRate = 0;
  for (const cá of data) {
    totalRate += cá.rate;
  }

  let number_of_fishes = Math.floor(Math.random() * 3) + 2; // Random từ 2-4 con cá
  let fishes = [];

  for (let i = 0; i < number_of_fishes; i++) {
    let randomNumber = Math.random() * totalRate;
    let selectedFish = null;

    for (const cá of data) {
      if (randomNumber < cá.rate) {
        selectedFish = cá;
        break;
      }
      randomNumber -= cá.rate;
    }

    fishes.push(selectedFish);
  }

  const vị_trí_cá = vị_trí[Math.floor(Math.random() * vị_trí.length)];
  
  const cung_voi_ai = cung_voi[Math.floor(Math.random() * cung_voi.length)];
  
  const check_in = checkin[Math.floor(Math.random() * checkin.length)];

  let point = 0;
  let fish_names = "";
  let fish_coins = "";
  for (const cá of fishes) {
    fish_names += cá.name + "| ";
    fish_coins += cá.coin + "| ";
    point += cá.point;
    coinsEarned += cá.coin;
  }

  const formattedCoins = new Intl.NumberFormat("vi-VN").format(coinsEarned);


  const câu_trả_lời = `
━━━━━━━━━━━━━━━━
Câu ${vị_trí_cá}
Câu lúc ${check_in}
Câu ${cung_voi_ai}
━━━━━━━━━━━━━━━━
𝐂𝐚́ 𝐛𝐚̣𝐧 𝐜𝐚̂𝐮 đ𝐮̛𝐨̛̣𝐜
${fish_names.slice(0, -1)}
━━━━━━━━━━━━━━━━
Số 𝐏𝐨𝐢𝐧𝐭 tổng: ${point}
Số 𝐂𝐨𝐢𝐧 nhận: ${formattedCoins}`;

  message.reply(câu_trả_lời);

  score += point;
}